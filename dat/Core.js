var maxsp;
var sp;
var usesp;
var jobindex = 0;
var uridata = "";
var ver = "2023-01-23";

// Class Table
var job = new Array();
job[0] = [fighter,knight,paradin,dragoon];
job[1] = [fighter,gladiator,marcenary,overlord];
job[2] = [mage,acolyte,priest,invoker];
job[3] = [mage,wizard,archmage,sorcerer];
job[4] = [archer,hunter,trapper,sentinel];
job[5] = [archer,ranger,sniper,destroyer];
job[6] = [thief,clown,dancer,savage];
job[7] = [thief,infiltrator,assassin,ninja];
job[8] = [shaman,summoner,elementalist,spiritlord];
job[9] = [twinfighter,gemini,mirage,jumeaux];

// Skill Level Buffer. 40
var sl = new Array(5);

// Buffer Initialized
function initTool(){
	sl[0] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	sl[1] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	sl[2] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	sl[3] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	sl[4] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	usesp = [0,0,0,0,0];
}

// Make the Buttons for skills that have not fulfilled prereqs unavailable.
function checkSkill(){
	var l = Number($("input[name='Lv']").val()); 
	var plus = Number($("input[name='Plus']").val());
	var dstr = "";
	
	// Check SP from Level
	sp = maxsp = start_pts[job[jobindex][0].name] + (l-1) * 20 + plus;
	for (var i=0; i<4; i++) {
		$("#job"+ i + " span.usesp").empty().append(usesp[i]+" SP");
		sp -= usesp[i];
		//$(".contents").append(usesp[i]+"<br/>")
	};
	$(".spDisp").empty().append(sp + "/" + maxsp);
	
	$("table.skill").not("#SkillTemp").each(function(){
		var now = $(this);
		var j = $(this).attr("id").substr(3).split("_")[0];
		var s = $(this).attr("id").substr(3).split("_")[1];
		
		$(this).find("input").removeAttr("disabled");
		//Check Max and Min
		if (sl[j][s] == 0)now.find("input[value='-']").attr("disabled","disabled");
		if (sl[j][s] == job[jobindex][j].skill[s].maxlevel) {
			now.find("input[value='+']").attr("disabled", "disabled");
		}
		else {
			//Check for Prereqs
			jQuery.each(job[jobindex][j].skill[s].parent, function(count, val){
				var plv = sl[j][val.id];
				if(val.id > 100){
					var dd = val.id % 100
					var jd = Math.floor((val.id / 100)) - 1;
					plv = sl[jd][dd];
				}
				if (plv < val.lv) 	now.find("input[value='+']").attr("disabled", "disabled");
			});
			
			//Check Character Level
			var sdata = job[jobindex][j].skill[s].parameter;
			if (l < sdata[sl[j][s]].level) 
				now.find("input[value='+']").attr("disabled", "disabled");
			
			//Check Remaining SP
			if (sp < sdata[sl[j][s]].sp) 
				now.find("input[value='+']").attr("disabled", "disabled");
		//$(".contents").append($(this).attr("id")+"<br/>");
		//dstr += String.fromCharCode(0x41+sl[j][s]);;
		}
		var iddqd = sl[j][s];
		if (iddqd == 10) iddqd = 'A';
		dstr += iddqd;
	});
	//alert(l);	
	$("input.spin:not([disabled])").show();
	$("input.spin[disabled]").hide();
	
	uridata = [jobindex,l,plus,dstr];

	//$("span#datastr").empty().append(location.href.split("?")[0] + "?" + uridata.join("_"));
	
	document.location.hash = uridata.join("_");
	return false;
}

//Skill Table Loading
function loadSkill(){
	for (var i=0; i<4; i++) {
		//skillDisp(i,job[index][i]);
		
		var target = "job" + i;
		var tree = "#job" + i + " span.skilltree";
		var jobname = "#job" + i + " span.jobname";
		
		$(jobname).empty().append(job[jobindex][i].name);
		if(job[jobindex][i].image != undefined)$("#"+target).css("background-image","url("+job[jobindex][i].image+")");
		$(tree).empty();
		jQuery.each(job[jobindex][i].skill, function(count, val){
			var p = $("#SkillTemp").clone().appendTo($(tree)).attr("id", target+"_"+count);
			//var p_pos = p.parents("#job").offset();
			var p_pos = $("#contents").offset();
			//alert(p_pos.left)
			p.css({top:21+p_pos.top+val.pos[1]*35+"px",
				   left:37+p_pos.left+val.pos[0]*35+"px"});
			p.find("td.s_lv").empty().append("<font color=yellow>"+sl[i][count]+"</font>"+"/"+val.maxlevel);
			p.find("img.icon").attr("src",val.imageURL);
			p.show();
			//$(".contents").append(p.attr("id"));
		});
	};
	$("input.spin").click(spincallback);
	
	$("table.skill").not("#SkillTemp").hover(hovercallback,function(){});

}
function loadURIdata(){
	var uridata;
	
	if (location.search != "") {
		uridata = location.search.substring(1).split("_");
		location.hash = uridata.join("_");
		location.search = "";
	}
	
	if (location.hash == "") return false;
	
	uridata = location.hash.substring(1).split("_");

	jobindex = uridata[0];
	$("option#"+jobindex).attr("selected"," ")
	
	$("input[name='Lv']").val(uridata[1]);
	$("input[name='Plus']").val(uridata[2]);
	

	var cindex = 0;
	for (var i = 0; i < 4; i++) {
		jQuery.each(job[jobindex][i].skill, function(count, val){
			var reqlv = uridata[3].charAt(cindex++);
			
			if (reqlv == 'A') {
				reqlv = 10;	
			}
			for(var u = 0; u < reqlv; u++){
				sl[i][count]++;
				usesp[i] += val.parameter[u].sp;
			}
		});
	};
	
}
//Callback when button is pressed
function spincallback(){
		//$(".contents").append("test<br/>");
		var id = $(this).parents("table").attr("id");
		var j = id.substring(3).split("_")[0];
		var s = id.substring(3).split("_")[1];
		var sdata = job[jobindex][j].skill[s];

		if($(this).val() == "+" && sl[j][s] < sdata.maxlevel){
			usesp[j]+=sdata.parameter[sl[j][s]].sp;
			sl[j][s]++;			
		}
		else if($(this).val() == "-" && sl[j][s] > 0){
			usesp[j]-=sdata.parameter[sl[j][s]-1].sp;
			sl[j][s]--;
		}
		
		$("#"+id).find("td.s_lv").empty().append("<font color=yellow>"+sl[j][s]+"</font>"+"/"+sdata.maxlevel);
		checkSkill();
		var lv = 0;
		if(sl[j][s] > 0) lv = Number(sl[j][s]) - 1;
		//alert(lv);
		loadtips("div#tips",job[jobindex][j].skill,s,lv);
		return false;			
}


function hovercallback(){
	var j = $(this).attr("id").substring(3).split("_")[0];
	var s = $(this).attr("id").substring(3).split("_")[1];
	var lv = 0;
	
	if(sl[j][s] > 0) var lv = Number(sl[j][s]) - 1;
	loadtips("div#tips",job[jobindex][j].skill,s,lv);
}

function loadtips(target,data,index,lv){
	var src = data[index];
	var parentstr = "";
	//alert(lv);
	jQuery.each(src.parent,function(count,val){
		if(val.id > 100){
			var dd = val.id % 100
			var jd = Math.floor((val.id / 100)) - 1;
			//alert("dd:"+dd+"-jd:"+jd);
			parentstr += job[jobindex][jd].skill[dd].name + " Lv" + val.lv +" ";
		}
		else{
			parentstr += data[val.id].name + " Lv" + val.lv +" ";			
		}
	});
	//alert(parentstr);
	$(target).empty();
	$(target).append(src.type+"<br/>");
	$(target).append("<h4>"+src.name+"  Lv."+(lv+1)+"</h4>");
	if(parentstr != "")$(target).append("เงื่อนไข : "+parentstr+"<br/>");
	$(target).append("Level ที่ต้องการ : "+src.parameter[lv].level+" or higher<br/>");
	$(target).append("ต้องการ SP : "+src.parameter[lv].sp+"<br/>");
	if(src.parameter[lv].power != undefined)$(target).append("ATK : "+src.parameter[lv].power+"<br/>");
	if(src.parameter[lv].mp != undefined)$(target).append("การใช้ MP : "+src.parameter[lv].mp+"<br/>");
	if(src.parameter[lv].casttime != undefined)$(target).append("ระยะเวลาการร่าย : "+src.parameter[lv].casttime+"s<br/>");
	if(src.parameter[lv].cooltime != undefined)$(target).append("คูลดาวน์ : "+src.parameter[lv].cooltime+"s<br/>");
	if(src.parameter[lv].duration != undefined)$(target).append("ระยะเวลาของสกิล : "+src.parameter[lv].duration+"s<br/>");
	if(src.parameter[lv].description != undefined)$(target).append("<br/>"+src.parameter[lv].description+"<br/>");
	
}
function loadhowto(){
	$("div#tips").empty().append("");
	$("div#tips").append("<h4>Skill Information</h4>");
}
function ajast(){
	var x = ($(document).width()-$("div.fullwrapper").width())/2;
	$("div.fullwrapper").css("margin","-35px "+x+"px");
	//alert($("div.fullwrapper").offset().left);
}
		

$(function(){
	initTool();
	ajast();
	loadURIdata();
	loadSkill();
	checkSkill();
	$("#SkillTemp").hide();
	$("#job1").hide();
	$("#job2").hide();
	$("#job3").hide();
	$(".version").empty().append("SkillData:"+dver+"<br/>Version:"+ver)
	
	loadhowto()
	
	$(window).resize(function(){
		ajast();
		loadSkill();
		checkSkill();
	});
	//alert(location.search);
	$("div.header").click(loadhowto,function(){});
	
	$("form#info").submit(function(){
		return false;
	});
	$("#jobselect").change(function(){
		jobindex = document.F1.S1.selectedIndex;
 		initTool();
		loadSkill();
		checkSkill();
		loadhowto();
        return false;
    });
		
	$("input.num").change(checkSkill);
	
//	$("input.spin").hov(spincallback);
	
	// tab menu 
	var tabstyle_1 = {backgroundColor:"rgb(255, 255, 255)",borderWidth:"0px"};
	var tabstyle_2 = {backgroundColor:"rgb(189, 189, 172)",borderWidth:"0px"};
	$("#tab_list li").click(function(){
		$("#tab_list li").css(tabstyle_2);
		$(this).css(tabstyle_1);
		$("#contents div.skilltable").hide();
		$($(this).attr("target")).show();
	});
	
	$(".fullwrapper").css("visibility","visible");
});
