//Warrior - Knight - Paladin - Dragoon
//Warrior - Gladiator - Myrmidon - Overlord
//Mage - Monk - Priest - Invoker
//Mage - Wizard - Warlock - Sorcerer
//Archer - Hunter - Pathfinder - Sentinel
//Archer - Marksman - Specialist - Destroyer
//Thief - Bandit - Rogue - Savage
//Thief - Infiltrator - Assassin - Ninja 
//Shaman - Summoner - Elementalist - Spirit Lord
//Twin Fighter - Gemini - Mirage - Jumeaux

	var dver = "2019-10-21";
	function Skill(img,type,name,lv,pos,parent,para){
			this.type = type; 
			this.name = name;
			this.maxlevel = lv;
			this.pos = pos;
			this.parameter = para;
			this.parent = parent;
			this.imageURL = img;
	}

	var start_pts = {
		"Warrior":10,
		"Mage":15,
		"Archer":15,
		"Thief":15,
		"Shaman":10,
		"Twin Fighter":15,
	};

//Warrior
	var fighter = { 
		name:"Warrior",
		id:0,
		skill:new Array(),
		image:"./img_p/fighterbg.webp"
	};
	
	fighter.skill[0] = new Skill("./img_p/war/brow.webp","ACTIVE","<font color='#8e6aac'> Blow</font>","5",[2,0],[],[{
		level:1,sp:10,mp:5,power:"15.0%+100",casttime:0,cooltime:3,duration:undefined,
		description:"แทงศัตรู 5 ตัวด้วยดาบ ทำให้ล้มลง โจมตีเป้าหมายที่ล้มอยู่ได้ที่เลเวล 3 หรือสูงกว่า"
	},{
		level:4,sp:10,mp:7,power:"17.0%+120",casttime:0,cooltime:3,duration:undefined,
		description:"Thrusts 6 enemies with sword. Causes knock down. Attacks fallen targets at level 3 or higher."
	},{
		level:7,sp:10,mp:9,power:"19.0%+140",casttime:0,cooltime:3,duration:undefined,
		description:"Thrusts 7 enemies with sword. Causes knock down. Attacks fallen targets."
	},{
		level:10,sp:10,mp:11,power:"21.0%+160",casttime:0,cooltime:3,duration:undefined,
		description:"Thrusts 8 enemies with sword. Causes knock down. Attacks fallen targets."
	},{
		level:13,sp:10,mp:13,power:"23.0%+180",casttime:0,cooltime:3,duration:undefined,
		description:"Thrusts 9 enemies with sword. Causes knock down. Attacks fallen targets."	
	}]);
	
	fighter.skill[1] = new Skill("./img_p/war/cutdown_fighter.webp","ACTIVE","<font color='#8e6aac'>Cutdown</font>","5",[2,2],[{id:0,lv:1}],[{
		level:2,sp:20,mp:3,power:"18.0%+90",casttime:0,cooltime:3,duration:undefined,
		description:"Strike the ground with your sword from mid air, launching 5 enemies into the air. Low launch height."
	},{
		level:5,sp:20,mp:4,power:"21.0%+110",casttime:0,cooltime:3,duration:undefined,
		description:"Strike the ground with your sword from mid air, launching 6 enemies into the air. Low launch height."
	},{
		level:8,sp:20,mp:5,power:"24.0%+130",casttime:0,cooltime:3,duration:undefined,
		description:"Strike the ground with your sword from mid air, launching 7 enemies into the air. High launch height."
	},{
		level:11,sp:20,mp:6,power:"27.0%+150",casttime:0,cooltime:3,duration:undefined,
		description:"Strike the ground with your sword from mid air, launching 8 enemies into the air. High launch height."
	},{
		level:14,sp:20,mp:7,power:"30.0%+170",casttime:0,cooltime:3,duration:undefined,
		description:"Strike the ground with your sword from mid air, launching 9 enemies into the air. High launch height."
	}]);
	
	fighter.skill[2] = new Skill("./img_p/war/stormblade.webp","ACTIVE","<font color='#8e6aac'>Storm Blade</font>","10",[2,4],[{id: 1,lv: 1}],[{
		level:3,sp:20,mp:15,power:"8.0%+50",casttime:0,cooltime:5,duration:3,
		description:"Creates a deadly whirlwind to hit 6 airborne targets. Targets are re-selected with each hit. "
	},{
		level:6,sp:20,mp:18,power:"11.0%+80",casttime:0,cooltime:5,duration:3,
		description:"Creates a deadly whirlwind to hit 7 airborne targets. Targets are re-selected with each hit."		
	},{
		level:9,sp:20,mp:21,power:"14.0%+110",casttime:0,cooltime:5,duration:3,
		description:"Creates a deadly whirlwind to hit 8 airborne targets. Targets are re-selected with each hit."		
	},{
		level:12,sp:20,mp:24,power:"17.0%+140",casttime:0,cooltime:5,duration:3,
		description:"Creates a deadly whirlwind to hit 9 airborne targets. Targets are re-selected with each hit."		
	},{
		level:15,sp:20,mp:27,power:"20.0%+170",casttime:0,cooltime:5,duration:3,
		description:"Creates a deadly whirlwind to hit 10 airborne targets. Targets are re-selected with each hit."
	},{
		level:"CARD",sp:20,mp:30,power:"23.0%+200",casttime:0,cooltime:5,duration:3,
		description:"Creates a deadly whirlwind to hit 11 airborne targets. Targets are re-selected with each hit."		
	},{
		level:"CARD",sp:20,mp:33,power:"26.0%+230",casttime:0,cooltime:5,duration:3,
		description:"Creates a deadly whirlwind to hit 11 airborne targets. Targets are re-selected with each hit."		
	},{
		level:"CARD",sp:20,mp:36,power:"29.0%+260",casttime:0,cooltime:5,duration:3,
		description:"Creates a deadly whirlwind to hit 12 airborne targets. Targets are re-selected with each hit."		
	},{
		level:"CARD",sp:20,mp:39,power:"31.0%+290",casttime:0,cooltime:5,duration:3,
		description:"Creates a deadly whirlwind to hit 12 airborne targets. Targets are re-selected with each hit."		
	},{
		level:"CARD",sp:20,mp:42,power:"34.0%+320",casttime:0,cooltime:5,duration:3,
		description:"Creates a deadly whirlwind to hit 13 airborne targets. Targets are re-selected with each hit."			
	}]);
	
	fighter.skill[3] = new Skill("./img_p/war/framehammer.webp","ACTIVE","<font color='#8e6aac'>Blazing Youth</font>","10",[2,7],[{id:2,lv:2},{id:9,lv:1}],[{
		level:7,sp:10,mp:10,power:"50.0%+300",casttime:0,cooltime:2,duration:undefined,
		description:"Attack up to 5 enemies with a flaming hammer with a 50% chance to inflict Level 1 Burn. Launches targets at level 3 or higher."		
	},{
		level:10,sp:10,mp:13,power:"56.0%+325",casttime:0,cooltime:2,duration:undefined,
		description:"Attack up to 7 enemies with a flaming hammer with a 55% chance to inflict Level 2 Burn. Launches targets at level 3 or higher."			
	},{
		level:13,sp:10,mp:16,power:"62.0%+350",casttime:0,cooltime:2,duration:undefined,
		description:"Attack up to 9 enemies with a flaming hammer with a 60% chance to inflict Level 3 Burn. Low launch height."			
	},{
		level:16,sp:10,mp:19,power:"68.0%+375",casttime:0,cooltime:2,duration:undefined,
		description:"Attack up to 11 enemies with a flaming hammer with a 65% chance to inflict Level 4 Burn. Low launch height."			
	},{
		level:19,sp:10,mp:22,power:"75.0%+400",casttime:0,cooltime:2,duration:undefined,
		description:"Attack up to 13 enemies with a flaming hammer with a 70% chance to inflict Level 5 Burn. Low launch height."		
	},{
		level:"CARD",sp:10,mp:25,power:"80.0%+425",casttime:0,cooltime:2,duration:undefined,
		description:"Attack up to 14 enemies with a flaming hammer with a 75% chance to inflict Level 6 Burn. Low launch height."			
	},{
		level:"CARD",sp:10,mp:28,power:"85.0%+450",casttime:0,cooltime:2,duration:undefined,
		description:"Attack up to 15 enemies with a flaming hammer with a 80% chance to inflict Level 7 Burn. Low launch height."			
	},{
		level:"CARD",sp:10,mp:31,power:"90.0%+475",casttime:0,cooltime:2,duration:undefined,
		description:"Attack up to 16 enemies with a flaming hammer with a 85% chance to inflict Level 8 Burn. Low launch height."			
	},{
		level:"CARD",sp:10,mp:34,power:"95.0%+500 ",casttime:0,cooltime:2,duration:undefined,
		description:"Attack up to 17 enemies with a flaming hammer with a 90% chance to inflict Level 9 Burn. Low launch height."			
	},{
		level:"CARD",sp:10,mp:37,power:"100.0%+525",casttime:0,cooltime:2,duration:undefined,
		description:"Attack up to 18 enemies with a flaming hammer with a 95% chance to inflict Level 10 Burn. Low launch height."				
	}]);
	
	fighter.skill[4] = new Skill("./img_p/war/swordmastery.webp","PASSIVE","<font color='#8e6aac'>Sword Mastery</font>","10",[5,0],[],[{
		level:1,sp:10,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined,
		description:"Increases physical attack power by +10 when using sword-type weapons."			
	},{
		level:5,sp:10,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined,
		description:"Increases physical attack power by +25 when using sword-type weapons."
	},{
		level:9,sp:10,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined,
		description:"Increases physical attack power by +40 when using sword-type weapons."
	},{
		level:13,sp:10,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined,
		description:"Increases physical attack power by +55 when using sword-type weapons."
	},{
		level:17,sp:10,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined,
		description:"Increases physical attack power by +70 when using sword-type weapons."
	},{
		level:"CARD",sp:10,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined,
		description:"Increases physical attack power by +85 when using sword-type weapons."
	},{
		level:"CARD",sp:10,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined,
		description:"Increases physical attack power by +100 when using sword-type weapons."
	},{
		level:"CARD",sp:10,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined,
		description:"Increases physical attack power by +115 when using sword-type weapons."
	},{
		level:"CARD",sp:10,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined,
		description:"Increases physical attack power by +130 when using sword-type weapons."
	},{
		level:"CARD",sp:10,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined,
		description:"Increases physical attack power by +145 when using sword-type weapons."
	}]);
	
	fighter.skill[5] = new Skill("./img_p/war/airlaunch_fighter.webp","ACTIVE","<font color='#8e6aac'>Air Combo Launch</font>","5",[8,0],[],[{
		level:1,sp:15,mp:2,power:"16.0%+50",casttime:0,cooltime:2,duration:undefined,
		description:"Attack and launch 5 enemy targets into the air. Launched targets can be attacked if skill level reaches higher than 2. "		
	},{
		level:4,sp:15,mp:3,power:"19.0%+80",casttime:0,cooltime:2,duration:undefined,
		description:"Attack and launch 6 enemy targets into the air. Launched targets can be attacked if skill level reaches higher than 2. "		
	},{
		level:7,sp:15,mp:4,power:"22.0%+110",casttime:0,cooltime:2,duration:undefined,
		description:"Attacks and launches 7 enemies targets into the air. "		
	},{
		level:10,sp:15,mp:5,power:"25.0%+140",casttime:0,cooltime:2,duration:undefined,
		description:"Attacks and launches 8 enemies targets into the air. "		
	},{
		level:13,sp:15,mp:6,power:"28.0%+170",casttime:0,cooltime:2,duration:undefined,
		description:"Attacks and launches 9 enemies targets into the air. "		
	}]);
	
	fighter.skill[6] = new Skill("./img_p/war/relunch_fighter.webp","ACTIVE","<font color='#8e6aac'>Re-Launch</font>","5",[8,2],[{id:5,lv:1}],[{
		level:2,sp:10,mp:5,power:"20.0%+110",casttime:0,cooltime:5,duration:undefined,
		description:"Attacks 2 fallen targets to re-launch them into the air. "		
	},{
		level:5,sp:10,mp:7,power:"24.0%+130",casttime:0,cooltime:5,duration:undefined,
		description:"Attacks 4 fallen targets to re-launch them into the air. "		
	},{
		level:8,sp:10,mp:9,power:"28.0%+150",casttime:0,cooltime:5,duration:undefined,
		description:"Attacks 6 fallen targets to re-launch them into the air. "		
	},{
		level:11,sp:10,mp:11,power:"32.0%+170",casttime:0,cooltime:5,duration:undefined,
		description:"Attacks 8 fallen targets to re-launch them into the air. "		
	},{
		level:14,sp:10,mp:13,power:"36.0%+190",casttime:0,cooltime:5,duration:undefined,
		description:"Attacks 10 fallen targets to re-launch them into the air. "		
	}]);
	
	fighter.skill[7] = new Skill("./img_p/war/sworddance.webp","ACTIVE","<font color='#8e6aac'>Sword Dance</font>","10",[8,4],[{id:6,lv:1}],[{
		level:3, sp:10, mp:15, power:"40.0%+60", casttime:0, cooltime:3,duration:undefined,
		description:"Throw sword to attack up to 5 enemies and knock them down. Range increases with each level up to Level 5."		
	},{
		level:6, sp:10, mp:18, power:"43.0%+90", casttime:0, cooltime:3,duration:undefined,
		description:"Throw sword to attack up to 5 enemies and knock them down. Range increases with each level up to Level 5. "		
	},{
		level:9, sp:10, mp:21, power:"46.0%+120", casttime:0, cooltime:3,duration:undefined,
		description:"Throw sword to attack up to 6 enemies and knock them down. Range increases with each level up to Level 5. "		
	},{
		level:12, sp:10, mp:24, power:"49.0%+150", casttime:0, cooltime:3,duration:undefined,
		description:"Throw sword to attack up to 6 enemies and knock them down. Range increases with each level up to Level 5. "		
	},{
		level:15, sp:10, mp:27, power:"52.0%+180", casttime:0, cooltime:3,duration:undefined,
		description:"Throw sword to attack up to 7 enemies and knock them down. Reaches max range."		
	},{
		level:"CARD", sp:10, mp:30, power:"55.0%+210", casttime:0, cooltime:3,duration:undefined,
		description:"Throw sword to attack up to 7 enemies and knock them down. Reaches max range."		
	},{
		level:"CARD", sp:10, mp:33, power:"58.0%+240", casttime:0, cooltime:3,duration:undefined,
		description:"Throw sword to attack up to 8 enemies and knock them down. Reaches max range."		
	},{
		level:"CARD", sp:10, mp:37, power:"61.0%+270", casttime:0, cooltime:3,duration:undefined,
		description:"Throw sword to attack up to 8 enemies and knock them down. Reaches max range."		
	},{
		level:"CARD", sp:10, mp:40, power:"64.0%+300", casttime:0, cooltime:3,duration:undefined,
		description:"Throw sword to attack up to 9 enemies and knock them down. Reaches max range."		
	},{
		level:"CARD", sp:10, mp:43, power:"67.0%+330", casttime:0, cooltime:3,duration:undefined,
		description:"Throw sword to attack up to 9 enemies and knock them down. Reaches max range."		
	}]);
	
	fighter.skill[8] = new Skill("./img_p/war/frosthammer.webp","ACTIVE","<font color='#8e6aac'>Icecold Heart</font>","10",[8,7],[{id:7,lv:2},{id:9,lv:1}],[{
		level:7,sp:10,mp:10,power:"50.0%+300",casttime:0,cooltime:2,duration:undefined,
		description:"Attack up to 5 enemy targets with a ice hammer to damage and cast Lv 2 Ice Freezing effect - Victims movement speed, attack speed, Physical and Magical Defense Powers are decreased - with 50% chance. "		
	},{
		level:10,sp:10,mp:13,power:"56.0%+325",casttime:0,cooltime:2,duration:undefined,
		description:"Attack up to 7 enemy targets with a ice hammer to damage and cast Lv 2 Ice Freezing effect - Victims movement speed, attack speed, Physical and Magical Defense Powers are decreased - with 55% chance. "			
	},{
		level:13,sp:10,mp:16,power:"62.0%+350",casttime:0,cooltime:2,duration:undefined,
		description:"Attack up to 9 enemy targets with a ice hammer to damage and cast Lv 2 Ice Freezing effect - Victims movement speed, attack speed, Physical and Magical Defense Powers are decreased - with 60% chance. "			
	},{
		level:16,sp:10,mp:19,power:"68.0%+375",casttime:0,cooltime:2,duration:undefined,
		description:"Attack up to 9 enemy targets with a ice hammer to damage and cast Lv 2 Ice Freezing effect - Victims movement speed, attack speed, Physical and Magical Defense Powers are decreased - with 65% chance. "			
	},{
		level:19,sp:10,mp:22,power:"75.0%+400",casttime:0,cooltime:2,duration:undefined,
		description:"Attack up to 13 enemy targets with a ice hammer to damage and cast Lv 2 Ice Freezing effect - Victims movement speed, attack speed, Physical and Magical Defense Powers are decreased - with 70% chance. "			
	},{
		level:"CARD",sp:10,mp:25,power:"80.0%+425 ",casttime:0,cooltime:2,duration:undefined,
		description:"Attack up to 14 enemy targets with a ice hammer to damage and cast Lv 3 Ice Freezing effect - Victims movement speed, attack speed, Physical and Magical Defense Powers are decreased - with 75% chance. "			
	},{
		level:"CARD",sp:10,mp:28,power:"85.0%+450",casttime:0,cooltime:2,duration:undefined,
		description:"Attack up to 15 enemy targets with a ice hammer to damage and cast Lv 4 Ice Freezing effect - Victims movement speed, attack speed, Physical and Magical Defense Powers are decreased - with 80% chance. "			
	},{
		level:"CARD",sp:10,mp:31,power:"90.0%+475 ",casttime:0,cooltime:2,duration:undefined,
		description:"Attack up to 16 enemy targets with a ice hammer to damage and cast Lv 5 Ice Freezing effect - Victims movement speed, attack speed, Physical and Magical Defense Powers are decreased - with 85% chance. "			
	},{
		level:"CARD",sp:10,mp:34,power:"95.0%+500",casttime:0,cooltime:2,duration:undefined,
		description:"Attack up to 17 enemy targets with a ice hammer to damage and cast Lv 6 Ice Freezing effect - Victims movement speed, attack speed, Physical and Magical Defense Powers are decreased - with 90% chance. "			
	},{
		level:"CARD",sp:10,mp:37,power:"100.0%+525",casttime:0,cooltime:2,duration:undefined,
		description:"Attack up to 18 enemy targets with a ice hammer to damage and cast Lv 7 Ice Freezing effect - Victims movement speed, attack speed, Physical and Magical Defense Powers are decreased - with 95% chance. "			
	}]);
	
	fighter.skill[9] = new Skill("./img_p/war/hammercrash.webp","ACTIVE","<font color='#8e6aac'>Hammer Crush</font>","10",[5,6],[],[{
		level:5,sp:10,mp:10,power:"30.0%+200",casttime:0,cooltime:2,duration:undefined,
		description:"Smash enemies with a giant hammer with a 50% chance to stun enemies. "		
	},{
		level:8,sp:10,mp:10,power:"35.0%+230",casttime:0,cooltime:2,duration:undefined,
		description:"Smash enemies with a giant hammer with a 55% chance to stun enemies. "		
	},{
		level:11,sp:10,mp:10,power:"40.0%+260",casttime:0,cooltime:2,duration:undefined,
		description:"Smash enemies with a giant hammer with a 60% chance to stun enemies. "		
	},{
		level:14,sp:10,mp:10,power:"45.0%+290",casttime:0,cooltime:2,duration:undefined,
		description:"Smash enemies with a giant hammer with a 65% chance to stun enemies. "		
	},{
		level:17,sp:10,mp:10,power:"50.0%+320",casttime:0,cooltime:2,duration:undefined,
		description:"Smash enemies with a giant hammer with a 70% chance to stun enemies. "		
	},{
		level:"CARD",sp:10,mp:10,power:"55.0%+350",casttime:0,cooltime:2,duration:undefined,
		description:"Smash enemies with a giant hammer with a 75% chance to stun enemies. "		
	},{
		level:"CARD",sp:10,mp:10,power:"60.0%+380",casttime:0,cooltime:2,duration:undefined,
		description:"Smash enemies with a giant hammer with a 80% chance to stun enemies. "		
	},{
		level:"CARD",sp:10,mp:10,power:"65.0%+410",casttime:0,cooltime:2,duration:undefined,
		description:"Smash enemies with a giant hammer with a 85% chance to stun enemies. "		
	},{
		level:"CARD",sp:10,mp:10,power:"70.0%+440 ",casttime:0,cooltime:2,duration:undefined,
		description:"Smash enemies with a giant hammer with a 90% chance to stun enemies. "		
	},{
		level:"CARD",sp:10,mp:10,power:"75.0%+470",casttime:0,cooltime:2,duration:undefined,
		description:"Smash enemies with a giant hammer with a 95% chance to stun enemies. "		
	}]);
	
	fighter.skill[10] = new Skill("./img_p/war/KnightsPower.webp","ACTIVE","<font color='#8e6aac'>Warrior's Bonds</font>","1",[5,8],[],[{
		level:7,sp:5,mp:30,power:undefined,casttime:0,cooltime:3,duration:600,
		description:"Increases the whole party's Physical Defense by 20%."
	}]);	

//Warrior - Knight - Paladin - Dragoon
	var knight = {
		name: "Knight",
		skill: new Array(),
		image: "./img_p/knightbg.webp"
	};
	
	knight.skill[0] = new Skill("./img_p/kni/airsmackdown.webp","ACTIVE","<font color='#8e6aac'>Aerial Smackdown</font>","10",[2,0],[],[{
		level:20,sp:20,mp:15,power:"50.0%+100",casttime:0,cooltime:3,duration:undefined,
		description:"From mid-air, dash into the ground launching 5 enemies into the air "		
	},{
		level:22,sp:20,mp:20,power:"55.0%+150",casttime:0,cooltime:3,duration:undefined,
		description:"From mid-air, dash into the ground launching 6 enemies into the air "		
	},{
		level:24,sp:20,mp:25,power:"60.0%+200",casttime:0,cooltime:3,duration:undefined,
		description:"From mid-air, dash into the ground launching 7 enemies into the air "		
	},{
		level:26,sp:20,mp:30,power:"65.0%+250",casttime:0,cooltime:3,duration:undefined,
		description:"From mid-air, dash into the ground launching 8 enemies into the air "		
	},{
		level:28,sp:20,mp:35,power:"70.0%+300",casttime:0,cooltime:3,duration:undefined,
		description:"From mid-air, dash into the ground launching 9 enemies into the air "		
	},{
		level:"CARD",sp:20,mp:40,power:"75.0%+350",casttime:0,cooltime:3,duration:undefined,
		description:"From mid-air, dash into the ground launching 10 enemies into the air "		
	},{
		level:"CARD",sp:20,mp:45,power:"80.0%+400",casttime:0,cooltime:3,duration:undefined,
		description:"From mid-air, dash into the ground launching 11 enemies into the air "		
	},{
		level:"CARD",sp:20,mp:50,power:"85.0%+450",casttime:0,cooltime:3,duration:undefined,
		description:"From mid-air, dash into the ground launching 12 enemies into the air "		
	},{
		level:"CARD",sp:20,mp:55,power:"90.0%+500",casttime:0,cooltime:3,duration:undefined,
		description:"From mid-air, dash into the ground launching 13 enemies into the air "		
	},{
		level:"CARD",sp:20,mp:60,power:"95.0%+550",casttime:0,cooltime:3,duration:undefined,
		description:"From mid-air, dash into the ground launching 14 enemies into the air "		
	}]);
	
	knight.skill[1] = new Skill("./img_p/kni/shouldertackle.webp","ACTIVE","<font color='#8e6aac'>Shoulder Tackle</font>","10",[2,2],[{id:0,lv:1}],[{
		level:20,sp:15,mp:12,power:"85.0%+200",casttime:0,cooltime:4,duration:undefined,
		description:"Charge at 5 enemies knocking them down or into the air "	
	},{
		level:23,sp:15,mp:14,power:"90.0%+215",casttime:0,cooltime:4,duration:undefined,
		description:"Charge at 6 enemies knocking them down or into the air "
	},{
		level:26,sp:15,mp:16,power:"95.0%+230",casttime:0,cooltime:4,duration:undefined,
		description:"Charge at 7 enemies knocking them down or into the air "	
	},{
		level:29,sp:15,mp:18,power:"100.0%+245",casttime:0,cooltime:4,duration:undefined,
		description:"Charge at 8 enemies knocking them down or into the air "	
	},{
		level:32,sp:15,mp:20,power:"105.0%+260",casttime:0,cooltime:4,duration:undefined,
		description:"Charge at 9 enemies knocking them down or into the air "	
	},{
		level:"CARD",sp:15,mp:22,power:"110.0%+275 ",casttime:0,cooltime:4,duration:undefined,
		description:"Charge at 10 enemies knocking them down or into the air "	
	},{
		level:"CARD",sp:15,mp:24,power:"115.0%+300",casttime:0,cooltime:4,duration:undefined,
		description:"Charge at 11 enemies knocking them down or into the air "	
	},{
		level:"CARD",sp:15,mp:26,power:"120.0%+315 ",casttime:0,cooltime:4,duration:undefined,
		description:"Charge at 12 enemies knocking them down or into the air "	
	},{
		level:"CARD",sp:15,mp:28,power:"125.0%+330",casttime:0,cooltime:4,duration:undefined,
		description:"Charge at 13 enemies knocking them down or into the air "	
	},{
		level:"CARD",sp:15,mp:30,power:"130.0%+345",casttime:0,cooltime:4,duration:undefined,
		description:"Charge at 14 enemies knocking them down or into the air "	
	}]);
	
	knight.skill[2] = new Skill("./img_p/kni/brushjab.webp","ACTIVE","<font color='#8e6aac'>Spear Jab</font>","10",[2,4],[{id:1,lv:1}],[{
		level:22,sp:20,mp:40,power:"50.0%+180",casttime:0,cooltime:5,duration:undefined,
		description:"A 5 combo attack with a broom that knocks 6 enemies down. "		
	},{
		level:25,sp:20,mp:43,power:"60.0%+200",casttime:0,cooltime:5,duration:undefined,
		description:"A 5 combo attack with a broom that knocks 7 enemies down. "		
	},{
		level:28,sp:20,mp:46,power:"70.0%+220",casttime:0,cooltime:5,duration:undefined,
		description:"A 5 combo attack with a broom that knocks 8 enemies down. "		
	},{
		level:31,sp:20,mp:49,power:"80.0%+240",casttime:0,cooltime:5,duration:undefined,
		description:"A 5 combo attack with a broom that knocks 9 enemies down. "		
	},{	
		level:34,sp:20,mp:52,power:"90.0%+260",casttime:0,cooltime:5,duration:undefined,
		description:"A 5 combo attack with a broom that knocks 10 enemies down. "		
	},{	
		level:"CARD",sp:20,mp:55,power:"95.0%+280",casttime:0,cooltime:5,duration:undefined,
		description:"A 5 combo attack with a broom that knocks 11 enemies down. "		
	},{	
		level:"CARD",sp:20,mp:58,power:"100.0%+300 ",casttime:0,cooltime:5,duration:undefined,
		description:"A 5 combo attack with a broom that knocks 12 enemies down. "		
	},{	
		level:"CARD",sp:20,mp:61,power:"105.0%+320 	",casttime:0,cooltime:5,duration:undefined,
		description:"A 5 combo attack with a broom that knocks 13 enemies down. "		
	},{	
		level:"CARD",sp:20,mp:64,power:"110.0%+340",casttime:0,cooltime:5,duration:undefined,
		description:"A 5 combo attack with a broom that knocks 14 enemies down. "		
	},{	
		level:"CARD",sp:20,mp:67,power:"115.0%+360 	",casttime:0,cooltime:5,duration:undefined,
		description:"A 5 combo attack with a broom that knocks 15 enemies down. "		
	}]);
	
	knight.skill[3] = new Skill("./img_p/kni/daibutupress.webp","ACTIVE","<font color='#8e6aac'>Pressure</font>","10",[2,6],[{id:2,lv:2}],[{
		level:27,sp:15,mp:70,power:"100.0%+140",casttime:0,cooltime:7,duration:undefined,
		description:"Drops a heavy weight on a group of 8 enemies and launches them into the air. "		
	},{
		level:30,sp:15,mp:75,power:"110.0%+180",casttime:0,cooltime:7,duration:undefined,
		description:"Drops a heavy weight on a group of 9 enemies and launches them into the air. "		
	},{
		level:33,sp:15,mp:80,power:"120.0%+220",casttime:0,cooltime:7,duration:undefined,
		description:"Drops a heavy weight on a group of 10 enemies and launches them into the air. "		
	},{
		level:36,sp:15,mp:85,power:"130.0%+260",casttime:0,cooltime:7,duration:undefined,
		description:"Drops a heavy weight on a group of 11 enemies and launches them into the air. "		
	},{
		level:39,sp:15,mp:90,power:"140.0%+300",casttime:0,cooltime:7,duration:undefined,
		description:"Drops a heavy weight on a group of 12 enemies and launches them into the air. "		
	},{
		level:"CARD",sp:15,mp:95,power:"150.0%+340",casttime:0,cooltime:7,duration:undefined,
		description:"Drops a heavy weight on a group of 13 enemies and launches them into the air. "		
	},{
		level:"CARD",sp:15,mp:100,power:"160.0%+380",casttime:0,cooltime:7,duration:undefined,
		description:"Drops a heavy weight on a group of 14 enemies and launches them into the air. "		
	},{
		level:"CARD",sp:15,mp:105,power:"170.0%+420",casttime:0,cooltime:7,duration:undefined,
		description:"Drops a heavy weight on a group of 15 enemies and launches them into the air. "		
	},{
		level:"CARD",sp:15,mp:110,power:"180.0%+460",casttime:0,cooltime:7,duration:undefined,
		description:"Drops a heavy weight on a group of 16 enemies and launches them into the air. "		
	},{
		level:"CARD",sp:15,mp:115,power:"190.0%+500 ",casttime:0,cooltime:7,duration:undefined,
		description:"Drops a heavy weight on a group of 17 enemies and launches them into the air. "		
	}]);
	
	knight.skill[4] = new Skill("./img_p/kni/spinbear.webp","ACTIVE","<font color='#8e6aac'>Spin it Bear!</font>","10",[2,8],[{id:3,lv:1}],[{
		level:32,sp:15,mp:65,power:"50.0%",casttime:0,cooltime:15,duration:undefined,
		description:"Summon spirit of Bear to cast spinning attack on max 2 enemy targets with 1.1 times of attack power per each hit. "		
	},{
		level:33,sp:15,mp:85,power:"70.0%",casttime:0,cooltime:12,duration:undefined,
		description:"Summon spirit of Bear to cast spinning attack on max 3 enemy targets with 1.1 times of attack power per each hit. "		
	},{
		level:35,sp:15,mp:105,power:"90.0%",casttime:0,cooltime:9,duration:undefined,
		description:"Summon spirit of Bear to cast spinning attack on max 3 enemy targets with 1.2 times of attack power per each hit. "		
	},{
		level:37,sp:15,mp:115,power:"110.0%",casttime:0,cooltime:7,duration:undefined,
		description:"Summon spirit of Bear to cast spinning attack on max 3 enemy targets with 1.2 times of attack power per each hit. "	
	},{
		level:40,sp:15,mp:125,power:"130.0%",casttime:0,cooltime:5,duration:undefined,
		description:"Summon spirit of Bear to cast spinning attack on max 4 enemy targets with 1.3 times of attack power per each hit. "		
	},{
		level:"CARD",sp:15,mp:135,power:"135.0%",casttime:0,cooltime:5,duration:undefined,
		description:"Summon spirit of Bear to cast spinning attack on max 5 enemy targets with 1.3 times of attack power per each hit. "		
	},{
		level:"CARD",sp:15,mp:145,power:"140.0%",casttime:0,cooltime:5,duration:undefined,
		description:"Summon spirit of Bear to cast spinning attack on max 6 enemy targets with 1.3 times of attack power per each hit. "		
	},{
		level:"CARD",sp:15,mp:155,power:"145.0%",casttime:0,cooltime:5,duration:undefined,
		description:"Summon spirit of Bear to cast spinning attack on max 7 enemy targets with 1.3 times of attack power per each hit. "		
	},{
		level:"CARD",sp:15,mp:165,power:"155.0%",casttime:0,cooltime:5,duration:undefined,
		description:"Summon spirit of Bear to cast spinning attack on max 8 enemy targets with 1.3 times of attack power per each hit. "		
	},{
		level:"CARD",sp:15,mp:175,power:"165.0%",casttime:0,cooltime:5,duration:undefined,
		description:"Summon spirit of Bear to cast spinning attack on max 9 enemy targets with 1.3 times of attack power per each hit. "		
	}]);
	
	knight.skill[5] = new Skill("./img_p/kni/shieldmastery.webp","PASSIVE","<font color='#8e6aac'>Shield Mastery</font>","10",[5,0],[],[{
		level:20,sp:20,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined,
		description:"Increase blocking rate by 2% and increase Physical Defense by +50. "			
	},{
		level:23,sp:20,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined,
		description:"Increase blocking rate by 4% and increase Physical Defense by +80. "			
	},{
		level:26,sp:20,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined,
		description:"Increase blocking rate by 6% and increase Physical Defense by +110. "			
	},{
		level:29,sp:20,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined,
		description:"Increase blocking rate by 8% and increase Physical Defense by +140. "			
	},{
		level:32,sp:20,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined,
		description:"Increase blocking rate by 11% and increase Physical Defense by +170. "			
	},{
		level:"CARD",sp:20,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined,
		description:"Increase blocking rate by 15% and increase Physical Defense by +200. "			
	},{
		level:"CARD",sp:20,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined,
		description:"Increase blocking rate by 17% and increase Physical Defense by +230. "			
	},{
		level:"CARD",sp:20,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined,
		description:"Increase blocking rate by 19% and increase Physical Defense by +260. "			
	},{
		level:"CARD",sp:20,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined,
		description:"Increase blocking rate by 22% and increase Physical Defense by +290. "			
	},{
		level:"CARD",sp:20,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined,
		description:"Increase blocking rate by 25% and increase Physical Defense by +320. "			

	}]);
	
	knight.skill[6] = new Skill("./img_p/kni/parry.webp","ACTIVE","<font color='#8e6aac'>Parry</font>","10",[5,2],[{id:5,lv:1}],[{
		level:22,sp:15,mp:30,power:undefined,casttime:0,cooltime:30,duration:30,
		description:"Learn blocking rate to block enemy\'s attack with sword and make it neutralized. Add 5% increase to current blocking rate. "				
	},{
		level:25,sp:15,mp:35,power:undefined,casttime:0,cooltime:30,duration:30,
		description:"Learn blocking rate to block enemy\'s attack with sword and make it neutralized. Add 8% increase to current blocking rate. "		
	},{
		level:28,sp:15,mp:40,power:undefined,casttime:0,cooltime:30,duration:30,
		description:"Learn blocking rate to block enemy\'s attack with sword and make it neutralized. Add 11% increase to current blocking rate. "		
	},{
		level:31,sp:15,mp:45,power:undefined,casttime:0,cooltime:30,duration:30,
		description:"Learn blocking rate to block enemy\'s attack with sword and make it neutralized. Add 14% increase to current blocking rate. "		
	},{
		level:34,sp:15,mp:50,power:undefined,casttime:0,cooltime:30,duration:30,
		description:"Learn blocking rate to block enemy\'s attack with sword and make it neutralized. Add 17% increase to current blocking rate. "		
	},{
		level:"CARD",sp:15,mp:55,power:undefined,casttime:0,cooltime:30,duration:30,
		description:"Learn blocking rate to block enemy\'s attack with sword and make it neutralized. Add 19% increase to current blocking rate. "		
	},{
		level:"CARD",sp:15,mp:60,power:undefined,casttime:0,cooltime:30,duration:30,
		description:"Learn blocking rate to block enemy\'s attack with sword and make it neutralized. Add 20% increase to current blocking rate. "		
	},{
		level:"CARD",sp:15,mp:65,power:undefined,casttime:0,cooltime:30,duration:30,
		description:"Learn blocking rate to block enemy\'s attack with sword and make it neutralized. Add 21% increase to current blocking rate. "		
	},{
		level:"CARD",sp:15,mp:70,power:undefined,casttime:0,cooltime:30,duration:30,
		description:"Learn blocking rate to block enemy\'s attack with sword and make it neutralized. Add 22% increase to current blocking rate. "		
	},{
		level:"CARD",sp:15,mp:75,power:undefined,casttime:0,cooltime:30,duration:30,
		description:"Learn blocking rate to block enemy\'s attack with sword and make it neutralized. Add 23% increase to current blocking rate. "		
	}]);
	
	knight.skill[7] = new Skill("./img_p/kni/stonehead.webp","ACTIVE","<font color='#8e6aac'>Increased Defense</font>","5",[5,4],[{id:6,lv:1}],[{
		level:24,sp:15,mp:150,power:undefined,casttime:0.5,cooltime:30,duration:900,
		description:"Increase size of head to give up style but increase Physical Defense by +60."		
	},{
		level:27,sp:15,mp:170,power:undefined,casttime:0.5,cooltime:30,duration:900,
		description:"Increase size of head to give up style but increase Physical Defense by +90."		
	},{
		level:30,sp:15,mp:190,power:undefined,casttime:0.5,cooltime:30,duration:900,
		description:"Increase size of head to give up style but increase Physical Defense by +120."		
	},{
		level:33,sp:15,mp:210,power:undefined,casttime:0.5,cooltime:30,duration:900,
		description:"Increase size of head to give up style but increase Physical Defense by +150."		
	},{
		level:36,sp:15,mp:230,power:undefined,casttime:0.5,cooltime:30,duration:900,
		description:"Increase size of head to give up style but increase Physical Defense by +180."		
	}]);
	
	knight.skill[8] = new Skill("./img_p/kni/giantgrows.webp","ACTIVE","<font color='#8e6aac'>Giant Growth</font>","10",[5,6],[{id:7,lv:1}],[{
		level:26,sp:10,mp:200,power:undefined,casttime:2.0,cooltime:10,duration:900,
		description:"Add +500 to Max HP."		
	},{
		level:29,sp:10,mp:250,power:undefined,casttime:2.0,cooltime:10,duration:900,
		description:"Add +900 to Max HP."		
	},{
		level:32,sp:10,mp:300,power:undefined,casttime:2.0,cooltime:10,duration:900,
		description:"Add +1300 to Max HP."		
	},{
		level:35,sp:10,mp:350,power:undefined,casttime:2.0,cooltime:10,duration:900,
		description:"Add +1700 to Max HP."		
	},{
		level:38,sp:10,mp:400,power:undefined,casttime:2.0,cooltime:10,duration:900,
		description:"Add +2100 to Max HP."
	},{
		level:"CARD",sp:10,mp:450,power:undefined,casttime:2.0,cooltime:10,duration:900,
		description:"Add +2400 to Max HP."		
	},{
		level:"CARD",sp:10,mp:500,power:undefined,casttime:2.0,cooltime:10,duration:900,
		description:"Add +2700 to Max HP."		
	},{
		level:"CARD",sp:10,mp:550,power:undefined,casttime:2.0,cooltime:10,duration:900,
		description:"Add +3000 to Max HP."		
	},{
		level:"CARD",sp:10,mp:600,power:undefined,casttime:2.0,cooltime:10,duration:900,
		description:"Add +3300 to Max HP."		
	},{
		level:"CARD",sp:10,mp:650,power:undefined,casttime:2.0,cooltime:10,duration:900,
		description:"Add +3600 to Max HP."				
	}]);
	
	knight.skill[9] = new Skill("./img_p/kni/bodyactivetion.webp","PASSIVE","<font color='#8e6aac'>Body Activation</font>","10",[5,8],[{id:8,lv:1}],[{
		level:27,sp:20,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined,
		description:"Permanently increase Max HP by 8%."	
	},{
		level:30,sp:20,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined,
		description:"Permanently increase Max HP by 12%."	
	},{
		level:33,sp:20,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined,
		description:"Permanently increase Max HP by 16%."	
	},{
		level:36,sp:20,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined,
		description:"Permanently increase Max HP by 20%."	
	},{
		level:39,sp:20,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined,
		description:"Permanently increase Max HP by 24%."	
	},{
		level:"CARD",sp:20,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined,
		description:"Permanently increase Max HP by 26%."	
	},{
		level:"CARD",sp:20,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined,
		description:"Permanently increase Max HP by 28%."	
	},{
		level:"CARD",sp:20,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined,
		description:"Permanently increase Max HP by 30%."	
	},{
		level:"CARD",sp:20,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined,
		description:"Permanently increase Max HP by 32%."	
	},{
		level:"CARD",sp:20,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined,
		description:"Permanently increase Max HP by 34%."	
	}]);
	
	knight.skill[10] = new Skill("./img_p/kni/airbrow.webp","ACTIVE","<font color='#8e6aac'>Aerial Blow</font>","1",[8,0],[],[{
		level:20,sp:15,mp:10,power:"80.0%+100",casttime:0,cooltime:3,duration:undefined,
		description:"After an air combo attack, a toy hammer is pulled out and attacks enemies and knocks them on the ground. For mid-air use only"			
	}]);
	
	knight.skill[11] = new Skill("./img_p/kni/ironwill.webp","ACTIVE","<font color='#8e6aac'>Impervion</font>","5",[8,2],[],[{
		level:21,sp:20,mp:20,power:undefined,casttime:0,cooltime:20,duration:10,
		description:"30% chance to endure  any effect such as knock back, knock down, flip, or flinch. Damage received is still 100%. "					
	},{
		level:24,sp:20,mp:23,power:undefined,casttime:0,cooltime:24,duration:12,
		description:"35% chance to endure any effect such as knock back, knock down, launch, or flinch. Damage received is still 100%. "	
	},{
		level:27,sp:20,mp:26,power:undefined,casttime:0,cooltime:28,duration:14,
		description:"40% chance to endure  any effect such as knock back, knock down, launch, or flinch. Damage received is still 100%. "					
	},{
		level:30,sp:20,mp:29,power:undefined,casttime:0,cooltime:32,duration:16,
		description:"45% chance to endure  any effect such as knock back, knock down, launch, or flinch. Damage received is still 100%. "					
	},{
		level:33,sp:20,mp:32,power:undefined,casttime:0,cooltime:36,duration:18,
		description:"50% chance to endure  any effect such as knock back, knock down, launch, or flinch. Damage received is still 100%. "					
	}]);
	
	knight.skill[12] = new Skill("./img_p/kni/revenge.webp","ACTIVE","<font color='#8e6aac'>Revenge</font>","5",[8,6],[{id:11,lv:1}],[{
		level:23,sp:20,mp:0,power:undefined,casttime:0,cooltime:5,duration:undefined,
		description:"Cast thorn shield around oneself. Attacker receives back 20% of damage with 25% chance for close attack only."
	},{
		level:26,sp:20,mp:0,power:undefined,casttime:0,cooltime:5,duration:undefined,
		description:"Cast thorn shield around oneself. Attacker receives back 25% of damage with 35% chance for close attack only."
	},{
		level:29,sp:20,mp:0,power:undefined,casttime:0,cooltime:5,duration:undefined,
		description:"Cast thorn shield around oneself. Attacker receives back 30% of damage with 45% chance for close attack only."
	},{
		level:32,sp:20,mp:0,power:undefined,casttime:0,cooltime:5,duration:undefined,
		description:"Cast thorn shield around oneself. Attacker receives back 35% of damage with 55% chance for close attack only."
	},{
		level:35,sp:20,mp:0,power:undefined,casttime:0,cooltime:5,duration:undefined,
		description:"Cast thorn shield around oneself. Attacker receives back 40% of damage with 65% chance for close attack only."
	}]);
	
//Warrior - Knight - Paladin - Dragoon
	var paradin = {
		name: "Paladin",
		skill: new Array(),
		image: "./img_p/paradinbg.webp"
	};

    paradin.skill[0] = new Skill("./img_p/pld/armermastery.webp","PASSIVE","<font color='#8e6aac'>Armor Mastery</font>","5",[2.2,0],[],[{
		level:40,sp:20,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Increase current physical defense by 10%. "
	},{
		level:43,sp:20,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Increase current physical defense by 15%. "
	},{
		level:46,sp:20,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Increase current physical defense by 20%. "
	},{
		level:49,sp:20,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Increase current physical defense by 25%. "
	},{
		level:52,sp:20,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Increase current physical defense by 30%. "
	}]);

    paradin.skill[1] = new Skill("./img_p/pld/armerbreak.webp","ACTIVE","<font color='#8e6aac'>Armor Break</font>","5",[0.6,2],[{id:0,lv:1}],[{
		level:41,sp:15,mp:45,power:"250.0%+400",casttime:0,cooltime:5,duration:10, 
	 	description:"Crush up to 4 enemies, dealing damage and reducing physical defense by 200 for 10 seconds."
	},{
		level:44,sp:15,mp:50,power:"300.0%+500",casttime:0,cooltime:5,duration:10, 
	 	description:"Crush up to 6 enemies, dealing damage and reducing physical defense by 300 for 10 seconds."
	},{
		level:47,sp:15,mp:55,power:"350.0%+600",casttime:0,cooltime:5,duration:10, 
	 	description:"Crush up to 8 enemies, dealing damage and reducing physical defense by 400 for 10 seconds."
	},{
		level:50,sp:15,mp:60,power:"400.0%+700",casttime:0,cooltime:5,duration:10, 
	 	description:"Crush up to 10 enemies, dealing damage and reducing physical defense by 500 for 10 seconds."
	},{
		level:53,sp:15,mp:65,power:"450.0%+800",casttime:0,cooltime:5,duration:10, 
	 	description:"Crush up to 12 enemies, dealing damage and reducing physical defense by 600 for 10 seconds."
	}]);

    paradin.skill[2] = new Skill("./img_p/pld/jointbreak.webp","ACTIVE","<font color='#8e6aac'>Joint Break</font>","5",[0.6,4],[{id:1,lv:1}],[{
		level:42,sp:10,mp:60,power:"250.0%+400",casttime:0,cooltime:5,duration:5, 
	 	description:"Attack 4 enemies at their joints to decrease their attack and movement speed by 30% for 5 seconds and slightly launch them into the air. "
	},{
		level:45,sp:10,mp:65,power:"300.0%+500",casttime:0,cooltime:5,duration:5, 
	 	description:"Attack 6 enemies at their joints to decrease their attack and movement speed by 40% for 5 seconds and slightly launch them into the air. "
	},{
		level:48,sp:10,mp:70,power:"350.0%+600",casttime:0,cooltime:5,duration:5, 
	 	description:"Attack 8 enemies at their joints to decrease their attack and movement speed by 50% for 5 seconds and slightly launch them into the air. "
	},{
		level:51,sp:10,mp:75,power:"400.0%+700",casttime:0,cooltime:5,duration:5, 
	 	description:"Attack 10 enemies at their joints to decrease their attack and movement speed by 60% for 5 seconds and slightly launch them into the air. "
	},{
		level:54,sp:10,mp:80,power:"450.0%+800",casttime:0,cooltime:5,duration:5, 
	 	description:"Attack 12 enemies at their joints to decrease their attack and movement speed by 70% for 5 seconds and slightly launch them into the air. "
	}]);

    paradin.skill[3] = new Skill("./img_p/pld/waponfreezing.webp","ACTIVE","<font color='#8e6aac'>Weapon Suspension</font>","5",[0.6,6],[{id:2,lv:1}],[{
		level:43,sp:15,mp:50,power:"275.0%+400",casttime:0,cooltime:10,duration:5, 
	 	description:"Attack up to 4 enemies and block their attack action."
	},{
		level:46,sp:15,mp:55,power:"325.0%+500",casttime:0,cooltime:10,duration:5, 
	 	description:"Attack up to 6 enemies and block their attack action."
	},{
		level:49,sp:15,mp:60,power:"375.0%+600",casttime:0,cooltime:10,duration:5, 
	 	description:"Attack up to 8 enemies and block their attack action."
	},{
		level:52,sp:15,mp:65,power:"425.0%+700",casttime:0,cooltime:10,duration:5, 
	 	description:"Attack up to 10 enemies and block their attack action."
	},{
		level:55,sp:15,mp:70,power:"475.0%+800",casttime:0,cooltime:10,duration:5, 
	 	description:"Attack up to 12 enemies and block their attack action."
	}]);
	
    paradin.skill[4] = new Skill("./img_p/pld/waponcrasher.webp","ACTIVE","<font color='#8e6aac'>Weapon Crasher</font>","5",[0.6,8],[{id:3,lv:1}],[{
		level:44,sp:15,mp:100,power:"275.0%+600",casttime:0,cooltime:2.0,duration:10, 
	 	description:"Attack up to 4 enemies, damaging them and decreasing their physical and magical attack power by 20%"
	},{
		level:47,sp:15,mp:110,power:"325.0%+700",casttime:0,cooltime:2.5,duration:10, 
	 	description:"Attack up to 6 enemies, damaging them and decreasing their physical and magical attack power by 20%"
	},{
		level:50,sp:15,mp:120,power:"375.0%+800",casttime:0,cooltime:3.0,duration:10, 
	 	description:"Attack up to 8 enemies, damaging them and decreasing their physical and magical attack power by 20%"
	},{
		level:53,sp:15,mp:130,power:"425.0%+900",casttime:0,cooltime:3.5,duration:10, 
	 	description:"Attack up to 10 enemies, damaging them and decreasing their physical and magical attack power by 20%"
	},{
		level:56,sp:15,mp:140,power:"475.0%+1000",casttime:0,cooltime:4.0,duration:10, 
	 	description:"Attack up to 12 enemies, damaging them and decreasing their physical and magical attack power by 20%"
	}]);

    paradin.skill[5] = new Skill("./img_p/pld/crosscut.webp","ACTIVE","<font color='#8e6aac'>Cross Cut</font>","5",[0.6,10],[{id:4,lv:2}],[{
		level:48,sp:20,mp:100,power:"350.0%+600",casttime:0,cooltime:5,duration:undefined, 
	 	description:"Attack 4 enemies with a powerful crosscut and knock them down. "
	},{
		level:51,sp:20,mp:110,power:"390.0%+650",casttime:0,cooltime:5,duration:undefined, 
	 	description:"Attack 6 enemies with a powerful crosscut and knock them down. "
	},{
		level:54,sp:20,mp:120,power:"430.0%+700",casttime:0,cooltime:5,duration:undefined, 
	 	description:"Attack 8 enemies with a powerful crosscut and knock them down. "
	},{
		level:57,sp:20,mp:130,power:"470.0%+750",casttime:0,cooltime:5,duration:undefined, 
	 	description:"Attack 10 enemies with a powerful crosscut and knock them down. "
	},{
		level:60,sp:20,mp:140,power:"510.0%+800",casttime:0,cooltime:5,duration:undefined, 
	 	description:"Attack 12 enemies with a powerful crosscut and knock them down. "
	}]);

    paradin.skill[6] = new Skill("./img_p/pld/ironskin.webp","PASSIVE","<font color='#8e6aac'>Iron Skin</font>","5",[3.8,2],[{id:0,lv:1}],[{
		level:42,sp:10,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Increase physical defense by +150. "
	},{
		level:45,sp:10,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Increase physical defense by +220. "
	},{
		level:48,sp:10,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Increase physical defense by +290. "
	},{
		level:51,sp:10,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Increase physical defense by +360. "
	},{
		level:54,sp:10,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Increase physical defense by +430. "
	}]);

    paradin.skill[7] = new Skill("./img_p/pld/barricade.webp","toggle","<font color='#8e6aac'>Barricade</font>","5",[3.8,4],[{id:6,lv:1}],[{
		level:43,sp:20,mp:45,power:undefined,casttime:0,cooltime:30,duration:undefined, 
	 	description:"Transforms into a combat cop which cannot attack but has 35% higher defense. When this skill is used, 1 debuff is removed and a level 1 slow heal is applied for 30 seconds. "
	},{
		level:46,sp:20,mp:50,power:undefined,casttime:0,cooltime:30,duration:undefined, 
	 	description:"Transforms into a combat cop which cannot attack but has 40% higher defense. When this skill is used, 2 debuffs are removed and a level 2 slow heal is applied for 30 seconds. "
	},{
		level:49,sp:20,mp:55,power:undefined,casttime:0,cooltime:30,duration:undefined, 
	 	description:"Transforms into a combat cop which cannot attack but has 45% higher defense. When this skill is used, 3 debuffs are removed and a level 3 slow heal is applied for 30 seconds. "
	},{
		level:52,sp:20,mp:60,power:undefined,casttime:0,cooltime:30,duration:undefined, 
	 	description:"Transforms into a combat cop which cannot attack but has 50% higher defense. When this skill is used, 4 debuffs are removed and a level 4 slow heal is applied for 30 seconds. "
	},{
		level:55,sp:20,mp:65,power:undefined,casttime:0,cooltime:30,duration:undefined, 
	 	description:"Transforms into a combat cop which cannot attack but has 55% higher defense. When this skill is used, 5 debuffs are removed and a level 5 slow heal is applied for 30 seconds. "
	}]);

    paradin.skill[8] = new Skill("./img_p/pld/finaldeffense.webp","ACTIVE","<font color='#8e6aac'>Cockroach Life</font>","5",[3.8,6],[{id:7,lv:1}],[{
		level:44,sp:15,mp:150,power:undefined,casttime:0,cooltime:180,duration:30, 
	 	description:"If cast when HP is lower than 21% of maximum, it will instantly return 20% of your max HP and increase physical and magical defense power by 50% for 30 seconds. "
	},{
		level:47,sp:15,mp:180,power:undefined,casttime:0,cooltime:180,duration:40, 
	 	description:"If cast when HP is lower than 22% of maximum, it will instantly return 25% of your max HP and increase physical and magical defense power by 60% for 40 seconds. "
	},{
		level:50,sp:15,mp:210,power:undefined,casttime:0,cooltime:180,duration:50, 
	 	description:"If cast when HP is lower than 23% of maximum, it will instantly return 30% of your max HP and increase physical and magical defense power by 70% for 50 seconds. "
	},{
		level:53,sp:15,mp:240,power:undefined,casttime:0,cooltime:180,duration:60, 
	 	description:"If cast when HP is lower than 24% of maximum, it will instantly return 35% of your max HP and increase physical and magical defense power by 80% for 60 seconds. "
	},{
		level:56,sp:15,mp:270,power:undefined,casttime:0,cooltime:180,duration:70, 
	 	description:"If cast when HP is lower than 25% of maximum, it will instantly return 40% of your max HP and increase physical and magical defense power by 90% for 70 seconds. "
	}]);

    paradin.skill[9] = new Skill("./img_p/pld/recoverybless.webp","ACTIVE","<font color='#8e6aac'>Recovery Blessing</font>","5",[7,4],[],[{
		level:41,sp:10,mp:100,power:undefined,casttime:1,cooltime:90,duration:120, 
	 	description:"Increases HP regeneration amount by 20 and decreases regeneration time by 10% for 120 seconds. "
	},{
		level:44,sp:10,mp:120,power:undefined,casttime:1,cooltime:110,duration:140, 
	 	description:"Increases HP regeneration amount by 40 and decreases regeneration time by 15% for 140 seconds. "
	},{
		level:47,sp:10,mp:140,power:undefined,casttime:1,cooltime:130,duration:160, 
	 	description:"Increases HP regeneration amount by 60 and decreases regeneration time by 20% for 160 seconds. "
	},{
		level:50,sp:10,mp:160,power:undefined,casttime:1,cooltime:150,duration:180, 
	 	description:"Increases HP regeneration amount by 80 and decreases regeneration time by 25% for 180 seconds. "
	},{
		level:53,sp:10,mp:180,power:undefined,casttime:1,cooltime:170,duration:200, 
	 	description:"Increases HP regeneration amount by 100 and decreases regeneration time by 30% for 200 seconds. "
	}]);

    paradin.skill[10] = new Skill("./img_p/pld/deffensivebless.webp","ACTIVE","<font color='#8e6aac'>Defensive Blessing</font>","5",[7,6],[{id:9,lv:1}],[{
		level:43,sp:10,mp:120,power:undefined,casttime:1,cooltime:90,duration:120, 
	 	description:"Buff skill that amplifies caster and party member\'s nearby Physical and Magical Defense Power by 30% and also increase them by 15. "
	},{
		level:46,sp:10,mp:140,power:undefined,casttime:1,cooltime:110,duration:140, 
	 	description:"Buff skill that amplifies caster and party member\'s nearby Physical and Magical Defense Power by 30% and also increase them by 30. "
	},{
		level:49,sp:10,mp:160,power:undefined,casttime:1,cooltime:130,duration:160, 
	 	description:"Buff skill that amplifies caster and party member\'s nearby Physical and Magical Defense Power by 30% and also increase them by 45. "
	},{
		level:52,sp:10,mp:180,power:undefined,casttime:1,cooltime:150,duration:180, 
	 	description:"Buff skill that amplifies caster and party member\'s nearby Physical and Magical Defense Power by 30% and also increase them by 60. "
	},{
		level:55,sp:10,mp:200,power:undefined,casttime:1,cooltime:170,duration:200, 
	 	description:"Buff skill that amplifies caster and party member\'s nearby Physical and Magical Defense Power by 30% and also increase them by 75. "
	}]);

    paradin.skill[11] = new Skill("./img_p/pld/aura.webp","PASSIVE","<font color='#8e6aac'>Aura Initiation</font>","1",[10,2],[],[{
		level:40,sp:5,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Activates aura type skills. A character can have only one aura skill activated at once. Multiple Paladins can activate multiple auras at once, and higher level skill\"s effect is activated when more than 2 Palandins activates the same aura skill. "
	}]);

    paradin.skill[12] = new Skill("./img_p/pld/timereverseaura.webp","toggle","<font color='#8e6aac'>Time Reverse Aura</font>","5",[10,4],[{id:11,lv:1}],[{
		level:41,sp:15,mp:20,power:undefined,casttime:0,cooltime:0.1,duration:undefined, 
	 	description:"Toggles a buff that decreases casting time and cooldown time by 1 second by consuming 15 MP per second. Cannot be used in PvP. "
	},{
		level:44,sp:15,mp:20,power:undefined,casttime:0,cooltime:0.1,duration:undefined, 
	 	description:"Toggles a buff that decreases casting time and cooldown time by 1.2 seconds by consuming 18 MP per second. Cannot be used in PvP. "
	},{
		level:47,sp:15,mp:20,power:undefined,casttime:0,cooltime:0.1,duration:undefined, 
	 	description:"Toggles a buff that decreases casting time and cooldown time by 1.4 seconds by consuming 21 MP per second. Cannot be used in PvP. "
	},{
		level:50,sp:15,mp:20,power:undefined,casttime:0,cooltime:0.1,duration:undefined, 
	 	description:"Toggles a buff that decreases casting time and cooldown time by 1.6 seconds by consuming 24 MP per second. Cannot be used in PvP. "
	},{
		level:53,sp:15,mp:20,power:undefined,casttime:0,cooltime:0.1,duration:undefined, 
	 	description:"Toggles a buff that decreases casting time and cooldown time by 1.8 seconds by consuming 27 MP per second. Cannot be used in PvP. "
	}]);

    paradin.skill[13] = new Skill("./img_p/pld/offensiveaura.webp","toggle","<font color='#8e6aac'>Offensive Aura</font>","5",[10,6],[{id:12,lv:1}],[{
		level:43,sp:10,mp:20,power:undefined,casttime:0,cooltime:0.1,duration:undefined, 
	 	description:"Toggles a buff skill that amplifies oneself's and party members' physical/magical attack power by 5% by consuming 10 MP per second. "
	},{
		level:46,sp:10,mp:20,power:undefined,casttime:0,cooltime:0.1,duration:undefined, 
	 	description:"Toggles a buff skill that amplifies oneself's and party members' physical/magical attack power by 8% by consuming 11 MP per second. "
	},{
		level:49,sp:10,mp:20,power:undefined,casttime:0,cooltime:0.1,duration:undefined, 
	 	description:"Toggles a buff skill that amplifies oneself's and party members' physical/magical attack power by 11% by consuming 12 MP per second. "
	},{
		level:52,sp:10,mp:20,power:undefined,casttime:0,cooltime:0.1,duration:undefined, 
	 	description:"Toggles a buff skill that amplifies oneself's and party members' physical/magical attack power by 14% by consuming 13 MP per second. "
	},{
		level:55,sp:10,mp:20,power:undefined,casttime:0,cooltime:0.1,duration:undefined, 
	 	description:"Toggles a buff skill that amplifies oneself's and party members' physical/magical attack power by 17% by consuming 14 MP per second. "
	}]);

    paradin.skill[14] = new Skill("./img_p/pld/secredprotection.webp","ACTIVE","<font color='#8e6aac'>Sacred Protection</font>","5",[8.5,8],[{id:10,lv:1},{id:13,lv:1}],[{
		level:45,sp:15,mp:100,power:undefined,casttime:2,cooltime:60,duration:180, 
	 	description:"Sacrifice oneself to take 10% of a party member's damage for 180 seconds. Must be near target party member. "
	},{
		level:48,sp:15,mp:110,power:undefined,casttime:2,cooltime:60,duration:210, 
	 	description:"Sacrifice oneself to take 20% of a party member's damage for 210 seconds. Must be near target party member. "
	},{
		level:51,sp:15,mp:120,power:undefined,casttime:2,cooltime:60,duration:240, 
	 	description:"Sacrifice oneself to take 30% of a party member's damage for 240 seconds. Must be near target party member. "
	},{
		level:54,sp:15,mp:130,power:undefined,casttime:2,cooltime:60,duration:270, 
	 	description:"Sacrifice oneself to take 40% of a party member's damage for 270 seconds. Must be near target party member. "
	},{
		level:57,sp:15,mp:140,power:undefined,casttime:2,cooltime:60,duration:300, 
	 	description:"Sacrifice oneself to take 50% of a party member's damage for 300 seconds. Must be near target party member. "
	}]);
	
	paradin.skill[15] = new Skill("./img_p/pld/Provoke.webp","ACTIVE","<font color='#8e6aac'>Provoke</font>","3",[7,0],[],[{
		level:42,sp:15,mp:320,power:undefined,casttime:0.5,cooltime:30,duration:5, 
	 	description:"Release Killing Force that will make the monsters within range to target the user, maximum effect upto 5 monsters. The effect will last 5 seconds, any one leave the range would not be effected."
	},{
		level:45,sp:15,mp:360,power:undefined,casttime:0.5,cooltime:40,duration:8, 
	 	description:"Release Killing Force that will make the monsters within range to target the user, maximum effect upto 6 monsters. The effect will last 8 seconds, any one leave the range would not be effected."
	},{
		level:48,sp:15,mp:400,power:undefined,casttime:0.5,cooltime:50,duration:11, 
	 	description:"Release Killing Force that will make the monsters within range to target the user, maximum effect upto 8 monsters. The effect will last 12 seconds, any one leave the range would not be effected."
	}]);

	paradin.skill[16] = new Skill("./img_p/pld/ChainShield.webp","ACTIVE","<font color='#8e6aac'>Chain Shield</font>","3",[3.8,8],[],[{
		level:46,sp:15,mp:50,power:"80.0%+200",casttime:0,cooltime:11,duration:undefined, 
		description:"Summon a chain shield and attack the enemies in air."
	},{
		level:47,sp:15,mp:60,power:"110.0%+250",casttime:0,cooltime:10,duration:undefined, 
		description:"Summon a chain shield and attack the enemies in air."
	},{
		level:48,sp:15,mp:70,power:"140.0%+300",casttime:0,cooltime:9,duration:undefined, 
		description:"Summon a chain shield and attack the enemies in air."
	}]);

	paradin.skill[17] = new Skill("./img_p/pld/MegaStormBlade.webp","ACTIVE","<font color='#8e6aac'>Mega Storm Blade</font>","3",[3.8,10],[{id:102,lv:2}],[{
		level:50,sp:20,mp:70,power:"120.0%+330",casttime:0,cooltime:5,duration:undefined, 
		description:"Upgraded storm blade skill. Summon a holy sword with Typhoon, attacking enemies in the air."
	},{
		level:52,sp:20,mp:85,power:"160.0%+450",casttime:0,cooltime:5,duration:undefined, 
		description:"Upgraded storm blade skill. Summon a holy sword with Typhoon, attacking enemies in the air."
	},{
		level:54,sp:20,mp:100,power:"200.0%+570",casttime:0,cooltime:5,duration:undefined, 
		description:"Upgraded storm blade skill. Summon a holy sword with Typhoon, attacking enemies in the air."
	}]);

	paradin.skill[18] = new Skill("./img_p/pld/ShieldStrike.webp","ACTIVE","<font color='#8e6aac'>Shield Strike</font>","3",[7,2],[],[{
		level:43,sp:15,mp:85,power:"35.0%+250",casttime:0,cooltime:10,duration:undefined, 
	 	description:"Push the shield toward front, attacking 3 enemies lightely and put Lv3 Stun effect. Higher the level, higher range of attack. During the skill, pressing jump key would cancel the skill."
	},{
		level:46,sp:15,mp:90,power:"40.0%+280",casttime:0,cooltime:9,duration:undefined, 
	 	description:"Push the shield toward front, attacking 5 enemies lightely and put Lv4 Stun effect. Higher the level, higher range of attack. During the skill, pressing jump key would cancel the skill."
	},{
		level:49,sp:15,mp:95,power:"35.0%+250",casttime:0,cooltime:8,duration:undefined, 
	 	description:"Push the shield toward front, attacking 7 enemies lightely and put Lv5 Stun effect. Higher the level, higher range of attack. During the skill, pressing jump key would cancel the skill."
	}]);

	paradin.skill[19] = new Skill("./img_p/pld/Concentration.webp","ACTIVE","<font color='#8e6aac'>Concentration</font>","3",[10,0],[],[{
		level:41,sp:15,mp:150,power:undefined,casttime:0.5,cooltime:180,duration:180, 
	 	description:"For certain period of time, concentrate and increase the accuracy by 4%."
	},{
		level:43,sp:15,mp:155,power:undefined,casttime:0.5,cooltime:180,duration:180, 
	 	description:"For certain period of time, concentrate and increase the accuracy by 8%."
	},{
		level:45,sp:15,mp:160,power:undefined,casttime:0.5,cooltime:180,duration:180, 
	 	description:"For certain period of time, concentrate and increase the accuracy by 12%."
	}]);		


//Warrior - Knight - Paladin - Dragoon
		var dragoon = { 
		name:"Dragoon",
		skill:new Array(),
		image:"./img_p/dragoonbg.webp"
	};

	dragoon.skill[0] = new Skill("./img_p/dra/rolling.webp","ACTIVE","<font color='#8e6aac'>Rolling Ground</font>","5",[1,0],[],[{
		level:60,sp:25,mp:100,power:"55%",casttime:0,cooltime:14,duration:undefined, 
	 	description:"Move quickly, and spin rapidly while moving forward in a straight line. Attacks up to 2 enemies 9 times. "
	},{
		level:62,sp:25,mp:120,power:"75%",casttime:0,cooltime:12,duration:undefined, 
	 	description:"Move quickly, and spin rapidly while moving forward in a straight line. Attacks up to 3 enemies 10 times. "
	},{
		level:64,sp:25,mp:140,power:"95%",casttime:0,cooltime:10,duration:undefined, 
	 	description:"Move quickly, and spin rapidly while moving forward in a straight line. Attacks up to 4 enemies 11 times. "
	},{
		level:66,sp:25,mp:160,power:"115%",casttime:0,cooltime:8,duration:undefined, 
	 	description:"Move quickly, and spin rapidly while moving forward in a straight line. Attacks up to 5 enemies 12 times. "
	},{
		level:68,sp:25,mp:180,power:"135%",casttime:0,cooltime:6,duration:undefined, 
	 	description:"Move quickly, and spin rapidly while moving forward in a straight line. Attacks up to 6 enemies 13 times. "
	}]);

	dragoon.skill[1] = new Skill("./img_p/dra/awakening.webp","PASSIVE","<font color='#8e6aac'>Awakening</font>","1",[5,0],[],[{
		level:60,sp:1,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Whenever you use MP during battle, your Awakening bar will fill up. This allows you to perform certain special skills which consume Awakening points. These skills also consume MP, however the MP they consume does not fill your awakening bar. "
	}]);
	
	dragoon.skill[2] = new Skill("./img_p/dra/scale.webp","ACTIVE","<font color='#8e6aac'>Dragon Scale</font>","5",[9,0],[{id:1,lv:1}],[{
		level:60,sp:25,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Strengthens your skin using a dragon's power. Physical/Magic defense increased by 15%. "
	},{
		level:62,sp:25,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Strengthens your skin using a dragon's power. Physical/Magic defense increased by 20%. "
	},{
		level:64,sp:25,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Strengthens your skin using a dragon's power. Physical/Magic defense increased by 25%. "
	},{
		level:66,sp:25,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Strengthens your skin using a dragon's power. Physical/Magic defense increased by 30%."
	},{
		level:68,sp:25,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Strengthens your skin using a dragon's power. Physical/Magic defense increased by 35%. "
	}]);

	dragoon.skill[3] = new Skill("./img_p/dra/accdragon.webp","ACTIVE","<font color='#8e6aac'>Ascending Dragon</font>","5",[4,3],[{id:1,lv:1}],[{
		level:61,sp:25,mp:300,power:"130%",casttime:0,cooltime:30,duration:undefined, 
	 	description:"[Awakening Skill] Ride an ascending dragon to launch standing or mid-air enemies with 6 rapid attacks. At skill level 5 fallen enemies can be hit. "
	},{
		level:63,sp:25,mp:325,power:"140%",casttime:0,cooltime:25,duration:undefined, 
	 	description:"	[Awakening Skill] Ride an ascending dragon to launch standing or mid-air enemies with 7 rapid attacks. At skill level 5 fallen enemies can be hit. "
	},{
		level:65,sp:25,mp:350,power:"150%",casttime:0,cooltime:20,duration:undefined, 
	 	description:"[Awakening Skill] Ride an ascending dragon to launch standing or mid-air enemies with 8 rapid attacks. At skill level 5 fallen enemies can be hit. "
	},{
		level:67,sp:25,mp:375,power:"160%",casttime:0,cooltime:17,duration:undefined, 
	 	description:"[Awakening Skill] Ride an ascending dragon to launch standing or mid-air enemies with 9 rapid attacks. At skill level 5 fallen enemies can be hit. "
	},{
		level:69,sp:25,mp:400,power:"170%",casttime:0,cooltime:15,duration:undefined, 
	 	description:"[Awakening Skill] Ride an ascending dragon to launch standing or mid-air enemies with 10 rapid attacks. At skill level 5 fallen enemies can be hit. "
	}]);

    dragoon.skill[4] = new Skill("./img_p/dra/dragonrush.webp","ACTIVE","<font color='#8e6aac'>Dragon Rush</font>","1",[6,3],[{id:1,lv:1}],[{
		level:60,sp:60,mp:undefined,power:undefined,casttime:0,cooltime:300,duration:undefined, 
	 	description:"[Ultimate Skill] The Ultimate Dragoon skill. Summon dragons to burn all enemies in the entire map. Launches 8 physical attacks with a final lightning attack of up to 20 enemies. During casting, character is invulnerable. This skill is not allowed to use during PVP. "
	}]);
	
	dragoon.skill[5] = new Skill("./img_p/dra/dragondive.webp","ACTIVE","<font color='#8e6aac'>Dragon Dive</font>","5",[4,5],[{id:3,lv:1}],[{
		level:62,sp:25,mp:300,power:"200%",casttime:0,cooltime:30,duration:undefined, 
	 	description:"[Awakening Skill] With the power of the dragon, perform a diving attack with a powerful spin. Attack up to 6 enemies 6 times, with the final attack launching your enemies. "
	},{
		level:64,sp:25,mp:325,power:"220%",casttime:0,cooltime:25,duration:undefined, 
	 	description:"[Awakening Skill] With the power of the dragon, perform a diving attack with a powerful spin. Attack up to 7 enemies 6 times, with the final attack launching your enemies. "
	},{
		level:66,sp:25,mp:350,power:"240%",casttime:0,cooltime:20,duration:undefined, 
	 	description:"[Awakening Skill] With the power of the dragon, perform a diving attack with a powerful spin. Attack up to 8 enemies 7 times, with the final attack launching your enemies. "
	},{
		level:68,sp:25,mp:375,power:"260%",casttime:0,cooltime:17,duration:undefined, 
	 	description:"[Awakening Skill] With the power of the dragon, perform a diving attack with a powerful spin. Attack up to 9 enemies 7 times, with the final attack launching your enemies. "
	},{
		level:70,sp:25,mp:400,power:"280%",casttime:0,cooltime:15,duration:undefined, 
	 	description:"[Awakening Skill] With the power of the dragon, perform a diving attack with a powerful spin. Attack up to 10 enemies 8 times, with the final attack launching your enemies. "
	}]);
	
	dragoon.skill[6] = new Skill("./img_p/dra/ChargeTheAwakening.webp","toggle","<font color='#8e6aac'>Awakening Charge</font>","3",[1,7],[],[{
		level:60,sp:10,mp:35,power:undefined,casttime:0,cooltime:3,duration:undefined, 
		description:"Consumes 20% MP to recharge 14% of the Awakening bar every 3 seconds."
	 },{
	 	level:62,sp:10,mp:35,power:undefined,casttime:0,cooltime:3,duration:undefined, 
		description:"Consumes 20% MP to recharge 17% of the Awakening bar every 3 seconds."
	 },{
		level:68,sp:10,mp:35,power:undefined,casttime:0,cooltime:3,duration:undefined, 
		description:"Consumes 20% MP to recharge 20% of the Awakening bar every 3 seconds."
	}]);
	
//Warrior - Gladiator - Myrmidon - Overlord
	var gladiator = { 
		name: "Gladiator",
		skill: new Array(),
		image: "./img_p/gladiatorbg.webp"
	};

    gladiator.skill[0] = new Skill("./img_p/gld/grizzlypower.webp","ACTIVE","<font color='#8e6aac'>Grizzly Power</font>","10",[2,0],[],[{
		level:20,sp:15,mp:200,power:undefined,casttime:0.5,cooltime:10,duration:900, 
	 	description:"Increase the Power by 10 and final physical attack by 2%."
	},{
		level:23,sp:15,mp:220,power:undefined,casttime:0.5,cooltime:10,duration:900, 
	 	description:"Increase the Power by 15 and final physical attack by 3%."
	},{
		level:26,sp:15,mp:240,power:undefined,casttime:0.5,cooltime:10,duration:900, 
	 	description:"Increase the Power by 22 and final physical attack by 4%."
	},{
		level:29,sp:15,mp:260,power:undefined,casttime:0.5,cooltime:10,duration:900, 
	 	description:"Increase the Power by 30 and final physical attack by 5%."
	},{
		level:32,sp:15,mp:280,power:undefined,casttime:0.5,cooltime:10,duration:900, 
	 	description:"Increase the Power by 50 and final physical attack by 6%."
	},{
		level:"CARD",sp:15,mp:320,power:undefined,casttime:0.5,cooltime:10,duration:900, 
	 	description:"Increase the Power by 60 and final physical attack by 7%."
	},{
		level:"CARD",sp:15,mp:360,power:undefined,casttime:0.5,cooltime:10,duration:900, 
	 	description:"Increase the Power by 70 and final physical attack by 8%."
	},{
		level:"CARD",sp:15,mp:400,power:undefined,casttime:0.5,cooltime:10,duration:900, 
	 	description:"Increase the Power by 80 and final physical attack by 9%."
	},{
		level:"CARD",sp:15,mp:440,power:undefined,casttime:0.5,cooltime:10,duration:900, 
	 	description:"Increase the Power by 90 and final physical attack by 10%."
	},{
		level:"CARD",sp:15,mp:480,power:undefined,casttime:0.5,cooltime:10,duration:900, 
	 	description:"Increase the Power by 100 and final physical attack by 11%."
	}]);

    gladiator.skill[1] = new Skill("./img_p/gld/advancedswordmastery.webp","PASSIVE","<font color='#8e6aac'>Advanced Sword Mastery</font>","10",[1,2],[{id:0,lv:1}],[{
		level:20,sp:10,mp:undefined,power:undefined,casttime:0,cooltime:undefined,duration:undefined, 
	 	description:"Permanently increase total value of Physical Attack Power by 2% when using two handed sword."
	},{
		level:23,sp:10,mp:undefined,power:undefined,casttime:0,cooltime:undefined,duration:undefined, 
	 	description:"Permanently increase total value of Physical Attack Power by 3% when using two handed sword."
	},{
		level:26,sp:10,mp:undefined,power:undefined,casttime:0,cooltime:undefined,duration:undefined, 
	 	description:"Permanently increase total value of Physical Attack Power by 4% when using two handed sword."
	},{
		level:29,sp:10,mp:undefined,power:undefined,casttime:0,cooltime:undefined,duration:undefined, 
	 	description:"Permanently increase total value of Physical Attack Power by 5% when using two handed sword."
	},{
		level:32,sp:10,mp:undefined,power:undefined,casttime:0,cooltime:undefined,duration:undefined, 
	 	description:"Permanently increase total value of Physical Attack Power by 6% when using two handed sword."
	},{
		level:"CARD",sp:10,mp:undefined,power:undefined,casttime:0,cooltime:undefined,duration:undefined, 
	 	description:"Permanently increase total value of Physical Attack Power by 7% when using two handed sword."
	},{
		level:"CARD",sp:10,mp:undefined,power:undefined,casttime:0,cooltime:undefined,duration:undefined, 
	 	description:"Permanently increase total value of Physical Attack Power by 8% when using two handed sword."
	},{
		level:"CARD",sp:10,mp:undefined,power:undefined,casttime:0,cooltime:undefined,duration:undefined, 
	 	description:"Permanently increase total value of Physical Attack Power by 9% when using two handed sword."
	},{
		level:"CARD",sp:10,mp:undefined,power:undefined,casttime:0,cooltime:undefined,duration:undefined, 
	 	description:"Permanently increase total value of Physical Attack Power by 10% when using two handed sword."
	},{
		level:"CARD",sp:10,mp:undefined,power:undefined,casttime:0,cooltime:undefined,duration:undefined, 
	 	description:"Permanently increase total value of Physical Attack Power by 11% when using two handed sword."
	}]);

    gladiator.skill[2] = new Skill("./img_p/gld/dushbrow.webp","ACTIVE","<font color='#8e6aac'>Dashing Blow</font>","1",[1,4],[{id:1,lv:1}],[{
		level:20,sp:20,mp:15,power:"100.0%+150",casttime:undefined,cooltime:3,duration:undefined, 
	 	description:"While dashing, press Upward key and attack button to cast Dash Combo that launches enemies into the air. Maximum of 10 targets are damaged and launched into the air with Lv 1 Serious Bleeding effect."
	}]);

    gladiator.skill[3] = new Skill("./img_p/gld/bearkick.webp","ACTIVE","<font color='#8e6aac'>I'm Gone Bear!</font>","10",[1,6],[{id:2,lv:1}],[{
		level:21,sp:15,mp:12,power:"50.0%+53",casttime:0,cooltime:5,duration:undefined, 
	 	description:"Call Bear and have him perform an 8 hit combo kick on enemy targets, making them flinch. "
	},{
		level:24,sp:15,mp:14,power:"57.5%+61",casttime:0,cooltime:5,duration:undefined, 
	 	description:"Call Bear and have him perform an 8 hit combo kick on enemy targets, making them flinch. "
	},{
		level:27,sp:15,mp:16,power:"65.0%+68",casttime:0,cooltime:5,duration:undefined, 
	 	description:"Call Bear and have him perform an 8 hit combo kick on enemy targets, making them flinch. "
	},{
		level:30,sp:15,mp:18,power:"72.5%+76",casttime:0,cooltime:5,duration:undefined, 
	 	description:"Call Bear and have him perform an 8 hit combo kick on enemy targets, making them flinch. "
	},{
		level:33,sp:15,mp:20,power:"80.0%+83",casttime:0,cooltime:5,duration:undefined, 
	 	description:"Call Bear and have him perform an 8 hit combo kick on enemy targets, making them flinch. "
	},{
		level:"CARD",sp:15,mp:22,power:"87.5%+91",casttime:0,cooltime:5,duration:undefined, 
	 	description:"Call Bear and have him perform an 8 hit combo kick on enemy targets, making them flinch. "
	},{
		level:"CARD",sp:15,mp:24,power:"92.5%+98",casttime:0,cooltime:5,duration:undefined, 
	 	description:"Call Bear and have him perform an 8 hit combo kick on enemy targets, making them flinch. "
	},{
		level:"CARD",sp:15,mp:26,power:"97.5%+106",casttime:0,cooltime:5,duration:undefined, 
	 	description:"Call Bear and have him perform an 8 hit combo kick on enemy targets, making them flinch. "
	},{
		level:"CARD",sp:15,mp:28,power:"107.5%+121",casttime:0,cooltime:5,duration:undefined, 
	 	description:"Call Bear and have him perform an 8 hit combo kick on enemy targets, making them flinch. "
	},{
		level:"CARD",sp:15,mp:30,power:"120.6%+137",casttime:0,cooltime:5,duration:undefined, 
	 	description:"Call Bear and have him perform an 8 hit combo kick on enemy targets, making them flinch. "
	}]);

    gladiator.skill[4] = new Skill("./img_p/gld/airbrow.webp","ACTIVE","<font color='#8e6aac'>Aerial Blow</font>","1",[3,4],[{id:0,lv:1}],[{
		level:21,sp:15,mp:10,power:"95.0%+130",casttime:0,cooltime:3,duration:undefined, 
	 	description:"	After an air combo attack, a toy hammer is pulled out and attacks enemies and knocks them on the ground. For mid-air use only. "	
	}]);

    gladiator.skill[5] = new Skill("./img_p/gld/incomingbear.webp","ACTIVE","<font color='#8e6aac'>Incoming Bear!</font>","10",[3,6],[{id:4,lv:1}],[{
		level:22,sp:15,mp:12,power:"41.7%+166",casttime:0,cooltime:4,duration:undefined, 
	 	description:"Bear charges up to the front and casts 3 combo chain attack up to 4 enemy targets and knock them down."
	},{
		level:24,sp:15,mp:14,power:"50.0%+175",casttime:0,cooltime:4,duration:undefined, 
	 	description:"Bear charges up to the front and casts 3 combo chain attack up to 5 enemy targets and knock them down."
	},{
		level:26,sp:15,mp:16,power:"58.3%+183",casttime:0,cooltime:4,duration:undefined, 
	 	description:"Bear charges up to the front and casts 3 combo chain attack up to 6 enemy targets and knock them down."
	},{
		level:28,sp:15,mp:18,power:"66.7%+191",casttime:0,cooltime:4,duration:undefined, 
	 	description:"Bear charges up to the front and casts 3 combo chain attack up to 7 enemy targets and knock them down."
	},{
		level:30,sp:15,mp:20,power:"75.0%+200",casttime:0,cooltime:4,duration:undefined, 
	 	description:"Bear charges up to the front and casts 3 combo chain attack up to 8 enemy targets and knock them down."
	},{
		level:"CARD",sp:15,mp:22,power:"83.3%+208 ",casttime:0,cooltime:4,duration:undefined, 
	 	description:"Bear charges up to the front and casts 3 combo chain attack up to 9 enemy targets and knock them down."
	},{
		level:"CARD",sp:15,mp:24,power:"91.6%+216 ",casttime:0,cooltime:4,duration:undefined, 
	 	description:"Bear charges up to the front and casts 3 combo chain attack up to 10 enemy targets and knock them down."
	},{
		level:"CARD",sp:15,mp:26,power:"99.9%+224 ",casttime:0,cooltime:4,duration:undefined, 
	 	description:"Bear charges up to the front and casts 3 combo chain attack up to 11 enemy targets and knock them down."
	},{
		level:"CARD",sp:15,mp:28,power:"108.2%+232 	",casttime:0,cooltime:4,duration:undefined, 
	 	description:"Bear charges up to the front and casts 3 combo chain attack up to 12 enemy targets and knock them down."
	},{
		level:"CARD",sp:15,mp:30,power:"116.5%+240 ",casttime:0,cooltime:4,duration:undefined, 
	 	description:"Bear charges up to the front and casts 3 combo chain attack up to 13 enemy targets and knock them down."
	}]);

    gladiator.skill[6] = new Skill("./img_p/gld/ganble.webp","ACTIVE","<font color='#8e6aac'>Gamble</font>","10",[3,8],[{id:5,lv:1}],[{
		level:24,sp:20,mp:200,power:undefined,casttime:0.5,cooltime:180,duration:120, 
	 	description:"Cast a powerful buff to all party members including caster, but buff will be given randomly. May the god of dice be with you."
	},{
		level:26,sp:20,mp:230,power:undefined,casttime:0.5,cooltime:180,duration:180, 
	 	description:"Cast a powerful buff to all party members including caster, but buff will be given randomly. May the god of dice be with you."
	},{
		level:28,sp:20,mp:260,power:undefined,casttime:0.5,cooltime:180,duration:240, 
	 	description:"Cast a powerful buff to all party members including caster, but buff will be given randomly. May the god of dice be with you."
	},{
		level:30,sp:20,mp:290,power:undefined,casttime:0.5,cooltime:180,duration:300, 
	 	description:"Cast a powerful buff to all party members including caster, but buff will be given randomly. May the god of dice be with you."
	},{
		level:32,sp:20,mp:320,power:undefined,casttime:0.5,cooltime:180,duration:360, 
	 	description:"Cast a powerful buff to all party members including caster, but buff will be given randomly. May the god of dice be with you."
	},{
		level:"CARD",sp:20,mp:350,power:undefined,casttime:0.5,cooltime:180,duration:360, 
	 	description:"Cast a powerful buff to all party members including caster, but buff will be given randomly. May the god of dice be with you."
	},{
		level:"CARD",sp:20,mp:380,power:undefined,casttime:0.5,cooltime:180,duration:360, 
	 	description:"Cast a powerful buff to all party members including caster, but buff will be given randomly. May the god of dice be with you."
	},{
		level:"CARD",sp:20,mp:410,power:undefined,casttime:0.5,cooltime:180,duration:360, 
	 	description:"Cast a powerful buff to all party members including caster, but buff will be given randomly. May the god of dice be with you."
	},{
		level:"CARD",sp:20,mp:440,power:undefined,casttime:0.5,cooltime:180,duration:360, 
	 	description:"Cast a powerful buff to all party members including caster, but buff will be given randomly. May the god of dice be with you."
	},{
		level:"CARD",sp:20,mp:470,power:undefined,casttime:0.5,cooltime:180,duration:360, 
	 	description:"Cast a powerful buff to all party members including caster, but buff will be given randomly. May the god of dice be with you."
	}]);

    gladiator.skill[7] = new Skill("./img_p/gld/warcry.webp","ACTIVE","<font color='#8e6aac'>Stumblebum</font>","10",[3,10],[{id:6,lv:1}],[{
		level:25,sp:10,mp:50,power:undefined,casttime:0.3,cooltime:10,duration:undefined, 
	 	description:"With powerful battle cry, stun 5 enemies within the range for 1.5 second and decrease 20% of their Physical Attack Power and aim rate."
	},{
		level:28,sp:10,mp:65,power:undefined,casttime:0.3,cooltime:10,duration:undefined, 
	 	description:"With powerful battle cry, stun 5 enemies within the range for 1.5 second and decrease 25% of their Physical Attack Power and aim rate."
	},{
		level:31,sp:10,mp:80,power:undefined,casttime:0.3,cooltime:10,duration:undefined, 
	 	description:"With powerful battle cry, stun 5 enemies within the range for 1.5 second and decrease 30% of their Physical Attack Power and aim rate."
	},{
		level:34,sp:10,mp:95,power:undefined,casttime:0.3,cooltime:10,duration:undefined, 
	 	description:"With powerful battle cry, stun 5 enemies within the range for 1.5 second and decrease 35% of their Physical Attack Power and aim rate."
	},{
		level:37,sp:10,mp:110,power:undefined,casttime:0.3,cooltime:10,duration:undefined, 
	 	description:"With powerful battle cry, stun 5 enemies within the range for 1.5 second and decrease 40% of their Physical Attack Power and aim rate."
	},{
		level:37,sp:10,mp:110,power:undefined,casttime:0.3,cooltime:10,duration:undefined, 
	 	description:"With powerful battle cry, stun 6 enemies within the range for 1.5 second and decrease 42% of their Physical Attack Power and aim rate."
	},{
		level:37,sp:10,mp:110,power:undefined,casttime:0.3,cooltime:10,duration:undefined, 
	 	description:"With powerful battle cry, stun 7 enemies within the range for 1.5 second and decrease 44% of their Physical Attack Power and aim rate."
	},{
		level:37,sp:10,mp:110,power:undefined,casttime:0.3,cooltime:10,duration:undefined, 
	 	description:"With powerful battle cry, stun 8 enemies within the range for 1.5 second and decrease 46% of their Physical Attack Power and aim rate."
	},{
		level:37,sp:10,mp:110,power:undefined,casttime:0.3,cooltime:10,duration:undefined, 
	 	description:"With powerful battle cry, stun 9 enemies within the range for 1.5 second and decrease 48% of their Physical Attack Power and aim rate."
	},{
		level:37,sp:10,mp:110,power:undefined,casttime:0.3,cooltime:10,duration:undefined, 
	 	description:"With powerful battle cry, stun 10 enemies within the range for 1.5 second and decrease 50% of their Physical Attack Power and aim rate."
	}]);

    gladiator.skill[8] = new Skill("./img_p/gld/earthcrash.webp","ACTIVE","<font color='#8e6aac'>Wrath of Earth</font>","10",[6,10],[{id:6,lv:1},{id:10,lv:2}],[{
		level:26,sp:20,mp:90,power:"200.0%+1000",casttime:0,cooltime:12,duration:undefined, 
	 	description:"Cause seismic wave with sword to attack enemies in front. Seismic wave attacks 5 standing or fallen targets and slightly launches them into the air. At skill level 3, victims are launched to higher height with caster\'s casting is not cancelled. At skill level 5, victims are launched to even higher height. "
	},{
		level:29,sp:20,mp:95,power:"220.0%+1150",casttime:0,cooltime:10,duration:undefined, 
	 	description:"Cause seismic wave with sword to attack enemies in front. Seismic wave attacks 5 standing or fallen targets and slightly launches them into the air. At skill level 3, victims are launched to higher height with caster\'s casting is not cancelled. At skill level 5, victims are launched to even higher height. "
	},{
		level:32,sp:20,mp:100,power:"240.0%+1300",casttime:0,cooltime:9,duration:undefined, 
	 	description:"Cause seismic wave with sword to attack enemies in front. Seismic wave attacks 9 targets on ground or standing and launches them into the air. During casting, casting is not cancelled. At skill level 5, vicitims are launched to even higher height. "
	},{
		level:35,sp:20,mp:105,power:"260.0%+1450",casttime:0,cooltime:8,duration:undefined, 
	 	description:"Cause seismic wave with sword to attack enemies in front. Seismic wave attacks 9 targets on ground or standing and launches them into the air. During casting, casting is not cancelled. At skill level 5, vicitims are launched to even higher height. "
	},{
		level:38,sp:20,mp:110,power:"280.0%+1600",casttime:0,cooltime:7,duration:undefined, 
	 	description:"Cause seismic wave with sword to attack enemies in front. Seismic wave attacks 13 targets on ground or standing and greatly launches them into the air. During casting, casting is not cancelled.  "
	},{
		level:"CARD",sp:20,mp:115,power:"300.0%+1750",casttime:0,cooltime:7,duration:undefined, 
	 	description:"Cause seismic wave with sword to attack enemies in front. Seismic wave attacks 13 targets on ground or standing and greatly launches them into the air. During casting, casting is not cancelled.  "
	},{
		level:"CARD",sp:20,mp:120,power:"320.0%+1900 ",casttime:0,cooltime:7,duration:undefined, 
	 	description:"Cause seismic wave with sword to attack enemies in front. Seismic wave attacks 13 targets on ground or standing and greatly launches them into the air. During casting, casting is not cancelled.  "
	},{
		level:"CARD",sp:20,mp:125,power:"340.0%+2050",casttime:0,cooltime:7,duration:undefined, 
	 	description:"Cause seismic wave with sword to attack enemies in front. Seismic wave attacks 13 targets on ground or standing and greatly launches them into the air. During casting, casting is not cancelled.  "
	},{
		level:"CARD",sp:20,mp:130,power:"360.0%+2200 ",casttime:0,cooltime:7,duration:undefined, 
	 	description:"Cause seismic wave with sword to attack enemies in front. Seismic wave attacks 13 targets on ground or standing and greatly launches them into the air. During casting, casting is not cancelled.  "
	},{
		level:"CARD",sp:20,mp:135,power:"380.0%+2350",casttime:0,cooltime:7,duration:undefined, 
	 	description:"Cause seismic wave with sword to attack enemies in front. Seismic wave attacks 13 targets on ground or standing and greatly launches them into the air. During casting, casting is not cancelled.  "
	}]);

    gladiator.skill[9] = new Skill("./img_p/gld/acceration.webp","ACTIVE","<font color='#8e6aac'>Acceleration</font>","10",[8,0],[],[{
		level:20,sp:20,mp:300,power:undefined,casttime:0,cooltime:380,duration:240, 
	 	description:"Increases attack speed by 15% for 240 seconds when holding a two handed sword. Buff effect disappears when receiving Weapon Quicken buff from Myrmidon."
	},{
		level:23,sp:20,mp:360,power:undefined,casttime:0,cooltime:380,duration:270, 
	 	description:"Increases attack speed by 20% for 270 seconds when holding a two handed sword. Buff effect disappears when receiving Weapon Quicken buff from Myrmidon."
	},{
		level:26,sp:20,mp:420,power:undefined,casttime:0,cooltime:380,duration:300, 
	 	description:"Increases attack speed by 25% for 300 seconds when holding a two handed sword. Buff effect disappears when receiving Weapon Quicken buff from Myrmidon."
	},{
		level:29,sp:20,mp:480,power:undefined,casttime:0,cooltime:380,duration:330, 
	 	description:"Increases attack speed by 30% for 330 seconds when holding a two handed sword. Buff effect disappears when receiving Weapon Quicken buff from Myrmidon."
	},{
		level:32,sp:20,mp:520,power:undefined,casttime:0,cooltime:380,duration:360, 
	 	description:"Increases attack speed by 35% for 360 seconds when holding a two handed sword. Buff effect disappears when receiving Weapon Quicken buff from Myrmidon."
	},{
		level:"CARD",sp:20,mp:560,power:undefined,casttime:0,cooltime:380,duration:360, 
	 	description:"Increases attack speed by 36% for 360 seconds when holding a two handed sword. Buff effect disappears when receiving Weapon Quicken buff from Myrmidon."
	},{
		level:"CARD",sp:20,mp:600,power:undefined,casttime:0,cooltime:380,duration:360, 
	 	description:"Increases attack speed by 37% for 360 seconds when holding a two handed sword. Buff effect disappears when receiving Weapon Quicken buff from Myrmidon."
	},{
		level:"CARD",sp:20,mp:640,power:undefined,casttime:0,cooltime:380,duration:360, 
	 	description:"Increases attack speed by 38% for 360 seconds when holding a two handed sword. Buff effect disappears when receiving Weapon Quicken buff from Myrmidon."
	},{
		level:"CARD",sp:20,mp:780,power:undefined,casttime:0,cooltime:380,duration:360, 
	 	description:"Increases attack speed by 39% for 360 seconds when holding a two handed sword. Buff effect disappears when receiving Weapon Quicken buff from Myrmidon."
	},{
		level:"CARD",sp:20,mp:720,power:undefined,casttime:0,cooltime:380,duration:360, 
	 	description:"Increases attack speed by 40% for 360 seconds when holding a two handed sword. Buff effect disappears when receiving Weapon Quicken buff from Myrmidon."
	}]);

    gladiator.skill[10] = new Skill("./img_p/gld/extarmination.webp","ACTIVE","<font color='#8e6aac'>Annihilation</font>","10",[6,2],[{id:9,lv:1}],[{
		level:21,sp:15,mp:12,power:undefined,casttime:0,cooltime:0.1,duration:undefined, 
	 	description:"Amplfies Physical Attack Power of the next 2 attacks by 10%. Damage of attack skill can also be increased with this skill."
	},{
		level:24,sp:15,mp:14,power:undefined,casttime:0,cooltime:0.1,duration:undefined, 
	 	description:"Amplfies Physical Attack Power of the next 2 attacks by 15%. Damage of attack skill can also be increased with this skill."
	},{
		level:27,sp:15,mp:16,power:undefined,casttime:0,cooltime:0.1,duration:undefined, 
	 	description:"Amplfies Physical Attack Power of the next 3 attacks by 20%. Damage of attack skill can also be increased with this skill."
	},{
		level:30,sp:15,mp:18,power:undefined,casttime:0,cooltime:0.1,duration:undefined, 
	 	description:"Amplfies Physical Attack Power of the next 4 attacks by 25%. Damage of attack skill can also be increased with this skill."
	},{
		level:33,sp:15,mp:20,power:undefined,casttime:0,cooltime:0.1,duration:undefined, 
	 	description:"Amplfies Physical Attack Power of the next 5 attacks by 30%. Damage of attack skill can also be increased with this skill."
	},{
		level:"CARD",sp:15,mp:115,power:undefined,casttime:0,cooltime:0.1,duration:undefined, 
	 	description:"Amplfies Physical Attack Power of the next 5 attacks by 32%. Damage of attack skill can also be increased with this skill."
	},{
		level:"CARD",sp:15,mp:125,power:undefined,casttime:0,cooltime:0.1,duration:undefined, 
	 	description:"Amplfies Physical Attack Power of the next 5 attacks by 34%. Damage of attack skill can also be increased with this skill."
	},{
		level:"CARD",sp:15,mp:135,power:undefined,casttime:0,cooltime:0.1,duration:undefined, 
	 	description:"Amplfies Physical Attack Power of the next 5 attacks by 36%. Damage of attack skill can also be increased with this skill."
	},{
		level:"CARD",sp:15,mp:145,power:undefined,casttime:0,cooltime:0.1,duration:undefined, 
	 	description:"Amplfies Physical Attack Power of the next 5 attacks by 38%. Damage of attack skill can also be increased with this skill."
	},{
		level:"CARD",sp:15,mp:155,power:undefined,casttime:0,cooltime:0.1,duration:undefined, 
	 	description:"Amplfies Physical Attack Power of the next 5 attacks by 40%. Damage of attack skill can also be increased with this skill."
	}]);

    gladiator.skill[11] = new Skill("./img_p/gld/hprecovery.webp","PASSIVE","<font color='#8e6aac'>HP Recovery</font>","10",[8,2],[{id:9,lv:1}],[{
		level:22,sp:15,mp:undefined,power:undefined,casttime:0,cooltime:undefined,duration:undefined, 
	 	description:"Add extra 200 HP permanently, increase regeneration amount by +10, and increase effect of potions by 10%. "
	},{
		level:25,sp:15,mp:undefined,power:undefined,casttime:0,cooltime:undefined,duration:undefined, 
	 	description:"Add extra 400 HP permanently, increase regeneration amount by +20, and increase effect of potions by 15%. "
	},{
		level:28,sp:15,mp:undefined,power:undefined,casttime:0,cooltime:undefined,duration:undefined, 
	 	description:"Add extra 600 HP permanently, increase regeneration amount by +30, and increase effect of potions by 20%. "
	},{
		level:31,sp:15,mp:undefined,power:undefined,casttime:0,cooltime:undefined,duration:undefined, 
	 	description:"Add extra 800 HP permanently, increase regeneration amount by +40, and increase effect of potions by 25%. "
	},{
		level:34,sp:15,mp:undefined,power:undefined,casttime:0,cooltime:undefined,duration:undefined, 
	 	description:"Add extra 1000 HP permanently, increase regeneration amount by +50, and increase effect of potions by 30%. "
	},{
		level:"CARD",sp:15,mp:undefined,power:undefined,casttime:0,cooltime:undefined,duration:undefined, 
	 	description:"Add extra 1200 HP permanently, increase regeneration amount by +60, and increase effect of potions by 32%. "
	},{
		level:"CARD",sp:15,mp:undefined,power:undefined,casttime:0,cooltime:undefined,duration:undefined, 
	 	description:"Add extra 1400 HP permanently, increase regeneration amount by +70, and increase effect of potions by 34%. "
	},{
		level:"CARD",sp:15,mp:undefined,power:undefined,casttime:0,cooltime:undefined,duration:undefined, 
	 	description:"Add extra 1600 HP permanently, increase regeneration amount by +80, and increase effect of potions by 36%. "
	},{
		level:"CARD",sp:15,mp:undefined,power:undefined,casttime:0,cooltime:undefined,duration:undefined, 
	 	description:"Add extra 1800 HP permanently, increase regeneration amount by +90, and increase effect of potions by 38%. "
	},{
		level:"CARD",sp:15,mp:undefined,power:undefined,casttime:0,cooltime:undefined,duration:undefined, 
	 	description:"Add extra 2000 HP permanently, increase regeneration amount by +100, and increase effect of potions by 40%. "
	}]);
	
//Warrior - Gladiator - Myrmidon - Overlord
	var marcenary = {		
		name: "Myrmidon",
		skill: new Array(),
		image: "./img_p/marcenarybg.webp"
	};
	marcenary.skill[0] = new Skill("./img_p/mer/sharpnesblade.webp","PASSIVE","<font color='#8e6aac'>Sharpness Blade</font>","5",[1,0],[],[{
		level:40,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Increase Base Physical Attack Power by 100 when holding two handed sword."
	},{
		level:44,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Increase Base Physical Attack Power by 180 when holding two handed sword."
	},{
		level:48,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Increase Base Physical Attack Power by 260 when holding two handed sword."
	},{
		level:52,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Increase Base Physical Attack Power by 340 when holding two handed sword."
	},{
		level:56,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Increase Base Physical Attack Power by 420 when holding two handed sword."		
	}]);
	
	marcenary.skill[1] = new Skill("./img_p/mer/gustslash.webp","ACTIVE","<font color='#8e6aac'>Gust Slash</font>","5",[1,2],[{id:0,lv:1}],[{
		level:41,sp:15,mp:60,power:"300.0%+300",casttime:0,cooltime:10,duration:undefined, 
	 	description:"Attack up to 6 targets with 3 rapid combo attack with sword, and knock down the target. If there are more than 6 enemies, target will be reselected for each attack. From Lv3 fallen enemies can be attacked. "
	},{
		level:41,sp:15,mp:63,power:"315.0%+380",casttime:0,cooltime:10,duration:undefined, 
	 	description:"Attack up to 6 targets with 3 rapid combo attack with sword, and knock down the target. If there are more than 6 enemies, target will be reselected for each attack. From Lv3 fallen enemies can be attacked. "
	},{
		level:41,sp:15,mp:66,power:"330.0%+460",casttime:0,cooltime:10,duration:undefined, 
	 	description:"Attack up to 10 standing or fallen targets with 3 rapid combo attack with sword, and knock down the target. If there are more than 10 enemies, target will be reselected for each attack. "
	},{
		level:41,sp:15,mp:69,power:"345.0%+540",casttime:0,cooltime:10,duration:undefined, 
	 	description:"Attack up to 12 standing or fallen targets with 3 rapid combo attack with sword, and knock down the target. If there are more than 10 enemies, target will be reselected for each attack. "
	},{
		level:41,sp:15,mp:72,power:"360.0%+620",casttime:0,cooltime:10,duration:undefined, 
	 	description:"Attack up to 14 standing or fallen targets with 3 rapid combo attack with sword, and knock down the target. If there are more than 10 enemies, target will be reselected for each attack. "
	}]);
	
	marcenary.skill[2] = new Skill("./img_p/mer/bloodyroar.webp","toggle","<font color='#8e6aac'>Bloody Roar</font>","5",[1,4],[{id:1,lv:1}],[{
		level:41,sp:30,mp:20,power:undefined,casttime:0,cooltime:30,duration:undefined, 
	 	description:"By sacrificing 0.6% of Max HP per second, increase total value of Physical Attack Power by 20% and decrease base value of Physical Defense power by 20%."
	},{
		level:45,sp:30,mp:20,power:undefined,casttime:0,cooltime:30,duration:undefined, 
	 	description:"By sacrificing 0.7% of Max HP per second, increase total value of Physical Attack Power by 30% and decrease base value of Physical Defense power by 30%."		
	},{
		level:49,sp:30,mp:20,power:undefined,casttime:0,cooltime:30,duration:undefined, 
	 	description:"By sacrificing 0.8% of Max HP per second, increase total value of Physical Attack Power by 40% and decrease base value of Physical Defense power by 40%."
	},{
		level:53,sp:30,mp:20,power:undefined,casttime:0,cooltime:30,duration:undefined, 
	 	description:"By sacrificing 0.9% of Max HP per second, increase total value of Physical Attack Power by 50% and decrease base value of Physical Defense power by 50%."
	},{
		level:57,sp:30,mp:20,power:undefined,casttime:0,cooltime:30,duration:undefined, 
	 	description:"By sacrificing 1% of Max HP per second, increase total value of Physical Attack Power by 60% and decrease base value of Physical Defense power by 60%."
	}]);
	
	marcenary.skill[3] = new Skill("./img_p/mer/brokenmagnum.webp","ACTIVE","<font color='#8e6aac'>Magnum Break</font>","5",[3,3],[{id:0,lv:1}],[{
		level:42,sp:15,mp:70,power:"200.0%+300",casttime:0,cooltime:10,duration:undefined, 
	 	description:"Blow up a barrel of gun powder to damage up to 6 targets and launch them high into the air. Above skill level 3, you can attack fallen targets and victim will get serious burn. "
	},{
		level:45,sp:15,mp:80,power:"230.0%+350",casttime:0,cooltime:10,duration:undefined, 
	 	description:"Blow up a barrel of gun powder to damage up to 8 targets and launch them high into the air. Above skill level 3, you can attack fallen targets and victim will get serious burn. "
	},{
		level:48,sp:15,mp:90,power:"260.0%+400",casttime:0,cooltime:10,duration:undefined, 
	 	description:"Blow up a barrel of gun powder to damage up to 10 targets, either standing or fallen, and launch them high into the air. Victim will get serious burn. "
	},{
		level:51,sp:15,mp:100,power:"290.0%+450",casttime:0,cooltime:10,duration:undefined, 
	 	description:"Blow up a barrel of gun powder to damage up to 12 targets, either standing or fallen, and launch them high into the air. Victim will get serious burn. "
	},{
		level:54,sp:15,mp:110,power:"320.0%+500",casttime:0,cooltime:10,duration:undefined, 
	 	description:"Blow up a barrel of gun powder to damage up to 14 targets, either standing or fallen, and launch them high into the air. Victim will get serious burn. "
	}]);
	
	marcenary.skill[4] = new Skill("./img_p/mer/deathbound.webp","ACTIVE","<font color='#8e6aac'>Death Bound</font>","10",[4,5],[{id:3,lv:1}],[{
		level:43,sp:20,mp:70,power:"320.0%+400",casttime:0,cooltime:15,duration:undefined, 
	 	description:"Smash the ground with sword to damage up to 12 enemies nearby with Lv.6 Curse and launch them high into the air. Above skill level 3, launched enemies can be attacked also and launch will be increased to the maximum height. "
	},{
		level:46,sp:20,mp:75,power:"345.0%+500",casttime:0,cooltime:15,duration:undefined, 
	 	description:"Smash the ground with sword to damage up to 14 enemies nearby with Lv.7 Curse and launch them high into the air. Above skill level 3, launched enemies can be attacked also and launch will be increased to the maximum height. "
	},{
		level:49,sp:20,mp:80,power:"370.0%+600",casttime:0,cooltime:15,duration:undefined, 
	 	description:"Smash the ground with sword to damabe up to 16 enemies nearby with Lv.8 Curse and launch them high into the air. "
	},{
		level:51,sp:20,mp:85,power:"395.0%+700",casttime:0,cooltime:15,duration:undefined, 
	 	description:"Smash the ground with sword to damabe up to 18 enemies nearby with Lv.9 Curse and launch them high into the air. "
	},{
		level:55,sp:20,mp:90,power:"420.0%+800",casttime:0,cooltime:15,duration:undefined, 
	 	description:"Smash the ground with sword to damabe up to 20 enemies nearby with Lv.10 Curse and launch them high into the air. "
	},{
		level:55,sp:20,mp:95,power:"445.0%+800",casttime:0,cooltime:15,duration:undefined, 
	 	description:"Smash the ground with sword to damabe up to 20 enemies nearby with Lv.11 Curse and launch them high into the air. "
	},{
		level:55,sp:20,mp:100,power:"470.0%+800",casttime:0,cooltime:15,duration:undefined, 
	 	description:"Smash the ground with sword to damabe up to 20 enemies nearby with Lv.12 Curse and launch them high into the air. "
	},{
		level:55,sp:20,mp:105,power:"495.0%+800",casttime:0,cooltime:15,duration:undefined, 
	 	description:"Smash the ground with sword to damabe up to 20 enemies nearby with Lv.13 Curse and launch them high into the air. "
	},{
		level:55,sp:20,mp:110,power:"520.0%+800",casttime:0,cooltime:15,duration:undefined, 
	 	description:"Smash the ground with sword to damabe up to 20 enemies nearby with Lv.14 Curse and launch them high into the air. "
	},{
		level:55,sp:20,mp:115,power:"545.0%+800",casttime:0,cooltime:15,duration:undefined, 
	 	description:"Smash the ground with sword to damabe up to 20 enemies nearby with Lv.15 Curse and launch them high into the air. "
	}]);
	
	marcenary.skill[5] = new Skill("./img_p/mer/phisicaltraining.webp","PASSIVE","<font color='#8e6aac'>Physical Training</font>","5",[9,0],[],[{
		level:40,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Permanently increase Max HP by +500 and increase Regeneration amount by +20."		
	},{
		level:43,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Permanently increase Max HP by +1000 and increase Regeneration amount by +40."			
	},{
		level:46,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Permanently increase Max HP by +1500 and increase Regeneration amount by +60."	
	},{
		level:49,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Permanently increase Max HP by +2000 and increase Regeneration amount by +80."	
	},{
		level:52,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Permanently increase Max HP by +2500 and increase Regeneration amount by +100."	
	}]);
	
	marcenary.skill[6] = new Skill("./img_p/mer/wheelwind.webp","ACTIVE","<font color='#8e6aac'>Whirlwind</font>","5",[7,3],[{id:5,lv:1}],[{
		level:43,sp:20,mp:40,power:"75.0%+500",casttime:0,cooltime:10,duration:undefined, 
	 	description:"Cast a powerful spinning attack to front attacking up to 8 enemy targets at once. During casting time, character still receives damage but skill action is not canceled. At skill level 3, fallen enemies can also be attacked."
	},{
		level:46,sp:20,mp:45,power:"80.0%+600",casttime:0,cooltime:10,duration:undefined, 
	 	description:"Cast a powerful spinning attack to front attacking up to 10 enemy targets at once. During casting time, character still receives damage but skill action is not canceled. At skill level 3, fallen enemies can also be attacked. "
	},{
		level:49,sp:20,mp:50,power:"85.0%+700",casttime:0,cooltime:10,duration:undefined, 
	 	description:"Cast a powerful spinning attack to front attacking up to 12 standing or fallen enemy targets at once. During casting time, character still receives damage but skill action is not canceled. "
	},{
		level:52,sp:20,mp:55,power:"90.0%+800",casttime:0,cooltime:10,duration:undefined, 
	 	description:"Cast a powerful spinning attack to front attacking up to 14 standing or fallen enemy targets at once. During casting time, character still receives damage but skill action is not canceled. "
	},{
		level:55,sp:20,mp:60,power:"95.0%+900",casttime:0,cooltime:10,duration:undefined, 
	 	description:"Cast a powerful spinning attack to front attacking up to 16 standing or fallen enemy targets at once. During casting time, character still receives damage but skill action is not canceled. "
	}]);
	
	marcenary.skill[7] = new Skill("./img_p/mer/risingstorm.webp","ACTIVE","<font color='#8e6aac'>Raising Storm</font>","5",[6,5],[{id:6,lv:1}],[{
		level:44,sp:25,mp:100,power:"375%+300",casttime:1,cooltime:30,duration:undefined, 
	 	description:"Summon an invincible wrestler who will cast a powerful spinning attack on 12 standing enemies. "
	},{
		level:47,sp:25,mp:110,power:"400%+450",casttime:1,cooltime:30,duration:undefined, 
	 	description:"Summon an invincible wrestler who will cast a powerful spinning attack on 14 standing enemies. "
	},{
		level:50,sp:25,mp:120,power:"425%+600",casttime:1,cooltime:30,duration:undefined, 
	 	description:"Summon an invincible wrestler who will cast a powerful spinning attack on 16 standing enemies. "
	},{
		level:53,sp:25,mp:130,power:"450%+750",casttime:1,cooltime:30,duration:undefined, 
	 	description:"Summon an invincible wrestler who will cast a powerful spinning attack on 18 standing enemies. "
	},{
		level:56,sp:25,mp:140,power:"475%+900",casttime:1,cooltime:30,duration:undefined, 
	 	description:"Summon an invincible wrestler who will cast a powerful spinning attack on 20 standing enemies. "
	}]);
	
	marcenary.skill[8] = new Skill("./img_p/mer/waponquick.webp","ACTIVE","<font color='#8e6aac'>Weapon Quicken</font>","5",[9,2],[{id:5,lv:1}],[{
		level:42,sp:20,mp:80,power:undefined,casttime:1.5,cooltime:70,duration:30, 
	 	description:"Increase all party members' attack speed by 5% for 30 seconds. Effect does not stack with Acceleration or Adrenaline. "				
	},{
		level:45,sp:20,mp:85,power:undefined,casttime:1.5,cooltime:70,duration:30, 
	 	description:"Increase all party members' attack speed by 7% for 30 seconds. Effect does not stack with Acceleration or Adrenaline. "
	},{
		level:48,sp:20,mp:90,power:undefined,casttime:1.5,cooltime:70,duration:30, 
	 	description:"Increase all party members' attack speed by 9% for 30 seconds. Effect does not stack with Acceleration or Adrenaline. "
	},{
		level:51,sp:20,mp:95,power:undefined,casttime:1.5,cooltime:70,duration:30, 
	 	description:"Increase all party members' attack speed by 11% for 30 seconds. Effect does not stack with Acceleration or Adrenaline. "
	},{
		level:54,sp:20,mp:100,power:undefined,casttime:1.5,cooltime:70,duration:30, 
	 	description:"Increase all party members' attack speed by 13% for 30 seconds. Effect does not stack with Acceleration or Adrenaline. "
	}]);
	
	marcenary.skill[9] = new Skill("./img_p/mer/wildrage.webp","ACTIVE","<font color='#8e6aac'>Wild Rage</font>","10",[9,4],[{id:8,lv:1}],[{
		level:43,sp:15,mp:50,power:undefined,casttime:0,cooltime:60,duration:40, 
	 	description:"Amplifies all party member\'s total value of Physical Attack Power and crit. chance by 4% for 100 seconds."			
	},{
		level:46,sp:15,mp:55,power:undefined,casttime:0,cooltime:60,duration:45, 
	 	description:"Amplifies all party member\'s total value of Physical Attack Power and crit. chance by 6% for 120 seconds."
	},{
		level:49,sp:15,mp:60,power:undefined,casttime:0,cooltime:60,duration:50, 
	 	description:"Amplifies all party member\'s total value of Physical Attack Power and crit. chance by 8% for 140 seconds."
	},{
		level:52,sp:15,mp:65,power:undefined,casttime:0,cooltime:60,duration:55, 
	 	description:"Amplifies all party member\'s total value of Physical Attack Power and crit. chance by 10% for 160 seconds."
	},{
		level:55,sp:15,mp:70,power:undefined,casttime:0,cooltime:60,duration:60, 
	 	description:"Amplifies all party member\'s total value of Physical Attack Power and crit. chance by 12% for 180 seconds."
	},{
		level:55,sp:15,mp:70,power:undefined,casttime:0,cooltime:60,duration:60, 
	 	description:"Amplifies all party member\'s total value of Physical Attack Power and crit. chance by 14% for 180 seconds."
	},{
		level:55,sp:15,mp:70,power:undefined,casttime:0,cooltime:60,duration:60, 
	 	description:"Amplifies all party member\'s total value of Physical Attack Power and crit. chance by 16% for 180 seconds."
	},{
		level:55,sp:15,mp:70,power:undefined,casttime:0,cooltime:60,duration:60, 
	 	description:"Amplifies all party member\'s total value of Physical Attack Power and crit. chance by 18% for 180 seconds."
	},{
		level:55,sp:15,mp:70,power:undefined,casttime:0,cooltime:60,duration:60, 
	 	description:"Amplifies all party member\'s total value of Physical Attack Power and crit. chance by 20% for 180 seconds."
	},{
		level:55,sp:15,mp:70,power:undefined,casttime:0,cooltime:60,duration:60, 
	 	description:"Amplifies all party member\'s total value of Physical Attack Power and crit. chance by 22% for 180 seconds."
	}]);
	
	marcenary.skill[10] = new Skill("./img_p/mer/wyvernblede.webp","ACTIVE","<font color='#8e6aac'>Wyvern Blade</font>","5",[5,7],[{id:4,lv:2},{id:7,lv:2}],[{
		level:48,sp:25,mp:100,power:"190.0%+500",casttime:0,cooltime:10,duration:undefined, 
	 	description:"Cast a strong tornado by powerful spin. Caster attacks by moving it with arrow keys. Tornado attack up to 6 launched enemies. At skill level 2, standing enemies can be attacked. With skill level 4, fallen enemies can also attacked. "		
	},{
		level:51,sp:25,mp:125,power:"200.0%+650",casttime:0,cooltime:10,duration:undefined, 
	 	description:"Cast a strong tornado by powerful spin. Caster attacks by moving it with arrow keys. Tornado attack up to 8 launched or standing enemies. With skill level 4, fallen enemies can also attacked. "
	},{
		level:54,sp:25,mp:150,power:"210.0%+800",casttime:0,cooltime:10,duration:undefined, 
	 	description:"Cast a strong tornado by powerful spin. Caster attacks by moving it with arrow keys. Tornado attack up to 10 launched or standing enemies. With skill level 4, fallen enemies can also attacked. "
	},{
		level:57,sp:25,mp:175,power:"220.0%+950",casttime:0,cooltime:10,duration:undefined, 
	 	description:"Cast a strong tornado by powerful spin. Caster attacks by moving it with arrow keys. Tornado attack up to 12 launched, standing or fallen enemies. If there are more than 12 enemies, target will be reselected for each attack. "
	},{
		level:60,sp:25,mp:200,power:"230.0%+1100",casttime:0,cooltime:10,duration:undefined, 
	 	description:"Cast a strong tornado by powerful spin. Caster attacks by moving it with arrow keys. Tornado attack up to 14 launched, standing or fallen enemies. If there are more than 14 enemies, target will be reselected for each attack. "
	}]);
	
//Warrior - Gladiator - Myrmidon - Overlord
	var overlord = { 
		name:"Overlord",
		skill:new Array(),
		image:"./img_p/overlordbg.webp"
	};
	
	overlord.skill[0] = new Skill("./img_p/ovl/Awakening.webp","PASSIVE","<font color='#8e6aac'>Awakening</font>","1",[5,0],[],[{
		level:60,sp:1,mp:undefined,power:undefined,casttime:0,cooltime:10,duration:undefined, 
	 	description:"Whenever you use MP during battle, your Awakening bar will fill up. This allows you to perform certain special skills which consume Awakening points. These skills also consume MP, however the MP they consume does not fill your awakening bar. "
	}]);
	
	overlord.skill[1] = new Skill("./img_p/ovl/DeathGrab.webp","ACTIVE","<font color='#8e6aac'>Death Grab</font>","5",[1,0],[],[{
		level:60,sp:20,mp:60,power:"120.0%+400",casttime:0,cooltime:15,duration:undefined, 
	 	description:"Brings 2 enemies in mid-air in front of the user. Targets will be stunned. "		
	},{
		level:62,sp:20,mp:75,power:"140.0%+500",casttime:0,cooltime:12.5,duration:undefined, 
	 	description:"Brings 4 enemies in mid-air in front of the user. Targets will be stunned. "
	},{
		level:64,sp:20,mp:90,power:"160.0%+600",casttime:0,cooltime:10,duration:undefined, 
	 	description:"Brings 6 enemies in mid-air in front of the user. Targets will be stunned. "
	},{
		level:66,sp:20,mp:105,power:"180.0%+700",casttime:0,cooltime:7.5,duration:undefined, 
	 	description:"Brings 8 enemies in mid-air in front of the user. Targets will be stunned."
	},{
		level:68,sp:20,mp:120,power:"200.0%+800",casttime:0,cooltime:5,duration:undefined, 
	 	description:"Brings 10 enemies in mid-air in front of the user. Targets will be stunned. "
	}]);
	
	overlord.skill[2] = new Skill("./img_p/ovl/WindStep.webp","ACTIVE","<font color='#8e6aac'>Wind Step</font>","5",[9,0],[{id:0,lv:1}],[{
		level:60,sp:25,mp:undefined,power:"",casttime:0,cooltime:undefined,duration:undefined, 
	 	description:"Using the God of Destruction's power movement speed permanently increased by 8%. "		
	},{
		level:62,sp:25,mp:undefined,power:"",casttime:0,cooltime:undefined,duration:undefined, 
	 	description:"Using the God of Destruction's power movement speed permanently increased by 10%. "
	},{
		level:64,sp:25,mp:undefined,power:"",casttime:0,cooltime:undefined,duration:undefined, 
	 	description:"Using the God of Destruction's power movement speed permanently increased by 12%. "
	},{
		level:66,sp:25,mp:undefined,power:"",casttime:0,cooltime:undefined,duration:undefined, 
	 	description:"Using the God of Destruction's power movement speed permanently increased by 14%. "
	},{
		level:68,sp:25,mp:undefined,power:"",casttime:0,cooltime:undefined,duration:undefined, 
	 	description:"Using the God of Destruction's power movement speed permanently increased by 16%. "
	}]);
	
	overlord.skill[3] = new Skill("./img_p/ovl/DeathStinger.webp","PASSIVE","<font color='#8e6aac'>Death Stinger</font>","5",[4,3],[{id:0,lv:1}],[{
		level:61,sp:25,mp:300,power:"220%",casttime:0,cooltime:30,duration:undefined, 
	 	description:"[Awakening Skill] Summon the God of Ruins, Bultan, with Blood Covenant, and attack enemies with knock back."
	 	},{
		level:63,sp:25,mp:325,power:"250%",casttime:0,cooltime:30,duration:undefined, 
	 	description:"[Awakening Skill] Summon the God of Ruins, Bultan, with Blood Covenant, and attack enemies with knock back."
		},{
		level:65,sp:25,mp:350,power:"280%",casttime:0,cooltime:30,duration:undefined, 
	 	description:"[Awakening Skill] Summon the God of Ruins, Bultan, with Blood Covenant, and attack enemies with knock back."
		},{
		level:67,sp:25,mp:375,power:"310%",casttime:0,cooltime:30,duration:undefined, 
	 	description:"[Awakening Skill] Summon the God of Ruins, Bultan, with Blood Covenant, and attack enemies with knock back."
		},{
		level:69,sp:25,mp:400,power:"340%",casttime:0,cooltime:30,duration:undefined, 
	 	description:"[Awakening Skill] Summon the God of Ruins, Bultan, with Blood Covenant, and attack enemies with knock back."
	}]);
	
	overlord.skill[4] = new Skill("./img_p/ovl/DemolitionBomber.webp","ACTIVE","<font color='#8e6aac'>Demolition Bomber</font>","1",[6,3],[{id:0,lv:1}],[{
		level:undefined,sp:60,mp:undefined,power:undefined,casttime:0,cooltime:undefined,duration:undefined, 
	 	description:"[Ultimate Skill] The ultimate skill for the Overlord class. Summon the God of Ruins, Bultan, to inflict 2 physical attack combos to 20 enemies with explosion damage in final attack. "
	}]);
	
	overlord.skill[5] = new Skill("./img_p/ovl/DemolitionCharge.webp","ACTIVE","<font color='#8e6aac'>Demolition Charge</font>","5",[4,5],[{id:3,lv:1}],[{
		level:62,sp:25,mp:300,power:"900%",casttime:0,cooltime:30,duration:undefined, 
	 	description:"Transfer God of Ruins, Bultan’s Power to the sword with Blood Covenant. Able to charge maximum 3 levels. If user wants to cast during charging, press “Z”. Automatically active when charging is completed. Additional damages in tooltips are maximum damage."
	 	},{
		level:64,sp:25,mp:325,power:"950%",casttime:0,cooltime:30,duration:undefined, 
	 	description:"Transfer God of Ruins, Bultan’s Power to the sword with Blood Covenant. Able to charge maximum 3 levels. If user wants to cast during charging, press “Z”. Automatically active when charging is completed. Additional damages in tooltips are maximum damage."
		},{
		level:66,sp:25,mp:350,power:"1000%",casttime:0,cooltime:30,duration:undefined, 
	 	description:"Transfer God of Ruins, Bultan’s Power to the sword with Blood Covenant. Able to charge maximum 3 levels. If user wants to cast during charging, press “Z”. Automatically active when charging is completed. Additional damages in tooltips are maximum damage."
		},{
		level:68,sp:25,mp:375,power:"1050%",casttime:0,cooltime:30,duration:undefined, 
	 	description:"Transfer God of Ruins, Bultan’s Power to the sword with Blood Covenant. Able to charge maximum 3 levels. If user wants to cast during charging, press “Z”. Automatically active when charging is completed. Additional damages in tooltips are maximum damage."
		},{
		level:70,sp:25,mp:400,power:"1100%",casttime:0,cooltime:30,duration:undefined, 
	 	description:"Transfer God of Ruins, Bultan’s Power to the sword with Blood Covenant. Able to charge maximum 3 levels. If user wants to cast during charging, press “Z”. Automatically active when charging is completed. Additional damages in tooltips are maximum damage."	
	 }]);
	 
	overlord.skill[6] = new Skill("./img_p/ovl/ChargeTheAwakening.webp","toggle","<font color='#8e6aac'>Awakening Charge</font>","3",[1,7],[],[{
		level:60,sp:10,mp:35,power:undefined,casttime:0,cooltime:3,duration:undefined, 
		description:"Consumes 20% MP to recharge 14% of the Awakening bar every 3 seconds."
	 },{
	 	level:62,sp:10,mp:35,power:undefined,casttime:0,cooltime:3,duration:undefined, 
		description:"Consumes 20% MP to recharge 17% of the Awakening bar every 3 seconds."
	 },{
		level:68,sp:10,mp:35,power:undefined,casttime:0,cooltime:3,duration:undefined, 
		description:"Consumes 20% MP to recharge 20% of the Awakening bar every 3 seconds."
	}]);
	
//Mage
	var mage = {
		name: "Mage",
		skill: new Array(),
		image: "./img_p/magebg.webp"
	};
	mage.skill[0] = new Skill("./img_p/mag/pointbuster.webp","ACTIVE","<font color='#8e6aac'>Point Buster</font>","10",[5,0],[],[{
		level:1,sp:15,mp:10,power:"25.0%+80",casttime:0.5,cooltime:2,duration:undefined, 
	 	description:"Attack and launch 4 standing or fallen enemies into the air."
	},{
		level:4,sp:15,mp:13,power:"27.5%+90",casttime:0.5,cooltime:2,duration:undefined, 
	 	description:"Attack and launch 5 standing or fallen enemies into the air."
	},{
		level:6,sp:15,mp:16,power:"30.0%+100",casttime:0.5,cooltime:2,duration:undefined, 
	 	description:"Attack and launch 6 standing or fallen enemies into the air."
	},{
		level:8,sp:15,mp:19,power:"32.5%+110",casttime:0.5,cooltime:2,duration:undefined, 
	 	description:"Attack and launch 7 standing or fallen enemies into the air. "
	},{
		level:10,sp:15,mp:21,power:"35.0%+120",casttime:0.5,cooltime:2,duration:undefined, 
	 	description:"Attack and launch 8 standing or fallen enemies into the air. "
	},{
		level:13,sp:15,mp:23,power:"37.5%+130",casttime:0.5,cooltime:2,duration:undefined, 
	 	description:"Attack and launch 9 standing or fallen enemies into the air. "
	},{
		level:13,sp:15,mp:25,power:"40.0%+140",casttime:0.5,cooltime:2,duration:undefined, 
	 	description:"Attack and launch 10 standing or fallen enemies into the air. "
	},{
		level:13,sp:15,mp:27,power:"42.5%+150",casttime:0.5,cooltime:2,duration:undefined, 
	 	description:"Attack and launch 11 standing or fallen enemies into the air. "
	},{
		level:13,sp:15,mp:29,power:"45.0%+160",casttime:0.5,cooltime:2,duration:undefined, 
	 	description:"Attack and launch 12 standing or fallen enemies into the air. "
	},{
		level:13,sp:15,mp:31,power:"47.5%+170",casttime:0.5,cooltime:2,duration:undefined, 
	 	description:"Attack and launch 13 standing or fallen enemies into the air. "
	}]);

	mage.skill[1] = new Skill("./img_p/mag/aircombo.webp","PASSIVE","<font color='#8e6aac'>Air Combo</font>","3",[5,2],[{id:0,lv:1}],[{
		level:2,sp:15,mp:undefined,power:"15.0%+50",casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Hits enemies with electric bolts in mid-air."
	},{
		level:3,sp:15,mp:undefined,power:"18.0%+60",casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Hits enemies with electric bolts in mid-air."
	},{
		level:4,sp:15,mp:undefined,power:"21.0%+70",casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Hits enemies with electric bolts in mid-air."
	}]);

	mage.skill[2] = new Skill("./img_p/mag/meteor.webp","ACTIVE","<font color='#8e6aac'>Meteor Fall</font>","5",[5,4],[{id:1,lv:1}],[{
		level:3,sp:15,mp:10,power:"25.0%+80",casttime:0,cooltime:3,duration:undefined, 
	 	description:"After jumping, drop a small meteor to attack 2 enemy target. Skill is also activated by pressing down arrow key and attack button after jumping. At skill level 3, victims are slightly launched into the air."
	},{
		level:6,sp:15,mp:13,power:"28.5%+95",casttime:0,cooltime:3,duration:undefined, 
	 	description:"After jumping, drop a small meteor to attack 4 enemy target. Skill is also activated by pressing down arrow key and attack button after jumping. At skill level 3, victims are slightly launched into the air."
	},{
		level:9,sp:15,mp:16,power:"31.0%+110",casttime:0,cooltime:3,duration:undefined, 
	 	description:"After jumping, drop a small meteor to attack 6 enemy targets and slightly launch them into the air. Skill is also activated by pressing down arrow key and attack button after jumping."
	},{
		level:12,sp:15,mp:19,power:"34.0%+125",casttime:0,cooltime:3,duration:undefined, 
	 	description:"After jumping, drop a small meteor to attack 8 enemy targets and slightly launch them into the air. Skill is also activated by pressing down arrow key and attack button after jumping."
	},{
		level:15,sp:15,mp:21,power:"37.0%+140",casttime:0,cooltime:3,duration:undefined, 
	 	description:"After jumping, drop a small meteor to attack 10 enemy targets and slightly launch them into the air. Skill is also activated by pressing down arrow key and attack button after jumping."
	}]);

	mage.skill[3] = new Skill("./img_p/mag/relaunch_mage.webp","ACTIVE","<font color='#8e6aac'>Re-Launch</font>","5",[2,2],[],[{
		level:2,sp:10,mp:10,power:"25.0%+60",casttime:0,cooltime:3,duration:undefined, 
	 	description:"Attacks fallen enemies on the ground and raises them back into the air. "
	},{
		level:4,sp:10,mp:12,power:"26.5%+75",casttime:0,cooltime:3,duration:undefined, 
	 	description:"Attacks fallen enemies on the ground and raises them back into the air. "
	},{
		level:6,sp:10,mp:14,power:"28.0%+90",casttime:0,cooltime:3,duration:undefined, 
	 	description:"Attacks fallen enemies on the ground and raises them back into the air. "
	},{
		level:8,sp:10,mp:16,power:"29.5%+105",casttime:0,cooltime:3,duration:undefined, 
	 	description:"Attacks fallen enemies on the ground and raises them back into the air. "
	},{
		level:10,sp:10,mp:18,power:"31.0%+120",casttime:0,cooltime:3,duration:undefined, 
	 	description:"Attacks fallen enemies on the ground and raises them back into the air. "
	}]);

	mage.skill[4] = new Skill("./img_p/mag/blink.webp","ACTIVE","<font color='#8e6aac'>Blink</font>","1",[2,4],[],[{
		level:10,sp:15,mp:20,power:undefined,casttime:0,cooltime:3,duration:undefined, 
	 	description:"Unique skill of magicians for bailing out of danger. caster teleports back to certain distance."
	}]);

	mage.skill[5] = new Skill("./img_p/mag/cannon.webp","ACTIVE","<font color='#8e6aac'>Fortress</font>","10",[2,6],[],[{
		level:4,sp:10,mp:15,power:"35.0%+80",casttime:0,cooltime:1,duration:undefined, 
	 	description:"Turns you into a cannon head and blasts 5 enemies."
	},{
		level:7,sp:10,mp:17,power:"40.0%+100",casttime:0,cooltime:1,duration:undefined, 
	 	description:"Turns you into a cannon head and blasts 6 enemies."
	},{
		level:10,sp:10,mp:19,power:"45.0%+120",casttime:0,cooltime:1,duration:undefined, 
	 	description:"Turns you into a cannon head and blasts 7 enemies."
	},{
		level:13,sp:10,mp:21,power:"50.0%+140",casttime:0,cooltime:1,duration:undefined, 
	 	description:"Turns you into a cannon head and blasts 8 enemies."
	},{
		level:16,sp:10,mp:23,power:"55.0%+160",casttime:0,cooltime:1,duration:undefined, 
	 	description:"Turns you into a cannon head and blasts 9 enemies."
	},{
		level:"CARD",sp:10,mp:25,power:"60.0%+180",casttime:0,cooltime:1,duration:undefined, 
	 	description:"Turns you into a cannon head and blasts 10 enemies."
	},{
		level:"CARD",sp:10,mp:27,power:"65.0%+200",casttime:0,cooltime:1,duration:undefined, 
	 	description:"Turns you into a cannon head and blasts 11 enemies."
	},{
		level:"CARD",sp:10,mp:29,power:"70.0%+220",casttime:0,cooltime:1,duration:undefined, 
	 	description:"Turns you into a cannon head and blasts 12 enemies."
	},{
		level:"CARD",sp:10,mp:31,power:"75.0%+240",casttime:0,cooltime:1,duration:undefined, 
	 	description:"Turns you into a cannon head and blasts 13 enemies."
	},{
		level:"CARD",sp:10,mp:33,power:"80.0%+260 ",casttime:0,cooltime:1,duration:undefined, 
	 	description:"Turns you into a cannon head and blasts 14 enemies."
	}]);

	mage.skill[6] = new Skill("./img_p/mag/cannonupgrade.webp","PASSIVE","<font color='#8e6aac'>Cannon Upgrade</font>","5",[1,8],[{id:5,lv:1}],[{
		level:5,sp:15,mp:undefined,power:"15.0%+40",casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Upgrades Fortress skill to deal 50% more damage and have a chance to cause Lv. 1 Serious Bleeding effect."
	},{
		level:8,sp:15,mp:undefined,power:"18.0%+60",casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Upgrades Fortress skill to deal 55% more damage and have a chance to cause Lv. 1 Serious Bleeding effect."
	},{
		level:11,sp:15,mp:undefined,power:"21.0%+80",casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Upgrades Fortress skill to deal 60% more damage and have a chance to cause Lv. 1 Serious Bleeding effect."
	},{
		level:14,sp:15,mp:undefined,power:"24.0%+100",casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Upgrades Fortress skill to deal 65% more damage and have a chance to cause Lv. 1 Serious Bleeding effect."
	},{
		level:17,sp:15,mp:undefined,power:"27.0%+120",casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Upgrades Fortress skill to deal 70% more damage and have a chance to cause Lv. 1 Serious Bleeding effect."
	}]);

	mage.skill[7] = new Skill("./img_p/mag/cannonaccera.webp","PASSIVE","<font color='#8e6aac'>Bullet Acceleration</font>","5",[3,10],[{id:5,lv:1}],[{
		level:6,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Increases speed of Fortress bullet by 20%"
	},{
		level:9,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Increases speed of Fortress bullet by 40%"
	},{
		level:12,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Increases speed of Fortress bullet by 60%"
	},{
		level:15,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Increases speed of Fortress bullet by 80%"
	},{
		level:18,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Increases speed of Fortress bullet by 100%"
	}]);

	mage.skill[8] = new Skill("./img_p/mag/mppotionmax.webp","PASSIVE","<font color='#8e6aac'>MP Potion Maximization</font>","5",[8,0],[],[{
		level:1,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Increase all MP recovery effect 10% by adding additional recovery. "
	},{
		level:5,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Increase all MP recovery effect 15% by adding additional recovery. "
	},{
		level:9,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Increase all MP recovery effect 20% by adding additional recovery. "
	},{
		level:13,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Increase all MP recovery effect 25% by adding additional recovery. "
	},{
		level:17,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Increase all MP recovery effect 30% by adding additional recovery. "
	}]);

	mage.skill[9] = new Skill("./img_p/mag/slowheal.webp","ACTIVE","<font color='#8e6aac'>Slow Heal</font>","10",[7,4],[{id:8,lv:1}],[{
		level:3,sp:15,mp:20,power:undefined,casttime:0.2,cooltime:5,duration:30, 
	 	description:"During skill duration, restore 1% of Max HP every 3 seconds. Can heal party members once skill level reaches 4." 
	},{
		level:6,sp:15,mp:30,power:undefined,casttime:0.2,cooltime:5,duration:30, 
	 	description:"During skill duration, restore 2% of Max HP every 3 seconds. Can heal party members once skill level reaches 4." 
	},{
		level:9,sp:15,mp:40,power:undefined,casttime:0.2,cooltime:5,duration:30, 
	 	description:"During skill duration, restore 3% of Max HP every 3 seconds. Can heal party members once skill level reaches 4." 
	},{
		level:12,sp:15,mp:50,power:undefined,casttime:0.2,cooltime:5,duration:30, 
	 	description:"During skill duration, restore 4% Max HP of oneself and party members every 3 seconds." 
	},{
		level:15,sp:15,mp:60,power:undefined,casttime:0.2,cooltime:5,duration:30, 
	 	description:"During skill duration, restore 5% Max HP of oneself and party members every 3 seconds." 
	},{
		level:"CARD",sp:15,mp:70,power:undefined,casttime:0.2,cooltime:5,duration:30, 
	 	description:"During skill duration, restore 5.5% Max HP of oneself and party members every 3 seconds." 
	},{
		level:"CARD",sp:15,mp:80,power:undefined,casttime:0.2,cooltime:5,duration:30, 
	 	description:"During skill duration, restore 6% Max HP of oneself and party members every 3 seconds." 
	},{
		level:"CARD",sp:15,mp:90,power:undefined,casttime:0.2,cooltime:5,duration:30, 
	 	description:"During skill duration, restore 6.5% Max HP of oneself and party members every 3 seconds." 
	},{
		level:"CARD",sp:15,mp:100,power:undefined,casttime:0.2,cooltime:5,duration:30, 
	 	description:"During skill duration, restore 7% Max HP of oneself and party members every 3 seconds." 
	},{
		level:"CARD",sp:15,mp:110,power:undefined,casttime:0.2,cooltime:5,duration:30, 
	 	description:"During skill duration, restore 7.5% Max HP of oneself and party members every 3 seconds." 
	}]);

	mage.skill[10] = new Skill("./img_p/mag/selfheal.webp","ACTIVE","<font color='#8e6aac'>Self Heal</font>","10",[7,8],[{id:9,lv:1}],[{
		level:5,sp:15,mp:"MAXMP 10%",power:"10.0%+60",casttime:0,cooltime:4,duration:1, 
	 	description:"By using 3% of mana, certain ratio of magin attack will convert to heal amount and applied to oneself."
	},{
		level:8,sp:15,mp:"MAXMP 9%",power:"14.0%+80",casttime:0,cooltime:4,duration:1, 
	 	description:"By using 3% of mana, certain ratio of magin attack will convert to heal amount and applied to oneself."
	},{
		level:11,sp:15,mp:"MAXMP 8%",power:"18.0%+100",casttime:0,cooltime:4,duration:1, 
	 	description:"By using 3% of mana, certain ratio of magin attack will convert to heal amount and applied to oneself."
	},{
		level:14,sp:15,mp:"MAXMP 7%",power:"22.0%+120",casttime:0,cooltime:4,duration:1, 
	 	description:"By using 3% of mana, certain ratio of magin attack will convert to heal amount and applied to oneself."
	},{
		level:17,sp:15,mp:"MAXMP 6%",power:"26.0%+140",casttime:0,cooltime:4,duration:1, 
	 	description:"By using 3% of mana, certain ratio of magin attack will convert to heal amount and applied to oneself."
	},{
		level:"CARD",sp:15,mp:"MAXMP 5%",power:"30.0%+160",casttime:0,cooltime:6,duration:1, 
	 	description:"By using 3% of mana, certain ratio of magin attack will convert to heal amount and applied to oneself."
	},{
		level:"CARD",sp:15,mp:"MAXMP 5%",power:"33.0%+180",casttime:0,cooltime:8,duration:1, 
	 	description:"By using 3% of mana, certain ratio of magin attack will convert to heal amount and applied to oneself."
	},{
		level:"CARD",sp:15,mp:"MAXMP 4%",power:"36.0%+200",casttime:0,cooltime:10,duration:1, 
	 	description:"By using 3% of mana, certain ratio of magin attack will convert to heal amount and applied to oneself."
	},{
		level:"CARD",sp:15,mp:"MAXMP 4%",power:"39.0%+220",casttime:0,cooltime:12,duration:1, 
	 	description:"By using 3% of mana, certain ratio of magin attack will convert to heal amount and applied to oneself."
	},{
		level:"CARD",sp:15,mp:"MAXMP 3%",power:"42.0%+240",casttime:0,cooltime:14,duration:1, 
	 	description:"By using 3% of mana, certain ratio of magin attack will convert to heal amount and applied to oneself."
	}]);

	mage.skill[11] = new Skill("./img_p/mag/magicenhance.webp","PASSIVE","<font color='#8e6aac'>Magic Enhancement</font>","10",[9,2],[{id:8,lv:1}],[{
		level:2,sp:10,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Permanently increases Magic Attack 20. "
	},{
		level:6,sp:10,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Permanently increases Magic Attack 40. "
	},{
		level:10,sp:10,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Permanently increases Magic Attack 60. "
	},{
		level:14,sp:10,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Permanently increases Magic Attack 80. "
	},{
		level:18,sp:10,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Permanently increases Magic Attack 100. "
	},{
		level:"CARD",sp:10,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Permanently increases Magic Attack 120. "
	},{
		level:"CARD",sp:10,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Permanently increases Magic Attack 140. "
	},{
		level:"CARD",sp:10,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Permanently increases Magic Attack 160. "
	},{
		level:"CARD",sp:10,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Permanently increases Magic Attack 180. "
	},{
		level:"CARD",sp:10,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Permanently increases Magic Attack 200. "
	}]);

	mage.skill[12] = new Skill("./img_p/mag/concentration.webp","ACTIVE","<font color='#8e6aac'>Focus</font>","10",[9,4],[{id:11,lv:1}],[{
		level:3,sp:15,mp:200,power:undefined,casttime:0,cooltime:30,duration:900, 
	 	description:"Turns your head into a cat's to increase INT by 4 and Magic Attack by 8%"
	},{
		level:7,sp:15,mp:230,power:undefined,casttime:0,cooltime:30,duration:900, 
	 	description:"Turns your head into a cat's to increase INT by 8 and Magic Attack by 12%"
	},{
		level:11,sp:15,mp:260,power:undefined,casttime:0,cooltime:30,duration:900, 
	 	description:"Turns your head into a cat's to increase INT by 12 and Magic Attack by 16%"
	},{
		level:15,sp:15,mp:290,power:undefined,casttime:0,cooltime:30,duration:900, 
	 	description:"Turns your head into a cat's to increase INT by 16 and Magic Attack by 20%"
	},{
		level:19,sp:15,mp:320,power:undefined,casttime:0,cooltime:30,duration:900, 
	 	description:"Turns your head into a cat's to increase INT by 20 and Magic Attack by 24%"
	},{
		level:"CARD",sp:15,mp:undefined,power:undefined,casttime:0,cooltime:30,duration:900, 
	 	description:"Turns your head into a cat's to increase INT and Magic Attack "
	},{
		level:"CARD",sp:15,mp:undefined,power:undefined,casttime:0,cooltime:30,duration:900, 
	 	description:"Turns your head into a cat's to increase INT and Magic Attack "
	},{
		level:"CARD",sp:15,mp:undefined,power:undefined,casttime:0,cooltime:30,duration:900, 
	 	description:"Turns your head into a cat's to increase INT and Magic Attack "
	},{
		level:"CARD",sp:15,mp:undefined,power:undefined,casttime:0,cooltime:30,duration:900, 
	 	description:"Turns your head into a cat's to increase INT and Magic Attack "
	},{
		level:"CARD",sp:15,mp:undefined,power:undefined,casttime:0,cooltime:30,duration:900, 
	 	description:"Turns your head into a cat's to increase INT and Magic Attack "
	}]);
	
	mage.skill[13] = new Skill("./img_p/mag/MagiciansWisdom.webp","ACTIVE","<font color='#8e6aac'>Magician's Wisdom</font>","1",[5,10],[],[{
		level:7,sp:5,mp:30,power:undefined,casttime:0,cooltime:3,duration:600,
		description:"Increases the whole party's MP Regeneration by 20% "
	}]);
	
//Mage - Monk - Priest - Invoker
	var acolyte = {
		name: "Monk",
		skill: new Array(),
		image: "./img_p/acolytebg.webp"
	};

	acolyte.skill[0] = new Skill("./img_p/mon/multilightning.webp","PASSIVE","<font color='#8e6aac'>Multi-Lightning</font>","1",[2,0],[{id:101,lv:3}],[{
		level:20,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"	Increases number of bolts fired by Air Combo to 3. "
	}]);

	acolyte.skill[1] = new Skill("./img_p/mon/castingaccera.webp","ACTIVE","<font color='#8e6aac'>Casting Acceleration</font>","5",[2,6],[],[{
		level:26,sp:20,mp:60,power:undefined,casttime:0.6,cooltime:200,duration:140, 
	 	description:"Cast a buff on everyone around the caster that decreases casting time by 0.1 second."
	},{
		level:29,sp:20,mp:75,power:undefined,casttime:0.6,cooltime:200,duration:150, 
	 	description:"Cast a buff on everyone around the caster that decreases casting time by 0.2 second."
	},{
		level:32,sp:20,mp:90,power:undefined,casttime:0.6,cooltime:200,duration:160, 
	 	description:"Cast a buff on everyone around the caster that decreases casting time by 0.3 second."
	},{
		level:35,sp:20,mp:105,power:undefined,casttime:0.6,cooltime:200,duration:170, 
	 	description:"Cast a buff on everyone around the caster that decreases casting time by 0.4 second."
	},{
		level:38,sp:20,mp:1200,power:undefined,casttime:0.6,cooltime:200,duration:180, 
	 	description:"Cast a buff on everyone around the caster that decreases casting time by 0.5 second."
	}]);

	acolyte.skill[2] = new Skill("./img_p/mon/difusioncannon.webp","ACTIVE","<font color='#8e6aac'>Diffusion Cannon</font>","10",[4,0],[],[{
		level:20,sp:20,mp:400,power:"70.0%+10",casttime:1,cooltime:10,duration:900, 
	 	description:"During normal attack, it fires 3 magic ball with 70% of magic attack + 10 magic attack. This skill can not be used with Double Shot."
	},{
		level:23,sp:20,mp:450,power:"72.0%+20",casttime:1,cooltime:10,duration:900, 
	 	description:"During normal attack, it fires 3 magic ball with 72% of magic attack + 20 magic attack. This skill can not be used with Double Shot."
	},{
		level:26,sp:20,mp:500,power:"74.0%+30",casttime:1,cooltime:10,duration:900, 
	 	description:"During normal attack, it fires 3 magic ball with 74% of magic attack + 30 magic attack. This skill can not be used with Double Shot."
	},{
		level:29,sp:20,mp:550,power:"76.0%+40",casttime:1,cooltime:10,duration:900, 
	 	description:"During normal attack, it fires 3 magic ball with 76% of magic attack + 40 magic attack. This skill can not be used with Double Shot."
	},{
		level:32,sp:20,mp:600,power:"78.0%+50",casttime:1,cooltime:10,duration:900, 
	 	description:"During normal attack, it fires 3 magic ball with 78% of magic attack + 50 magic attack. This skill can not be used with Double Shot."
	},{
		level:"CARD",sp:20,mp:650,power:"78.0%+60",casttime:1,cooltime:10,duration:900, 
	 	description:"During normal attack, it fires 3 magic ball with 78% of magic attack + 60 magic attack. This skill can not be used with Double Shot."
	},{
		level:"CARD",sp:20,mp:700,power:"78.0%+70",casttime:1,cooltime:10,duration:900, 
	 	description:"During normal attack, it fires 3 magic ball with 78% of magic attack + 70 magic attack. This skill can not be used with Double Shot."
	},{
		level:"CARD",sp:20,mp:750,power:"78.0%+80",casttime:1,cooltime:10,duration:900, 
	 	description:"During normal attack, it fires 3 magic ball with 78% of magic attack + 80 magic attack. This skill can not be used with Double Shot."
	},{
		level:"CARD",sp:20,mp:800,power:"78.0%+90",casttime:1,cooltime:10,duration:900, 
	 	description:"During normal attack, it fires 3 magic ball with 78% of magic attack + 90 magic attack. This skill can not be used with Double Shot."
	},{
		level:"CARD",sp:20,mp:850,power:"78.0%+100",casttime:1,cooltime:10,duration:900, 
	 	description:"During normal attack, it fires 3 magic ball with 78% of magic attack + 100 magic attack. This skill can not be used with Double Shot."
	}]);

	acolyte.skill[3] = new Skill("./img_p/mon/lightningstrike.webp","ACTIVE","<font color='#8e6aac'>Lightning Strike</font>","10",[4,4],[{id:2,lv:2}],[{
		level:26,sp:15,mp:20,power:"75.0%+100",casttime:0,cooltime:4,duration:undefined, 
	 	description:"Charge and knock down enemies in front of you with a high voltage attack. "
	},{
		level:29,sp:15,mp:24,power:"90.0%+200",casttime:0,cooltime:4,duration:undefined, 
	 	description:"Charge and knock down enemies in front of you with a high voltage attack. "
	},{
		level:32,sp:15,mp:28,power:"105.0%+300",casttime:0,cooltime:4,duration:undefined, 
	 	description:"Charge and knock down enemies in front of you with a high voltage attack. "
	},{
		level:35,sp:15,mp:32,power:"125.0%+400",casttime:0,cooltime:4,duration:undefined, 
	 	description:"Charge and knock down enemies in front of you with a high voltage attack. "
	},{
		level:38,sp:15,mp:36,power:"140.0%+600",casttime:0,cooltime:4,duration:undefined, 
	 	description:"Charge and knock down enemies in front of you with a high voltage attack. "
	},{
		level:"CARD",sp:15,mp:50,power:"155.0%+800",casttime:0,cooltime:4,duration:undefined, 
	 	description:"Charge and knock down enemies in front of you with a high voltage attack. "
	},{
		level:"CARD",sp:15,mp:55,power:"170.0%+1000",casttime:0,cooltime:4,duration:undefined, 
	 	description:"Charge and knock down enemies in front of you with a high voltage attack. "
	},{
		level:"CARD",sp:15,mp:60,power:"185.0%+1200",casttime:0,cooltime:4,duration:undefined, 
	 	description:"Charge and knock down enemies in front of you with a high voltage attack. "
	},{
		level:"CARD",sp:15,mp:65,power:"215.0%+1600 ",casttime:0,cooltime:4,duration:undefined, 
	 	description:"Charge and knock down enemies in front of you with a high voltage attack. "
	},{
		level:"CARD",sp:15,mp:25,power:"260.0%+2200",casttime:0,cooltime:4,duration:undefined, 
	 	description:"Charge and knock down enemies in front of you with a high voltage attack. "
	}]);

	acolyte.skill[4] = new Skill("./img_p/mon/rainoffire.webp","ACTIVE","<font color='#8e6aac'>Rain of Fire</font>","5",[4,6],[{id:3,lv:1}],[{
		level:24,sp:15,mp:50,power:"180.0%+150",casttime:0,cooltime:10,duration:undefined, 
	 	description:"Summon a rain of fire in front of you cause damage and a chance to burn. "
	},{
		level:26,sp:15,mp:55,power:"200.0%+200",casttime:0,cooltime:9,duration:undefined, 
	 	description:"Summon a rain of fire in front of you cause damage and a chance to burn. "
	},{
		level:28,sp:15,mp:60,power:"220.0%+250",casttime:0,cooltime:8,duration:undefined, 
	 	description:"Summon a rain of fire in front of you cause damage and a chance to burn. "
	},{
		level:30,sp:15,mp:65,power:"240.0%+300",casttime:0,cooltime:7,duration:undefined, 
	 	description:"Summon a rain of fire in front of you cause damage and a chance to burn. "
	},{
		level:32,sp:15,mp:70,power:"260.0%+350",casttime:0,cooltime:6,duration:undefined, 
	 	description:"Summon a rain of fire in front of you cause damage and a chance to burn. "
	}]);

	acolyte.skill[5] = new Skill("./img_p/mon/meteorrush.webp","PASSIVE","<font color='#8e6aac'>Meteor Rush</font>","1",[6,0],[{id:102,lv:3}],[{
		level:20,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Passive skill that increases projectile of Meteor Fall skill to 3 times more. Once skill is obtained, 3 meteors will strike upon enemy. Can be learned only when Meteor Fall skill level is Lv.3 or higher. "
	}]);

	acolyte.skill[6] = new Skill("./img_p/mon/ditection_aco.webp","ACTIVE","<font color='#8e6aac'>Detection</font>","5",[6,2],[],[{
		level:21,sp:5,mp:5,power:undefined,casttime:0,cooltime:5,duration:12, 
	 	description:"Decrease magic defense of up to 5 enemies in the range by 20%. Affected enemies cannot use Hide skill for 12 seconds."
	},{
		level:24,sp:5,mp:10,power:undefined,casttime:0,cooltime:5,duration:12, 
	 	description:"Decrease magic defense of up to 5 enemies in the range by 40%. Affected enemies cannot use Hide skill for 12 seconds."
	},{
		level:27,sp:5,mp:15,power:undefined,casttime:0,cooltime:5,duration:12, 
	 	description:"Decrease magic defense of up to 5 enemies in the range by 60%. Affected enemies cannot use Hide skill for 12 seconds."
	},{
		level:30,sp:5,mp:20,power:undefined,casttime:0,cooltime:5,duration:12, 
	 	description:"Decrease magic defense of up to 5 enemies in the range by 80%. Affected enemies cannot use Hide skill for 12 seconds."
	},{
		level:33,sp:5,mp:25,power:undefined,casttime:0,cooltime:5,duration:12, 
	 	description:"Decrease magic defense of up to 5 enemies in the range by 100%. Affected enemies cannot use Hide skill for 12 seconds."
	}]);

	acolyte.skill[7] = new Skill("./img_p/mon/barbarian.webp","ACTIVE","<font color='#8e6aac'>Barbarian</font>","10",[6,4],[{id:6,lv:1}],[{
		level:22,sp:15,mp:20,power:undefined,casttime:0,cooltime:6,duration:4, 
	 	description:"Instantly freeze up to 5 enemies for 4 seconds with 15% chances."
	},{
		level:25,sp:15,mp:30,power:undefined,casttime:0,cooltime:6,duration:4, 
	 	description:"Instantly freeze up to 5 enemies for 4 seconds with 20% chances."
	},{
		level:28,sp:15,mp:40,power:undefined,casttime:0,cooltime:6,duration:4, 
	 	description:"Instantly freeze up to 5 enemies for 4 seconds with 25% chances."
	},{
		level:31,sp:15,mp:50,power:undefined,casttime:0,cooltime:6,duration:4, 
	 	description:"Instantly freeze up to 5 enemies for 4 seconds with 30% chances."
	},{
		level:34,sp:15,mp:60,power:undefined,casttime:0,cooltime:6,duration:4, 
	 	description:"Instantly freeze up to 5 enemies for 4 seconds with 35% chances."
	},{
		level:"CARD",sp:15,mp:70,power:undefined,casttime:0,cooltime:6,duration:4, 
	 	description:"Instantly freeze up to 5 enemies for 4 seconds with 40% chances."
	},{
		level:"CARD",sp:15,mp:80,power:undefined,casttime:0,cooltime:6,duration:4, 
	 	description:"Instantly freeze up to 5 enemies for 4 seconds with 43% chances."
	},{
		level:"CARD",sp:15,mp:90,power:undefined,casttime:0,cooltime:6,duration:4, 
	 	description:"Instantly freeze up to 5 enemies for 4 seconds with 46% chances."
	},{
		level:"CARD",sp:15,mp:100,power:undefined,casttime:0,cooltime:6,duration:4, 
	 	description:"Instantly freeze up to 5 enemies for 4 seconds with 49% chances."
	},{
		level:"CARD",sp:15,mp:110,power:undefined,casttime:0,cooltime:6,duration:4, 
	 	description:"Instantly freeze up to 5 enemies for 4 seconds with 55% chances."
	}]);

	acolyte.skill[8] = new Skill("./img_p/mon/witchcurse.webp","ACTIVE","<font color='#8e6aac'>Witch's Curse</font>","5",[6,6],[{id:7,lv:2}],[{
		level:27,sp:20,mp:30,power:undefined,casttime:0,cooltime:7,duration:4, 
	 	description:"Turn up to 5 enemies into frogs for 4 seconds with 15% chances. Frogs can still move around but cannot use skill or attack. Frog effect breaks when attacked."
	},{
		level:30,sp:20,mp:33,power:undefined,casttime:0,cooltime:10,duration:7, 
	 	description:"Turn up to 5 enemies into frogs for 7 seconds with 25% chances. Frogs can still move around but cannot use skill or attack. Frog effect breaks when attacked."
	},{
		level:33,sp:20,mp:36,power:undefined,casttime:0,cooltime:13,duration:10, 
	 	description:"Turn up to 5 enemies into frogs for 10 seconds with 35% chances. Frogs can still move around but cannot use skill or attack. Frog effect breaks when attacked."
	},{
		level:36,sp:20,mp:39,power:undefined,casttime:0,cooltime:16,duration:13, 
	 	description:"Turn up to 5 enemies into frogs for 13 seconds with 45% chances. Frogs can still move around but cannot use skill or attack. Frog effect breaks when attacked."
	},{
		level:39,sp:20,mp:42,power:undefined,casttime:0,cooltime:20,duration:16, 
	 	description:"Turn up to 5 enemies into frogs for 16 seconds with 55% chances. Frogs can still move around but cannot use skill or attack. Frog effect breaks when attacked."
	}]);

	acolyte.skill[9] = new Skill("./img_p/mon/mpinc.webp","PASSIVE","<font color='#8e6aac'>HP Recovery Increase</font>","10",[8,0],[],[{
		level:20,sp:10,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Increases MP Recovery rate by 10 "
	},{
		level:24,sp:10,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Increases MP Recovery rate by 15 "
	},{
		level:28,sp:10,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Increases MP Recovery rate by 20 "
	},{
		level:32,sp:10,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Increases MP Recovery rate by 25 "
	},{
		level:36,sp:10,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Increases MP Recovery rate by 30 "
	},{
		level:"CARD",sp:10,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Increases MP Recovery rate by 35 "
	},{
		level:"CARD",sp:10,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Increases MP Recovery rate by 40 "
	},{
		level:"CARD",sp:10,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Increases MP Recovery rate by 45 "
	},{
		level:"CARD",sp:10,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Increases MP Recovery rate by 50 "
	},{
		level:"CARD",sp:10,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Increases MP Recovery rate by 55 "
	}]);

	acolyte.skill[10] = new Skill("./img_p/mon/wideheal.webp","ACTIVE","<font color='#8e6aac'>Wide Heal</font>","10",[8,2],[{id:9,lv:1}],[{
		level:23,sp:15,mp:50,power:undefined,casttime:1.5,cooltime:6,duration:undefined, 
	 	description:"Recover all party members in range with HP Heal amount of 50% of caster\'s Magical Attack Power. Recovery amount increased upon caster\'s Max. HP. The higher the skill level, the less the casting time."
	},{
		level:26,sp:15,mp:55,power:undefined,casttime:1.3,cooltime:12,duration:undefined, 
	 	description:"Recover all party members in range with HP Heal amount of 55% of caster\'s Magical Attack Power. Recovery amount increased upon caster\'s Max. HP. The higher the skill level, the less the casting time."
	},{
		level:29,sp:15,mp:60,power:undefined,casttime:1.1,cooltime:18,duration:undefined, 
	 	description:"Recover all party members in range with HP Heal amount of 60% of caster\'s Magical Attack Power. Recovery amount increased upon caster\'s Max. HP. The higher the skill level, the less the casting time."
	},{
		level:32,sp:15,mp:65,power:undefined,casttime:0.9,cooltime:24,duration:undefined, 
	 	description:"Recover all party members in range with HP Heal amount of 65% of caster\'s Magical Attack Power. Recovery amount increased upon caster\'s Max. HP. The higher the skill level, the less the casting time."
	},{
		level:35,sp:15,mp:70,power:undefined,casttime:0.7,cooltime:30,duration:undefined, 
	 	description:"Recover all party members in range with HP Heal amount of 70% of caster\'s Magical Attack Power. Recovery amount increased upon caster\'s Max. HP. The higher the skill level, the less the casting time."
	},{
		level:"CARD",sp:15,mp:75,power:undefined,casttime:0.7,cooltime:36,duration:undefined, 
	 	description:"Recover all party members in range with HP Heal amount of 75% of caster\'s Magical Attack Power. Recovery amount increased upon caster\'s Max. HP. The higher the skill level, the less the casting time."
	},{
		level:"CARD",sp:15,mp:80,power:undefined,casttime:0.7,cooltime:42,duration:undefined, 
	 	description:"Recover all party members in range with HP Heal amount of 80% of caster\'s Magical Attack Power. Recovery amount increased upon caster\'s Max. HP. The higher the skill level, the less the casting time."
	},{
		level:"CARD",sp:15,mp:85,power:undefined,casttime:0.7,cooltime:48,duration:undefined, 
	 	description:"Recover all party members in range with HP Heal amount of 85% of caster\'s Magical Attack Power. Recovery amount increased upon caster\'s Max. HP. The higher the skill level, the less the casting time."
	},{
		level:"CARD",sp:15,mp:90,power:undefined,casttime:0.7,cooltime:54,duration:undefined, 
	 	description:"Recover all party members in range with HP Heal amount of 90% of caster\'s Magical Attack Power. Recovery amount increased upon caster\'s Max. HP. The higher the skill level, the less the casting time."
	},{
		level:"CARD",sp:15,mp:95,power:undefined,casttime:0.7,cooltime:60,duration:undefined, 
	 	description:"Recover all party members in range with HP Heal amount of 95% of caster\'s Magical Attack Power. Recovery amount increased upon caster\'s Max. HP. The higher the skill level, the less the casting time."
	}]);

	acolyte.skill[11] = new Skill("./img_p/mon/sanctuary.webp","ACTIVE","<font color='#8e6aac'>Sanctuary</font>","10",[8,4],[{id:10,lv:1}],[{
		level:25,sp:25,mp:60,power:undefined,casttime:1,cooltime:60,duration:undefined, 
	 	description:"Set up a regeneration pool that heals all party members within the range, including its caster, 200 HP for every  2 seconds. The Pool stays up to 40 seconds but it will disappear after healing 10 times."
	},{
		level:28,sp:25,mp:80,power:undefined,casttime:1,cooltime:60,duration:undefined, 
	 	description:"Set up a regeneration pool that heals all party members within the range, including its caster, 400 HP for every  2 seconds. The Pool stays up to 40 seconds but it will disappear after healing 10 times."
	},{
		level:31,sp:25,mp:100,power:undefined,casttime:1,cooltime:60,duration:undefined, 
	 	description:"Set up a regeneration pool that heals all party members within the range, including its caster, 600 HP for every  2 seconds. The Pool stays up to 40 seconds but it will disappear after healing 10 times."
	},{
		level:34,sp:25,mp:120,power:undefined,casttime:1,cooltime:60,duration:undefined, 
	 	description:"Set up a regeneration pool that heals all party members within the range, including its caster, 800 HP for every  2 seconds. The Pool stays up to 40 seconds but it will disappear after healing 10 times."
	},{
		level:37,sp:25,mp:140,power:undefined,casttime:1,cooltime:60,duration:undefined, 
	 	description:"Set up a regeneration pool that heals all party members within the range, including its caster, 1000 HP for every  2 seconds. The Pool stays up to 40 seconds but it will disappear after healing 10 times."
	},{
		level:"CARD",sp:25,mp:160,power:undefined,casttime:1,cooltime:60,duration:undefined, 
	 	description:"Set up a regeneration pool that heals all party members within the range, including its caster, 1200 HP for every  2 seconds. The Pool stays up to 40 seconds but it will disappear after healing 10 times."
	},{
		level:"CARD",sp:25,mp:180,power:undefined,casttime:1,cooltime:60,duration:undefined, 
	 	description:"Set up a regeneration pool that heals all party members within the range, including its caster, 1400 HP for every  2 seconds. The Pool stays up to 40 seconds but it will disappear after healing 10 times."
	},{
		level:"CARD",sp:25,mp:200,power:undefined,casttime:1,cooltime:60,duration:undefined, 
	 	description:"Set up a regeneration pool that heals all party members within the range, including its caster, 1600 HP for every  2 seconds. The Pool stays up to 40 seconds but it will disappear after healing 10 times."
	},{
		level:"CARD",sp:25,mp:220,power:undefined,casttime:1,cooltime:60,duration:undefined, 
	 	description:"Set up a regeneration pool that heals all party members within the range, including its caster, 1800 HP for every  2 seconds. The Pool stays up to 40 seconds but it will disappear after healing 10 times."
	},{
		level:"CARD",sp:25,mp:240,power:undefined,casttime:1,cooltime:60,duration:undefined, 
	 	description:"Set up a regeneration pool that heals all party members within the range, including its caster, 2000 HP for every  2 seconds. The Pool stays up to 40 seconds but it will disappear after healing 10 times."
	}]);

	acolyte.skill[12] = new Skill("./img_p/mon/instantheal.webp","ACTIVE","<font color='#8e6aac'>Instant Heal</font>","10",[9,6],[{id:10,lv:1}],[{
		level:26,sp:20,mp:60,power:undefined,casttime:0,cooltime:6,duration:undefined, 
	 	description:"Instantly heal 30% max HP to self and party members within range. "
	},{
		level:29,sp:20,mp:70,power:undefined,casttime:0,cooltime:12,duration:undefined, 
	 	description:"Instantly heal 35% max HP to self and party members within range. "
	},{
		level:32,sp:20,mp:80,power:undefined,casttime:0,cooltime:18,duration:undefined, 
	 	description:"Instantly heal 40% max HP to self and party members within range. "
	},{
		level:35,sp:20,mp:90,power:undefined,casttime:0,cooltime:24,duration:undefined, 
	 	description:"Instantly heal 45% max HP to self and party members within range. "
	},{
		level:38,sp:20,mp:100,power:undefined,casttime:0,cooltime:30,duration:undefined, 
	 	description:"Instantly heal 50% max HP to self and party members within range. "
	},{
		level:"CARD",sp:20,mp:110,power:undefined,casttime:0,cooltime:36,duration:undefined, 
	 	description:"Instantly heal 55% max HP to self and party members within range. "
	},{
		level:"CARD",sp:20,mp:120,power:undefined,casttime:0,cooltime:42,duration:undefined, 
	 	description:"Instantly heal 60% max HP to self and party members within range. "
	},{
		level:"CARD",sp:20,mp:130,power:undefined,casttime:0,cooltime:48,duration:undefined, 
	 	description:"Instantly heal 65% max HP to self and party members within range. "
	},{
		level:"CARD",sp:20,mp:140,power:undefined,casttime:0,cooltime:54,duration:undefined, 
	 	description:"Instantly heal 70% max HP to self and party members within range. "
	},{
		level:"CARD",sp:20,mp:150,power:undefined,casttime:0,cooltime:60,duration:undefined, 
	 	description:"Instantly heal 75% max HP to self and party members within range. "
	}]);

	acolyte.skill[13] = new Skill("./img_p/mon/resurrection.webp","ACTIVE","<font color='#8e6aac'>Resurrection</font>","10",[8,8],[{id:11,lv:1},{id:12,lv:1}],[{
		level:28,sp:15,mp:"MAXMP 60%",power:undefined,casttime:1.5,cooltime:90,duration:undefined, 
	 	description:"Revive 1 character died nearby the caster with 10% of HP and MP. If more than 10% of MP were remaining, the character is revived with the remaining stat. The higher the skill level, lessen the casting time and mana. "
	},{
		level:31,sp:15,mp:"MAXMP 50%",power:undefined,casttime:1.2,cooltime:75,duration:undefined, 
	 	description:"Revive 2 characters died nearby the caster with 20% of HP and MP. If more than 20% of MP were remaining, the character is revived with the remaining stat. The higher the skill level, the less the casting is and less mana. "
	},{
		level:34,sp:15,mp:"MAXMP 40%",power:undefined,casttime:0.9,cooltime:60,duration:undefined, 
	 	description:"Revive 2 characters died nearby the caster with 20% of HP and MP. If more than 20% of MP were remaining, the character is revived with the remaining stat. The higher the skill level, the less the casting is and less mana. "
	},{
		level:37,sp:15,mp:"MAXMP 30%",power:undefined,casttime:0.6,cooltime:45,duration:undefined, 
	 	description:"Revive 2 characters died nearby the caster with 20% of HP and MP. If more than 20% of MP were remaining, the character is revived with the remaining stat. The higher the skill level, the less the casting is and less mana. "
	},{
		level:40,sp:15,mp:"MAXMP 20%",power:undefined,casttime:0.3,cooltime:40,duration:undefined, 
	 	description:"Revive 5 characters died nearby the caster with 50% of HP and MP. If more than 50% of MP were remaining, the character is revived with the remaining stat. "
	},{
		level:"CARD",sp:15,mp:"MAXMP 20%",power:undefined,casttime:0.3,cooltime:40,duration:undefined, 
	 	description:"Revive 5 characters died nearby the caster with 55% of HP and MP. If more than 55% of MP were remaining, the character is revived with the remaining stat. "
	},{
		level:"CARD",sp:15,mp:"MAXMP 20%",power:undefined,casttime:0.3,cooltime:40,duration:undefined, 
	 	description:"Revive 5 characters died nearby the caster with 60% of HP and MP. If more than 60% of MP were remaining, the character is revived with the remaining stat. "
	},{
		level:"CARD",sp:15,mp:"MAXMP 20%",power:undefined,casttime:0.3,cooltime:40,duration:undefined, 
	 	description:"Revive 5 characters died nearby the caster with 65% of HP and MP. If more than 65% of MP were remaining, the character is revived with the remaining stat. "
	},{
		level:"CARD",sp:15,mp:"MAXMP 20%",power:undefined,casttime:0.3,cooltime:40,duration:undefined, 
	 	description:"Revive 5 characters died nearby the caster with 70% of HP and MP. If more than 70% of MP were remaining, the character is revived with the remaining stat. "
	},{
		level:"CARD",sp:15,mp:"MAXMP 20%",power:undefined,casttime:0.3,cooltime:40,duration:undefined, 
	 	description:"Revive 5 characters died nearby the caster with 75% of HP and MP. If more than 75% of MP were remaining, the character is revived with the remaining stat. "
	}]);
	
//Mage - Monk - Priest - Invoker
	var priest = {
		name: "Priest",
		skill: new Array(),
		image: "./img_p/priestbg.webp"
	};
	
	priest.skill[0] = new Skill("./img_p/pri/staffmastery.webp","PASSIVE","<font color='#8e6aac'>Staff Mastery</font>","5",[1,0],[],[{
		level:40,sp:10,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Increases magic attack by 15% when using staff weapons. "
	},{
		level:43,sp:10,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Increases magic attack by 20% when using staff weapons. "
	},{
		level:46,sp:10,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Increases magic attack by 25% when using staff weapons. "
	},{
		level:49,sp:10,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Increases magic attack by 30% when using staff weapons. "
	},{
		level:52,sp:10,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Increases magic attack by 35% when using staff weapons. "
	}]);

	priest.skill[1] = new Skill("./img_p/pri/striking.webp","ACTIVE","<font color='#8e6aac'>Striking</font>","5",[1,2],[{id:0,lv:1}],[{
		level:41,sp:15,mp:50,power:undefined,casttime:2,cooltime:40,duration:120, 
	 	description:"Increase all party members' physical and magical ATK power by 100 for 120 seconds. "
	},{
		level:44,sp:15,mp:55,power:undefined,casttime:2,cooltime:40,duration:135, 
	 	description:"Increase all party members' physical and magical ATK power by 200 for 135 seconds. "
	},{
		level:47,sp:15,mp:60,power:undefined,casttime:2,cooltime:40,duration:150, 
	 	description:"Increase all party members' physical and magical ATK power by 300 for 150 seconds. "
	},{
		level:50,sp:15,mp:65,power:undefined,casttime:2,cooltime:40,duration:165, 
	 	description:"Increase all party members' physical and magical ATK power by 400 for 165 seconds. "
	},{
		level:53,sp:15,mp:70,power:undefined,casttime:2,cooltime:40,duration:180, 
	 	description:"Increase all party members' physical and magical ATK power by 500 for 180 seconds. "
	}]);

	priest.skill[2] = new Skill("./img_p/pri/blessing.webp","ACTIVE","<font color='#8e6aac'>Blessing</font>","5",[1,4],[{id:1,lv:1}],[{
		level:42,sp:15,mp:60,power:undefined,casttime:0.7,cooltime:30,duration:60, 
	 	description:"Increases party members' physical ATK/DEF and magical ATK/DEF by 5% for 60 seconds. "
	},{
		level:45,sp:15,mp:80,power:undefined,casttime:0.7,cooltime:30,duration:90, 
	 	description:"Increases party members' physical ATK/DEF and magical ATK/DEF by 7% for 90 seconds. "
	},{
		level:48,sp:15,mp:100,power:undefined,casttime:0.7,cooltime:30,duration:120, 
	 	description:"Increases party members' physical ATK/DEF and magical ATK/DEF by 9% for 120 seconds. "
	},{
		level:51,sp:15,mp:120,power:undefined,casttime:0.7,cooltime:30,duration:15, 
	 	description:"Increases party members' physical ATK/DEF and magical ATK/DEF by 11% for 150 seconds. "
	},{
		level:54,sp:15,mp:150,power:undefined,casttime:0.7,cooltime:30,duration:180, 
	 	description:"	Increases party members' physical ATK/DEF and magical ATK/DEF by 13% for 180 seconds. "
	}]);

	priest.skill[3] = new Skill("./img_p/pri/chainlightning.webp","ACTIVE","<font color='#8e6aac'>Chain Lightning</font>","5",[1,8],[{id:2,lv:1}],[{
		level:44,sp:20,mp:40,power:"50%",casttime:0,cooltime:0.1,duration:undefined, 
	 	description:"Cast chain lightning with 50% magic ATK power that damages the target and 2 nearby enemies. Casting is not canceled if caster doesn't move but consumes 20MP every second. "
	},{
		level:48,sp:20,mp:45,power:"55%",casttime:0,cooltime:0.1,duration:undefined, 
	 	description:"Cast chain lightning with 55% magic ATK power that damages the target and 4 nearby enemies. Casting is not canceled if caster doesn't move but consumes 25MP every second. "
	},{
		level:52,sp:20,mp:50,power:"60%",casttime:0,cooltime:0.1,duration:undefined, 
	 	description:"Cast chain lightning with 60% magic ATK power that damages the target and 6 nearby enemies. Casting is not canceled if caster doesn't move but consumes 30MP every second. "
	},{
		level:56,sp:20,mp:55,power:"65%",casttime:0,cooltime:0.1,duration:undefined, 
	 	description:"Cast chain lightning with 65% magic ATK power that damages the target and 8 nearby enemies. Casting is not canceled if caster doesn't move but consumes 35MP every second. "
	},{
		level:60,sp:20,mp:60,power:"70%",casttime:0,cooltime:0.1,duration:undefined, 
	 	description:"Cast chain lightning with 70% magic ATK power that damages the target and 10 nearby enemies. Casting is not canceled if caster doesn't move but consumes 40MP every second. "
	}]);

	priest.skill[4] = new Skill("./img_p/pri/spark.webp","ACTIVE","<font color='#8e6aac'>Spark Rock</font>","5",[3,2],[],[{
		level:40,sp:20,mp:100,power:"47.5%+300",casttime:1,cooltime:25,duration:undefined, 
	 	description:"Summons an electric stone pillar which attacks up to 6 enemies. "
	},{
		level:41,sp:20,mp:120,power:"52.5%+325",casttime:1,cooltime:23,duration:undefined, 
	 	description:"Summons an electric stone pillar which attacks up to 7 enemies."
	},{
		level:42,sp:20,mp:140,power:"57.5%+350",casttime:1,cooltime:21,duration:undefined, 
	 	description:"Summons an electric stone pillar which attacks up to 8 enemies. "
	},{
		level:43,sp:20,mp:160,power:"62.5%+375",casttime:1,cooltime:19,duration:undefined, 
	 	description:"Summons an electric stone pillar which attacks up to 9 enemies. "
	},{
		level:44,sp:20,mp:180,power:"67.5%+400",casttime:1,cooltime:18,duration:undefined, 
	 	description:"Summons an electric stone pillar which attacks up to 10 enemies. "
	}]);

	priest.skill[5] = new Skill("./img_p/pri/cure.webp","ACTIVE","<font color='#8e6aac'>Cure</font>","5",[6,0],[],[{
		level:40,sp:10,mp:50,power:undefined,casttime:0,cooltime:3,duration:undefined, 
	 	description:"Remove 1 debuff spell cast on you or any party member."
	},{
		level:43,sp:10,mp:60,power:undefined,casttime:0,cooltime:6,duration:undefined, 
	 	description:"Remove 2 debuff spells cast on you or any party member. "
	},{
		level:46,sp:10,mp:70,power:undefined,casttime:0,cooltime:9,duration:undefined, 
	 	description:"Remove 3 debuff spells cast on you or any party member. "
	},{
		level:49,sp:10,mp:80,power:undefined,casttime:0,cooltime:12,duration:undefined, 
	 	description:"Remove 4 debuff spells cast on you or any party member. "
	},{
		level:52,sp:10,mp:90,power:undefined,casttime:0,cooltime:15,duration:undefined, 
	 	description:"Remove 5 debuff spells cast on you or any party member. "
	}]);

	priest.skill[6] = new Skill("./img_p/pri/hprestore.webp","ACTIVE","<font color='#8e6aac'>HP Restore</font>","5",[5,2],[{id:5,lv:1}],[{
		level:41,sp:15,mp:60,power:undefined,casttime:1,cooltime:10,duration:25, 
	 	description:"Heal all party members including caster with HP heal amount of 55% of caster's MATK. The same amount of HP is restored once every 5 seconds for 25 seconds. "
	},{
		level:44,sp:15,mp:70,power:undefined,casttime:1,cooltime:10,duration:25, 
	 	description:"Heal all party members including caster with HP heal amount of 60% of caster's MATK. The same amount of HP is restored once every 5 seconds for 25 seconds. "
	},{
		level:47,sp:15,mp:80,power:undefined,casttime:1,cooltime:10,duration:25, 
	 	description:"Heal all party members including caster with HP heal amount of 65% of caster's MATK. The same amount of HP is restored once every 5 seconds for 25 seconds. "
	},{
		level:50,sp:15,mp:90,power:undefined,casttime:1,cooltime:10,duration:25, 
	 	description:"Heal all party members including caster with HP heal amount of 70% of caster's MATK. The same amount of HP is restored once every 5 seconds for 25 seconds. "
	},{
		level:53,sp:15,mp:100,power:undefined,casttime:1,cooltime:10,duration:25, 
	 	description:"Heal all party members including caster with HP heal amount of 75% of caster's MATK. The same amount of HP is restored once every 5 seconds for 25 seconds. "
	}]);

	priest.skill[7] = new Skill("./img_p/pri/barrier.webp","ACTIVE","<font color='#8e6aac'>Barrier</font>","5",[5,4],[{id:6,lv:1}],[{
		level:42,sp:20,mp:200,power:undefined,casttime:2,cooltime:180,duration:40, 
	 	description:"Cast a shield on oneself that absorbs up to 1000 damage coming from enemies for 40s. "
	},{
		level:45,sp:20,mp:250,power:undefined,casttime:2,cooltime:180,duration:50, 
	 	description:"Cast a shield on oneself that absorbs up to 2000 damage coming from enemies for 50s. "
	},{
		level:48,sp:20,mp:300,power:undefined,casttime:2,cooltime:180,duration:60, 
	 	description:"Cast a shield on oneself that absorbs up to 3000 damage coming from enemies for 60s. "
	},{
		level:51,sp:20,mp:350,power:undefined,casttime:2,cooltime:180,duration:70, 
	 	description:"Cast a shield on oneself that absorbs up to 4000 damage coming from enemies for 70s. "
	},{
		level:54,sp:20,mp:400,power:undefined,casttime:2,cooltime:180,duration:80, 
	 	description:"Cast a shield on oneself that absorbs up to 5000 damage coming from enemies for 80s. "
	}]);

	priest.skill[8] = new Skill("./img_p/pri/energyabsolute.webp","ACTIVE","<font color='#8e6aac'>Energy Absorption</font>","5",[3,6],[{id:7,lv:1}],[{
		level:43,sp:10,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Upgrades Barrier to absorb an additional 500 damage."
	},{
		level:46,sp:10,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Upgrades Barrier to absorb an additional 1000 damage."
	},{
		level:49,sp:10,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Upgrades Barrier to absorb an additional 1500 damage."
	},{
		level:52,sp:10,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Upgrades Barrier to absorb an additional 2000 damage."
	},{
		level:55,sp:10,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Upgrades Barrier to absorb an additional 2500 damage."
	}]);

	priest.skill[9] = new Skill("./img_p/pri/parfectseal.webp","ACTIVE","<font color='#8e6aac'>Perfect Seal</font>","5",[5,8],[{id:7,lv:1}],[{
		level:44,sp:20,mp:200,power:undefined,casttime:undefined,cooltime:90,duration:4, 
	 	description:"Blocks any damage from the enemy, but caster cannot attack the enemy either."
	},{
		level:47,sp:20,mp:250,power:undefined,casttime:undefined,cooltime:97,duration:8, 
	 	description:"Blocks any damage from the enemy, but caster cannot attack the enemy either. "
	},{
		level:50,sp:20,mp:300,power:undefined,casttime:undefined,cooltime:105,duration:12, 
	 	description:"Blocks any damage from the enemy, but caster cannot attack the enemy either. "
	},{
		level:53,sp:20,mp:350,power:undefined,casttime:undefined,cooltime:112,duration:16, 
	 	description:"Blocks any damage from the enemy, but caster cannot attack the enemy either. "
	},{
		level:56,sp:20,mp:400,power:undefined,casttime:undefined,cooltime:120,duration:20, 
	 	description:"Blocks any damage from the enemy, but caster cannot attack the enemy either. "
	}]);

	priest.skill[10] = new Skill("./img_p/pri/mptransfer.webp","ACTIVE","<font color='#8e6aac'>MP Transfer</font>","5",[7,2],[{id:5,lv:1}],[{
		level:41,sp:10,mp:"MAXMP 10%",power:undefined,casttime:0,cooltime:1,duration:undefined, 
	 	description:"Instantly transfer 10% of caster's Max MP to the nearest party member."
	},{
		level:44,sp:10,mp:"MAXMP 15%",power:undefined,casttime:0,cooltime:1,duration:undefined, 
	 	description:"Instantly transfer 15% of caster's Max MP to the nearest party member. "
	},{
		level:47,sp:10,mp:"MAXMP 20%",power:undefined,casttime:0,cooltime:1,duration:undefined, 
	 	description:"Instantly transfer 20% of caster's Max MP to the nearest party member. "
	},{
		level:50,sp:10,mp:"MAXMP 25%",power:undefined,casttime:0,cooltime:1,duration:undefined, 
	 	description:"Instantly transfer 25% of caster's Max MP to the nearest party member. "
	},{
		level:53,sp:10,mp:"MAXMP 30%",power:undefined,casttime:0,cooltime:1,duration:undefined, 
	 	description:"Instantly transfer 30% of caster's Max MP to the nearest party member."
	}]);
	
	priest.skill[11] = new Skill("./img_p/pri/archsanctuary.webp","ACTIVE","<font color='#8e6aac'>Arc Sanctuary</font>","5",[7,8],[{id:10,lv:2}],[{
		level:45,sp:30,mp:150,power:undefined,casttime:1,cooltime:300,duration:40, 
	 	description:"Sets up regen pool that heals all party members in range except the caster. The pool regens 50 MP every 2 seconds. The pool stays active for a max of 40 seconds but loses effect after healing same player 10 times. "
	},{
		level:48,sp:30,mp:180,power:undefined,casttime:1,cooltime:300,duration:40, 
	 	description:"Sets up regen pool that heals all party members in range except the caster. The pool regens 100 MP every 2 seconds. The pool stays active for a max of 40 seconds but loses effect after healing same player 10 times. "
	},{
		level:51,sp:30,mp:210,power:undefined,casttime:1,cooltime:300,duration:40, 
	 	description:"Sets up regen pool that heals all party members in range except the caster. The pool regens 150 MP every 2 seconds. The pool stays active for a max of 40 seconds but loses effect after healing same player 10 times. "
	},{
		level:54,sp:30,mp:240,power:undefined,casttime:1,cooltime:300,duration:40, 
	 	description:"Sets up regen pool that heals all party members in range except the caster. The pool regens 200 MP every 2 seconds. The pool stays active for a max of 40 seconds but loses effect after healing same player 10 times. "
	},{
		level:57,sp:30,mp:270,power:undefined,casttime:1,cooltime:300,duration:40, 
	 	description:"Sets up regen pool that heals all party members in range except the caster. The pool regens 250 MP every 2 seconds. The pool stays active for a max of 40 seconds but loses effect after healing same player 10 times."
	}]);
	
	priest.skill[12] = new Skill("./img_p/pri/quagmire.webp","ACTIVE","<font color='#8e6aac'>Quagmire</font>","5",[9,4],[{id:10,lv:1}],[{
		level:43,sp:20,mp:200,power:undefined,casttime:0,cooltime:10,duration:10, 
	 	description:"Creates muddy swamp in front of caster. Movement is impaired for 10 seconds when you get trapped. Monsters with grade higher than Elite are immune. "
	},{
		level:46,sp:20,mp:250,power:undefined,casttime:0,cooltime:15,duration:15, 
	 	description:"Creates muddy swamp in front of caster. Movement is impaired for 15 seconds when you get trapped. Monsters with grade higher than Elite are immune. "
	},{
		level:49,sp:20,mp:300,power:undefined,casttime:0,cooltime:20,duration:20, 
	 	description:"Creates muddy swamp in front of caster. Movement is impaired for 20 seconds when you get trapped. Monsters with grade higher than Elite are immune. "
	},{
		level:52,sp:20,mp:350,power:undefined,casttime:0,cooltime:25,duration:25, 
	 	description:"Creates muddy swamp in front of caster. Movement is impaired for 25 seconds when you get trapped. Monsters with grade higher than Elite are immune. "
	},{
		level:55,sp:20,mp:400,power:undefined,casttime:0,cooltime:30,duration:30, 
	 	description:"Creates muddy swamp in front of caster. Movement is impaired for 30 seconds when you get trapped. Monsters with grade higher than Elite are immune. "
	}]);
	
	priest.skill[13] = new Skill("./img_p/pri/mudymud.webp","PASSIVE","<font color='#8e6aac'>Muddy Mud</font>","5",[9,6],[{id:12,lv:1}],[{
		level:44,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Adds thicker mud to Quagmire to additionally decrease aim rate by 5% and movement speed by 20%. "
	},{
		level:47,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Adds thicker mud to Quagmire to additionally decrease aim rate by 10% and movement speed by 30%. "
	},{
		level:50,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Adds thicker mud to Quagmire to additionally decrease aim rate by 15% and movement speed by 40%. "
	},{
		level:53,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Adds thicker mud to Quagmire to additionally decrease aim rate by 20% and movement speed by 50%. "
	},{
		level:56,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Adds thicker mud to Quagmire to additionally decrease aim rate by 25% and movement speed by 60%."
	}]);
       
	priest.skill[14] = new Skill("./img_p/pri/double.webp","ACTIVE","<font color='#8e6aac'>Double Shot</font>","1",[9,0],[],[{
		level:40,sp:10,mp:650,power:"12.0%+40",casttime:1,cooltime:230,duration:240, 
	 	description:"Normal attack will fire 2 energy ball. Can not be used with Diffusion Cannon."
	}]);	

	priest.skill[15] = new Skill("./img_p/pri/emergencyexit.webp","ACTIVE","<font color='#8e6aac'>Emergency Exit</font>","3",[3,0],[],[{
		level:40,sp:10,mp:180,power:undefined,casttime:0,cooltime:60,duration:3, 
	 	description:"A skill to cast in emergency, make an invincible area for a 3 seconds and summon all party members to the caster's position."	
	},{
		level:42,sp:10,mp:200,power:undefined,casttime:0,cooltime:120,duration:5, 
	 	description:"A skill to cast in emergency, make an invincible area for a 5 seconds and summon all party members to the caster's position."
	},{
		level:44,sp:10,mp:220,power:undefined,casttime:0,cooltime:180,duration:undefined, 
	 	description:"A skill to cast in emergency, make an invincible area for a 7 seconds and summon all party members to the caster's position."
	}]);	

	
//Mage - Monk - Priest - Invoker
	var invoker = { 
		name:"Invoker",
		skill:new Array(),
		image:"./img_p/invokerbg.webp"
	};
	
	invoker.skill[0] = new Skill("./img_p/inv/awake.webp","PASSIVE","<font color='#8e6aac'>Awakening</font>","1",[5,0],[],[{
		level:60,sp:1,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Whenever you use MP during battle, your Awakening bar will fill up. This allows you to perform certain special skills which consume Awakening points. These skills also consume MP, however the MP they consume does not fill your awakening bar. "
	}]);
	
	invoker.skill[1] = new Skill("./img_p/inv/bloodf.webp","PASSIVE","<font color='#8e6aac'>Blood Fever</font>","5",[9,0],[{id:0,lv:1}],[{
		level:60,sp:25,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Organize the body's blood flow, permanently increasing regeneration rate of HP and MP. HP and MP regeneration speed increased by 10%, rate by 50. "
	},{
		level:61,sp:25,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Organize the body's blood flow, permanently increasing regeneration rate of HP and MP. HP and MP regeneration speed increased by 12%, rate by 80. "
	},{
		level:62,sp:25,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Organize the body's blood flow, permanently increasing regeneration rate of HP and MP. HP and MP regeneration speed increased by 14%, rate by 110. "
	},{
		level:63,sp:25,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Organize the body's blood flow, permanently increasing regeneration rate of HP and MP. HP and MP regeneration speed increased by 16%, rate by 140. "
	},{
		level:64,sp:25,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Organize the body's blood flow, permanently increasing regeneration rate of HP and MP. HP and MP regeneration speed increased by 18%, rate by 170. "
	}]);
	
	invoker.skill[2] = new Skill("./img_p/inv/lmagnet.webp","ACTIVE","<font color='#8e6aac'>Lightning Magnet</font>","5",[4,3],[{id:0,lv:1}],[{
		level:61,sp:20,mp:450,power:undefined,casttime:0,cooltime:13,duration:undefined, 
	 	description:"[Awakening Skill] Summons a lightning elemental that drags up to 5 enemies every 0.9 seconds for 6 seconds to its location. "
	},{
		level:63,sp:20,mp:475,power:undefined,casttime:0,cooltime:13,duration:undefined, 
	 	description:"[Awakening Skill] Summons a lightning elemental that drags up to 6 enemies every 0.8 seconds for 6 seconds to its location. "
	},{
		level:65,sp:20,mp:500,power:undefined,casttime:0,cooltime:13,duration:undefined, 
	 	description:"[Awakening Skill] Summons a lightning elemental that drags up to 7 enemies every 0.7 seconds for 6 seconds to its location. "
	},{
		level:67,sp:20,mp:525,power:undefined,casttime:0,cooltime:13,duration:undefined, 
	 	description:"[Awakening Skill] Summons a lightning elemental that drags up to 8 enemies every 0.6 seconds for 6 seconds to its location. "
	},{
		level:69,sp:20,mp:550,power:undefined,casttime:0,cooltime:13,duration:undefined, 
	 	description:"[Awakening Skill] Summons a lightning elemental that drags up to 9 enemies every 0.5 seconds for 6 seconds to its location. "
	}]);
	
	invoker.skill[3] = new Skill("./img_p/inv/lstorm.webp","ACTIVE","<font color='#8e6aac'>Lightning Storm</font>","1",[6,3],[{id:0,lv:1}],[{
		level:60,sp:60,mp:500,power:"225%",casttime:0,cooltime:300,duration:undefined, 
	 	description:"[Ultimate Skill] Summon Lightning Elemental, attack the monsters entire of the map. 10 electronic combo attacks up to 20 monsters with more powerful final electronic attack. During casting, character will be unbeatable. This skill is not allow to use during PvP."
	}]);
	
	invoker.skill[4] = new Skill("./img_p/inv/heaven.webp","ACTIVE","<font color='#8e6aac'>Wraith of Heaven</font>","5",[4,5],[{id:2,lv:1}],[{
		level:62,sp:25,mp:500,power:"600%",casttime:0,cooltime:18,duration:undefined, 
	 	description:"[Awakening Skill] Summons a lightning elemental that launches an attack forward, hitting up to 8 enemies one time and inflicting level 5 stun. Damage and range increases with skill level. "
	},{
		level:64,sp:25,mp:520,power:"800%",casttime:0,cooltime:16,duration:undefined, 
	 	description:"[Awakening Skill] Summons a lightning elemental that launches an attack forward, hitting up to 10 enemies one time and inflicting level 5 stun. Damage and range increases with skill level. "
	},{
		level:66,sp:25,mp:540,power:"1000%",casttime:0,cooltime:14,duration:undefined, 
	 	description:"[Awakening Skill] Summons a lightning elemental that launches an attack forward, hitting up to 12 enemies twice and inflicting level 5 stun. Damage and range increases with skill level. "
	},{
		level:68,sp:25,mp:560,power:"1200%",casttime:0,cooltime:12,duration:undefined, 
	 	description:"[Awakening Skill] Summons a lightning elemental that launches an attack forward, hitting up to 14 enemies 3 times and inflicting level 5 stun. Damage and range increases with skill level. "
	},{
		level:70,sp:25,mp:580,power:"1400%",casttime:0,cooltime:10,duration:undefined, 
	 	description:"[Awakening Skill] Summons a lightning elemental that launches an attack forward, hitting up to 16 enemies 4 times and inflicting level 5 stun. Damage and range increases with skill level. "
	}]);
	
	invoker.skill[5] = new Skill("./img_p/inv/healingwave.webp","ACTIVE","<font color='#8e6aac'>Healing Wave</font>","5",[1,0],[],[{
		level:60,sp:25,mp:150,power:undefined,casttime:0,cooltime:5,duration:undefined, 
	 	description:"Connect healing light to the party player who is in the range. With continuously consumes MP, refilling target’s HP 5% per one second. Receiving player should be in the range to get healing effect."
	},{
		level:62,sp:25,mp:140,power:undefined,casttime:0,cooltime:4,duration:undefined, 
	 	description:"Connect healing light to the party player who is in the range. With continuously consumes MP, refilling target’s HP 5% per one second. Receiving player should be in the range to get healing effect."
	},{
		level:64,sp:25,mp:130,power:undefined,casttime:0,cooltime:3,duration:undefined, 
	 	description:"Connect healing light to the party player who is in the range. With continuously consumes MP, refilling target’s HP 5% per one second. Receiving player should be in the range to get healing effect."
	},{
		level:66,sp:25,mp:120,power:undefined,casttime:0,cooltime:2,duration:undefined, 
	 	description:"Connect healing light to the party player who is in the range. With continuously consumes MP, refilling target’s HP 5% per one second. Receiving player should be in the range to get healing effect."
	},{
		level:68,sp:25,mp:110,power:undefined,casttime:0,cooltime:1,duration:undefined, 
	 	description:"Connect healing light to the party player who is in the range. With continuously consumes MP, refilling target’s HP 5% per one second. Receiving player should be in the range to get healing effect."
	}]);
	
	invoker.skill[6] = new Skill("./img_p/inv/ChargeTheAwakening.webp","toggle","<font color='#8e6aac'>Awakening Charge</font>","3",[1,7],[],[{
		level:60,sp:10,mp:35,power:undefined,casttime:0,cooltime:3,duration:undefined, 
		description:"Consumes 20% MP to recharge 14% of the Awakening bar every 3 seconds."
	 },{
	 	level:62,sp:10,mp:35,power:undefined,casttime:0,cooltime:3,duration:undefined, 
		description:"Consumes 20% MP to recharge 17% of the Awakening bar every 3 seconds."
	 },{
		level:68,sp:10,mp:35,power:undefined,casttime:0,cooltime:3,duration:undefined, 
		description:"Consumes 20% MP to recharge 20% of the Awakening bar every 3 seconds."
	}]);

//Mage - Wizard - Warlock - Sorcerer
	var wizard = {
		name: "Wizard",
		skill: new Array(),
		image: "./img_p/wizardbg.webp"
	};
	
	wizard.skill[0] = new Skill("./img_p/wiz/battlehits.webp","PASSIVE","<font color='#8e6aac'>Battle Hit</font>","3",[1,0],[],[{
		level:20,sp:5,mp:undefined,power:"8.0%",casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Attack enemies in front as many times as the skill level. The last third attack will make enemy fall down. The magic attack will be converted to physical attack and damage will be applied."
	},{
		level:21,sp:5,mp:undefined,power:"9.0%",casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Attack enemies in front as many times as the skill level. The last third attack will make enemy fall down. The magic attack will be converted to physical attack and damage will be applied."
	},{
		level:22,sp:5,mp:undefined,power:"10.0%",casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Attack enemies in front as many times as the skill level. The last third attack will make enemy fall down. The magic attack will be converted to physical attack and damage will be applied."
	}]);

	wizard.skill[1] = new Skill("./img_p/wiz/spiarmastery.webp","PASSIVE","<font color='#8e6aac'>Spear Mastery</font>","5",[1,2],[{id: 0,lv: 1}],[{
		level:21,sp:10,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Permanently increase Physical and Magical Attack Power by +20."
	},{
		level:25,sp:10,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Permanently increase Physical and Magical Attack Power by +40."
	},{
		level:29,sp:10,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Permanently increase Physical and Magical Attack Power by +60."
	},{
		level:33,sp:10,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Permanently increase Physical and Magical Attack Power by +80."
	},{
		level:37,sp:10,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Permanently increase Physical and Magical Attack Power by +100."
	},{
		level:"CARD",sp:10,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Permanently increase Physical and Magical Attack Power by +115."
	},{
		level:"CARD",sp:10,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Permanently increase Physical and Magical Attack Power by +130."
	},{
		level:"CARD",sp:10,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Permanently increase Physical and Magical Attack Power by +145."
	},{
		level:"CARD",sp:10,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Permanently increase Physical and Magical Attack Power by +160."
	},{
		level:"CARD",sp:10,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Permanently increase Physical and Magical Attack Power by +175."
	}]);

	wizard.skill[2] = new Skill("./img_p/wiz/energyball.webp","ACTIVE","<font color='#8e6aac'>Fire Emblem</font>","5",[3,4],[],[{
		level:20,sp:20,mp:70,power:"50.0%+70",casttime:0,cooltime:8,duration:undefined, 
	 	description:"Fire an energy ball to the front that attacks 5 standing or fallen enemies in it\'s way."
	},{
		level:23,sp:20,mp:90,power:"55.0%+100",casttime:0,cooltime:7,duration:undefined, 
	 	description:"Fire an energy ball to the front that attacks 5 standing or fallen enemies in it\'s way."
	},{
		level:26,sp:20,mp:110,power:"60.0%+130",casttime:0,cooltime:6,duration:undefined, 
	 	description:"Fire an energy ball to the front that attacks 5 standing or fallen enemies in it\'s way."
	},{
		level:29,sp:20,mp:130,power:"65.0%+160",casttime:0,cooltime:5,duration:undefined, 
	 	description:"Fire an energy ball to the front that attacks 5 standing or fallen enemies in it\'s way."
	},{
		level:32,sp:20,mp:150,power:"70.0%+190",casttime:0,cooltime:4,duration:undefined, 
	 	description:"Fire an energy ball to the front that attacks 5 standing or fallen enemies in it\'s way."
	}]);

	wizard.skill[3] = new Skill("./img_p/wiz/energycondens.webp","PASSIVE","<font color='#8e6aac'>Energy Condensation</font>","5",[2,6],[{id: 2,lv: 1}],[{
		level:21,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Shorten the damage interval of Energy Ball from 0.5 to 0.45 second."
	},{
		level:24,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Shorten the damage interval of Energy Ball from 0.5 to 0.4 second."
	},{
		level:27,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Shorten the damage interval of Energy Ball from 0.5 to 0.35 second."
	},{
		level:30,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Shorten the damage interval of Energy Ball from 0.5 to 0.3 second."
	},{
		level:33,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Shorten the damage interval of Energy Ball from 0.5 to 0.25 second."
	}]);

	wizard.skill[4] = new Skill("./img_p/wiz/magicmissile.webp","ACTIVE","<font color='#8e6aac'>Magic Missile</font>","5",[3,8],[{id: 2,lv: 1}],[{
		level:23,sp:20,mp:50,power:"20.0%+20",casttime:0.4,cooltime:12,duration:undefined, 
	 	description:"Fire 2 homing missiles that lock on the nearest enemies to damage. At skill level 3, fallen enemies can also be attacked."
	},{
		level:26,sp:20,mp:55,power:"23.0%+40",casttime:0.4,cooltime:11,duration:undefined, 
	 	description:"Fire 4 homing missiles that lock on the nearest enemies to damage. At skill level 3, fallen enemies can also be attacked."
	},{
		level:29,sp:20,mp:60,power:"26.0%+60",casttime:0.4,cooltime:10,duration:undefined, 
	 	description:"Fire 6 homing missiles that lock on the nearest enemies to damage. At skill level 3, fallen enemies can also be attacked."
	},{
		level:32,sp:20,mp:65,power:"29.0%+80",casttime:0.4,cooltime:9,duration:undefined, 
	 	description:"Fire 8 homing missiles that lock on the nearest enemies to damage. At skill level 3, fallen enemies can also be attacked."
	},{
		level:35,sp:20,mp:70,power:"32.0%+100",casttime:0.4,cooltime:8,duration:undefined, 
	 	description:"Fire 10 homing missiles that lock on the nearest enemies to damage. At skill level 3, fallen enemies can also be attacked."
	}]);

	wizard.skill[5] = new Skill("./img_p/wiz/tornade.webp","ACTIVE","<font color='#8e6aac'>Tornado</font>","10",[5,6],[{id: 2,lv: 1}],[{
		level:22,sp:15,mp:50,power:"65.0%+120",casttime:0,cooltime:5,duration:undefined, 
	 	description:"Damage 5 standing enemies and launch them high into the air. From skill level 4, fallen object can also be selected as target and attacker can launch them to the maximum height."
	},{
		level:25,sp:15,mp:55,power:"75.0%+170",casttime:0,cooltime:5,duration:undefined, 
	 	description:"Damage 6 standing enemies and launch them high into the air. From skill level 4, fallen object can also be selected as target and attacker can launch them to the maximum height."
	},{
		level:28,sp:15,mp:60,power:"85.0%+220",casttime:0,cooltime:5,duration:undefined, 
	 	description:"Damage 7 standing enemies and launch them high into the air. From skill level 4, fallen object can also be selected as target and attacker can launch them to the maximum height."
	},{
		level:31,sp:15,mp:65,power:"95.0%+270",casttime:0,cooltime:5,duration:undefined, 
	 	description:"Damage 8 standing enemies and launch them high into the air. From skill level 4, fallen object can also be selected as target and attacker can launch them to the maximum height."
	},{
		level:34,sp:15,mp:70,power:"105.0%+320",casttime:0,cooltime:5,duration:undefined, 
	 	description:"Damage 9 enemies in all status and launch them into the air up to maximum height. "
	},{
		level:"CARD",sp:15,mp:75,power:"110.0%+370",casttime:0,cooltime:5,duration:undefined, 
	 	description:"Damage 9 enemies in all status and launch them into the air up to maximum height. "
	},{
		level:"CARD",sp:15,mp:80,power:"115.0%+420",casttime:0,cooltime:5,duration:undefined, 
	 	description:"Damage 9 enemies in all status and launch them into the air up to maximum height. "
	},{
		level:"CARD",sp:15,mp:85,power:"120.0%+470 ",casttime:0,cooltime:5,duration:undefined, 
	 	description:"Damage 9 enemies in all status and launch them into the air up to maximum height. "
	},{
		level:"CARD",sp:15,mp:90,power:"125.0%+520",casttime:0,cooltime:5,duration:undefined, 
	 	description:"Damage 9 enemies in all status and launch them into the air up to maximum height. "
	},{
		level:"CARD",sp:15,mp:95,power:"130.0%+570",casttime:0,cooltime:5,duration:undefined, 
	 	description:"Damage 9 enemies in all status and launch them into the air up to maximum height. "
	}]);

	wizard.skill[6] = new Skill("./img_p/wiz/blizzerd.webp","ACTIVE","<font color='#8e6aac'>Blizzard</font>","5",[7,8],[{id: 5,lv: 2}],[{
		level:27,sp:20,mp:40,power:"20.0%+110",casttime:0,cooltime:7,duration:4, 
	 	description:"Cast ice storm to area in front to cause serious damage, and cast Move Freezing Effect which traps the target by 20%."
	},{
		level:30,sp:20,mp:45,power:"25.0%+135",casttime:0,cooltime:7,duration:4, 
	 	description:"Cast ice storm to area in front to cause serious damage, and cast Move Freezing Effect which traps the target by 25%."
	},{
		level:33,sp:20,mp:50,power:"30.0%+160",casttime:0,cooltime:7,duration:4, 
	 	description:"Cast ice storm to area in front to cause serious damage, and cast Move Freezing Effect which traps the target by 30%."
	},{
		level:36,sp:20,mp:55,power:"35.0%+185",casttime:0,cooltime:7,duration:4, 
	 	description:"Cast ice storm to area in front to cause serious damage, and cast Move Freezing Effect which traps the target by 35%."
	},{
		level:39,sp:20,mp:60,power:"40.0%+210",casttime:0,cooltime:7,duration:4, 
	 	description:"Cast ice storm to area in front to cause serious damage, and cast Move Freezing Effect which traps the target by 40%."
	}]);

	wizard.skill[7] = new Skill("./img_p/wiz/manashield.webp","ACTIVE","<font color='#8e6aac'>Mana Shield</font>","10",[9,0],[],[{
		level:20,sp:20,mp:200,power:undefined,casttime:1,cooltime:15,duration:900, 
	 	description:"Magical shield that absorbs 30% damage. 1 points of damage absorbed reduces 1 MP."
	},{
		level:23,sp:20,mp:250,power:undefined,casttime:1,cooltime:15,duration:900, 
	 	description:"Magical shield that absorbs 30% damage. 2 points of damage absorbed reduces 1 MP."
	},{
		level:26,sp:20,mp:300,power:undefined,casttime:1,cooltime:15,duration:900, 
	 	description:"Magical shield that absorbs 30% damage. 3 points of damage absorbed reduces 1 MP."
	},{
		level:29,sp:20,mp:350,power:undefined,casttime:1,cooltime:15,duration:900, 
	 	description:"Magical shield that absorbs 30% damage. 4 points of damage absorbed reduces 1 MP."
	},{
		level:32,sp:20,mp:400,power:undefined,casttime:1,cooltime:15,duration:900, 
	 	description:"Magical shield that absorbs 30% damage. 5 points of damage absorbed reduces 1 MP."
	},{
		level:"CARD",sp:20,mp:450,power:undefined,casttime:1,cooltime:15,duration:900, 
	 	description:"Magical shield that absorbs 32% damage. 5 points of damage absorbed reduces 1 MP."
	},{
		level:"CARD",sp:20,mp:500,power:undefined,casttime:1,cooltime:15,duration:900, 
	 	description:"Magical shield that absorbs 34% damage. 5 points of damage absorbed reduces 1 MP."
	},{
		level:"CARD",sp:20,mp:550,power:undefined,casttime:1,cooltime:15,duration:900, 
	 	description:"Magical shield that absorbs 36% damage. 5 points of damage absorbed reduces 1 MP."
	},{
		level:"CARD",sp:20,mp:600,power:undefined,casttime:1,cooltime:15,duration:900, 
	 	description:"Magical shield that absorbs 38% damage. 5 points of damage absorbed reduces 1 MP."
	},{
		level:"CARD",sp:20,mp:650,power:undefined,casttime:1,cooltime:15,duration:900, 
	 	description:"Magical shield that absorbs 40% damage. 5 points of damage absorbed reduces 1 MP."
	}]);

	wizard.skill[8] = new Skill("./img_p/wiz/cloudkill.webp","ACTIVE","<font color='#8e6aac'>Cloud Kill</font>","10",[9,5],[{id: 7,lv: 2}],[{
		level:24,sp:20,mp:60,power:"40%",casttime:0.3,cooltime:6,duration:undefined, 
	 	description:"reate a poison gas field in front. 10 targets inside the area are continously damaged by 40% of caster\'s Magical Attack Power, and victims are given Lv 1 Serious Poison Effect. Targets are randomly chosen at each tick."
	},{
		level:27,sp:20,mp:70,power:"50%",casttime:0.3,cooltime:6,duration:undefined, 
	 	description:"reate a poison gas field in front. 10 targets inside the area are continously damaged by 50% of caster\'s Magical Attack Power, and victims are given Lv 1 Serious Poison Effect. Targets are randomly chosen at each tick."
	},{
		level:30,sp:20,mp:80,power:"60%",casttime:0.3,cooltime:6,duration:undefined, 
	 	description:"reate a poison gas field in front. 10 targets inside the area are continously damaged by 60% of caster\'s Magical Attack Power, and victims are given Lv 1 Serious Poison Effect. Targets are randomly chosen at each tick."
	},{
		level:33,sp:20,mp:90,power:"70%",casttime:0.3,cooltime:6,duration:undefined, 
	 	description:"reate a poison gas field in front. 10 targets inside the area are continously damaged by 70% of caster\'s Magical Attack Power, and victims are given Lv 1 Serious Poison Effect. Targets are randomly chosen at each tick."
	},{
		level:36,sp:20,mp:100,power:"80%",casttime:0.3,cooltime:6,duration:undefined, 
	 	description:"reate a poison gas field in front. 10 targets inside the area are continously damaged by 80% of caster\'s Magical Attack Power, and victims are given Lv 1 Serious Poison Effect. Targets are randomly chosen at each tick."
	},{
		level:"CARD",sp:20,mp:110,power:"90%",casttime:0.3,cooltime:6,duration:undefined, 
	 	description:"reate a poison gas field in front. 10 targets inside the area are continously damaged by 90% of caster\'s Magical Attack Power, and victims are given Lv 1 Serious Poison Effect. Targets are randomly chosen at each tick."
	},{
		level:"CARD",sp:20,mp:120,power:"100%",casttime:0.3,cooltime:6,duration:undefined, 
	 	description:"reate a poison gas field in front. 10 targets inside the area are continously damaged by 100% of caster\'s Magical Attack Power, and victims are given Lv 1 Serious Poison Effect. Targets are randomly chosen at each tick."
	},{
		level:"CARD",sp:20,mp:130,power:"110%",casttime:0.3,cooltime:6,duration:undefined, 
	 	description:"reate a poison gas field in front. 10 targets inside the area are continously damaged by 110% of caster\'s Magical Attack Power, and victims are given Lv 1 Serious Poison Effect. Targets are randomly chosen at each tick."
	},{
		level:"CARD",sp:20,mp:140,power:"120%",casttime:0.3,cooltime:6,duration:undefined, 
	 	description:"reate a poison gas field in front. 10 targets inside the area are continously damaged by 120% of caster\'s Magical Attack Power, and victims are given Lv 1 Serious Poison Effect. Targets are randomly chosen at each tick."
	},{
		level:"CARD",sp:20,mp:150,power:"130%",casttime:0.3,cooltime:6,duration:undefined, 
	 	description:"reate a poison gas field in front. 10 targets inside the area are continously damaged by 130% of caster\'s Magical Attack Power, and victims are given Lv 1 Serious Poison Effect. Targets are randomly chosen at each tick."
	}]);

	wizard.skill[9] = new Skill("./img_p/wiz/deadlypoison.webp","PASSIVE","<font color='#8e6aac'>Deadly Poison</font>","5",[9,8],[{id: 8,lv: 1}],[{
		level:25,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:24, 
	 	description:"Upgrade poison of Cloud Kill to Serious Poison Lv 4 to damage 34 HP per second for 24 seconds."
	},{
		level:28,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:27, 
	 	description:"Upgrade poison of Cloud Kill to Serious Poison Lv 5 to damage 42 HP per second for 27 seconds."
	},{
		level:31,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:30, 
	 	description:"Upgrade poison of Cloud Kill to Serious Poison Lv 6 to damage 50 HP per second for 30 seconds."
	},{
		level:34,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:33, 
	 	description:"Upgrade poison of Cloud Kill to Serious Poison Lv 7 to damage 58 HP per second for 33 seconds."
	},{
		level:37,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:36, 
	 	description:"Upgrade poison of Cloud Kill to Serious Poison Lv 8 to damage 66 HP per second for 36 seconds."
	}]);

//Mage - Wizard - Warlock - Sorcerer
	var archmage = {
		name: "Warlock",
		skill: new Array(),
		image: "./img_p/archmagebg.webp"
	};
	
	archmage.skill[0] = new Skill("./img_p/wlk/energytransform.webp","PASSIVE","<font color='#8e6aac'>Energy Transformation</font>","5",[3,0],[],[{
		level:40,sp:20,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Decrease MP Cost for all skills by 2%."
	},{
		level:43,sp:20,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Decrease MP Cost for all skills by 4%."
	},{
		level:46,sp:20,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Decrease MP Cost for all skills by 6%."
	},{
		level:49,sp:20,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Decrease MP Cost for all skills by 8%."
	},{
		level:52,sp:20,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Decrease MP Cost for all skills by 10%."
	}]);

	archmage.skill[1] = new Skill("./img_p/wlk/resourceconverter.webp","ACTIVE","<font color='#8e6aac'>Resource Converter</font>","5",[2,2],[{id: 0,lv: 1}],[{
		level:41,sp:15,mp:undefined,power:undefined,casttime:0,cooltime:5,duration:undefined, 
	 	description:"Consume 300 HP to convert into MP with a 50% conversion rate. "
	},{
		level:44,sp:15,mp:undefined,power:undefined,casttime:0,cooltime:5,duration:undefined, 
	 	description:"Consume 300 HP to convert into MP with a 75% conversion rate. "
	},{
		level:47,sp:15,mp:undefined,power:undefined,casttime:0,cooltime:5,duration:undefined, 
	 	description:"Consume 300 HP to convert into MP with a 100% conversion rate. "
	},{
		level:50,sp:15,mp:undefined,power:undefined,casttime:0,cooltime:5,duration:undefined, 
	 	description:"Consume 300 HP to convert into MP with a 125% conversion rate. "
	},{
		level:53,sp:15,mp:undefined,power:undefined,casttime:0,cooltime:5,duration:undefined, 
	 	description:"Consume 300 HP to convert into MP with a 150% conversion rate."
	}]);

	archmage.skill[2] = new Skill("./img_p/wlk/mirrorimage.webp","ACTIVE","<font color='#8e6aac'>Mirror Image</font>","3",[2,4],[{id: 1,lv: 1}],[{
		level:42,sp:25,mp:100,power:undefined,casttime:0,cooltime:90,duration:undefined, 
	 	description:"Summon avatars that protects the caster from being damaged for 1 time. The avatars block any damage for three times regardless of the damage amount."
	},{
		level:46,sp:25,mp:150,power:undefined,casttime:0,cooltime:90,duration:undefined, 
	 	description:"Summon avatars that protects the caster from being damaged for 2 time. The avatars block any damage for three times regardless of the damage amount."
	},{
		level:50,sp:25,mp:500,power:undefined,casttime:0,cooltime:90,duration:undefined, 
	 	description:"Summon avatars that protects the caster from being damaged for 3 time. The avatars block any damage for three times regardless of the damage amount."
	}]);

	archmage.skill[3] = new Skill("./img_p/wlk/disease.webp","ACTIVE","<font color='#8e6aac'>Disease</font>","5",[4,4],[{id: 0,lv: 2}],[{
		level:44,sp:15,mp:60,power:undefined,casttime:0.5,cooltime:15,duration:10, 
	 	description:"Spread illness effect up to 5 targets with 60% success rate. If it succeed, it will decrease apprx. 7% of Max HP and Max MP for 10 seconds. Decreased Max HP and Max MP will not be restored as normal status even after illness effect duration ends. The skill effect does not work against Elite or Boss Monsters."
	},{
		level:47,sp:15,mp:70,power:undefined,casttime:0.5,cooltime:15,duration:15, 
	 	description:"Spread illness effect up to 5 targets with 70% success rate. If it succeed, it will decrease apprx. 9% of Max HP and Max MP for 10 seconds. Decreased Max HP and Max MP will not be restored as normal status even after illness effect duration ends. The skill effect does not work against Elite or Boss Monsters."
	},{
		level:50,sp:15,mp:80,power:undefined,casttime:0.5,cooltime:15,duration:20, 
	 	description:"Spread illness effect up to 5 targets with 80% success rate. If it succeed, it will decrease apprx. 11% of Max HP and Max MP for 10 seconds. Decreased Max HP and Max MP will not be restored as normal status even after illness effect duration ends. The skill effect does not work against Elite or Boss Monsters."
	},{
		level:53,sp:15,mp:90,power:undefined,casttime:0.5,cooltime:15,duration:25, 
	 	description:"Spread illness effect up to 5 targets with 90% success rate. If it succeed, it will decrease apprx. 13% of Max HP and Max MP for 10 seconds. Decreased Max HP and Max MP will not be restored as normal status even after illness effect duration ends. The skill effect does not work against Elite or Boss Monsters."
	},{
		level:56,sp:15,mp:100,power:undefined,casttime:0.5,cooltime:15,duration:30, 
	 	description:"Spread illness effect up to 5 targets with 100% success rate. If it succeed, it will decrease apprx. 15% of Max HP and Max MP for 10 seconds. Decreased Max HP and Max MP will not be restored as normal status even after illness effect duration ends. The skill effect does not work against Elite or Boss Monsters."
	}]);

	archmage.skill[4] = new Skill("./img_p/wlk/incfire.webp","ACTIVE","<font color='#8e6aac'>Fire Ink!</font>","5",[4,6],[{id: 3,lv: 1}],[{
		level:45,sp:10,mp:50,power:"100%+100",casttime:0,cooltime:10,duration:6, 
	 	description:"Summon an octopus, give damages upto 6 enemies and blind up targets with ink for 6 seconds and dropping Victim\'s Aim and Evade Rate by 30%."
	},{
		level:48,sp:10,mp:60,power:"110%+200",casttime:0,cooltime:10,duration:7, 
	 	description:"Summon an octopus, give damages upto 8 enemies and blind up targets with ink for 7 seconds and dropping Victim\'s Aim and Evade Rate by 33%."
	},{
		level:52,sp:10,mp:70,power:"120%+300",casttime:0,cooltime:10,duration:8, 
	 	description:"Summon an octopus, give damages upto 10 enemies and blind up targets with ink for 8 seconds and dropping Victim\'s Aim and Evade Rate by 36%."
	},{
		level:55,sp:10,mp:80,power:"130%+400",casttime:0,cooltime:10,duration:9, 
	 	description:"Summon an octopus, give damages upto 12 enemies and blind up targets with ink for 9 seconds and dropping Victim\'s Aim and Evade Rate by 39%."
	},{
		level:58,sp:10,mp:90,power:"140%+500",casttime:0,cooltime:10,duration:10, 
	 	description:"Summon an octopus, give damages upto 14 enemies and blind up targets with ink for 10 seconds and dropping Victim\'s Aim and Evade Rate by 42%."
	}]);

	archmage.skill[5] = new Skill("./img_p/wlk/snowblues.webp","ACTIVE","<font color='#8e6aac'>Snow Blues</font>","5",[4,8],[{id: 4,lv: 1}],[{
		level:46,sp:15,mp:80,power:"150.0%+150",casttime:1,cooltime:15,duration:undefined, 
	 	description:"Invite a penguin to the battle field. The penguin slides on the ice field in front attacking 5 enemy targets in its way. Victims are given Ice Freezing effect with 50% chance."
	},{
		level:49,sp:15,mp:90,power:"175.0%+175",casttime:1,cooltime:15,duration:undefined, 
	 	description:"Invite a penguin to the battle field. The penguin slides on the ice field in front attacking 5 enemy targets in its way. Victims are given Ice Freezing effect with 55% chance."
	},{
		level:52,sp:15,mp:100,power:"200.0%+200",casttime:1,cooltime:15,duration:undefined, 
	 	description:"Invite a penguin to the battle field. The penguin slides on the ice field in front attacking 5 enemy targets in its way. Victims are given Ice Freezing effect with 60% chance."
	},{
		level:55,sp:15,mp:110,power:"225.0%+225",casttime:1,cooltime:15,duration:undefined, 
	 	description:"Invite a penguin to the battle field. The penguin slides on the ice field in front attacking 5 enemy targets in its way. Victims are given Ice Freezing effect with 65% chance."
	},{
		level:58,sp:15,mp:120,power:"250.0%+250",casttime:1,cooltime:15,duration:undefined, 
	 	description:"Invite a penguin to the battle field. The penguin slides on the ice field in front attacking 5 enemy targets in its way. Victims are given Ice Freezing effect with 70% chance."
	}]);

	archmage.skill[6] = new Skill("./img_p/wlk/advancedspiarmastery.webp","PASSIVE","<font color='#8e6aac'>Staff Mastery</font>","10",[7,0],[],[{
		level:40,sp:10,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Increase physical and magic attack by 3% when holding a spear type weapon. "
	},{
		level:44,sp:10,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Increase physical and magic attack by 6% when holding a spear type weapon. "
	},{
		level:48,sp:10,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Increase physical and magic attack by 9% when holding a spear type weapon. "
	},{
		level:52,sp:10,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Increase physical and magic attack by 12% when holding a spear type weapon. "
	},{
		level:56,sp:10,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Increase physical and magic attack by 15% when holding a spear type weapon. "
	},{
		level:"CARD",sp:10,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Increase physical and magic attack by 15% when holding a spear type weapon. "
	},{
		level:"CARD",sp:10,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Increase physical and magic attack by 15% when holding a spear type weapon. "
	},{
		level:"CARD",sp:10,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Increase physical and magic attack by 15% when holding a spear type weapon. "
	},{
		level:"CARD",sp:10,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Increase physical and magic attack by 15% when holding a spear type weapon. "
	},{
		level:"CARD",sp:10,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Increase physical and magic attack by 15% when holding a spear type weapon. "	
	}]);
	
	archmage.skill[7] = new Skill("./img_p/wlk/spiralcannon.webp","ACTIVE","<font color='#8e6aac'>Spiral Cannon</font>","5",[6,2],[{id: 6,lv: 1}],[{
		level:41,sp:15,mp:70,power:"180.0%+380",casttime:0,cooltime:3,duration:undefined, 
	 	description:"Fire a beam that will damage up to 2 enemies and knock them down on the ground."
	},{
		level:44,sp:15,mp:80,power:"210.0%+410",casttime:0,cooltime:3,duration:undefined, 
	 	description:"Fire a beam that will damage up to 4 enemies and knock them down on the ground."
	},{
		level:47,sp:15,mp:90,power:"240.0%+440",casttime:0,cooltime:3,duration:undefined, 
	 	description:"Fire a beam that will damage up to 6 enemies and knock them down on the ground."
	},{
		level:50,sp:15,mp:100,power:"270.0%+470",casttime:0,cooltime:3,duration:undefined, 
	 	description:"Fire a beam that will damage up to 8 enemies and knock them down on the ground."
	},{
		level:53,sp:15,mp:110,power:"300.0%+500",casttime:0,cooltime:3,duration:undefined, 
	 	description:"Fire a beam that will damage up to 10 enemies and knock them down on the ground."
	}]);

	archmage.skill[8] = new Skill("./img_p/wlk/backdraft.webp","ACTIVE","<font color='#8e6aac'>Backdraft</font>","5",[8,4],[{id: 6,lv: 2}],[{
		level:45,sp:15,mp:80,power:"150.0%",casttime:0,cooltime:15,duration:undefined, 
	 	description:"Summon a flaming pepper that breathes out a fierce fire. 5 enemy targets are given burn effect with 50% chance. "
	},{
		level:48,sp:15,mp:90,power:"200.0%",casttime:0,cooltime:15,duration:undefined, 
	 	description:"Summon a flaming pepper that breathes out a fierce fire. 5 enemy targets are given burn effect with 55% chance. "
	},{
		level:51,sp:15,mp:100,power:"250.0%",casttime:0,cooltime:15,duration:undefined, 
	 	description:"Summon a flaming pepper that breathes out a fierce fire. 5 enemy targets are given burn effect with 60% chance. "
	},{
		level:54,sp:15,mp:110,power:"300.0%",casttime:0,cooltime:15,duration:undefined, 
	 	description:"Summon a flaming pepper that breathes out a fierce fire. 5 enemy targets are given burn effect with 65% chance. "
	},{
		level:57,sp:15,mp:120,power:"350.0%",casttime:0,cooltime:15,duration:undefined, 
	 	description:"Summon a flaming pepper that breathes out a fierce fire. 5 enemy targets are given burn effect with 70% chance. "
	}]);

	archmage.skill[9] = new Skill("./img_p/wlk/energybuster.webp","ACTIVE","<font color='#8e6aac'>Energy Buster</font>","5",[6,4],[{id: 7,lv: 1}],[{
		level:42,sp:15,mp:80,power:"220.0%+480",casttime:0,cooltime:5,duration:undefined, 
	 	description:"Project a high density energy beam that will decimate 6 enemy targets standing in its way."
	},{
		level:45,sp:15,mp:90,power:"235.0%+510",casttime:0,cooltime:5,duration:undefined, 
	 	description:"Project a high density energy beam that will decimate 8 enemy targets standing in its way."
	},{
		level:48,sp:15,mp:100,power:"250.0%+540",casttime:0,cooltime:5,duration:undefined, 
	 	description:"Project a high density energy beam that will decimate 10 enemy targets standing in its way."
	},{
		level:51,sp:15,mp:110,power:"265.0%+570",casttime:0,cooltime:5,duration:undefined, 
	 	description:"Project a high density energy beam that will decimate 12 enemy targets standing in its way."
	},{
		level:54,sp:15,mp:120,power:"280.0%+600",casttime:0,cooltime:5,duration:undefined, 
	 	description:"Project a high density energy beam that will decimate 14 enemy targets standing in its way."
	}]);

	archmage.skill[10] = new Skill("./img_p/wlk/thunderbreak.webp","ACTIVE","<font color='#8e6aac'>Thunder Break</font>","5",[7,6],[{id: 9,lv: 2}],[{
		level:46,sp:20,mp:80,power:undefined,casttime:0,cooltime:60,duration:60, 
	 	description:"Attack 2 enemies in range by dropping lightning bolts every 3 seconds with 30% caster's MATK. "
	},{
		level:49,sp:20,mp:90,power:undefined,casttime:0,cooltime:60,duration:80, 
	 	description:"Attack 4 enemies in range by dropping lightning bolts every 3 seconds with 35% caster's MATK. "
	},{
		level:52,sp:20,mp:100,power:undefined,casttime:0,cooltime:60,duration:100, 
	 	description:"Attack 6 enemies in range by dropping lightning bolts every 3 seconds with 40% caster's MATK. "
	},{
		level:55,sp:20,mp:110,power:undefined,casttime:0,cooltime:60,duration:120, 
	 	description:"Attack 8 enemies in range by dropping lightning bolts every 3 seconds with 45% caster's MATK. "
	},{
		level:58,sp:20,mp:120,power:undefined,casttime:0,cooltime:60,duration:140, 
	 	description:"Attack 10 enemies in range by dropping lightning bolts every 3 seconds with 50% caster's MATK. "
	}]);

	archmage.skill[11] = new Skill("./img_p/wlk/meteorstrike.webp","ACTIVE","<font color='#8e6aac'>Meteor Strike</font>","5",[5,10],[{id: 0,lv: 3},{id: 9,lv: 3}],[{
		level:49,sp:30,mp:300,power:"600%+700",casttime:1,cooltime:50,duration:undefined, 
	 	description:"Summon a gigantic meteor that devastates 12 standing or fallen enemy targets and launch them into the air. "
	},{
		level:52,sp:30,mp:350,power:"700%+900",casttime:1,cooltime:45,duration:undefined, 
	 	description:"Summon a gigantic meteor that devastates 14 standing or fallen enemy targets and launch them into the air. "
	},{
		level:55,sp:30,mp:400,power:"800%+1100",casttime:1,cooltime:40,duration:undefined, 
	 	description:"Summon a gigantic meteor that devastates 16 standing or fallen enemy targets and launch them into the air. "
	},{
		level:58,sp:30,mp:450,power:"900%+1200",casttime:1,cooltime:35,duration:undefined, 
	 	description:"Summon a gigantic meteor that devastates 18 standing or fallen enemy targets and launch them into the air. "
	},{
		level:61,sp:30,mp:500,power:"1000%+1500",casttime:1,cooltime:30,duration:undefined, 
	 	description:"Summon a gigantic meteor that devastates 20 standing or fallen enemy targets and launch them into the air. "
	}]);
	
	archmage.skill[12] = new Skill("./img_p/wlk/frozenshot.webp","PASSIVE","<font color='#8e6aac'>Frozen Shot</font>","3",[2,6],[{id:202,lv:5}],[{
		level:48,sp:20,mp:0,power:undefined,casttime:0,cooltime:undefined,duration:undefined, 
	 	description:"Apply energy ball with cold property making the energy ball into ice bolt."
	},{
		level:50,sp:20,mp:0,power:undefined,casttime:0,cooltime:undefined,duration:undefined, 
	 	description:"Apply energy ball with cold property making the energy ball into ice bolt."
	},{
		level:52,sp:20,mp:0,power:undefined,casttime:0,cooltime:undefined,duration:undefined, 
	 	description:"Apply energy ball with cold property making the energy ball into ice bolt."
	},{
	}]);

//Mage - Wizard - Warlock - Sorcerer
	var sorcerer = { 
		name:"Sorcerer",
		skill:new Array(),
		image:"./img_p/sorcererbg.webp"
	};	
	
	sorcerer.skill[0] = new Skill("./img_p/sor/awake.webp","PASSIVE","<font color='#8e6aac'>Awakening</font>","1",[5,0],[],[{
		level:60,sp:1,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Whenever you use MP during battle, your Awakening bar will fill up. This allows you to perform certain special skills which consume Awakening points."
	}]);
	
	sorcerer.skill[1] = new Skill("./img_p/sor/blood.webp","PASSIVE","<font color='#8e6aac'>Blood Oath</font>","5",[9,0],[{id:0,lv:1}],[{
		level:60,sp:25,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"By saying a blood oath, your spear type weapons' magic attack is increased by 10% permanently. "
	},{
		level:61,sp:25,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"By saying a blood oath, your spear type weapons' magic attack is increased by 12% permanently. "
	},{
		level:62,sp:25,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"By saying a blood oath, your spear type weapons' magic attack is increased by 14% permanently. "
	},{
		level:63,sp:25,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"By saying a blood oath, your spear type weapons' magic attack is increased by 16% permanently. "
	},{
		level:64,sp:25,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"By saying a blood oath, your spear type weapons' magic attack is increased by 18% permanently. "
	}]);
	
	sorcerer.skill[2] = new Skill("./img_p/sor/magma.webp","ACTIVE","<font color='#8e6aac'>Magma Piston</font>","5",[4,3],[{id:0,lv:1}],[{
		level:61,sp:25,mp:550,power:"200.0%",casttime:0.5,cooltime:30,duration:undefined, 
	 	description:"[Awakening Skill] Summons a dark elemental that summons a jet of magma from earth. Attack up to 12 enemies with continuous damage and launches them into the air. "
	},{
		level:63,sp:25,mp:575,power:"240.0%",casttime:0.5,cooltime:25,duration:undefined, 
	 	description:"[Awakening Skill] Summons a dark elemental that summons a jet of magma from earth. Attack up to 14 enemies with continuous damage and launches them into the air.  "
	},{
		level:65,sp:25,mp:600,power:"280.0%",casttime:0.5,cooltime:20,duration:undefined, 
	 	description:"[Awakening Skill] Summons a dark elemental that summons a jet of magma from earth. Attack up to 16 enemies with continuous damage and launches them into the air. "
	},{
		level:67,sp:25,mp:625,power:"320.0%",casttime:0.5,cooltime:17,duration:undefined, 
	 	description:"[Awakening Skill] Summons a dark elemental that summons a jet of magma from earth. Attack up to 18 enemies with continuous damage and launches them into the air. "
	},{
		level:69,sp:25,mp:650,power:"360.0%",casttime:0.5,cooltime:15,duration:undefined, 
	 	description:"[Awakening Skill] Summons a dark elemental that summons a jet of magma from earth. Attack up to 20 enemies with continuous damage and launches them into the air. "
	}]);
	
	sorcerer.skill[3] = new Skill("./img_p/sor/gravity.webp","ACTIVE","<font color='#8e6aac'>Reverse Gravity</font>","1",[6,3],[{id:0,lv:1}],[{
		level:60,sp:60,mp:undefined,power:"225%",casttime:0,cooltime:300,duration:undefined, 
	 	description:"[Ultimate Skill] A powerful dark magic attack which controls gravity. Reverses gravity to attack up to 20 monsters with more powerful final three attacks. "
	}]);
	
	sorcerer.skill[4] = new Skill("./img_p/sor/soul.webp","ACTIVE","<font color='#8e6aac'>Soul Drain</font>","5",[4,5],[{id:2,lv:1}],[{
		level:62,sp:25,mp:500,power:"160%",casttime:0,cooltime:30,duration:undefined, 
	 	description:"[Awakening Skill] Summons a dark elemental, blockading up to 8 enemies in range. Absorbs target's soul up to 3 times during a certain period. The target attacked last will suffer a level 5 blindness effect. "
	},{
		level:64,sp:25,mp:520,power:"190%",casttime:0,cooltime:25,duration:undefined, 
	 	description:"[Awakening Skill] Summons a dark elemental, blockading up to 9 enemies in range. Absorbs target's soul up to 4 times during a certain period. The target attacked last will suffer a level 5 blindness effect. "
	},{
		level:66,sp:25,mp:540,power:"220%",casttime:0,cooltime:20,duration:undefined, 
	 	description:"[Awakening Skill] Summons a dark elemental, blockading up to 10 enemies in range. Absorbs target's soul up to 5 times during a certain period. The target attacked last will suffer a level 5 blindness effect. "
	},{
		level:68,sp:25,mp:560,power:"250%",casttime:0,cooltime:17,duration:undefined, 
	 	description:"[Awakening Skill] Summons a dark elemental, blockading up to 11 enemies in range. Absorbs target's soul up to 6 times during a certain period. The target attacked last will suffer a level 5 blindness effect. "
	},{
		level:70,sp:25,mp:580,power:"280%",casttime:0,cooltime:15,duration:undefined, 
	 	description:"[Awakening Skill] Summons a dark elemental, blockading up to 12 enemies in range. Absorbs target's soul up to 7 times during a certain period. The target attacked last will suffer a level 5 blindness effect. "
	}]);	
	
	sorcerer.skill[5] = new Skill("./img_p/sor/time.webp","ACTIVE","<font color='#8e6aac'>Time Freeze</font>","5",[1,0],[],[{
		level:60,sp:25,mp:210,power:undefined,casttime:0,cooltime:18,duration:undefined, 
	 	description:"Caster can stop the time up to 6 enemies using magical power. Targets will stop no matter any status. Higher skill level would increase the effective regions. "
	},{
		level:62,sp:25,mp:240,power:undefined,casttime:0,cooltime:16,duration:undefined, 
	 	description:"Caster can stop the time up to 7 enemies using magical power. Targets will stop no matter any status. Higher skill level would increase the effective regions. "
	},{
		level:64,sp:25,mp:270,power:undefined,casttime:0,cooltime:14,duration:undefined, 
	 	description:"Caster can stop the time up to 8 enemies using magical power. Targets will stop no matter any status. Higher skill level would increase the effective regions. "
	},{
		level:66,sp:25,mp:300,power:undefined,casttime:0,cooltime:12,duration:undefined, 
	 	description:"Caster can stop the time up to 9 enemies using magical power. Targets will stop no matter any status. Higher skill level would increase the effective regions. "
	},{
		level:68,sp:25,mp:330,power:undefined,casttime:0,cooltime:10,duration:undefined, 
	 	description:"Caster can stop the time up to 10 enemies using magical power. Targets will stop no matter any status. Higher skill level would increase the effective regions. "
	}]);
	
	sorcerer.skill[6] = new Skill("./img_p/sor/ChargeTheAwakening.webp","toggle","<font color='#8e6aac'>Awakening Charge</font>","3",[1,7],[],[{
		level:60,sp:10,mp:35,power:undefined,casttime:0,cooltime:3,duration:undefined, 
		description:"Consumes 20% MP to recharge 14% of the Awakening bar every 3 seconds."
	 },{
	 	level:62,sp:10,mp:35,power:undefined,casttime:0,cooltime:3,duration:undefined, 
		description:"Consumes 20% MP to recharge 17% of the Awakening bar every 3 seconds."
	 },{
		level:68,sp:10,mp:35,power:undefined,casttime:0,cooltime:3,duration:undefined, 
		description:"Consumes 20% MP to recharge 20% of the Awakening bar every 3 seconds."
	}]);
	
//Archer
	var archer = {
		name: "Archer",
		skill: new Array(),
		image: "./img_p/archerbg.webp"
	};
	
	archer.skill[0] = new Skill("./img_p/arc/risingarrow.webp","ACTIVE","<font color='#8e6aac'>Rising Arrow</font>","5",[4,1],[],[{
		level:1,sp:15,mp:3,power:"25.0%+100",casttime:0,cooltime:3,duration:undefined, 
	 	description:"Attack and launch 2 enemies into the air. At skill level 4, height of victims being launched reaches its peak. "
	},{
		level:3,sp:15,mp:3,power:"27.0%+115",casttime:0,cooltime:3,duration:undefined, 
	 	description:"Attack and launch 3 enemies into the air. At skill level 4, height of victims being launched reaches its peak. "
	},{
		level:5,sp:15,mp:3,power:"29.0%+130",casttime:0,cooltime:3,duration:undefined, 
	 	description:"Attack and launch 4 enemies into the air. At skill level 4, height of victims being launched reaches its peak. "
	},{
		level:7,sp:15,mp:3,power:"31.0%+145",casttime:0,cooltime:3,duration:undefined, 
	 	description:"Attack and launch 5 enemies into the air. "
	},{
		level:9,sp:15,mp:3,power:"33.0%+160",casttime:0,cooltime:3,duration:undefined, 
	 	description:"Attack and launch 6 enemies into the air. "
	}]);

	archer.skill[1] = new Skill("./img_p/arc/antiairshot.webp","ACTIVE","<font color='#8e6aac'>Anti-Air Shot</font>","5",[3,3],[{id:0,lv:1}],[{
		level:2,sp:15,mp:1,power:"2.0%+5",casttime:0,cooltime:undefined,duration:undefined, 
	 	description:"Fires a flurry of arrows at 2 airborne enemies by consuming 1 MP per shot"
	},{
		level:5,sp:15,mp:1,power:"2.5%+8",casttime:0,cooltime:undefined,duration:undefined, 
	 	description:"Fires a flurry of arrows at 4 airborne enemies by consuming 1 MP per shot"
	},{
		level:8,sp:15,mp:1,power:"3.0%+11",casttime:0,cooltime:undefined,duration:undefined, 
	 	description:"Fires a flurry of arrows at 6 airborne enemies by consuming 1 MP per shot"
	},{
		level:11,sp:15,mp:1,power:"3.5%+14",casttime:0,cooltime:undefined,duration:undefined, 
	 	description:"Fires a flurry of arrows at 8 airborne enemies by consuming 1 MP per shot"
	},{
		level:14,sp:15,mp:1,power:"4.0%+17",casttime:0,cooltime:undefined,duration:undefined, 
	 	description:"Fires a flurry of arrows at 10 airborne enemies by consuming 1 MP per shot"
	}]);

	archer.skill[2] = new Skill("./img_p/arc/doublestrike.webp","ACTIVE","<font color='#8e6aac'>Double Strike</font>","10",[3,5],[{id:1,lv:1}],[{
		level:3,sp:20,mp:20,power:"20.0%+80",casttime:0,cooltime:2,duration:undefined, 
	 	description:"Fire a quick double shot with range slightly shorter than a normal attack. "
	},{
		level:6,sp:20,mp:22,power:"30.0%+100",casttime:0,cooltime:2,duration:undefined, 
	 	description:"Fire a quick double shot with range slightly shorter than a normal attack. "
	},{
		level:9,sp:20,mp:24,power:"40.0%+120",casttime:0,cooltime:2,duration:undefined, 
	 	description:"Fire a quick double shot with range slightly shorter than a normal attack. "
	},{
		level:12,sp:20,mp:26,power:"50.0%+140",casttime:0,cooltime:2,duration:undefined, 
	 	description:"Fire a quick double shot with range slightly shorter than a normal attack. "
	},{
		level:15,sp:20,mp:28,power:"60.0%+160",casttime:0,cooltime:2,duration:undefined, 
	 	description:"Fire a quick double shot with range slightly shorter than a normal attack. "
	},{
		level:"CARD",sp:20,mp:30,power:"70.0%+180 ",casttime:0,cooltime:2,duration:undefined, 
	 	description:"Fire a quick double shot with range slightly shorter than a normal attack. "
	},{
		level:"CARD",sp:20,mp:32,power:"80.0%+200 ",casttime:0,cooltime:2,duration:undefined, 
	 	description:"Fire a quick double shot with range slightly shorter than a normal attack. "
	},{
		level:"CARD",sp:20,mp:34,power:"90.0%+220 ",casttime:0,cooltime:2,duration:undefined, 
	 	description:"Fire a quick double shot with range slightly shorter than a normal attack. "
	},{
		level:"CARD",sp:20,mp:36,power:"100.0%+240",casttime:0,cooltime:2,duration:undefined, 
	 	description:"Fire a quick double shot with range slightly shorter than a normal attack. "
	},{
		level:"CARD",sp:20,mp:38,power:"110.0%+260 	",casttime:0,cooltime:2,duration:undefined, 
	 	description:"Fire a quick double shot with range slightly shorter than a normal attack. "
	}]);

	archer.skill[3] = new Skill("./img_p/arc/shotdown.webp","ACTIVE","<font color='#8e6aac'>Shootdown</font>","3",[5,3],[{id:0,lv:1}],[{
		level:2,sp:15,mp:5,power:"10.0%+25",casttime:0,cooltime:4,duration:undefined, 
	 	description:"Fire 3 arrows downward from the air attacking up to 3 standing or fallen targets. Victims are launched into the air slightly. Can be activated via command key; (in mid-air) Downward + attack button. "
	},{
	 	level:5,sp:15,mp:5,power:"11.0%+35",casttime:0,cooltime:4,duration:undefined, 
	 	description:"Double shot will be shot diagonally with 4 arrows. Maximum 8 standing or fallen targets will be attacked. and slightly launched. This skill is able to use v + attack button while jump. "
	},{
		level:9,sp:15,mp:5,power:"12.0%+55",casttime:0,cooltime:4,duration:undefined, 
	 	description:"Triple shot will be shot diagonally with 5 arrows. Maximum 15 standing or fallen targets will be attacked and slightly launched. This skill is able to use v + attack button while jump. "
	}]);

	archer.skill[4] = new Skill("./img_p/arc/multishot.webp","ACTIVE","<font color='#8e6aac'>Multi Shot</font>","10",[5,5],[{id:3,lv:1}],[{
		level:3,sp:20,mp:30,power:"15.0%+40",casttime:0,cooltime:4,duration:undefined, 
	 	description:"Fire several arrows in a wide ranging arc. Any target at close range will receive direct hits causing severe damage. "
	},{
		level:6,sp:20,mp:35,power:"22.0%+60",casttime:0,cooltime:4,duration:undefined, 
	 	description:"Fire several arrows in a wide ranging arc. Any target at close range will receive direct hits causing severe damage. "
	},{
		level:9,sp:20,mp:40,power:"29.0%+80",casttime:0,cooltime:4,duration:undefined, 
	 	description:"Fire several arrows in a wide ranging arc. Any target at close range will receive direct hits causing severe damage. "
	},{
		level:12,sp:20,mp:45,power:"36.0%+100",casttime:0,cooltime:4,duration:undefined, 
	 	description:"Fire several arrows in a wide ranging arc. Any target at close range will receive direct hits causing severe damage. "
	},{
		level:15,sp:20,mp:50,power:"43.0%+120",casttime:0,cooltime:4,duration:undefined, 
	 	description:"Fire several arrows in a wide ranging arc. Any target at close range will receive direct hits causing severe damage. "
	},{
		level:"CARD",sp:20,mp:55,power:"50.0%+140",casttime:0,cooltime:4,duration:undefined, 
	 	description:"Fire several arrows in a wide ranging arc. Any target at close range will receive direct hits causing severe damage. "
	},{
		level:"CARD",sp:20,mp:60,power:"57.0%+160",casttime:0,cooltime:4,duration:undefined, 
	 	description:"Fire several arrows in a wide ranging arc. Any target at close range will receive direct hits causing severe damage. "
	},{
		level:"CARD",sp:20,mp:65,power:"64.0%+180",casttime:0,cooltime:4,duration:undefined, 
	 	description:"Fire several arrows in a wide ranging arc. Any target at close range will receive direct hits causing severe damage. "
	},{
		level:"CARD",sp:20,mp:70,power:"71.0%+200 ",casttime:0,cooltime:4,duration:undefined, 
	 	description:"Fire several arrows in a wide ranging arc. Any target at close range will receive direct hits causing severe damage. "
	},{
		level:"CARD",sp:20,mp:75,power:"78.0%+220",casttime:0,cooltime:4,duration:undefined, 
	 	description:"Fire several arrows in a wide ranging arc. Any target at close range will receive direct hits causing severe damage. "
	}]);

	archer.skill[5] = new Skill("./img_p/arc/relaunch_archer.webp","ACTIVE","<font color='#8e6aac'>Re-Launch</font>","5",[7,5],[{id:3,lv:1}],[{
		level:4,sp:10,mp:5,power:"45.0%+80",casttime:0,cooltime:3,duration:undefined, 
	 	description:"Attack up to 2 fallen enemies and launch them into the air. At skill level 4, height of victims being launched reaches its peak."
	},{
		level:7,sp:10,mp:7,power:"47.0%+95",casttime:0,cooltime:3,duration:undefined, 
	 	description:"Attack up to 3 fallen enemies and launch them into the air. At skill level 4, height of victims being launched reaches its peak."
	},{
		level:10,sp:10,mp:9,power:"49.0%+110",casttime:0,cooltime:3,duration:undefined, 
	 	description:"Attack up to 4 fallen enemies and launch them into the air. At skill level 4, height of victims being launched reaches its peak."
	},{
		level:13,sp:10,mp:11,power:"51.0%+125",casttime:0,cooltime:3,duration:undefined, 
	 	description:"Attack up to 5 fallen enemies and launch them into the air to the peak height. "
	},{
		level:16,sp:10,mp:13,power:"53.0%+140",casttime:0,cooltime:3,duration:undefined, 
	 	description:"Attack up to 6 fallen enemies and launch them into the air to the peak height. "
	}]);

	archer.skill[6] = new Skill("./img_p/arc/backstep_archer.webp","ACTIVE","<font color='#8e6aac'>Moonwalk</font>","1",[1,1],[],[{
		level:1,sp:15,mp:1,power:undefined,casttime:0,cooltime:0.1,duration:undefined, 
	 	description:"Step back certain distance but still facing the front. Pressing Z key and X key consecutively casts the same action."
	}]);

	archer.skill[7] = new Skill("./img_p/arc/backstepshot.webp","ACTIVE","<font color='#8e6aac'>Moonwalk Shot</font>","1",[1,3],[{id:6,lv:1}],[{
		level:1,sp:20,mp:10,power:"30.0%+100",casttime:0,cooltime:0.1,duration:undefined, 
	 	description:"Fire arrows while casting Moonwalk to attacks up to 5 enemies stuck together. Only works while casting Moonwalk, and does not work elseway."
	}]);

	archer.skill[8] = new Skill("./img_p/arc/bowmastery.webp","PASSIVE","<font color='#8e6aac'>Bow Mastery</font>","10",[9,1],[],[{
		level:2,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Increase attack power by 10 when using bow type weapons. "
	},{
		level:6,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Increase attack power by 30 when using bow type weapons. "
	},{
		level:10,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Increase attack power by 50 when using bow type weapons. "
	},{
		level:14,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Increase attack power by 70 when using bow type weapons. "
	},{
		level:18,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Increase attack power by 90 when using bow type weapons. "
	},{
		level:"CARD",sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Increase attack power by 110 when using bow type weapons. "
	},{
		level:"CARD",sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Increase attack power by 130 when using bow type weapons. "
	},{
		level:"CARD",sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Increase attack power by 150 when using bow type weapons. "
	},{
		level:"CARD",sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Increase attack power by 170 when using bow type weapons. "
	},{
		level:"CARD",sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Increase attack power by 190 when using bow type weapons. "
	}]);

	archer.skill[9] = new Skill("./img_p/arc/rapidstep.webp","PASSIVE","<font color='#8e6aac'>Rapid Step</font>","5",[9,7],[],[{
		level:5,sp:20,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Increases movement speed by 10"
	},{
		level:8,sp:20,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Increases movement speed by 20"
	},{
		level:11,sp:20,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Increases movement speed by 30"
	},{
		level:14,sp:20,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Increases movement speed by 40"
	},{
		level:17,sp:20,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Increases movement speed by 50"
	}]);
	
	archer.skill[10] = new Skill("./img_p/arc/ArchersPrompt.webp","ACTIVE","<font color='#8e6aac'>Archer's Prompt</font>","1",[5,9],[],[{
		level:7,sp:5,mp:30,power:undefined,casttime:0,cooltime:3,duration:600,
		description:"This is archer’s distinctive skill. 10% of movement speed and critical rate increasing buff will be given not only caster also party members and other close users. "
	}]);
	
//Archer - Hunter - Pathfinder - Sentinel

	var hunter = {
		name: "Hunter",
		skill: new Array(),
		image: "./img_p/hunterbg.webp"
	};
	
    hunter.skill[0] = new Skill("./img_p/hnt/book.webp","ACTIVE","<font color='#8e6aac'>Bleed</font>","5",[4,0],[],[{
		level:20,sp:15,mp:22,power:"70.0%+225",casttime:0,cooltime:3,duration:11, 
	 	description:"Throw a book that will damage 3 enemies causing them to lose 120HP per second for 11 seconds."
	},{
		level:22,sp:15,mp:24,power:"85.0%+375",casttime:0,cooltime:3,duration:12, 
	 	description:"Throw a book that will damage 4 enemies causing them to lose 140HP per second for 12 seconds. "
	},{
		level:24,sp:15,mp:26,power:"100.0%+425",casttime:0,cooltime:3,duration:13, 
	 	description:"Throw a book that will damage 5 enemies causing them to lose 160HP per second for 13 seconds. "
	},{
		level:26,sp:15,mp:28,power:"115.0%+475",casttime:0,cooltime:3,duration:14, 
	 	description:"Throw a book that will damage 6 enemies causing them to lose 180HP per second for 14 seconds. "
	},{
		level:30,sp:15,mp:30,power:"130.0%+525",casttime:0,cooltime:3,duration:15, 
	 	description:"Throw a book that will damage 7 enemies causing them to lose 200HP per second for 15 seconds. "
	}]);

    hunter.skill[1] = new Skill("./img_p/hnt/acidarrow.webp","ACTIVE","<font color='#8e6aac'>Acid Arrow</font>","10",[4,2],[{id:0,lv:1}],[{
		level:22,sp:15,mp:20,power:"80.0%+120",casttime:0,cooltime:3,duration:undefined, 
	 	description:"Fire an acid arrow to attack up to 5 enemies at once. Acid arrows damage 10HP per second and decrease physical DEF by 10%. "
	},{
		level:25,sp:15,mp:30,power:"95.0%+140",casttime:0,cooltime:3,duration:undefined, 
	 	description:"Fire an acid arrow to attack up to 5 enemies at once. Acid arrows damage 15HP per second and decrease physical DEF by 15%. "
	},{
		level:28,sp:15,mp:40,power:"110.0%+160",casttime:0,cooltime:3,duration:undefined, 
	 	description:"Fire an acid arrow to attack up to 5 enemies at once. Acid arrows damage 20HP per second and decrease physical DEF by 20%. "
	},{
		level:31,sp:15,mp:50,power:"125.0%+180",casttime:0,cooltime:3,duration:undefined, 
	 	description:"Fire an acid arrow to attack up to 5 enemies at once. Acid arrows damage 25HP per second and decrease physical DEF by 25%. "
	},{
		level:34,sp:15,mp:60,power:"140.0%+200",casttime:0,cooltime:3,duration:undefined, 
	 	description:"Fire an acid arrow to attack up to 5 enemies at once. Acid arrows damage 30HP per second and decrease physical DEF by 30%. "
	},{
		level:"CARD",sp:15,mp:70,power:"145.0%+220",casttime:0,cooltime:3,duration:undefined, 
	 	description:"Fire an acid arrow to attack up to 5 enemies at once. Acid arrows damage 35HP per second and decrease physical DEF by 35%. "
	},{
		level:"CARD",sp:15,mp:80,power:"150.0%+240",casttime:0,cooltime:3,duration:undefined, 
	 	description:"Fire an acid arrow to attack up to 5 enemies at once. Acid arrows damage 40HP per second and decrease physical DEF by 40%. "
	},{
		level:"CARD",sp:15,mp:90,power:"155.0%+260 ",casttime:0,cooltime:3,duration:undefined, 
	 	description:"Fire an acid arrow to attack up to 5 enemies at once. Acid arrows damage 45HP per second and decrease physical DEF by 45%. "
	},{
		level:"CARD",sp:15,mp:100,power:"160.0%+280",casttime:0,cooltime:3,duration:undefined, 
	 	description:"Fire an acid arrow to attack up to 5 enemies at once. Acid arrows damage 50HP per second and decrease physical DEF by 50%. "
	},{
		level:"CARD",sp:15,mp:110,power:"165.0%+300 	",casttime:0,cooltime:3,duration:undefined, 
	 	description:"Fire an acid arrow to attack up to 5 enemies at once. Acid arrows damage 55HP per second and decrease physical DEF by 55%. "
	}]);

    hunter.skill[2] = new Skill("./img_p/hnt/sharp.webp","ACTIVE","<font color='#8e6aac'>Sharpshooting</font>","10",[4,4],[{id:1,lv:1}],[{
		level:25,sp:10,mp:50,power:"250.0%+500",casttime:0,cooltime:4,duration:undefined, 
	 	description:"Fire penetrating arrow to targets in front to knock enemies down on ground. From Lv2 fallen enemies can be attacked as well. Moving or jumping would cancel the skill"
	},{
		level:28,sp:10,mp:60,power:"300.0%+575",casttime:0,cooltime:4,duration:undefined, 
	 	description:"Fire 2 penetrating arrows to targets in front to knock enemies down on ground. Moving or jumping would cancel the skill."
	},{
		level:31,sp:10,mp:70,power:"350.0%+650",casttime:0,cooltime:4,duration:undefined, 
	 	description:"Fire 2 penetrating arrows to targets in front to knock enemies down on ground. Moving or jumping would cancel the skill."
	},{
		level:34,sp:10,mp:80,power:"400.0%+725",casttime:0,cooltime:4,duration:undefined, 
	 	description:"Fire 3 penetrating arrows to targets in front to knock enemies down on ground. Moving or jumping would cancel the skill."
	},{
		level:37,sp:10,mp:90,power:"450.0%+800",casttime:0,cooltime:4,duration:undefined, 
	 	description:"Fire 3 penetrating arrows to targets in front to knock enemies down on ground. Moving or jumping would cancel the skill."
	},{
		level:"CARD",sp:10,mp:100,power:"475.0%+820 ",casttime:0,cooltime:4,duration:undefined, 
	 	description:"Fire 4 penetrating arrows to targets in front to knock enemies down on ground. Moving or jumping would cancel the skill."
	},{
		level:"CARD",sp:10,mp:110,power:"500.0%+840 ",casttime:0,cooltime:4,duration:undefined, 
	 	description:"Fire 4 penetrating arrows to targets in front to knock enemies down on ground. Moving or jumping would cancel the skill."
	},{
		level:"CARD",sp:10,mp:120,power:"525.0%+860 ",casttime:0,cooltime:4,duration:undefined, 
	 	description:"Fire 4 penetrating arrows to targets in front to knock enemies down on ground. Moving or jumping would cancel the skill."
	},{
		level:"CARD",sp:10,mp:130,power:"550.0%+880",casttime:0,cooltime:4,duration:undefined, 
	 	description:"Fire 4 penetrating arrows to targets in front to knock enemies down on ground. Moving or jumping would cancel the skill."
	},{
		level:"CARD",sp:10,mp:140,power:"575.0%+900",casttime:0,cooltime:4,duration:undefined, 
	 	description:"Fire 5 penetrating arrows to targets in front to knock enemies down on ground. Moving or jumping would cancel the skill."
	}]);

    hunter.skill[3] = new Skill("./img_p/hnt/netbinder.webp","ACTIVE","<font color='#8e6aac'>Netbind</font>","10",[3,6],[{id:1,lv:2}],[{
		level:26,sp:10,mp:60,power:undefined,casttime:0.3,cooltime:7,duration:2, 
	 	description:"Cast a spider web that will tie up 3 enemy targets for 2 seconds."
	},{
		level:29,sp:10,mp:65,power:undefined,casttime:0.3,cooltime:7,duration:3, 
	 	description:"Cast a spider web that will tie up 3 enemy targets for 3 seconds. "
	},{
		level:32,sp:10,mp:70,power:undefined,casttime:0.3,cooltime:7,duration:4, 
	 	description:"Cast a spider web that will tie up 3 enemy targets for 4 seconds. "
	},{
		level:35,sp:10,mp:75,power:undefined,casttime:0.3,cooltime:7,duration:5,
	 	description:"Cast a spider web that will tie up 3 enemy targets for 5 seconds."
	},{
		level:38,sp:10,mp:80,power:undefined,casttime:0.3,cooltime:7,duration:6, 
	 	description:"Cast a spider web that will tie up 3 enemy targets for 6 seconds. "
	},{
		level:"CARD",sp:10,mp:85,power:undefined,casttime:0.3,cooltime:7,duration:6, 
	 	description:"Cast a spider web that will tie up 4 enemy targets for 6 seconds. "
	},{
		level:"CARD",sp:10,mp:90,power:undefined,casttime:0.3,cooltime:7,duration:6, 
	 	description:"Cast a spider web that will tie up 5 enemy targets for 6 seconds. "
	},{
		level:"CARD",sp:10,mp:95,power:undefined,casttime:0.3,cooltime:7,duration:6, 
	 	description:"Cast a spider web that will tie up 6 enemy targets for 6 seconds. "
	},{
		level:"CARD",sp:10,mp:100,power:undefined,casttime:0.3,cooltime:7,duration:6, 
	 	description:"Cast a spider web that will tie up 7 enemy targets for 6 seconds."
	},{
		level:"CARD",sp:10,mp:105,power:undefined,casttime:0.3,cooltime:7,duration:6, 
	 	description:"Cast a spider web that will tie up 8 enemy targets for 6 seconds. "
	}]);

    hunter.skill[4] = new Skill("./img_p/hnt/disruptionweb.webp","PASSIVE","<font color='#8e6aac'>Disruption Web</font>","5",[2,8],[{id:3,lv:1}],[{
		level:27,sp:10,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:18, 
	 	description:"Upgrade Netbind skill to have Serious Poison effect that decreases HP when captured for 18 seconds. "
	},{
		level:30,sp:10,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:18, 
	 	description:"Upgrade Netbind skill to have Serious Poison effect that decreases HP when captured for 18 seconds. "
	},{
		level:33,sp:10,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:21, 
	 	description:"Upgrade Netbind skill to have Serious Poison effect that decreases HP when captured for 21 seconds. "
	},{
		level:36,sp:10,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:21, 
	 	description:"Upgrade Netbind skill to have Serious Poison effect that decreases HP when captured for 21 seconds. "
	},{
		level:39,sp:10,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:24, 
	 	description:"Upgrade Netbind skill to have Serious Poison effect that decreases HP when captured for 24 seconds. "
	}]);

	hunter.skill[5] = new Skill("./img_p/hnt/arrowshower.webp","ACTIVE","<font color='#8e6aac'>Arrow Shower</font>","10",[6,2],[],[{
		level:20,sp:15,mp:30,power:"35.0%+22",casttime:0,cooltime:3,duration:undefined, 
	 	description:"Cast an arrow shower that damages 3 enemies om range with an 8 combo hit. "
	},{
		level:23,sp:15,mp:33,power:"37.5%+34",casttime:0,cooltime:3,duration:undefined, 
	 	description:"Cast an arrow shower that damages 4 enemies om range with an 8 combo hit. "
	},{
		level:26,sp:15,mp:36,power:"40.0%+46",casttime:0,cooltime:3,duration:undefined, 
	 	description:"Cast an arrow shower that damages 5 enemies om range with an 8 combo hit. "
	},{
		level:29,sp:15,mp:39,power:"42.5%+58",casttime:0,cooltime:3,duration:undefined, 
	 	description:"Cast an arrow shower that damages 6 enemies om range with an 8 combo hit. "
	},{
		level:32,sp:15,mp:42,power:"45.0%+70",casttime:0,cooltime:3,duration:undefined, 
	 	description:"Cast an arrow shower that damages 7 enemies om range with an 8 combo hit. "
	},{
		level:"CARD",sp:15,mp:49,power:"46.3%+70",casttime:0,cooltime:3,duration:undefined, 
	 	description:"Cast an arrow shower that damages 8 enemies om range with an 8 combo hit. "
	},{
		level:"CARD",sp:15,mp:56,power:"47.6%+70 ",casttime:0,cooltime:3,duration:undefined, 
	 	description:"Cast an arrow shower that damages 9 enemies om range with an 8 combo hit. "
	},{
		level:"CARD",sp:15,mp:63,power:"48.9%+70",casttime:0,cooltime:3,duration:undefined, 
	 	description:"Cast an arrow shower that damages 10 enemies om range with an 8 combo hit. "
	},{
		level:"CARD",sp:15,mp:70,power:"50.2%+70 ",casttime:0,cooltime:3,duration:undefined, 
	 	description:"Cast an arrow shower that damages 11 enemies om range with an 8 combo hit.  "
	},{
		level:"CARD",sp:15,mp:77,power:"51.5%+70",casttime:0,cooltime:3,duration:undefined, 
	 	description:"Cast an arrow shower that damages 12 enemies om range with an 8 combo hit. "
	}]);

	hunter.skill[6] = new Skill("./img_p/hnt/RocketLauncher.webp","ACTIVE","<font color='#8e6aac'>Rocket Launcher</font>","10",[6,4],[{id:5,lv:2}],[{
		level:25,sp:20,mp:30,power:"270.0%+250",casttime:0,cooltime:4,duration:undefined, 
	 	description:"Fire a rocket to the front to attack 6 enemy targets standing or fallen on ground and slightly launch them into the air. At skill level 3, victims are launched to higher height. At skill level 5, vicitims are launched to the maximum height."
	},{
		level:28,sp:20,mp:32,power:"320.0%+320",casttime:0,cooltime:4,duration:undefined, 
	 	description:"Fire a rocket to the front to attack 7 enemy targets standing or fallen on ground and slightly launch them into the air. At skill level 3, victims are launched to higher height. At skill level 5, vicitims are launched to the maximum height."
	},{
		level:31,sp:20,mp:34,power:"370.0%+390",casttime:0,cooltime:4,duration:undefined, 
	 	description:"Fire a rocket to the front to attack 8 enemy targets standing or fallen on ground and launch them into the air. At skill level 5, vicitims are launched to the maximum height. "
	},{
		level:34,sp:20,mp:36,power:"420.0%+460",casttime:0,cooltime:4,duration:undefined, 
	 	description:"Fire a rocket to the front to attack 9 enemy targets standing or fallen on ground and launch them into the air. At skill level 5, vicitims are launched to the maximum height. "
	},{
		level:37,sp:20,mp:38,power:"470.0%+530",casttime:0,cooltime:4,duration:undefined, 
	 	description:"Fire a rocket to the front to attack 10 enemy targets standing or fallen on ground and launch them into the air to the maximum height. "
	},{
		level:"CARD",sp:20,mp:40,power:"505.0%+600 ",casttime:0,cooltime:4,duration:undefined, 
	 	description:"Fire a rocket to the front to attack 11 enemy targets standing or fallen on ground and launch them into the air to the maximum height. "
	},{
		level:"CARD",sp:20,mp:42,power:"540.0%+670 ",casttime:0,cooltime:4,duration:undefined, 
	 	description:"Fire a rocket to the front to attack 12 enemy targets standing or fallen on ground and launch them into the air to the maximum height. "
	},{
		level:"CARD",sp:20,mp:44,power:"575.0%+740 ",casttime:0,cooltime:4,duration:undefined, 
	 	description:"Fire a rocket to the front to attack 13 enemy targets standing or fallen on ground and launch them into the air to the maximum height. "
	},{
		level:"CARD",sp:20,mp:46,power:"610.0%+810 ",casttime:0,cooltime:4,duration:undefined, 
	 	description:"Fire a rocket to the front to attack 14 enemy targets standing or fallen on ground and launch them into the air to the maximum height. "
	},{
		level:"CARD",sp:20,mp:48,power:"645.0%+880 	",casttime:0,cooltime:4,duration:undefined, 
	 	description:"Fire a rocket to the front to attack 15 enemy targets standing or fallen on ground and launch them into the air to the maximum height. "
	}]);

	hunter.skill[7] = new Skill("./img_p/hnt/WolfRush.webp","ACTIVE","<font color='#8e6aac'>Wolf Rush</font>","10",[6,6],[{id:6,lv:1}],[{
		level:27,sp:20,mp:50,power:"120.0%+60",casttime:0,cooltime:6,duration:undefined, 
	 	description:"Summon an ice wolf to attack up to 3 enemies in front with 5 combo hit. At skill level 3, fallen enemies can also be attacked and victims are slightly launched into the air. At skill level 5, victims are launched to higher height."
	},{
		level:30,sp:20,mp:55,power:"127.0%+90",casttime:0,cooltime:6,duration:undefined, 
	 	description:"Summon an ice wolf to attack up to 4 enemies in front with 5 combo hit. At skill level 3, fallen enemies can also be attacked and victims are slightly launched into the air. At skill level 5, victims are launched to higher height. "
	},{
		level:33,sp:20,mp:60,power:"134.0%+120",casttime:0,cooltime:6,duration:undefined, 
	 	description:"Summon an ice wolf to attack up to 5 standing or fallen enemies in front with 5 combo hit and slightly launch them into the air. At skill level 5, victims are launched to higher height."
	},{
		level:36,sp:20,mp:65,power:"141.0%+150",casttime:0,cooltime:6,duration:undefined, 
	 	description:"Summon an ice wolf to attack up to 6 standing or fallen enemies in front with 5 combo hit and slightly launch them into the air. At skill level 5, victims are launched to higher height. "
	},{
		level:39,sp:20,mp:70,power:"148.0%+180",casttime:0,cooltime:6,duration:undefined, 
	 	description:"Summon an ice wolf to attack up to 7 standing or fallen enemies in front with 5 combo hit and launch them into the air. "
	},{
		level:"CARD",sp:20,mp:75,power:"150.0%+190 	",casttime:0,cooltime:6,duration:undefined, 
	 	description:"Summon an ice wolf to attack up to 8 standing or fallen enemies in front with 5 combo hit and launch them into the air. "
	},{
		level:"CARD",sp:20,mp:80,power:"152.0%+200",casttime:0,cooltime:6,duration:undefined, 
	 	description:"Summon an ice wolf to attack up to 8 standing or fallen enemies in front with 5 combo hit and launch them into the air."
	},{
		level:"CARD",sp:20,mp:85,power:"154.0%+210 ",casttime:0,cooltime:6,duration:undefined, 
	 	description:"Summon an ice wolf to attack up to 9 standing or fallen enemies in front with 5 combo hit and launch them into the air."
	},{
		level:"CARD",sp:20,mp:90,power:"156.0%+220 ",casttime:0,cooltime:6,duration:undefined, 
	 	description:"Summon an ice wolf to attack up to 9 standing or fallen enemies in front with 5 combo hit and launch them into the air."
	},{
		level:"CARD",sp:20,mp:95,power:"158.0%+230",casttime:0,cooltime:6,duration:undefined, 
	 	description:"Summon an ice wolf to attack up to 10 standing or fallen enemies in front with 5 combo hit and launch them into the air. "
	}]);

	hunter.skill[8] = new Skill("./img_p/hnt/BirdWatching.webp","ACTIVE","<font color='#8e6aac'>Bird Watching</font>","10",[8,0],[],[{
		level:20,sp:15,mp:200,power:undefined,casttime:0.6,cooltime:30,duration:900, 
	 	description:"The deadly, accurate and ferocious eagle head grants you +4 strength, +4 agility and +50 physical attack power. "
	},{
		level:24,sp:15,mp:250,power:undefined,casttime:0.6,cooltime:30,duration:900, 
	 	description:"The deadly, accurate and ferocious eagle head grants you +8 strength, +8 agility and +100 physical attack power. "
	},{
		level:28,sp:15,mp:300,power:undefined,casttime:0.6,cooltime:30,duration:900, 
	 	description:"The deadly, accurate and ferocious eagle head grants you +12 strength, +12 agility and +150 physical attack power. "
	},{
		level:32,sp:15,mp:350,power:undefined,casttime:0.6,cooltime:30,duration:900, 
	 	description:"The deadly, accurate and ferocious eagle head grants you +16 strength, +16 agility and +200 physical attack power. "
	},{
		level:36,sp:15,mp:400,power:undefined,casttime:0.6,cooltime:30,duration:900, 
	 	description:"The deadly, accurate and ferocious eagle head grants you +20 strength, +20 agility and +250 physical attack power. "
	},{
		level:"CARD",sp:15,mp:450,power:undefined,casttime:0.6,cooltime:30,duration:900, 
	 	description:"The deadly, accurate and ferocious eagle head grants you +24 strength, +24 agility and +275 physical attack power. "
	},{
		level:"CARD",sp:15,mp:500,power:undefined,casttime:0.6,cooltime:30,duration:900, 
	 	description:"The deadly, accurate and ferocious eagle head grants you +28 strength, +28 agility and +300 physical attack power. "
	},{
		level:"CARD",sp:15,mp:550,power:undefined,casttime:0.6,cooltime:30,duration:900, 
	 	description:"The deadly, accurate and ferocious eagle head grants you +32 strength, +32 agility and +325 physical attack power. "
	},{
		level:"CARD",sp:15,mp:600,power:undefined,casttime:0.6,cooltime:30,duration:900, 
	 	description:"The deadly, accurate and ferocious eagle head grants you +36 strength, +36 agility and +350 physical attack power. "
	},{
		level:"CARD",sp:15,mp:650,power:undefined,casttime:0.6,cooltime:30,duration:900, 
	 	description:"The deadly, accurate and ferocious eagle head grants you +40 strength, +40 agility and +375 physical attack power. "
	}]);

	hunter.skill[9] = new Skill("./img_p/hnt/hallucination.webp","ACTIVE","<font color='#8e6aac'>Hallucination</font>","5",[8,2],[{id:8,lv:1}],[{
		level:23,sp:15,mp:50,power:undefined,casttime:0,cooltime:60,duration:15, 
	 	description:"Hypnotize enemies and increase your dodge rate by 50% for 15 seconds. "
	},{
		level:26,sp:15,mp:55,power:undefined,casttime:0,cooltime:60,duration:15, 
	 	description:"Hypnotize enemies and increase your dodge rate by 100% for 15 seconds. "
	},{
		level:29,sp:15,mp:60,power:undefined,casttime:0,cooltime:60,duration:15, 
	 	description:"Hypnotize enemies and increase your dodge rate by 150% for 15 seconds. "
	},{
		level:32,sp:15,mp:65,power:undefined,casttime:0,cooltime:60,duration:15, 
	 	description:"Hypnotize enemies and increase your dodge rate by 200% for 15 seconds. "
	},{
		level:35,sp:15,mp:70,power:undefined,casttime:0,cooltime:60,duration:15, 
	 	description:"Hypnotize enemies and increase your dodge rate by 250% for 15 seconds. "
	}]);

	hunter.skill[10] = new Skill("./img_p/hnt/hypnosis.webp","ACTIVE","<font color='#8e6aac'>Mesmerize</font>","5",[8,4],[{id:9,lv:1}],[{
		level:24,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Upgrade Hallucination skill to have bonus effect of reflecting 100% of incoming damage to the enemy with 12% probability. "
	},{
		level:27,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Upgrade Hallucination skill to have bonus effect of reflecting 120% of incoming damage to the enemy with 14% probability. "
	},{
		level:30,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Upgrade Hallucination skill to have bonus effect of reflecting 140% of incoming damage to the enemy with 16% probability. "
	},{
		level:33,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Upgrade Hallucination skill to have bonus effect of reflecting 160% of incoming damage to the enemy with 18% probability. "
	},{
		level:36,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Upgrade Hallucination skill to have bonus effect of reflecting 180% of incoming damage to the enemy with 20% probability. "
	}]);

	hunter.skill[11] = new Skill("./img_p/hnt/advancedbowmastery.webp","ACTIVE","<font color='#8e6aac'>Advanced Bow Mastery</font>","10",[2,4],[],[{
		level:20,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Amplify base physical attack power by 8% when holding a bow. "
	},{
		level:24,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Amplify base physical attack power by 9% when holding a bow. "
	},{
		level:28,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Amplify base physical attack power by 10% when holding a bow. "
	},{
		level:32,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Amplify base physical attack power by 11% when holding a bow. "
	},{
		level:36,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Amplify base physical attack power by 12% when holding a bow."
	},{
		level:"CARD",sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Amplify base physical attack power by 13% when holding a bow."
	},{
		level:"CARD",sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Amplify base physical attack power by 14% when holding a bow."
	},{
		level:"CARD",sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Amplify base physical attack power by 15% when holding a bow."
	},{
		level:"CARD",sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Amplify base physical attack power by 16% when holding a bow."
	},{
		level:"CARD",sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Amplify base physical attack power by 17% when holding a bow."
	}]);
	
//Archer - Hunter - Pathfinder - Sentinel

	var trapper = {
		name: "Pathfinder",
		skill: new Array(),
		image: "./img_p/trapperbg.webp"
	};
	
    trapper.skill[0] = new Skill("./img_p/pth/piacing.webp","PASSIVE","<font color='#8e6aac'>Pierce</font>","5",[1,0],[],[{
		level:40,sp:15,mp:undefined,power:undefined,casttime:0,cooltime:undefined,duration:undefined, 
	 	description:"Fire arrows that penetrate up to 2 enemies. "
	},{
		level:43,sp:15,mp:undefined,power:undefined,casttime:0,cooltime:undefined,duration:undefined, 
	 	description:"Fire arrows that penetrate up to 3 enemies. "
	},{
		level:46,sp:15,mp:undefined,power:undefined,casttime:0,cooltime:undefined,duration:undefined, 
	 	description:"Fire arrows that penetrate up to 4 enemies. "
	},{
		level:49,sp:15,mp:undefined,power:undefined,casttime:0,cooltime:undefined,duration:undefined, 
	 	description:"Fire arrows that penetrate up to 5 enemies. "
	},{
		level:52,sp:15,mp:undefined,power:undefined,casttime:0,cooltime:undefined,duration:undefined, 
	 	description:"Fire arrows that penetrate up to 6 enemies. "
	}]);

    trapper.skill[1] = new Skill("./img_p/pth/aiming.webp","ACTIVE","<font color='#8e6aac'>Aiming</font>","5",[1,2],[{id:0,lv:1}],[{
		level:41,sp:15,mp:60,power:undefined,casttime:0.5,cooltime:60,duration:30, 
	 	description:"Increases base aim rate by 10%. "
	},{
		level:44,sp:15,mp:85,power:undefined,casttime:0.5,cooltime:60,duration:45, 
	 	description:"Increases base aim rate by 15%."
	},{
		level:47,sp:15,mp:110,power:undefined,casttime:0.5,cooltime:60,duration:60, 
	 	description:"Increases base aim rate by 20%."
	},{
		level:50,sp:15,mp:135,power:undefined,casttime:0.5,cooltime:60,duration:75, 
	 	description:"Increases base aim rate by 25%. "
	},{
		level:53,sp:15,mp:160,power:undefined,casttime:0.5,cooltime:60,duration:90, 
	 	description:"Increases base aim rate by 30%."
	}]);

    trapper.skill[2] = new Skill("./img_p/pth/ditection.webp","PASSIVE","<font color='#8e6aac'>Weakness Detection</font>","5",[1,4],[{id:1,lv:2}],[{
		level:45,sp:10,mp:undefined,power:undefined,casttime:0,cooltime:undefined,duration:undefined, 
	 	description:"Upgrade Pinpoint Attack skill by adding 5.0% bonus to both aiming rate and critical rate. "
	},{
		level:48,sp:10,mp:undefined,power:undefined,casttime:0,cooltime:undefined,duration:undefined, 
	 	description:"Upgrade Pinpoint Attack skill by adding 7.5% bonus to both aiming rate and critical rate. "
	},{
		level:51,sp:10,mp:undefined,power:undefined,casttime:0,cooltime:undefined,duration:undefined, 
	 	description:"Upgrade Pinpoint Attack skill by adding 10.0% bonus to both aiming rate and critical rate. "
	},{
		level:54,sp:10,mp:undefined,power:undefined,casttime:0,cooltime:undefined,duration:undefined, 
	 	description:"Upgrade Pinpoint Attack skill by adding 12.5% bonus to both aiming rate and critical rate. "
	},{
		level:57,sp:10,mp:undefined,power:undefined,casttime:0,cooltime:undefined,duration:undefined, 
	 	description:"Upgrade Pinpoint Attack skill by adding 15.0% bonus to both aiming rate and critical rate. "
	}]);

    trapper.skill[3] = new Skill("./img_p/pth/falconbeat.webp","ACTIVE","<font color='#8e6aac'>Falcon Frenzy</font>","5",[3,2],[{id:0,lv:1}],[{
		level:42,sp:20,mp:50,power:"200.0%+100",casttime:0,cooltime:10,duration:1, 
	 	description:"Summon a flaming eagle to bomb the front attacking 4 standing enemies with 3 combo hit and knock them down. At skill level 3, fallen enemies can also be attacked and slightly launched into the air. At skill level 5, victims are launched to higher height."
	},{
		level:45,sp:20,mp:60,power:"211.7%+166",casttime:0,cooltime:10,duration:1, 
	 	description:"Summon a flaming eagle to bomb the front attacking 5 standing enemies with 3 combo hit and knock them down. At skill level 3, fallen enemies can also be attacked and slightly launched into the air. At skill level 5, victims are launched to higher height. "
	},{
		level:48,sp:20,mp:70,power:"223.3%+233",casttime:0,cooltime:10,duration:1, 
	 	description:"Summon a flaming eagle to bomb the front attacking 6 standing or fallen enemies with 3 combo hit and slightly launch them into the air. At skill level 5, victims are launched to higher height. "
	},{
		level:51,sp:20,mp:80,power:"235.0%+300",casttime:0,cooltime:10,duration:1, 
	 	description:"Summon a flaming eagle to bomb the front attacking 7 standing or fallen enemies with 3 combo hit and slightly launch them into the air. At skill level 5, victims are launched to higher height. "
	},{
		level:54,sp:20,mp:90,power:"246.7%+366",casttime:0,cooltime:10,duration:1, 
	 	description:"Summon a flaming eagle to bomb the front attacking 8 standing or fallen enemies with 3 combo hit and launch them into the air. "
	}]);

    trapper.skill[4] = new Skill("./img_p/pth/phenixbeat.webp","ACTIVE","<font color='#8e6aac'>Blitz</font>","5",[3,4],[{id:3,lv:1}],[{
		level:43,sp:15,mp:80,power:"233.3%+300",casttime:0,cooltime:5,duration:undefined, 
	 	description:"Summon an eagle to damage 4 enemies in the target area. Attacked targets are launched into the air. "
	},{
		level:46,sp:15,mp:95,power:"245.0%+366",casttime:0,cooltime:5,duration:undefined, 
	 	description:"Summon an eagle to damage 5 enemies in the target area. Attacked targets are launched into the air. "
	},{
		level:49,sp:15,mp:110,power:"256.7%+433",casttime:0,cooltime:5,duration:undefined, 
	 	description:"Summon an eagle to damage 6 enemies in the target area. Attacked targets are launched into the air. "
	},{
		level:52,sp:15,mp:125,power:"268.3%+500",casttime:0,cooltime:5,duration:undefined, 
	 	description:"Summon an eagle to damage 7 enemies in the target area. Attacked targets are launched into the air. "
	},{
		level:55,sp:15,mp:140,power:"280.0%+566",casttime:0,cooltime:5,duration:undefined, 
	 	description:"Summon an eagle to damage 8 enemies in the target area. Attacked targets are launched into the air. "
	}]);

	trapper.skill[5] = new Skill("./img_p/pth/falconlymastery.webp","PASSIVE","<font color='#8e6aac'>Falcon Mastery</font>","5",[3,6],[{id:4,lv:1}],[{
		level:44,sp:10,mp:undefined,power:"45.0%+100",casttime:0,cooltime:undefined,duration:undefined, 
	 	description:"Increases damage of skills that use a falcon. "
	},{
		level:48,sp:10,mp:undefined,power:"60.0%+150",casttime:0,cooltime:undefined,duration:undefined, 
	 	description:"Increases damage of skills that use a falcon. "
	},{
		level:52,sp:10,mp:undefined,power:"75.0%+200",casttime:0,cooltime:undefined,duration:undefined, 
	 	description:"Increases damage of skills that use a falcon. "
	},{
		level:56,sp:10,mp:undefined,power:"90.0%+250",casttime:0,cooltime:undefined,duration:undefined, 
	 	description:"Increases damage of skills that use a falcon. "
	},{
		level:60,sp:10,mp:undefined,power:"105.0%+300",casttime:0,cooltime:undefined,duration:undefined, 
	 	description:"Increases damage of skills that use a falcon. "
	}]);

	trapper.skill[6] = new Skill("./img_p/pth/craymore.webp","ACTIVE","<font color='#8e6aac'>Claymore</font>","5",[5,0],[],[{
		level:40,sp:20,mp:50,power:"150.0%+200",casttime:0,cooltime:14,duration:undefined, 
	 	description:"Deploy a bomb trap that explodes in the direction its facing, attacking 5 standing targets and knock victims down. The bomb explodes after 6 seconds or instantly with Detonation skill. At skill level 3, fallen enemies can also be attacked."
	},{
		level:43,sp:20,mp:90,power:"180.0%+300",casttime:0,cooltime:13,duration:undefined, 
	 	description:"Deploy 2 bomb traps that explodes in the direction its facing, attacking 5 standing targets and knock victims down. The bomb explodes after 6 seconds or instantly with Detonation skill. At skill level 3, fallen enemies can also be attacked."
	},{
		level:46,sp:20,mp:120,power:"210.0%+400",casttime:0,cooltime:12,duration:undefined, 
	 	description:"Deploy 3 bomb traps that explodes in the direction its facing, attacking 5 standing targets and knock victims down. The bomb explodes after 6 seconds or instantly with Detonation skill. At skill level 3, fallen enemies can also be attacked."
	},{
		level:49,sp:20,mp:140,power:"240.0%+500",casttime:0,cooltime:11,duration:undefined, 
	 	description:"Deploy 4 bomb traps that explodes in the direction its facing, attacking 5 standing targets and knock victims down. The bomb explodes after 6 seconds or instantly with Detonation skill. At skill level 3, fallen enemies can also be attacked."
	},{
		level:52,sp:20,mp:150,power:"270.0%+600",casttime:0,cooltime:10,duration:undefined, 
	 	description:"Deploy 5 bomb traps that explodes in the direction its facing, attacking 5 standing targets and knock victims down. The bomb explodes after 6 seconds or instantly with Detonation skill. At skill level 3, fallen enemies can also be attacked."
	}]);

	trapper.skill[7] = new Skill("./img_p/pth/boundtrap.webp","ACTIVE","<font color='#8e6aac'>Bounce Trap</font>","1",[5,2],[{id:6,lv:1}],[{
		level:41,sp:10,mp:50,power:"200.0%+200",casttime:0,cooltime:10,duration:undefined, 
	 	description:"Set up a trap that launches 5 targets into the air and deals a small amount of damage with a chance to block their dashing and jumping abilities. "
	}]);

	trapper.skill[8] = new Skill("./img_p/pth/splashtrap.webp","ACTIVE","<font color='#8e6aac'>Splash Trap</font>","5",[5,4],[{id:7,lv:1}],[{
		level:42,sp:15,mp:40,power:"190.0%+300",casttime:0,cooltime:5,duration:undefined, 
	 	description:"Set up an exploding trap that will damage up to 4 targets in range once an enemy stands on it. "
	},{
		level:45,sp:15,mp:60,power:"205.0%+350",casttime:0,cooltime:5,duration:undefined, 
	 	description:"Set up an exploding trap that will damage up to 4 targets in range once an enemy stands on it. "
	},{
		level:48,sp:15,mp:80,power:"220.0%+400",casttime:0,cooltime:5,duration:undefined, 
	 	description:"Set up an exploding trap that will damage up to 6 targets in range once an enemy stands on it. "
	},{
		level:51,sp:15,mp:100,power:"235.0%+450",casttime:0,cooltime:5,duration:undefined, 
	 	description:"Set up an exploding trap that will damage up to 6 targets in range once an enemy stands on it. "
	},{
		level:54,sp:15,mp:120,power:"250.0%+500",casttime:0,cooltime:5,duration:undefined, 
	 	description:"Set up an exploding trap that will damage up to 8 targets in range once an enemy stands on it. "
	}]);

	trapper.skill[9] = new Skill("./img_p/pth/freezingtrap.webp","ACTIVE","<font color='#8e6aac'>Freezing Trap</font>","5",[5,6],[{id:8,lv:1}],[{
		level:43,sp:20,mp:50,power:"370.0%",casttime:0,cooltime:10,duration:undefined, 
	 	description:"Set up a trap that attacks 4 enemies and casts a freeze effect for 2.5 seconds with a 60% chance of success."
	},{
		level:46,sp:20,mp:70,power:"430.0%",casttime:0,cooltime:10,duration:undefined, 
	 	description:"Set up a trap that attacks 5 enemies and casts a freeze effect for 2.7 seconds with a 65% chance of success."
	},{
		level:49,sp:20,mp:90,power:"495.0%",casttime:0,cooltime:10,duration:undefined, 
	 	description:"Set up a trap that attacks 6 enemies and casts a freeze effect for 2.9 seconds with a 70% chance of success."
	},{
		level:52,sp:20,mp:110,power:"560.0%",casttime:0,cooltime:10,duration:undefined, 
	 	description:"Set up a trap that attacks 7 enemies and casts a freeze effect for 3.1 seconds with a 75% chance of success."
	},{
		level:55,sp:20,mp:130,power:"625.0%",casttime:0,cooltime:10,duration:undefined, 
	 	description:"Set up a trap that attacks 8 enemies and casts a freeze effect for 3.3 seconds with a 80% chance of success."
	}]);

	trapper.skill[10] = new Skill("./img_p/pth/silencetrap.webp","ACTIVE","<font color='#8e6aac'>Silence Trap</font>","5",[5,8],[{id:9,lv:1}],[{
		level:44,sp:20,mp:50,power:"370.0%+250",casttime:0,cooltime:10,duration:undefined, 
	 	description:"Set up a trap that attacks 4 enemy targets and cast Lv 1 Silence effect with 60% chances. Can be cast during jumping."
	},{
		level:47,sp:20,mp:70,power:"430.0%+500",casttime:0,cooltime:10,duration:undefined, 
	 	description:"Once someone steps on, will give damages up to 5 enemies and cast Lv. 2 Silence effect with 60% chances. Can be cast during jumping."
	},{
		level:50,sp:20,mp:90,power:"495.0%+750",casttime:0,cooltime:10,duration:undefined, 
	 	description:"Set up a trap that attacks 6 enemy targets and cast Lv 3 Silence effect with 70% chances. Can be cast during jumping."
	},{
		level:53,sp:20,mp:110,power:"560.0%+1000",casttime:0,cooltime:10,duration:undefined, 
	 	description:"Once someone steps on, will give damages up to 7 enemies and cast Lv. 4 Silence effect with 70% chances. Can be cast during jumping."
	},{
		level:56,sp:20,mp:130,power:"625.0%+1250",casttime:0,cooltime:10,duration:undefined, 
	 	description:"Set up a trap that attacks 8 enemy targets and cast Lv 5 Silence effect with 80% chances. Can be cast during jumping."
	}]);

	trapper.skill[11] = new Skill("./img_p/pth/bombswitch.webp","ACTIVE","<font color='#8e6aac'>Detonator</font>","1",[7,2],[{id:6,lv:1}],[{
		level:41,sp:5,mp:1,power:undefined,casttime:0,cooltime:0.1,duration:undefined, 
	 	description:"Activate switch to make all setup claymores exploded. "
	}]);

	trapper.skill[12] = new Skill("./img_p/pth/untouchable.webp","ACTIVE","<font color='#8e6aac'>Untouchable</font>","1",[7,10],[{id:11,lv:1},{id:8,lv:3}],[{
		level:49,sp:60,mp:10,power:undefined,casttime:0,cooltime:300,duration:10, 
	 	description:"Attempt kamikaze attack on the enemy. caster will self explode in 10 seconds and still can move around during the time. Explosion radius is displayed on the floor, all targets in it are devastated upon explosion. caster is left with 1 HP and MP after explore."
	}]);
	
	trapper.skill[13] = new Skill("./img_p/pth/InvisibleTrap.webp","PASSIVE","<font color='#8e6aac'>Invisible Trap</font>","1",[9,8],[],[{
		level:43,sp:0,mp:undefined,power:undefined,casttime:0,cooltime:0,duration:undefined, 
	 	description:"Camouflage the trap so it\'s not easily seen."
	}]);

	trapper.skill[14] = new Skill("./img_p/pth/teslacoil.webp","ACTIVE","<font color='#8e6aac'>Tesla Coil</font>","5",[9,2],[],[{
		level:42,sp:15,mp:50,power:"40.0%+120",casttime:0,cooltime:9,duration:undefined, 
	 	description:"Set up a continuous electrifying trap in front of users. "
	},{
		level:45,sp:15,mp:70,power:"65.0%+140",casttime:0,cooltime:9,duration:undefined, 
	 	description:"Set up a continuous electrifying trap in front of users. "
	},{
		level:"48?",sp:15,mp:"100?",power:"90.0%+160?",casttime:0,cooltime:9,duration:undefined, 
	 	description:"Set up a continuous electrifying trap in front of users. "
	},{
		level:"51?",sp:15,mp:"130?",power:"115.0%+180?",casttime:0,cooltime:9,duration:undefined, 
	 	description:"Set up a continuous electrifying trap in front of users. "
	},{
		level:"54?",sp:15,mp:"160?",power:"140.0%+200?",casttime:0,cooltime:9,duration:undefined, 
	 	description:"Set up a continuous electrifying trap in front of users. "
	}]);	

//Archer - Hunter - Pathfinder - Sentinel
	var sentinel = { 
		name:"Sentinel",
		skill:new Array(),
		image:"./img_p/sentinelbg.webp"
	};

	sentinel.skill[0] = new Skill("./img_p/sen/Awakening.webp","PASSIVE","<font color='#8e6aac'>Awakening</font>","1",[5,0],[],[{
		level:60,sp:1,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Whenever you use MP during battle, your Awakening bar will fill up. This allows you to perform certain special skills which consume Awakening points. These skills also consume MP, however the MP they consume does not fill your awakening bar. "
	}]);
	
	sentinel.skill[1] = new Skill("./img_p/sen/SongOfTheWinds.webp","PASSIVE","<font color='#8e6aac'>Song of the Winds</font>","5",[9,0],[{id:0,lv:1}],[{
		level:60,sp:25,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"With the Wind Saber's power, bow type attack speed is increased by 4% permanently. "
	},{
		level:61,sp:25,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"With the Wind Saber's power, bow type attack speed is increased by 5% permanently. "
	},{
		level:62,sp:25,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"With the Wind Saber's power, bow type attack speed is increased by 6% permanently. "
	},{
		level:63,sp:25,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"With the Wind Saber's power, bow type attack speed is increased by 7% permanently. "
	},{
		level:64,sp:25,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"With the Wind Saber's power, bow type attack speed is increased by 8% permanently. "
	}]);
	
	sentinel.skill[2] = new Skill("./img_p/sen/IceStorm.webp","ACTIVE","<font color='#8e6aac'>Ice Shower</font>","5",[4,3],[{id:0,lv:1}],[{
		level:61,sp:25,mp:420,power:"35%",casttime:0,cooltime:30,duration:undefined, 
	 	description:"[Awakening Skill] Summon the Wind Saber to shoot an ice feather arrow. Can hit up to 10 enemies with a level 6 freezing effect. Arrow number and damage is increased with skill level. "
	},{
		level:63,sp:25,mp:440,power:"50%",casttime:0,cooltime:25,duration:undefined, 
	 	description:"[Awakening Skill] Summon the Wind Saber to shoot an ice feather arrow. Can hit up to 12 enemies with a level 7 freezing effect. Arrow number and damage is increased with skill level. "
	},{
		level:65,sp:25,mp:460,power:"60%",casttime:0,cooltime:20,duration:undefined, 
	 	description:"[Awakening Skill] Summon the Wind Saber to shoot an ice feather arrow. Can hit up to 14 enemies with a level 8 freezing effect. Arrow number and damage is increased with skill level. "
	},{
		level:67,sp:25,mp:480,power:"70%",casttime:0,cooltime:17,duration:undefined, 
	 	description:"[Awakening Skill] Summon the Wind Saber to shoot an ice feather arrow. Can hit up to 16 enemies with a level 9 freezing effect. Arrow number and damage is increased with skill level. "
	},{
		level:69,sp:25,mp:500,power:"80%",casttime:0,cooltime:15,duration:undefined, 
	 	description:"[Awakening Skill] Summon the Wind Saber to shoot an ice feather arrow. Can hit up to 18 enemies with a level 10 freezing effect. Arrow number and damage is increased with skill level. "
	}]);
	
	sentinel.skill[3] = new Skill("./img_p/sen/PhoenixStorm.webp","ACTIVE","<font color='#8e6aac'>Multi Stripe</font>","1",[6,3],[{id:0,lv:1}],[{
		level:60,sp:60,mp:undefined,power:"100%",casttime:0,cooltime:300,duration:undefined, 
	 	description:"[Ultimate Skill] The Ultimate Sentinel Technique. Rains a hail of razor sharp feathers onto the battlefield. Attacks up to 20 monsters with 60 feathers and a final bombing attack by Wind Saber. During casting, character will be unbeatable. "
	}]);
	
	sentinel.skill[4] = new Skill("./img_p/sen/WindBlade.webp","ACTIVE","<font color='#8e6aac'>Wind Blade</font>","5",[4,5],[{id:2,lv:1}],[{
		level:62,sp:25,mp:420,power:"100%",casttime:0,cooltime:30,duration:undefined, 
	 	description:"[Awakening Skill] Summon the Wind Saber to attack up to 10 enemies 3 times in the range with a sharp wind. Targets will suffer a level 6 bleeding effect. "
	},{
		level:64,sp:25,mp:440,power:"115%",casttime:0,cooltime:25,duration:undefined, 
	 	description:"[Awakening Skill] Summon the Wind Saber to attack up to 12 enemies 4 times in the range with a sharp wind. Targets will suffer a level 7 bleeding effect "
	},{
		level:66,sp:25,mp:460,power:"130%",casttime:0,cooltime:20,duration:undefined, 
	 	description:"[Awakening Skill] Summon the Wind Saber to attack up to 14 enemies 5 times in the range with a sharp wind. Targets will suffer a level 8 bleeding effect. "
	},{
		level:68,sp:25,mp:480,power:"145%",casttime:0,cooltime:17,duration:undefined, 
	 	description:"[Awakening Skill] Summon the Wind Saber to attack up to 16 enemies 6 times in the range with a sharp wind. Targets will suffer a level 9 bleeding effect. "
	},{
		level:70,sp:25,mp:500,power:"160%",casttime:0,cooltime:15,duration:undefined, 
	 	description:"[Awakening Skill] Summon the Wind Saber to attack up to 18 enemies 7 times in the range with a sharp wind. Targets will suffer a level 7 bleeding effect. "
	}]);	
	
	sentinel.skill[5] = new Skill("./img_p/sen/HookShot.webp","ACTIVE","<font color='#8e6aac'>Wire Action</font>","5",[1,0],[],[{
		level:60,sp:20,mp:80,power:undefined,casttime:0,cooltime:15,duration:undefined, 
	 	description:"Throw 5 hooks forward to drags targets towards you while inflicting a level 1 stun. The higher the skill level, the greater the efficiency. One hook can drag 2 enemies. "
	},{
		level:62,sp:20,mp:100,power:undefined,casttime:0,cooltime:12.5,duration:undefined, 
	 	description:"Throw 5 hooks forward to drags targets towards you while inflicting a level 1 stun. The higher the skill level, the greater the efficiency. One hook can drag 3 enemies. "
	},{
		level:64,sp:20,mp:120,power:undefined,casttime:0,cooltime:10,duration:undefined, 
	 	description:"Throw 5 hooks forward to drags targets towards you while inflicting a level 2 stun. The higher the skill level, the greater the efficiency. One hook can drag 4 enemies. "
	},{
		level:66,sp:20,mp:140,power:undefined,casttime:0,cooltime:7.5,duration:undefined, 
	 	description:"Throw 5 hooks forward to drags targets towards you while inflicting a level 2 stun. The higher the skill level, the greater the efficiency. One hook can drag 5 enemies. "
	},{
		level:68,sp:20,mp:160,power:undefined,casttime:0,cooltime:5,duration:undefined, 
	 	description:"Throw 5 hooks forward to drags targets towards you while inflicting a level 3 stun. The higher the skill level, the greater the efficiency. One hook can drag 6 enemies. "
	}]);
	
	sentinel.skill[6] = new Skill("./img_p/sen/ChargeTheAwakening.webp","toggle","<font color='#8e6aac'>Awakening Charge</font>","3",[1,7],[],[{
		level:60,sp:10,mp:35,power:undefined,casttime:0,cooltime:3,duration:undefined, 
		description:"Consumes 20% MP to recharge 14% of the Awakening bar every 3 seconds."
	 },{
	 	level:62,sp:10,mp:35,power:undefined,casttime:0,cooltime:3,duration:undefined, 
		description:"Consumes 20% MP to recharge 17% of the Awakening bar every 3 seconds."
	 },{
		level:68,sp:10,mp:35,power:undefined,casttime:0,cooltime:3,duration:undefined, 
		description:"Consumes 20% MP to recharge 20% of the Awakening bar every 3 seconds."
	}]);


//Archer - Marksman - Specialist - Destroyer
	var ranger = {
		name: "Marksman",
		skill: new Array(),
		image: "./img_p/rangerbg.webp"
	};
	
    ranger.skill[0] = new Skill("./img_p/mrk/crossshot.webp","ACTIVE","<font color='#8e6aac'>Crux Shot</font>","5",[3,1],[],[{
		level:20,sp:15,mp:22,power:undefined,casttime:0,cooltime:0.1,duration:undefined, 
	 	description:"Amplify Physical Attack Power by 12% for the next attack. Increase critical rate by 10% and attack rate will be increased. Damage of skill attack is also affected."
	},{
		level:24,sp:15,mp:24,power:undefined,casttime:0,cooltime:0.1,duration:undefined, 
	 	description:"Amplify Physical Attack Power by 14% for the next attack. Increase critical rate by 12% and attack rate will be increased. Damage of skill attack is also affected."
	},{
		level:28,sp:15,mp:26,power:undefined,casttime:0,cooltime:0.1,duration:undefined, 
	 	description:"Amplify Physical Attack Power by 16% for the next attack. Increase critical rate by 14% and attack rate will be increased. Damage of skill attack is also affected."
	},{
		level:32,sp:15,mp:28,power:undefined,casttime:0,cooltime:0.1,duration:undefined, 
	 	description:"Amplify Physical Attack Power by 18% for the next attack. Increase critical rate by 16% and attack rate will be increased. Damage of skill attack is also affected."
	},{
		level:36,sp:15,mp:30,power:undefined,casttime:0,cooltime:0.1,duration:undefined, 
	 	description:"Amplify Physical Attack Power by 20% for the next attack. Increase critical rate by 18% and attack rate will be increased. Damage of skill attack is also affected."
	}]);

	ranger.skill[1] = new Skill("./img_p/mrk/randomshot.webp","toggle","<font color='#8e6aac'>Random Shot</font>","5",[3,3],[{id:0,lv:1}],[{
		level:21,sp:15,mp:20,power:"8.0%+20",casttime:0,cooltime:3,duration:undefined, 
	 	description:"Fire 2 arrows simultaneously with 50 additional Physical Attack Power. Normal attacks become double shots for the skill duration. Is a toggle skill which consumes 3 MP per each shot."
	},{
		level:24,sp:15,mp:40,power:"11.0%+20",casttime:0,cooltime:2.5,duration:undefined, 
	 	description:"Fire 2 arrows simultaneously with 50 additional Physical Attack Power. Normal attacks become double shots for the skill duration. Is a toggle skill which consumes 3 MP per each shot."
	},{
		level:27,sp:15,mp:60,power:"14.0%+20",casttime:0,cooltime:2,duration:undefined, 
	 	description:"Fire 2 arrows simultaneously with 50 additional Physical Attack Power. Normal attacks become double shots for the skill duration. Is a toggle skill which consumes 3 MP per each shot."
	},{
		level:30,sp:15,mp:80,power:"17.0%+20",casttime:0,cooltime:1.5,duration:undefined, 
	 	description:"Fire 2 arrows simultaneously with 50 additional Physical Attack Power. Normal attacks become double shots for the skill duration. Is a toggle skill which consumes 3 MP per each shot."
	},{
		level:33,sp:15,mp:100,power:"20.0%+20",casttime:0,cooltime:1,duration:undefined, 
	 	description:"Fire 2 arrows simultaneously with 50 additional Physical Attack Power. Normal attacks become double shots for the skill duration. Is a toggle skill which consumes 3 MP per each shot."
	}]);

	ranger.skill[2] = new Skill("./img_p/mrk/TwoActionShot.webp","toggle","<font color='#8e6aac'>Two Action Shot</font>","10",[3,5],[{id:1,lv:1}],[{
		level:22,sp:20,mp:50,power:"10.0%+100",casttime:0,cooltime:3,duration:undefined, 
	 	description:"Equip armor-piercing arrows to shoot targets through enemies, hitting other enemies behind them. Each shot consumes 8 MP. "
	},{
		level:23,sp:20,mp:80,power:"10.0%+100",casttime:0,cooltime:2.5,duration:undefined, 
	 	description:"Equip armor-piercing arrows to shoot targets through enemies, hitting other enemies behind them. Each shot consumes 9 MP. "
	},{
		level:25,sp:20,mp:100,power:"10.0%+100",casttime:0,cooltime:2,duration:undefined, 
	 	description:"Equip armor-piercing arrows to shoot targets through enemies, hitting other enemies behind them. Each shot consumes 10 MP. "
	},{
		level:27,sp:20,mp:120,power:"10.0%+100",casttime:0,cooltime:1.5,duration:undefined, 
	 	description:"Equip armor-piercing arrows to shoot targets through enemies, hitting other enemies behind them. Each shot consumes 11 MP. "
	},{
		level:29,sp:20,mp:140,power:"10.0%+100",casttime:0,cooltime:1,duration:undefined, 
	 	description:"Equip armor-piercing arrows to shoot targets through enemies, hitting other enemies behind them. Each shot consumes 12 MP. "
	},{
		level:"CARD",sp:20,mp:180,power:"10.0%+100",casttime:0,cooltime:1,duration:undefined, 
	 	description:"Equip armor-piercing arrows to shoot targets through enemies, hitting other enemies behind them. Each shot consumes 12 MP. "
	},{
		level:"CARD",sp:20,mp:220,power:"10.0%+100",casttime:0,cooltime:1,duration:undefined, 
	 	description:"Equip armor-piercing arrows to shoot targets through enemies, hitting other enemies behind them. Each shot consumes 12 MP. "
	},{
		level:"CARD",sp:20,mp:260,power:"10.0%+100",casttime:0,cooltime:1,duration:undefined, 
	 	description:"Equip armor-piercing arrows to shoot targets through enemies, hitting other enemies behind them. Each shot consumes 12 MP. "
	},{
		level:"CARD",sp:20,mp:300,power:"10.0%+100",casttime:0,cooltime:1,duration:undefined, 
	 	description:"Equip armor-piercing arrows to shoot targets through enemies, hitting other enemies behind them. Each shot consumes 12 MP. "
	},{
		level:"CARD",sp:20,mp:340,power:"10.0%+100",casttime:0,cooltime:1,duration:undefined, 
	 	description:"Equip armor-piercing arrows to shoot targets through enemies, hitting other enemies behind them. Each shot consumes 12 MP. "
	}]);

	ranger.skill[3] = new Skill("./img_p/mrk/gatlingrush.webp","ACTIVE","<font color='#8e6aac'>Gatling Rush</font>","5",[3,7],[{id:2,lv:1}],[{
		level:23,sp:20,mp:40,power:"25.0%+100",casttime:0,cooltime:12,duration:undefined, 
	 	description:"Take out a machine gun to attack up to 8 standing enemies at once. "
	},{
		level:27,sp:20,mp:50,power:"27.5%+150",casttime:0,cooltime:12,duration:undefined, 
	 	description:"Take out a machine gun to attack up to 9 standing enemies at once. "
	},{
		level:31,sp:20,mp:60,power:"30.0%+200",casttime:0,cooltime:11,duration:undefined, 
	 	description:"Take out a machine gun to attack up to 10 standing and fallen enemies at once. "
	},{
		level:35,sp:20,mp:70,power:"32.5%+250",casttime:0,cooltime:11,duration:undefined, 
	 	description:"Take out a machine gun to attack up to 11 standing and fallen enemies at once. "
	},{
		level:39,sp:20,mp:80,power:"35.0%+300",casttime:0,cooltime:10,duration:undefined, 
	 	description:"Take out a machine gun to attack up to 12 standing and fallen enemies at once. "
	}]);

	ranger.skill[4] = new Skill("./img_p/mrk/HomingMissle.webp","ACTIVE","<font color='#8e6aac'>Homing Missile</font>","10",[5,1],[],[{
		level:20,sp:15,mp:40,power:"90.0%+150",casttime:0,cooltime:2,duration:undefined, 
	 	description:"Fires a homing bazooka at up to 2 enemies in mid air. "
	},{
		level:23,sp:15,mp:45,power:"115.0%+180",casttime:0,cooltime:2,duration:undefined, 
	 	description:"Fires a homing bazooka at up to 4 enemies in mid air. "
	},{
		level:26,sp:15,mp:50,power:"140.0%+210",casttime:0,cooltime:2,duration:undefined, 
	 	description:"Fires a homing bazooka at up to 6 enemies in mid air. "
	},{
		level:29,sp:15,mp:55,power:"165.0%+240",casttime:0,cooltime:2,duration:undefined, 
	 	description:"Fires a homing bazooka at up to 8 enemies in mid air. "
	},{
		level:32,sp:15,mp:60,power:"190.0%+270",casttime:0,cooltime:2,duration:undefined, 
	 	description:"Fires a homing bazooka at up to 10 enemies in mid air. "
	},{
		level:"CARD",sp:15,mp:65,power:"215.0%+300",casttime:0,cooltime:2,duration:undefined, 
	 	description:"Fires a homing bazooka at up to 12 enemies in mid air. "
	},{
		level:"CARD",sp:15,mp:70,power:"240.0%+330",casttime:0,cooltime:2,duration:undefined, 
	 	description:"Fires a homing bazooka at up to 14 enemies in mid air. "
	},{
		level:"CARD",sp:15,mp:75,power:"265.0%+360",casttime:0,cooltime:2,duration:undefined, 
	 	description:"Fires a homing bazooka at up to 16 enemies in mid air. "
	},{
		level:"CARD",sp:15,mp:80,power:"290.0%+390",casttime:0,cooltime:2,duration:undefined, 
	 	description:"Fires a homing bazooka at up to 18 enemies in mid air. "
	},{
		level:"CARD",sp:15,mp:85,power:"315.0%+420",casttime:0,cooltime:2,duration:undefined, 
	 	description:"Fires a homing bazooka at up to 20 enemies in mid air. "
	}]);

	ranger.skill[5] = new Skill("./img_p/mrk/bazuka.webp","ACTIVE","<font color='#8e6aac'>RPG-7</font>","10",[5,5],[{id:4,lv:1}],[{
		level:22,sp:15,mp:40,power:"70.0%+300",casttime:0,cooltime:5,duration:undefined, 
	 	description:"Fire a bazooka that knocks down to 3 standing enemy targets. "
	},{
		level:25,sp:15,mp:45,power:"85.0%+365",casttime:0,cooltime:5,duration:undefined, 
	 	description:"Fire a bazooka that knocks down to 4 standing enemy targets. "
	},{
		level:28,sp:15,mp:50,power:"100.0%+430",casttime:0,cooltime:5,duration:undefined, 
	 	description:"Fire a bazooka that launches up to 5 standing and fallen enemy targets into the air. "
	},{
		level:31,sp:15,mp:55,power:"115.0%+495",casttime:0,cooltime:5,duration:undefined, 
	 	description:"Fire a bazooka that launches up to 6 standing and fallen enemy targets into the air. "
	},{
		level:34,sp:15,mp:60,power:"130.0%+560",casttime:0,cooltime:5,duration:undefined, 
	 	description:"Fire a bazooka that launches up to 7 standing and fallen enemy targets into the air. "
	},{
		level:"CARD",sp:15,mp:65,power:"145.0%+625",casttime:0,cooltime:5,duration:undefined, 
	 	description:"Fire a bazooka that launches up to 8 standing and fallen enemy targets into the air. "
	},{
		level:"CARD",sp:15,mp:70,power:"160.0%+690",casttime:0,cooltime:5,duration:undefined, 
	 	description:"Fire a bazooka that launches up to 9 standing and fallen enemy targets into the air. "
	},{
		level:"CARD",sp:15,mp:75,power:"175.0%+755",casttime:0,cooltime:5,duration:undefined, 
	 	description:"Fire a bazooka that launches up to 10 standing and fallen enemy targets into the air. "
	},{
		level:"CARD",sp:15,mp:80,power:"190.0%+820",casttime:0,cooltime:5,duration:undefined, 
	 	description:"Fire a bazooka that launches up to 11 standing and fallen enemy targets into the air. "
	},{
		level:"CARD",sp:15,mp:85,power:"205.0%+885",casttime:0,cooltime:5,duration:undefined, 
	 	description:"Fire a bazooka that launches up to 12 standing and fallen enemy targets into the air. "
	}]);

	ranger.skill[6] = new Skill("./img_p/mrk/autoshot.webp","ACTIVE","<font color='#8e6aac'>Autoshot System</font>","5",[5,9],[{id:5,lv:1}],[{
		level:24,sp:35,mp:50,power:"150.0%",casttime:0,cooltime:49,duration:9, 
	 	description:"Summon a tank that attacks any enemy in its range for 9 seconds. "
	},{
		level:28,sp:35,mp:75,power:"200.0%",casttime:0,cooltime:49,duration:12, 
	 	description:"Summon a tank that attacks any enemy in its range for 12 seconds. "
	},{
		level:32,sp:35,mp:100,power:"250.0%",casttime:0,cooltime:49,duration:15, 
	 	description:"Summon a tank that attacks any enemy in its range for 15 seconds. "
	},{
		level:36,sp:35,mp:125,power:"300.0%",casttime:0,cooltime:49,duration:18, 
	 	description:"Summon a tank that attacks any enemy in its range for 18 seconds. "
	},{
		level:40,sp:35,mp:150,power:"350.0%",casttime:0,cooltime:49,duration:21, 
	 	description:"Summon a tank that attacks any enemy in its range for 21 seconds. "
	}]);

	ranger.skill[7] = new Skill("./img_p/mrk/bazukaupgrade.webp","PASSIVE","<font color='#8e6aac'>Accelerator Tuning</font>","5",[6,3],[{id:4,lv:1}],[{
		level:21,sp:10,mp:undefined,power:"5.0%+200",casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Increase fuel efficiency in the rocket to ensure more damage. "
	},{
		level:24,sp:10,mp:undefined,power:"7.0%+250",casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Increase fuel efficiency in the rocket to ensure more damage."
	},{
		level:27,sp:10,mp:undefined,power:"9.0%+300",casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Increase fuel efficiency in the rocket to ensure more damage. "
	},{
		level:30,sp:10,mp:undefined,power:"11.0%+350",casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Increase fuel efficiency in the rocket to ensure more damage. "
	},{
		level:33,sp:10,mp:undefined,power:"13.0%+400",casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Increase fuel efficiency in the rocket to ensure more damage. "
	}]);

	ranger.skill[8] = new Skill("./img_p/mrk/handgranade.webp","ACTIVE","<font color='#8e6aac'>H.E. Grenade</font>","10",[1,7],[],[{
		level:23,sp:20,mp:70,power:"60.0%+120",casttime:0,cooltime:5,duration:undefined, 
	 	description:"Throw a grenade that will damage up to 3 standing enemies. "
	},{
		level:26,sp:20,mp:85,power:"70.0%+150",casttime:0,cooltime:4.5,duration:undefined, 
	 	description:"Throw a grenade that will damage up to 4 standing enemies. "
	},{
		level:29,sp:20,mp:100,power:"80.0%+180",casttime:0,cooltime:4,duration:undefined, 
	 	description:"Throw 2 grenades that will damage up to 5 standing or fallen enemies. "
	},{
		level:32,sp:20,mp:115,power:"90.0%+210",casttime:0,cooltime:3.5,duration:undefined, 
	 	description:"Throw 2 grenades that will damage up to 6 standing or fallen enemies. "
	},{
		level:35,sp:20,mp:130,power:"100.0%+240",casttime:0,cooltime:3,duration:undefined, 
	 	description:"Throw 3 grenades that will damage up to 7 standing or fallen enemies. "
	},{
		level:"CARD",sp:20,mp:145,power:"110.0%+240",casttime:0,cooltime:2.5,duration:undefined, 
	 	description:"Throw 3 grenades that will damage up to 8 standing or fallen enemies. "
	},{
		level:"CARD",sp:20,mp:160,power:"120.0%+270",casttime:0,cooltime:2,duration:undefined, 
	 	description:"Throw 3 grenades that will damage up to 9 standing or fallen enemies. "
	},{
		level:"CARD",sp:20,mp:175,power:"130.0%+300",casttime:0,cooltime:1.5,duration:undefined, 
	 	description:"Throw 3 grenades that will damage up to 10 standing or fallen enemies. "
	},{
		level:"CARD",sp:20,mp:190,power:"140.0%+330",casttime:0,cooltime:1.5,duration:undefined, 
	 	description:"Throw 3 grenades that will damage up to 11 standing or fallen enemies. "
	},{
		level:"CARD",sp:20,mp:205,power:"150.0%+360",casttime:0,cooltime:1.5,duration:undefined, 
	 	description:"Throw 3 grenades that will damage up to 12 standing or fallen enemies. "
	}]);

	ranger.skill[9] = new Skill("./img_p/mrk/composite.webp","PASSIVE","<font color='#8e6aac'>Composite</font>","5",[1,9],[{id:8,lv:1}],[{
		level:25,sp:15,mp:undefined,power:"10.0%+100",casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Use higher grade gunpowder to upgrade damage of H.E. Grenade. "
	},{
		level:28,sp:15,mp:undefined,power:"13.0%+120",casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Use higher grade gunpowder to upgrade damage of H.E. Grenade. "
	},{
		level:31,sp:15,mp:undefined,power:"16.0%+140",casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Use higher grade gunpowder to upgrade damage of H.E. Grenade. "
	},{
		level:34,sp:15,mp:undefined,power:"19.0%+160",casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Use higher grade gunpowder to upgrade damage of H.E. Grenade. "
	},{
		level:37,sp:15,mp:undefined,power:"22.0%+180",casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Use higher grade gunpowder to upgrade damage of H.E. Grenade. "
	}]);

	ranger.skill[10] = new Skill("./img_p/mrk/airshoting.webp","ACTIVE","<font color='#8e6aac'>Aerial Flurry</font>","5",[7,1],[],[{
		level:20,sp:15,mp:5,power:"6.0%+10",casttime:0,cooltime:0.1,duration:undefined, 
	 	description:"Fire arrows downward 1 time in the air by pressing forward directional key and attack button in the air."
	},{
		level:22,sp:15,mp:6,power:"7.5%+25",casttime:0,cooltime:0.1,duration:undefined, 
	 	description:"Fire arrows downward 2 time in the air by pressing forward directional key and attack button in the air."
	},{
		level:24,sp:15,mp:7,power:"9.0%+40",casttime:0,cooltime:0.1,duration:undefined, 
	 	description:"Fire arrows downward 3 time in the air by pressing forward directional key and attack button in the air."
	},{
		level:26,sp:15,mp:8,power:"10.5%+55",casttime:0,cooltime:0.1,duration:undefined, 
	 	description:"Fire arrows downward 4 time in the air by pressing forward directional key and attack button in the air."
	},{
		level:28,sp:15,mp:9,power:"12.0%+70",casttime:0,cooltime:0.1,duration:undefined, 
	 	description:"Fire arrows downward 5 time in the air by pressing forward directional key and attack button in the air."
	}]);
	

//Archer - Marksman - Specialist - Destroyer
	var sniper = {
		name: "Specialist",
		skill: new Array(),
		image: "./img_p/sniperbg.webp"
	};
	
	sniper.skill[0] = new Skill("./img_p/spe/forcus.webp","PASSIVE","<font color='#8e6aac'>Focus</font>","5",[2,0],[],[{
		level:40,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Increases Critical Rate by 1.0%"
	},{
		level:44,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Increases Critical Rate by 1.5%"
	},{
		level:48,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Increases Critical Rate by 2.0%"
	},{
		level:52,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Increases Critical Rate by 2.5%"
	},{
		level:56,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Increases Critical Rate by 3.0%"
	}]);

	sniper.skill[1] = new Skill("./img_p/spe/flashbang.webp","ACTIVE","<font color='#8e6aac'>Flashbang</font>","5",[2,2],[{id:0,lv:1}],[{
		level:41,sp:15,mp:40,power:undefined,casttime:0,cooltime:10,duration:2, 
	 	description:"Throw a flashbang at 3 enemies and put them in Blind Effect. At skill level 3, fallen enemies can also be attacked."
	},{
		level:44,sp:15,mp:45,power:undefined,casttime:0,cooltime:10,duration:2, 
	 	description:"Throw a flashbang at 4 enemies and put them in Blind Effect. At skill level 3, fallen enemies can also be attacked."
	},{
		level:47,sp:15,mp:50,power:undefined,casttime:0,cooltime:10,duration:2, 
	 	description:"Throw a flashbang at 5 standing or fallen enemies and put them in Blind Effect."
	},{
		level:50,sp:15,mp:55,power:undefined,casttime:0,cooltime:10,duration:2, 
	 	description:"Throw a flashbang at 6 standing or fallen enemies and put them in Blind Effect."
	},{
		level:53,sp:15,mp:60,power:undefined,casttime:0,cooltime:10,duration:2, 
	 	description:"Throw a flashbang at 7 standing or fallen enemies and put them in Blind Effect."
	}]);

	sniper.skill[2] = new Skill("./img_p/spe/cursedbomber.webp","ACTIVE","<font color='#8e6aac'>Caused Bomber</font>","5",[1,4],[{id:1,lv:1}],[{
		level:40,sp:15,mp:50,power:"60.0%+100",casttime:0,cooltime:5,duration:undefined, 
	 	description:"Attacks up to 3 standing enemies and cast Lv.1 Curse on them with 60% chances. Cursed target\'s MAX HP/MP and all ability will be decreased 10% for 30 seconds. Above skill level 3, fallen enemies can be attacked also."
	},{
		level:45,sp:15,mp:55,power:"70.0%+160",casttime:0,cooltime:5,duration:undefined, 
	 	description:"Attacks up to 4 standing enemies and cast Lv.2 Curse on them with 60% chances. Cursed target\'s MAX HP/MP and all ability will be decreased 13% for 35 seconds. Above skill level 3, fallen enemies can be attacked also."
	},{
		level:48,sp:15,mp:60,power:"80.0%+220",casttime:0,cooltime:5,duration:undefined, 
	 	description:"Attacks up to 5 either standing or fallen enemies and cast Lv.3 Curse on them with 60% chances. Cursed target\'s MAX HP/MP and all ability will be decreased 16% for 40 seconds."
	},{
		level:51,sp:15,mp:65,power:"90.0%+280",casttime:0,cooltime:5,duration:undefined, 
	 	description:"Attacks up to 6 either standing or fallen enemies and cast Lv.4 Curse on them with 60% chances. Cursed target\'s MAX HP/MP and all ability will be decreased 19% for 45 seconds."
	},{
		level:54,sp:15,mp:70,power:"100.0%+340",casttime:0,cooltime:5,duration:undefined, 
	 	description:"Attacks up to 7 either standing or fallen enemies and cast Lv.5 Curse on them with 60% chances. Cursed target\'s MAX HP/MP and all ability will be decreased 22% for 50 seconds."
	}]);

	sniper.skill[3] = new Skill("./img_p/spe/firegranade.webp","ACTIVE","<font color='#8e6aac'>Fire Grenade</font>","5",[3,4],[{id:1,lv:1}],[{
		level:40,sp:15,mp:40,power:"60.0%+100",casttime:0.5,cooltime:10,duration:undefined, 
	 	description:"Throw a flame bomb to attack up to 6 standing enemies and let them have Lv. 1 Burn status by 50% chance. Victim\'s MAX MP with Burn status will be decreased by 7% and HP/MP also will be decreased by -5 per second, for 10 seconds duration."
	},{
		level:45,sp:15,mp:45,power:"70.0%+160",casttime:0.5,cooltime:10,duration:undefined, 
	 	description:"Throw a flame bomb to attack up to 8 standing enemies and let them have Lv. 2 Burn status by 55% chance. Victim\'s MAX MP with Burn status will be decreased by 9% and HP/MP also will be decreased by -7 per second, for 12 seconds duration."
	},{
		level:48,sp:15,mp:50,power:"80.0%+220",casttime:0.5,cooltime:10,duration:undefined, 
	 	description:"Throw a flame bomb to attack up to 10 standing enemies and let them have Lv. 3 Burn status by 60% chance. Victim\'s MAX MP with Burn status will be decreased by 11% and HP/MP also will be decreased by -9 per second, for 14 seconds duration."
	},{
		level:51,sp:15,mp:55,power:"90.0%+280",casttime:0.5,cooltime:10,duration:undefined, 
	 	description:"Throw a flame bomb to attack up to 12 standing enemies and let them have Lv. 4 Burn status by 65% chance. Victim\'s MAX MP with Burn status will be decreased by 13% and HP/MP also will be decreased by -11 per second, for 16 seconds duration."
	},{
		level:54,sp:15,mp:60,power:"100.0%+340",casttime:0.5,cooltime:10,duration:undefined, 
	 	description:"Throw a flame bomb to attack up to 14 standing enemies and let them have Lv. 5 Burn status by 70% chance. Victim\'s MAX MP with Burn status will be decreased by 15% and HP/MP also will be decreased by -13 per second, for 18 seconds duration."
	}]);

	sniper.skill[4] = new Skill("./img_p/spe/carpetbombing.webp","ACTIVE","<font color='#8e6aac'>Carpet Bombing</font>","5",[3,8],[{id:3,lv:2}],[{
		level:46,sp:20,mp:80,power:"150.0%+500",casttime:1,cooltime:30,duration:undefined, 
	 	description:"Call for air-strike back up that bombs up to 20 standing enemies in the line where caster is standing and launches them high into the air. Above level 3, fallen enemies can be attacked also. "
	},{
		level:49,sp:20,mp:85,power:"180.0%+700",casttime:1,cooltime:30,duration:undefined, 
	 	description:"Call for air-strike back up that bombs up to 20 standing enemies in the line where caster is standing and launches them high into the air. Above level 3, fallen enemies can be attacked also. "
	},{
		level:52,sp:20,mp:90,power:"210.0%+900",casttime:1,cooltime:30,duration:undefined, 
	 	description:"Call for air-strike back up that bombs up to 20 standing enemies in the line where caster is standing and launches them high into the air. Above level 3, fallen enemies can be attacked also. "
	},{
		level:55,sp:20,mp:95,power:"240.0%+1100",casttime:1,cooltime:30,duration:undefined, 
	 	description:"Call for air-strike back up that bombs up to 20 standing enemies in the line where caster is standing and launches them high into the air. Above level 3, fallen enemies can be attacked also. "
	},{
		level:58,sp:20,mp:100,power:"270.0%+1300",casttime:1,cooltime:30,duration:undefined, 
	 	description:"Call for air-strike back up that bombs up to 20 standing enemies in the line where caster is standing and launches them high into the air. Above level 3, fallen enemies can be attacked also. "
	}]);

	sniper.skill[5] = new Skill("./img_p/spe/AdditionalBombing.webp","PASSIVE","<font color='#8e6aac'>Additional Bombing</font>","1",[3,10],[{id:4,lv:1}],[{
		level:47,sp:15,mp:undefined,power:undefined,casttime:0,cooltime:undefined,duration:undefined, 
	 	description:"Adds another line to Carpet Bombing as well as increases range and damage. "
	}]);

	sniper.skill[6] = new Skill("./img_p/spe/ASSupgrade.webp","PASSIVE","<font color='#8e6aac'>ASS Upgrade</font>","5",[5,0],[],[{
		level:40,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Increases Damage 30% and Rate of Fire for Autoshot System"
	},{
		level:44,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Increases Damage 50% and Rate of Fire for Autoshot System"
	},{
		level:48,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Increases Damage 70% and Rate of Fire for Autoshot System"
	},{
		level:52,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Increases Damage 90% and Rate of Fire for Autoshot System"
	},{
		level:56,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Increases Damage 110% and Rate of Fire for Autoshot System"
	}]);

	sniper.skill[7] = new Skill("./img_p/spe/valkan300.webp","ACTIVE","<font color='#8e6aac'>Vulcan 300</font>","5",[5,4],[{id:6,lv:1}],[{
		level:43,sp:20,mp:160,power:"400%",casttime:0.5,cooltime:120,duration:undefined, 
	 	description:"Set up a rocket launcher on the ground which fires every 0.5 seconds. "
	},{
		level:46,sp:20,mp:200,power:"450%",casttime:0.5,cooltime:120,duration:undefined, 
	 	description:"Set up a rocket launcher on the ground which fires every 0.5 seconds. "
	},{
		level:49,sp:20,mp:240,power:"500%",casttime:0.5,cooltime:120,duration:undefined, 
	 	description:"Set up a rocket launcher on the ground which fires every 0.5 seconds. "
	},{
		level:52,sp:20,mp:280,power:"550%",casttime:0.5,cooltime:120,duration:undefined, 
	 	description:"Set up a rocket launcher on the ground which fires every 0.5 seconds. "
	},{
		level:55,sp:20,mp:320,power:"600%",casttime:0.5,cooltime:120,duration:undefined, 
	 	description:"Set up a rocket launcher on the ground which fires every 0.5 seconds. "
	}]);

	sniper.skill[8] = new Skill("./img_p/spe/camouflage.webp","toggle","<font color='#8e6aac'>Camouflage</font>","5",[7,2],[],[{
		level:41,sp:10,mp:30,power:undefined,casttime:0.5,cooltime:20,duration:10, 
	 	description:"Hide oneself upto 10 seconds. Cancelled once caster moves or attacks."
	},{
		level:44,sp:10,mp:40,power:undefined,casttime:0.5,cooltime:20,duration:10, 
	 	description:"Hide oneself upto 11 seconds. Cancelled once caster moves or attacks."
	},{
		level:47,sp:10,mp:50,power:undefined,casttime:0.5,cooltime:20,duration:11, 
	 	description:"Hide oneself upto 12 seconds. Cancelled once caster moves or attacks."
	},{
		level:50,sp:10,mp:60,power:undefined,casttime:0.5,cooltime:20,duration:11, 
	 	description:"Hide oneself upto 13 seconds. Cancelled once caster moves or attacks."
	},{
		level:53,sp:10,mp:70,power:undefined,casttime:0.5,cooltime:20,duration:11, 
	 	description:"Hide oneself upto 14 seconds. Cancelled once caster moves or attacks."
	}]);

	sniper.skill[9] = new Skill("./img_p/spe/adrenaline.webp","ACTIVE","<font color='#8e6aac'>Adrenaline</font>","5",[7,4],[{id:8,lv:1}],[{
		level:42,sp:15,mp:40,power:undefined,casttime:0.5,cooltime:10,duration:30, 
	 	description:"Increases attack speed by 15%. "
	},{
		level:46,sp:15,mp:45,power:undefined,casttime:0.5,cooltime:10,duration:35, 
	 	description:"Increases attack speed by 20%. "
	},{
		level:50,sp:15,mp:50,power:undefined,casttime:0.5,cooltime:10,duration:40, 
	 	description:"Increases attack speed by 25%. "
	},{
		level:54,sp:15,mp:55,power:undefined,casttime:0.5,cooltime:10,duration:45, 
	 	description:"Increases attack speed by 30%. "
	},{
		level:58,sp:15,mp:60,power:undefined,casttime:0.5,cooltime:10,duration:50, 
	 	description:"Increases attack speed by 35%. "
	}]);

	sniper.skill[10] = new Skill("./img_p/spe/atropine.webp","ACTIVE","<font color='#8e6aac'>Atropine</font>","1",[7,6],[{id:9,lv:1}],[{
		level:43,sp:10,mp:100,power:undefined,casttime:0,cooltime:10,duration:undefined, 
	 	description:"Take strong antidote to clear poison status and 1 debuff. But it could bring side effects when overdosed."
	}]);

	sniper.skill[11] = new Skill("./img_p/spe/sniping.webp","ACTIVE","<font color='#8e6aac'>Sniping</font>","5",[7,0],[],[{
		level:40,sp:15,mp:40,power:undefined,casttime:0,cooltime:12,duration:undefined, 
	 	description:"Snipe 2 standing or fallen enemies 2 times with twice accuracy. The arrows will have 5x attack power compared to normal arrows."
	},{
		level:42,sp:15,mp:60,power:undefined,casttime:0,cooltime:11,duration:undefined, 
	 	description:"Snipe 2 standing or fallen enemies 3 times with twice accuracy. The arrows will have 5x attack power compared to normal arrows."
	},{
		level:44,sp:15,mp:80,power:undefined,casttime:0,cooltime:10,duration:undefined, 
	 	description:"Snipe 2 standing or fallen enemies 4 times with twice accuracy. The arrows will have 5x attack power compared to normal arrows."
	},{
		level:46,sp:15,mp:100,power:undefined,casttime:0,cooltime:9,duration:undefined, 
	 	description:"Snipe 2 standing or fallen enemies 5 times with twice accuracy. The arrows will have 5x attack power compared to normal arrows."
	},{
		level:48,sp:15,mp:120,power:undefined,casttime:0,cooltime:8,duration:undefined, 
	 	description:"Snipe 2 standing or fallen enemies 6 times with twice accuracy. The arrows will have 5x attack power compared to normal arrows."
	}]);	

//Archer - Marksman - Specialist - Destroyer

	var destroyer = { 
		name:"Destroyer",
		skill:new Array(),
		image:"./img_p/destroyerbg.webp"
	};
	
	destroyer.skill[0] = new Skill("./img_p/des/Awakening.webp","PASSIVE","<font color='#8e6aac'>Awakening</font>","1",[5,0],[],[{
		level:60,sp:1,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Whenever you use MP during battle, your Awakening bar will fill up. This allows you to perform certain special skills which consume Awakening points. These skills also consume MP, however the MP they consume does not fill your awakening bar. "
	}]);
	
	destroyer.skill[1] = new Skill("./img_p/des/N2.webp","PASSIVE","<font color='#8e6aac'>N2 Ammunition Strengthen</font>","5",[9,0],[{id:0,lv:1}],[{
		level:60,sp:25,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Change bullets to incendiary ammo.Upon delivering a critical hit there is 59% a level 12 burn status will be inflicted. "
	},{
		level:61,sp:25,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Change bullets to incendiary ammo. Upon delivering a critical hit there is 69% a level 14 burn status will be inflicted. "
	},{
		level:62,sp:25,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Change bullets to incendiary ammo. Upon delivering a critical hit there is 79% a level 16 burn status will be inflicted. "
	},{
		level:63,sp:25,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Change bullets to incendiary ammo. Upon delivering a critical hit there is 89% a level 18 burn status will be inflicted. "
	},{
		level:64,sp:25,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Change bullets to incendiary ammo. Upon delivering a critical hit there is 99% a level 20 burn status will be inflicted. "
	}]);
	
	destroyer.skill[2] = new Skill("./img_p/des/NuclearStrike.webp","ACTIVE","<font color='#8e6aac'>Nuclear</font>","5",[4,3],[{id:0,lv:1}],[{
		level:61,sp:25,mp:300,power:"550%",casttime:0,cooltime:30,duration:undefined, 
	 	description:"[Awakening Skill] Can only be used in mid-air. Attacks up to 12 enemies by throwing down a nuclear missle. Damage and range increased with skill level. "
	},{
		level:63,sp:25,mp:325,power:"650%",casttime:0,cooltime:25,duration:undefined, 
	 	description:"[Awakening Skill] Can only be used in mid-air. Attacks up to 14 enemies by throwing down a nuclear missle. Damage and range increased with skill level. "
	},{
		level:65,sp:25,mp:350,power:"750%",casttime:0,cooltime:20,duration:undefined, 
	 	description:"[Awakening Skill] Can only be used in mid-air. Attacks up to 16 enemies by throwing down a nuclear missle. Damage and range increased with skill level. "
	},{
		level:67,sp:25,mp:375,power:"850%",casttime:0,cooltime:17,duration:undefined, 
	 	description:"[Awakening Skill] Can only be used in mid-air. Attacks up to 18 enemies by throwing down a nuclear missle. Damage and range increased with skill level. "
	},{
		level:69,sp:25,mp:400,power:"950%",casttime:0,cooltime:15,duration:undefined, 
	 	description:"[Awakening Skill] Can only be used in mid-air. Attacks up to 20 enemies by throwing down a nuclear missle. Damage and range increased with skill level. "
	}]);
	
	destroyer.skill[3] = new Skill("./img_p/des/Armageddon.webp","ACTIVE","<font color='#8e6aac'>Ground Zero</font>","1",[6,3],[{id:0,lv:1}],[{
		level:60,sp:60,mp:undefined,power:undefined,casttime:0,cooltime:300,duration:undefined, 
	 	description:"[Ultimate Skill] Summons the automatic assault machine, one of the finest technologies of war. It overwhelms the field and hits up to 20 monsters with a final bomb throw. During casting, character is invulnerable. "
	}]);
	
	destroyer.skill[4] = new Skill("./img_p/des/ParticleCannon.webp","ACTIVE","<font color='#8e6aac'>Particle Cannon</font>","5",[4,5],[{id:2,lv:1}],[{
		level:62,sp:20,mp:300,power:"100%",casttime:0,cooltime:30,duration:undefined, 
	 	description:"[Awakening Skill] Summons a particle cannon, attacking 4 times and hitting up to 8 enemies. Damage and range increased with skill level. "
	},{
		level:64,sp:20,mp:325,power:"125%",casttime:0,cooltime:25,duration:undefined, 
	 	description:"[Awakening Skill] Summons a particle cannon, attacking 5 times and hitting up to 9 enemies. Damage and range increased with skill level. "
	},{
		level:66,sp:20,mp:350,power:"150%",casttime:0,cooltime:20,duration:undefined, 
	 	description:"[Awakening Skill] Summons a particle cannon, attacking 5 times and hitting up to 10 enemies. Damage and range increased with skill level. "
	},{
		level:68,sp:20,mp:375,power:"175%",casttime:0,cooltime:17,duration:undefined, 
	 	description:"[Awakening Skill] Summons a particle cannon, attacking 6 times and hitting up to 11 enemies. Damage and range increased with skill level."
	},{
		level:70,sp:20,mp:400,power:"200%",casttime:0,cooltime:15,duration:undefined, 
	 	description:"[Awakening Skill] Summons a particle cannon, attacking 6 times and hitting up to 12 enemies. Damage and range increased with skill level."
	}]);	
	
	destroyer.skill[5] = new Skill("./img_p/des/SelfBomber.webp","ACTIVE","<font color='#8e6aac'>Self Bomber</font>","5",[1,0],[],[{
		level:60,sp:20,mp:180,power:"500%",casttime:0,cooltime:18,duration:undefined, 
	 	description:"Can only be cast in mid-air. Player is transformed into a bomber and dashes to the ground to hit up to 12 enemies before dashing back. "
	},{
		level:62,sp:20,mp:210,power:"600%",casttime:0,cooltime:15,duration:undefined, 
	 	description:"Can only be cast in mid-air. Player is transformed into a bomber and dashes to the ground to hit up to 14 enemies before dashing back. "
	},{
		level:64,sp:20,mp:240,power:"700%",casttime:0,cooltime:12,duration:undefined, 
	 	description:"Can only be cast in mid-air. Player is transformed into a bomber and dashes to the ground to hit up to 16 enemies before dashing back. Damage and range increased with skill level. "
	},{
		level:66,sp:20,mp:270,power:"800%",casttime:0,cooltime:9,duration:undefined, 
	 	description:"Can only be cast in mid-air. Player is transformed into a bomber and dashes to the ground to hit up to 18 enemies before dashing back. "
	},{
		level:68,sp:20,mp:270,power:"900%",casttime:0,cooltime:6,duration:undefined, 
	 	description:"Can only be cast in mid-air. Player is transformed into a bomber and dashes to the ground to hit up to 20 enemies before dashing back. "
	}]);
	
	destroyer.skill[6] = new Skill("./img_p/des/ChargeTheAwakening.webp","toggle","<font color='#8e6aac'>Awakening Charge</font>","3",[1,7],[],[{
		level:60,sp:10,mp:35,power:undefined,casttime:0,cooltime:3,duration:undefined, 
		description:"Consumes 20% MP to recharge 14% of the Awakening bar every 3 seconds."
	 },{
	 	level:62,sp:10,mp:35,power:undefined,casttime:0,cooltime:3,duration:undefined, 
		description:"Consumes 20% MP to recharge 17% of the Awakening bar every 3 seconds."
	 },{
		level:68,sp:10,mp:35,power:undefined,casttime:0,cooltime:3,duration:undefined, 
		description:"Consumes 20% MP to recharge 20% of the Awakening bar every 3 seconds."
	}]);

//Thief

	var thief = {
		name: "Thief",
		skill: new Array(),
		image: "./img_p/thiefbg.webp"	
	}

	thief.skill[0] = new Skill("./img_p/thi/airlaunch_thief.webp","ACTIVE","<font color='#8e6aac'>Air Combo Launch</font>","5",[3,0],[],[{
		level:1, sp:15, power:"20.0%+40", mp:5,casttime:0, cooltime:2,duration:undefined,
	 	description:"Attacks and launches 2 enemies targets into the air. "
	},{
		level:4, sp:15, power:"23.0%+60", mp:7,casttime:0, cooltime:2,duration:undefined,
	 	description:"Attacks and launches 3 enemies targets into the air. "
	},{
		level:7, sp:15, power:"26.0%+80", mp:9,casttime:0, cooltime:2,duration:undefined,
	 	description:"Attacks and launches 4 enemies targets into the air. "
	},{
		level:10, sp:15, power:"29.0%+100", mp:11,casttime:0, cooltime:2,duration:undefined,
	 	description:"Attacks and launches 5 enemies targets into the air. "
	},{
		level:13, sp:15, power:"32.0%+120", mp:13,casttime:0, cooltime:2,duration:undefined,
		description:"Attacks and launches 6 enemies targets into the air. "
	}]);
	
	thief.skill[1] = new Skill("./img_p/thi/airrush.webp","PASSIVE","<font color='#8e6aac'>Aerial Frenzy</font>","5",[2,2],[{id:0,lv:1}],[{
		level:2, sp:10,mp:undefined,power:"3.5%+10",casttime:undefined,cooltime:undefined,duration:undefined,
	 	description:"Hits 6 airborne enemies with a vicious spinning attack. The more times you press attack button, the more the hits."
	},{
		level:3, sp:10,mp:undefined, power:"5.0%+15",casttime:undefined,cooltime:undefined,duration:undefined,
	 	description:"Hits 6 airborne enemies with a vicious spinning attack. The more times you press attack button, the more the hits."
	},{
		level:4, sp:10,mp:undefined, power:"6.5%+20",casttime:undefined,cooltime:undefined,duration:undefined,
		description:"Hits 6 airborne enemies with a vicious spinning attack. The more times you press attack button, the more the hits."
	},{
		level:5, sp:10,mp:undefined, power:"8.0%+25",casttime:undefined,cooltime:undefined,duration:undefined,
	 	description:"Hits 6 airborne enemies with a vicious spinning attack. The more times you press attack button, the more the hits."
	},{
		level:6, sp:10,mp:undefined, power:"9.5%+30",casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Hits 6 airborne enemies with a vicious spinning attack. The more times you press attack button, the more the hits."
	}]);
	
	thief.skill[2] = new Skill("./img_p/thi/somersault.webp","ACTIVE","<font color='#8e6aac'>Somersault Kick</font>","10",[2,4],[{id:1,lv:1}],[{
		level:3, sp:15, power:"25.0%+80", mp:30, casttime:0, cooltime:5, duration:undefined,
	 	description:"Attacks and launches 3 enemies targets into the air. "
	},{
		level:6, sp:15, power:"30.0%+110", mp:35, casttime:0, cooltime:5, duration:undefined,
	 	description:"Attacks and launches 4 enemies targets into the air. "
	},{
		level:9, sp:15, power:"35.0%+140", mp:40, casttime:0, cooltime:5, duration:undefined,
	 	description:"Attacks and launches 5 enemies targets into the air. "
	},{
		level:12, sp:15, power:"40.0%+170", mp:45, casttime:0, cooltime:5, duration:undefined,
	 	description:"Attacks and launches 6 enemies targets into the air. "
	},{
		level:15, sp:15, power:"45.0%+200", mp:50, casttime:0, cooltime:5, duration:undefined,
	 	description:"Attacks and launches 7 enemies targets into the air. "
	},{
		level:"CARD", sp:15, power:"50.0%+230", mp:55, casttime:0, cooltime:5, duration:undefined,
	 	description:"Attacks and launches 7 enemies targets into the air. "
	},{
		level:"CARD", sp:15, power:"55.0%+260", mp:60, casttime:0, cooltime:5, duration:undefined,
	 	description:"Attacks and launches 7 enemies targets into the air. "
	},{
		level:"CARD", sp:15, power:"60.0%+290", mp:65, casttime:0, cooltime:5, duration:undefined,
	 	description:"Attacks and launches 7 enemies targets into the air. "
	},{
		level:"CARD", sp:15, power:"65.0%+320", mp:70, casttime:0, cooltime:5, duration:undefined,
	 	description:"Attacks and launches 7 enemies targets into the air. "
	},{
		level:"CARD", sp:15, power:"70.0%+350", mp:75, casttime:0, cooltime:5, duration:undefined,
	 	description:"Attacks and launches 7 enemies targets into the air. "
	}]);
	 
	thief.skill[3] = new Skill("./img_p/thi/cutdown_thief.webp","ACTIVE","<font color='#8e6aac'>Cutdown</font>","5",[4,2],[{id:0,lv:1}],[{
		level:2, sp:20, power:"25.0%+60", mp:5, casttime:0, cooltime:3, duration:undefined,
	 	description:"After jumping, slash claws downward to attack. 3 victims are re-launched into the air. "
	},{
		level:5, sp:20, power:"28.0%+80", mp:7, casttime:0, cooltime:3, duration:undefined,
		description:"After jumping, slash claws downward to attack. 4 victims are re-launched into the air. "
	},{
		level:8, sp:20, power:"31.0%+100", mp:9, casttime:0, cooltime:3, duration:undefined,
		description:"After jumping, slash claws downward to attack. 5 victims are re-launched into the air. "
	},{
		level:11, sp:20, power:"34.0%+120", mp:11,casttime:0, cooltime:3, duration:undefined,
		description:"After jumping, slash claws downward to attack. 6 victims are re-launched into the air. "
	},{
		level:14, sp:20, power:"37.0%+140", mp:13, casttime:0, cooltime:3, duration:undefined,
		description:"After jumping, slash claws downward to attack. 7 victims are re-launched into the air. "
	}]);
	 
	thief.skill[4] = new Skill("./img_p/thi/rocketpunch.webp","ACTIVE","<font color='#8e6aac'>Rocket Punch</font>","10",[4,4],[{id:3,lv:1}],[{
		level:3, sp:15, power:"45.0%+100", mp:25,casttime:0, cooltime:5, duration:undefined,
		description:"Fire a rocket punch glove at 4 enemies to give damage and Lv 1 stun effect with 50% chances."
	},{
		level:6, sp:15, power:"60.0%+130", mp:27,casttime:0, cooltime:5, duration:undefined,
		description:"Fire a rocket punch glove at 4 enemies to give damage and Lv 3 stun effect with 55% chances."
	},{
		level:9, sp:15, power:"75.0%+160", mp:29, casttime:0, cooltime:5, duration:undefined,
		description:"Fire a rocket punch glove at 6 enemies to give damage and Lv 5 stun effect with 60% chances."
	},{
		level:12, sp:15, power:"90.0%+190", mp:31, casttime:0, cooltime:5, duration:undefined,
		description:"Fire a rocket punch glove at 6 enemies to give damage and Lv 7 stun effect with 65% chances."
	},{
		level:15, sp:15, power:"105.0%+220", mp:33, casttime:0, cooltime:5, duration:undefined,
	 	description:"Fire a rocket punch glove at 8 enemies to give damage and Lv 9 stun effect with 70% chances."
	},{
		level:"CARD", sp:15, power:"120.0%+250", mp:35, casttime:0, cooltime:5, duration:undefined,
	 	description:"Fire a rocket punch glove at 8 enemies to give damage and Lv 9 stun effect with 75% chances."	
	},{
		level:"CARD", sp:15, power:"135.0%+280", mp:37, casttime:0, cooltime:5, duration:undefined,
	 	description:"Fire a rocket punch glove at 8 enemies to give damage and Lv 9 stun effect with 80% chances."
	},{
		level:"CARD", sp:15, power:"150.0%+310", mp:39, casttime:0, cooltime:5, duration:undefined,
	 	description:"Fire a rocket punch glove at 8 enemies to give damage and Lv 9 stun effect with 85% chances."
	},{
		level:"CARD", sp:15, power:"165.0%+340", mp:41, casttime:0, cooltime:5, duration:undefined,
	 	description:"Fire a rocket punch glove at 8 enemies to give damage and Lv 9 stun effect with 90% chances."
	},{
		level:"CARD", sp:15, power:"180.0%+370", mp:43, casttime:0, cooltime:5, duration:undefined,
	 	description:"Fire a rocket punch glove at 8 enemies to give damage and Lv 9 stun effect with 95% chances."		
	}]);
	 
	thief.skill[5] = new Skill("./img_p/thi/rocketpunchupgrade.webp","PASSIVE","<font color='#8e6aac'>Nozzle Tuning</font>","5",[4,6],[{id:4,lv:1}],[{
		level:5, sp:10, mp:undefined, power:undefined ,casttime:undefined,cooltime:undefined,duration:undefined,
		description:"Upgrade the exhaust system of Rocket Punch to increase damage by 10%."
	},{
		level:8, sp:10, mp:undefined, power:undefined ,casttime:undefined,cooltime:undefined,duration:undefined,
		description:"Upgrade the exhaust system of Rocket Punch to increase damage by 20%."
	},{
		level:11, sp:10, mp:undefined, power:undefined ,casttime:undefined,cooltime:undefined,duration:undefined,
		description:"Upgrade the exhaust system of Rocket Punch to increase damage by 30%."
	},{
		level:14, sp:10, mp:undefined, power:undefined ,casttime:undefined,cooltime:undefined,duration:undefined,
		description:"Upgrade the exhaust system of Rocket Punch to increase damage by 40%."
	},{
		level:17, sp:10, mp:undefined, power:undefined ,casttime:undefined,cooltime:undefined,duration:undefined,
		description:"Upgrade the exhaust system of Rocket Punch to increase damage by 50%."
	}]);
	
	thief.skill[6] = new Skill("./img_p/thi/relaunch_thief.webp","ACTIVE","<font color='#8e6aac'>Re-Launch</font>","5",[6,4],[{id:3,lv:1}],[{
		level:4, sp:15, power:"30.0%+80", mp:5, casttime:0, cooltime:3, duration:undefined,
		description:"Attack and re-launch 2 enemies on the ground into the air. "
	},{
		level:7, sp:15, power:"35.0%+95", mp:7, casttime:0, cooltime:3, duration:undefined,
		description:"Attack and re-launch 3 enemies on the ground into the air. "
	},{
		level:10, sp:15, power:"40.0%+110", mp:9, casttime:0, cooltime:3, duration:undefined,
		description:"Attack and re-launch 4 enemies on the ground into the air. "
	},{
		level:13, sp:15, power:"45.0%+125", mp:11, casttime:0, cooltime:3, duration:undefined,
		description:"Attack and re-launch 5 enemies on the ground into the air. "
	},{
		level:16, sp:15, power:"50,0%+140", mp:13, casttime:0, cooltime:3, duration:undefined,
	 	description:"Attack and re-launch 6 enemies on the ground into the air. "
	}]);
	
	thief.skill[7] = new Skill("./img_p/thi/doubleattack.webp","PASSIVE","<font color='#8e6aac'>Double Attack</font>","5",[7,0],[],[{
		level:1, sp:15, mp:undefined, power:undefined ,casttime:undefined,cooltime:undefined,duration:undefined,
	 	description:"Get a 58% chance to execute extra combo hits during your 2nd and 4th combo attacks. "
	},{
		level:5, sp:15, mp:undefined, power:undefined ,casttime:undefined,cooltime:undefined,duration:undefined,
	 	description:"Get a 61% chance to execute extra combo hits during your 2nd and 4th combo attacks. "
	},{
		level:9, sp:15, mp:undefined, power:undefined ,casttime:undefined,cooltime:undefined,duration:undefined,
	 	description:"Get a 64% chance to execute extra combo hits during your 2nd and 4th combo attacks. "
	},{
		level:13, sp:15, mp:undefined, power:undefined ,casttime:undefined,cooltime:undefined,duration:undefined,
	 	description:"Get a 67% chance to execute extra combo hits during your 2nd and 4th combo attacks. "
	},{
		level:17, sp:15, mp:undefined, power:undefined ,casttime:undefined,cooltime:undefined,duration:undefined,
	 	description:"Get a 70% chance to execute extra combo hits during your 2nd and 4th combo attacks. "
	}]);
	
	thief.skill[8] = new Skill("./img_p/thi/poisonfog.webp","ACTIVE","<font color='#8e6aac'>Venom</font>","10",[8,4],[],[{
		level:4, sp:20, power:undefined, mp:10, casttime:0, cooltime:5,duration:9,
		description:"Smoke out poisonous gas up to 3 enemies, either standing or down on the ground, make them into poisoned status for 9 seconds, give 15 points of damage per second."
	},{
		level:7, sp:20, power:undefined, mp:15, casttime:0, cooltime:5,duration:12,
		description:"Smoke out poisonous gas up to 5 enemies, either standing or down on the ground, make them into poisoned status for 12 seconds, give 30 points of damage per second."
	},{
		level:10, sp:20, power:undefined, mp:20, casttime:0, cooltime:5,duration:15,
		description:"Smoke out poisonous gas up to 7 enemies, either standing or down on the ground, make them into poisoned status for 15 seconds, give 45 points of damage per second."
	},{
		level:13, sp:20, power:undefined, mp:25, casttime:0, cooltime:5,duration:18,
		description:"Smoke out poisonous gas up to 9 enemies, either standing or down on the ground, make them into poisoned status for 18 seconds, give 60 points of damage per second."
	},{
		level:16, sp:20, power:undefined, mp:30, casttime:0, cooltime:5,duration:21,
		description:"Smoke out poisonous gas up to 11 enemies, either standing or down on the ground, make them into poisoned status for 21 seconds, give 75 points of damage per second."
	},{
		level:"CARD", sp:20, power:undefined, mp:35, casttime:0, cooltime:5,duration:24,
		description:"Smoke out poisonous gas up to 12 enemies, either standing or down on the ground, make them into poisoned status for 24 seconds, give 90 points of damage per second."
	},{
		level:"CARD", sp:20, power:undefined, mp:40, casttime:0, cooltime:5,duration:27,
		description:"Smoke out poisonous gas up to 13 enemies, either standing or down on the ground, make them into poisoned status for 27 seconds, give 105 points of damage per second."
	},{
		level:"CARD", sp:20, power:undefined, mp:45, casttime:0, cooltime:5,duration:30,
		description:"Smoke out poisonous gas up to 14 enemies, either standing or down on the ground, make them into poisoned status for 30 seconds, give 120 points of damage per second."
	},{
		level:"CARD", sp:20, power:undefined, mp:50, casttime:0, cooltime:5,duration:33,
		description:"Smoke out poisonous gas up to 15 enemies, either standing or down on the ground, make them into poisoned status for 33 seconds, give 135 points of damage per second."
	},{
		level:"CARD", sp:20, power:undefined, mp:55, casttime:0, cooltime:5,duration:36,
		description:"Smoke out poisonous gas up to 16 enemies, either standing or down on the ground, make them into poisoned status for 36 seconds, give 150 points of damage per second."
	 }]);
	 
	thief.skill[9] = new Skill("./img_p/thi/vitality.webp","ACTIVE","<font color='#8e6aac'>Vitality</font>","10",[6,8],[],[{
		level:4, sp:10, power:undefined, mp:150, casttime:0.3, cooltime:10,duration:900,
		description:"Increase health of oneself and party members within range by 3%. "
	},{
		level:7, sp:10, power:undefined, mp:240, casttime:0.3, cooltime:10,duration:900,
		description:"Increase health of oneself and party members within range by 6%. "	
	},{
		level:10, sp:10, power:undefined, mp:330, casttime:0.3, cooltime:10,duration:900,
		description:"Increase health of oneself and party members within range by 9%. "	
	},{
		level:13, sp:10, power:undefined, mp:420, casttime:0.3, cooltime:10,duration:900,
		description:"Increase health of oneself and party members within range by 12%. "	
	},{
		level:16, sp:10, power:undefined, mp:510, casttime:0.3, cooltime:10,duration:900,
		description:"Increase health of oneself and party members within range by 15%. "	
	},{
		level:"CARD", sp:10, power:undefined, mp:600, casttime:0.3, cooltime:10,duration:900,
		description:"Increase health of oneself and party members within range by 18%. "	
	},{
		level:"CARD", sp:10, power:undefined, mp:690, casttime:0.3, cooltime:10,duration:900,
		description:"Increase health of oneself and party members within range by 21%. "
	},{
		level:"CARD", sp:10, power:undefined, mp:780, casttime:0.3, cooltime:10,duration:900,
		description:"Increase health of oneself and party members within range by 23%. "	
	},{
		level:"CARD", sp:10, power:undefined, mp:870, casttime:0.3, cooltime:10,duration:900,
		description:"Increase health of oneself and party members within range by 25%. "
	},{
		level:"CARD", sp:10, power:undefined, mp:960, casttime:0.3, cooltime:10,duration:900,
		description:"Increase health of oneself and party members within range by 27%. "			
	}]);
	 
	thief.skill[10] = new Skill("./img_p/thi/dexterity.webp","ACTIVE","<font color='#8e6aac'>Dexterity</font>","10",[6,10],[{id:9,lv:1}],[{
		level:7, sp:10, power:undefined, mp:150, casttime:0.3, cooltime:10,duration:900,
		description:"Increase Agility of oneself and party members within range by 9%. "
	},{
		level:10, sp:10, power:undefined, mp:240, casttime:0.3, cooltime:10,duration:900,
		description:"Increase Agility of oneself and party members within range by 13%. "	
	},{
		level:13, sp:10, power:undefined, mp:330, casttime:0.3, cooltime:10,duration:900,
		description:"Increase Agility of oneself and party members within range by 17%. "	
	},{
		level:16, sp:10, power:undefined, mp:420, casttime:0.3, cooltime:10,duration:900,
		description:"Increase Agility of oneself and party members within range by 21%. "	
	},{
		level:19, sp:10, power:undefined, mp:510, casttime:0.3, cooltime:10,duration:900,
		description:"Increase Agility of oneself and party members within range by 25%. "
	},{
		level:"CARD", sp:10, power:undefined, mp:600, casttime:0.3, cooltime:10,duration:900,
		description:"Increase Agility of oneself and party members within range by 28%. "
	},{
		level:"CARD", sp:10, power:undefined, mp:690, casttime:0.3, cooltime:10,duration:900,
		description:"Increase Agility of oneself and party members within range by 31%. "
	},{
		level:"CARD", sp:10, power:undefined, mp:780, casttime:0.3, cooltime:10,duration:900,
		description:"Increase Agility of oneself and party members within range by 34%. "	
	},{
		level:"CARD", sp:10, power:undefined, mp:870, casttime:0.3, cooltime:10,duration:900,
		description:"Increase Agility of oneself and party members within range by 37%. "
	},{
		level:"CARD", sp:10, power:undefined, mp:960, casttime:0.3, cooltime:10,duration:900,
		description:"Increase Agility of oneself and party members within range by 40%. "			
	}]);
	
	thief.skill[11] = new Skill("./img_p/thi/ThiefsAgility.webp","ACTIVE","<font color='#8e6aac'>Thief's Stealth</font>","1",[4,10],[],[{
		level:7,sp:5,mp:30,power:undefined,casttime:0,cooltime:3,duration:600,
		description:"This is thief\'s distinctive skill. 15% of attack speed increasing buff will be given not only caster also party members and other close users."
	}]);
	 
	 
//Thief - Bandit - Rogue - Savage
	var clown= {
		name: "Bandit",
		skill: new Array(),
		image: "./img_p/clownbg.webp"
	};
	
	clown.skill[0] = new Skill("./img_p/ban/escape.webp","ACTIVE","<font color='#8e6aac'>EXIT</font>","1",[2,0],[],[{
		level:20, sp:20, power:undefined, mp:10,casttime:0, cooltime:30,duration:5,
	 	description:"Put on a box and escape from the area."
	}]);

	clown.skill[1] = new Skill("./img_p/ban/barrow.webp","toggle","<font color='#8e6aac'>Burrow</font>","5",[2,2],[{id:0,lv:1}],[{
		level:20, sp:20, power:undefined, mp:30,casttime:0, cooltime:20,duration:10,
	 	description:"Toggle skill activated once you used, deactivated after using it again. Burrow into ground and hide oneself from enemy up to 10 seconds. After activation, it consumes 30 MP per 3 seconds until its deactivation."
	},{
		level:23, sp:20, power:undefined, mp:30,casttime:0, cooltime:20,duration:10,
	 	description:"Toggle skill activated once you used, deactivated after using it again. Burrow into ground and hide oneself from enemy up to 10 seconds. After activation, it consumes 27 MP per 3 seconds until its deactivation."
	},{
		level:26, sp:20, power:undefined, mp:30,casttime:0, cooltime:20,duration:10,
	 	description:"Toggle skill activated once you used, deactivated after using it again. Burrow into ground and hide oneself from enemy up to 10 seconds. After activation, it consumes 24 MP per 3 seconds until its deactivation."
	},{
		level:29, sp:20, power:undefined, mp:30,casttime:0, cooltime:20,duration:10,
	 	description:"Toggle skill activated once you used, deactivated after using it again. Burrow into ground and hide oneself from enemy up to 10 seconds. After activation, it consumes 21 MP per 3 seconds until its deactivation."
	},{
		level:32, sp:20, power:undefined, mp:30,casttime:0, cooltime:20,duration:10,
	 	description:"Toggle skill activated once you used, deactivated after using it again. Burrow into ground and hide oneself from enemy up to 10 seconds. After activation, it consumes 18 MP per 3 seconds until its deactivation."
	}]);

	clown.skill[2] = new Skill("./img_p/ban/electricshock.webp","ACTIVE","<font color='#8e6aac'>Rolling Stinger</font>","5",[4,0],[],[{
		level:20, sp:20, power:"50%+80", mp:80,casttime:0, cooltime:6,duration:undefined,
	 	description:"Emit electricity to attack up to 3 standing enemies. If there are more than 3 enemies, target will be reselected for each attack. If a control has been inputted, the skill will be canceled. From Lv3 fallen enemies can be attacked."
	},{
		level:23, sp:20, power:"65%+100", mp:90,casttime:0, cooltime:6,duration:undefined,
	 	description:"Emit electricity to attack up to 5 standing enemies. If there are more than 5 enemies, target will be reselected for each attack. If a control has been inputted, the skill will be canceled. From Lv3 fallen enemies can be attacked."
	},{
		level:26, sp:20, power:"80%+120", mp:100,casttime:0, cooltime:6,duration:undefined,
	 	description:"Emit electricity to attack up to 7 standing enemies. If there are more than 7 enemies, target will be reselected for each attack. If a control has been inputted, the skill will be canceled."
	},{
		level:29, sp:20, power:"95%+140", mp:110,casttime:0, cooltime:6,duration:undefined,
	 	description:"Emit electricity to attack up to 9 standing enemies. If there are more than 9 enemies, target will be reselected for each attack. If a control has been inputted, the skill will be canceled."
	},{
		level:32, sp:20, power:"110%+160", mp:120,casttime:0, cooltime:6,duration:undefined,
	 	description:"Emit electricity to attack up to 11 standing enemies. If there are more than 11 enemies, target will be reselected for each attack. If a control has been inputted, the skill will be canceled."
	}]);
	
	clown.skill[3] = new Skill("./img_p/ban/spiningknockle.webp","ACTIVE","<font color='#8e6aac'>Final Decision</font>","5",[4,4],[{id:2,lv:1}],[{
		level:22, sp:20, power:"40%+100", mp:80,casttime:0, cooltime:4,duration:undefined,
	 	description:"Cast spinning attack to damage up to 6 standing enemies. If there are more than 6 enemies, target will be reselected for each attack."
	},{
		level:25, sp:20, power:"55%+130", mp:90,casttime:0, cooltime:4,duration:undefined,
	 	description:"Cast spinning attack to damage up to 7 standing enemies. If there are more than 6 enemies, target will be reselected for each attack."
	},{
		level:28, sp:20, power:"70%+160", mp:100,casttime:0, cooltime:4,duration:undefined,
	 	description:"Cast spinning attack to damage up to 8 standing enemies. If there are more than 6 enemies, target will be reselected for each attack."
	},{
		level:31, sp:20, power:"85%+190", mp:110,casttime:0, cooltime:4,duration:undefined,
	 	description:"Cast spinning attack to damage up to 9 standing enemies. If there are more than 6 enemies, target will be reselected for each attack."
	},{
		level:34, sp:20, power:"100%+220", mp:120,casttime:0, cooltime:4,duration:undefined,
	 	description:"Cast spinning attack to damage up to 10 standing enemies. If there are more than 6 enemies, target will be reselected for each attack."
	}]);

	clown.skill[4] = new Skill("./img_p/ban/screwupper.webp","ACTIVE","<font color='#8e6aac'>Upper Screwdriver</font>","5",[4,6],[{id:3,lv:1}],[{
		level:24, sp:25, power:"100%+120", mp:60,casttime:0, cooltime:4,duration:undefined,
	 	description:"Cast combo attack up to 3 enemies  while bring them up to the air. You can attack launched enemies from skill level 3, fallen enemies from skill level 4."
	},{
		level:27, sp:25, power:"120%+140", mp:70,casttime:0, cooltime:4,duration:undefined,
	 	description:"Cast combo attack up to 5 enemies  while bring them up to the air. You can attack launched enemies from skill level 3, fallen enemies from skill level 4."
	},{
		level:30, sp:25, power:"140%+160", mp:80,casttime:0, cooltime:4,duration:undefined,
	 	description:"Cast combo attack up to 7 enemies either standing or launched, while bring them up to the air. You can attack fallen enemies from skill level 4."
	},{
		level:33, sp:25, power:"160%+180", mp:90,casttime:0, cooltime:4,duration:undefined,
	 	description:"Cast combo attack up to 9 enemies either standing or launched, while bring them up to the air."
	},{
		level:36, sp:25, power:"180%+200", mp:100,casttime:0, cooltime:4,duration:undefined,
	 	description:"Cast combo attack up to 11 enemies either standing or launched, while bring them up to the air."
	}]);

	clown.skill[5] = new Skill("./img_p/ban/mindreading.webp","ACTIVE","<font color='#8e6aac'>Mind Reading</font>","5",[6,2],[],[{
		level:21, sp:15, power:undefined, mp:180,casttime:0, cooltime:60,duration:10,
	 	description:"Read into opponent's mind to predict their next move and increase dodge rate 50%."
	},{
		level:25, sp:15, power:undefined, mp:210,casttime:0, cooltime:60,duration:13,
	 	description:"Read into opponent's mind to predict their next move and increase dodge rate 60%"
	},{
		level:29, sp:15, power:undefined, mp:240,casttime:0, cooltime:60,duration:15,
	 	description:"Read into opponent's mind to predict their next move and increase dodge rate 75%"
	},{
		level:33, sp:15, power:undefined, mp:270,casttime:0, cooltime:60,duration:18,
	 	description:"Read into opponent's mind to predict their next move and increase dodge rate 95%"
	},{
		level:37, sp:15, power:undefined, mp:300,casttime:0, cooltime:60,duration:20,
	 	description:"Read into opponent's mind to predict their next move and increase dodge rate 120%"
	}]);

	clown.skill[6] = new Skill("./img_p/ban/motioncapture.webp","PASSIVE","<font color='#8e6aac'>Motion Capture</font>","5",[6,4],[{id:5,lv:1}],[{
		level:23, sp:10, power:undefined, mp:undefined,casttime:undefined, cooltime:undefined,duration:undefined,
	 	description:"When using Mind Reading, add 6% Evade Rate to the amplified rate, and decrease incoming damage by 2%."
	},{
		level:27, sp:10, power:undefined, mp:undefined,casttime:undefined, cooltime:undefined,duration:undefined,
	 	description:"When using Mind Reading, add 8% Evade Rate to the amplified rate, and decrease incoming damage by 4%."
	},{
		level:31, sp:10, power:undefined, mp:undefined,casttime:undefined, cooltime:undefined,duration:undefined,
	 	description:"When using Mind Reading, add 10% Evade Rate to the amplified rate, and decrease incoming damage by 6%."
	},{
		level:35, sp:10, power:undefined, mp:undefined,casttime:undefined, cooltime:undefined,duration:undefined,
	 	description:"When using Mind Reading, add 12% Evade Rate to the amplified rate, and decrease incoming damage by 8%."
	},{
		level:39, sp:10, power:undefined, mp:undefined,casttime:undefined, cooltime:undefined,duration:undefined,
	 	description:"When using Mind Reading, add 14% Evade Rate to the amplified rate, and decrease incoming damage by 10%."
	}]);

	clown.skill[7] = new Skill("./img_p/ban/hyperenergy.webp","ACTIVE","<font color='#8e6aac'>Hyper Strength</font>","10",[6,6],[{id:6,lv:1}],[{
		level:24, sp:15, power:undefined, mp:150,casttime:0.3, cooltime:10,duration:900,
	 	description:"Increase Strength of oneself and party members within range by 1%. "
	},{
		level:27, sp:15, power:undefined, mp:240,casttime:0.3, cooltime:10,duration:900,
	 	description:"Increase Strength of oneself and party members within range by 2%. "
	},{
		level:30, sp:15, power:undefined, mp:330,casttime:0.3, cooltime:10,duration:900,
	 	description:"Increase Strength of oneself and party members within range by 3%. "
	},{
		level:33, sp:15, power:undefined, mp:420,casttime:0.3, cooltime:10,duration:900,
	 	description:"Increase Strength of oneself and party members within range by 4%. "
	},{
		level:36, sp:15, power:undefined, mp:510,casttime:0.3, cooltime:10,duration:900,
	 	description:"Increase Strength of oneself and party members within range by 5%. "
	},{
		level:"CARD", sp:15, power:undefined, mp:600, casttime:0.3, cooltime:10,duration:900,
		description:"Increase Strength of oneself and party members within range by 8%. "
	},{
		level:"CARD", sp:15, power:undefined, mp:690, casttime:0.3, cooltime:10,duration:900,
		description:"Increase Strength of oneself and party members within range by 11%. "
	},{
		level:"CARD", sp:15, power:undefined, mp:780, casttime:0.3, cooltime:10,duration:900,
		description:"Increase Strength of oneself and party members within range by 14%. "	
	},{
		level:"CARD", sp:15, power:undefined, mp:870, casttime:0.3, cooltime:10,duration:900,
		description:"Increase Strength of oneself and party members within range by 17%. "
	},{
		level:"CARD", sp:15, power:undefined, mp:960, casttime:0.3, cooltime:10,duration:900,
		description:"Increase Strength of oneself and party members within range by 20%. "		
	}]);

	clown.skill[8] = new Skill("./img_p/ban/intelligent.webp","ACTIVE","<font color='#8e6aac'>Intelligence</font>","10",[6,8],[{id:7,lv:1}],[{
		level:25, sp:15, power:undefined, mp:150,casttime:0.3, cooltime:10,duration:900,
	 	description:"Increase Int of oneself and party members within range by 4%. "
	},{
		level:28, sp:15, power:undefined, mp:240,casttime:0.3, cooltime:10,duration:900,
	 	description:"Increase Int of oneself and party members within range by 8%. "
	},{
		level:31, sp:15, power:undefined, mp:330,casttime:0.3, cooltime:10,duration:900,
	 	description:"Increase Int of oneself and party members within range by 12%. "
	},{
		level:34, sp:15, power:undefined, mp:420,casttime:0.3, cooltime:10,duration:900,
	 	description:"Increase Int of oneself and party members within range by 16%. "
	},{
		level:37, sp:15, power:undefined, mp:510,casttime:0.3, cooltime:10,duration:900,
	 	description:"Increase Int of oneself and party members within range by 20%. "
	},{
		level:"CARD", sp:15, power:undefined, mp:600, casttime:0.3, cooltime:10,duration:900,
		description:"Increase Int of oneself and party members within range by 24%. "
	},{
		level:"CARD", sp:15, power:undefined, mp:690, casttime:0.3, cooltime:10,duration:900,
		description:"Increase Int of oneself and party members within range by 28%. "
	},{
		level:"CARD", sp:15, power:undefined, mp:780, casttime:0.3, cooltime:10,duration:900,
		description:"Increase Int of oneself and party members within range by 32%. "	
	},{
		level:"CARD", sp:15, power:undefined, mp:870, casttime:0.3, cooltime:10,duration:900,
		description:"Increase Int of oneself and party members within range by 36%. "
	},{
		level:"CARD", sp:15, power:undefined, mp:960, casttime:0.3, cooltime:10,duration:900,
		description:"Increase Int of oneself and party members within range by 40%. "	
	}]);

	clown.skill[9] = new Skill("./img_p/ban/crowmastery.webp","PASSIVE","<font color='#8e6aac'>Claw Mastery</font>","10",[8,0],[],[{
		level:20, sp:15, power:undefined, mp:undefined,casttime:undefined, cooltime:undefined,duration:undefined,
	 	description:"Increase physical attack power when using claw type weapons by +25. "
	},{
		level:24, sp:15, power:undefined, mp:undefined,casttime:undefined, cooltime:undefined,duration:undefined,
	 	description:"Increase physical attack power when using claw type weapons by +50. "
	},{
		level:28, sp:15, power:undefined, mp:undefined,casttime:undefined, cooltime:undefined,duration:undefined,
	 	description:"Increase physical attack power when using claw type weapons by +75. "
	},{
		level:32, sp:15, power:undefined, mp:undefined,casttime:undefined, cooltime:undefined,duration:undefined,
	 	description:"Increase physical attack power when using claw type weapons by +100. "
	},{
		level:36, sp:15, power:undefined, mp:undefined,casttime:undefined, cooltime:undefined,duration:undefined,
	 	description:"Increase physical attack power when using claw type weapons by +125. "
	},{
		level:"CARD", sp:15, power:undefined, mp:undefined,casttime:undefined, cooltime:undefined,duration:undefined,
	 	description:"Increase physical attack power when using claw type weapons by +150. "
	},{
		level:"CARD", sp:15, power:undefined, mp:undefined,casttime:undefined, cooltime:undefined,duration:undefined,
	 	description:"Increase physical attack power when using claw type weapons by +175. "
	},{
		level:"CARD", sp:15, power:undefined, mp:undefined,casttime:undefined, cooltime:undefined,duration:undefined,
	 	description:"Increase physical attack power when using claw type weapons by +200. "
	},{
		level:"CARD", sp:15, power:undefined, mp:undefined,casttime:undefined, cooltime:undefined,duration:undefined,
	 	description:"Increase physical attack power when using claw type weapons by +225. "
	},{
		level:"CARD", sp:15, power:undefined, mp:undefined,casttime:undefined, cooltime:undefined,duration:undefined,
	 	description:"Increase physical attack power when using claw type weapons by +250. "
	}]);
	
//Thief - Bandit - Rogue - Savage
	var dancer = {
		name: "Rogue",
		skill: new Array(),
		image: "./img_p/dancebg.webp"
	};
	
	dancer.skill[0] = new Skill("./img_p/rog/backstep_dancer.webp","ACTIVE","<font color='#8e6aac'>Moonwalk</font>","1",[2,0],[],[{
		level:40, sp:10,mp:100,power:undefined,casttime:0,cooltime:20,duration:3,
	 	description:"Step backward for 3 seconds in a super-armor status."
	}]);

	dancer.skill[1] = new Skill("./img_p/rog/megadrillshot.webp","ACTIVE","<font color='#8e6aac'>Mega Drill Drive</font>","5",[1,2],[{id:0,lv:1}],[{
		level:41, sp:20,mp:60,power:"200%+300",casttime:0,cooltime:10,duration:undefined,
	 	description:"Take out a drill and rush to the front, penetrating and damaging up to 4 enemies and knock them down. Above skill level 3, fallen enemies can be attacked also."
	},{
		level:44, sp:20,mp:70,power:"225%+350",casttime:0,cooltime:9,duration:undefined,
	 	description:"Take out a drill and rush to the front, penetrating and damaging up to 6 enemies and knock them down. Above skill level 3, fallen enemies can be attacked also."
	},{
		level:47, sp:20,mp:80,power:"250%+400",casttime:0,cooltime:8,duration:undefined,
	 	description:"Take out a drill and rush to the front, penetrating and damaging up to 8 enemies and knock them down."
	},{
		level:50, sp:20,mp:90,power:"275%+450",casttime:0,cooltime:7,duration:undefined,
	 	description:"Take out a drill and rush to the front, penetrating and damaging up to 10 enemies and knock them down."
	},{
		level:53, sp:20,mp:100,power:"300%+500",casttime:0,cooltime:6,duration:undefined,
	 	description:"Take out a drill and rush to the front, penetrating and damaging up to 12 enemies and knock them down."
	}]);

	dancer.skill[2] = new Skill("./img_p/rog/hurricanekick.webp","ACTIVE","<font color='#8e6aac'>Chain Hurricane Kick</font>","5",[1,4],[{id:1,lv:1}],[{
		level:42, sp:20,mp:70,power:"160%+250",casttime:0,cooltime:15,duration:undefined,
	 	description:"Attack with Hurricane Kick with extreme spinning speed  and powerful kick. For certain distance, you will become a invincibility status and attack up to 3 enemies either standing or in mid-air, give them damages for every 0.3 second. If there are more than 3 enemies, target will be reselected for each attack."
	},{
		level:45, sp:20,mp:75,power:"180%+280",casttime:0,cooltime:15,duration:undefined,
	 	description:"Attack with Hurricane Kick with extreme spinning speed  and powerful kick. For certain distance, you will become a invincibility status and attack up to 5 enemies either stading or in mid-air, give them damages for every 0.3 second. If there are more than 5 enemies, target will be reselected for each attack."
	},{
		level:48, sp:20,mp:80,power:"200%+310",casttime:0,cooltime:15,duration:undefined,
	 	description:"Attack with Hurricane Kick with extreme spinning speed  and powerful kick. For certain distance, you will become a invincibility status and attack up to 7 enemies either stading or in mid-air, give them damages for every 0.3 second. If there are more than 7 enemies, target will be reselected for each attack."
	},{
		level:51, sp:20,mp:85,power:"220%+340",casttime:0,cooltime:15,duration:undefined,
	 	description:"Attack with Hurricane Kick with extreme spinning speed  and powerful kick. For certain distance, you will become a invincibility status and attack up to 9 enemies either stading or in mid-air, give them damages for every 0.3 second. If there are more than 9 enemies, target will be reselected for each attack."
	},{
		level:54, sp:20,mp:90,power:"240%+370",casttime:0,cooltime:15,duration:undefined,
	 	description:"Attack with Hurricane Kick with extreme spinning speed  and powerful kick. For certain distance, you will become a invincibility status and attack up to 11 enemies either stading or in mid-air, give them damages for every 0.3 second. If there are more than 11 enemies, target will be reselected for each attack."
	}]);

	dancer.skill[3] = new Skill("./img_p/rog/heavysmash.webp","PASSIVE","<font color='#8e6aac'>Heavy Smash</font>","5",[1,6],[{id:2,lv:1}],[{
		level:43, sp:10,mp:undefined,power:"10%+50",casttime:undefined,cooltime:undefined,duration:undefined,
	 	description:"Increase attack power of Chain Hurricane Kick skill. "
	},{
		level:46, sp:10,mp:undefined,power:"15%+70",casttime:undefined,cooltime:undefined,duration:undefined,
	 	description:"Increase attack power of Chain Hurricane Kick skill. "
	},{
		level:49, sp:10,mp:undefined,power:"20%+90",casttime:undefined,cooltime:undefined,duration:undefined,
	 	description:"Increase attack power of Chain Hurricane Kick skill. "
	},{
		level:52, sp:10,mp:undefined,power:"25%+110",casttime:undefined,cooltime:undefined,duration:undefined,
	 	description:"Increase attack power of Chain Hurricane Kick skill. "
	},{
		level:55, sp:10,mp:undefined,power:"30%+130",casttime:undefined,cooltime:undefined,duration:undefined,
	 	description:"Increase attack power of Chain Hurricane Kick skill. "
	}]);

	dancer.skill[4] = new Skill("./img_p/rog/windmill.webp","ACTIVE","<font color='#8e6aac'>Windmill</font>","5",[3,2],[{id:0,lv:1}],[{
		level:41, sp:20,mp:40,power:"150%+200",casttime:0,cooltime:7,duration:undefined,
	 	description:"With back spinning attack to damage up to 3 enemies at once. Character above skill level 3, can move around with arrow key while attacking, fallen enemies also can be attacked. If there are more than 3 enemies, target will be reselected for each attack. (Max 9 combos)"
	},{
		level:44, sp:20,mp:45,power:"175%+240",casttime:0,cooltime:7,duration:undefined,
	 	description:"With back spinning attack to damage up to 5 enemies at once. Character above skill level 3, can move around with arrow key while attacking, fallen enemies also can be attacked. If there are more than 5 enemies, target will be reselected for each attack. (Max 9 combos)"
	},{
		level:47, sp:20,mp:50,power:"200%+280",casttime:0,cooltime:7,duration:undefined,
	 	description:"With back spinning attack to damage up to 7 enemies at once. Character can move around with arrow key while attacking, fallen enemies also can be attacked. If there are more than 7 enemies, target will be reselected for each attack. (Max 9 combos)"
	},{
		level:50, sp:20,mp:55,power:"225%+320",casttime:0,cooltime:7,duration:undefined,
	 	description:"With back spinning attack to damage up to 9 enemies at once. Character can move around with arrow key while attacking, fallen enemies also can be attacked. If there are more than 9 enemies, target will be reselected for each attack. (Max 9 combos)"
	},{
		level:53, sp:20,mp:60,power:"250%+360",casttime:0,cooltime:7,duration:undefined,
	 	description:"With back spinning attack to damage up to 11 enemies at once. Character can move around with arrow key while attacking, fallen enemies also can be attacked. If there are more than 11 enemies, target will be reselected for each attack. (Max 9 combos)"
	}]);

	dancer.skill[5] = new Skill("./img_p/rog/seven.webp","ACTIVE","<font color='#8e6aac'>Seven</font>","5",[3,6],[{id:13,lv:1}],[{
		level:43, sp:10,mp:50,power:"160%+250",casttime:0,cooltime:5,duration:undefined,
	 	description:"Attacking upto 5 enemies by kicking the into the air, then freeze! Enemies would be launched high into the air. A finish skill that will use the charged Fever."
	},{
		level:46, sp:10,mp:60,power:"180%+280",casttime:0,cooltime:5,duration:undefined,
	 	description:"Attacking upto 6 enemies by kicking the into the air, then freeze! Enemies would be launched high into the air. A finish skill that will use the charged Fever."
	},{
		level:49, sp:10,mp:70,power:"200%+310",casttime:0,cooltime:5,duration:undefined,
	 	description:"Attacking upto 7 enemies by kicking the into the air, then freeze! Enemies would be launched high into the air. A finish skill that will use the charged Fever."
	},{
		level:52, sp:10,mp:80,power:"220%+340",casttime:0,cooltime:5,duration:undefined,
	 	description:"Attacking upto 8 enemies by kicking the into the air, then freeze! Enemies would be launched high into the air. A finish skill that will use the charged Fever."
	},{
		level:55, sp:10,mp:90,power:"240%+370",casttime:0,cooltime:5,duration:undefined,
	 	description:"Attacking upto 9 enemies by kicking the into the air, then freeze! Enemies would be launched high into the air. A finish skill that will use the charged Fever."
	}]);

	dancer.skill[6] = new Skill("./img_p/rog/aerial.webp","ACTIVE","<font color='#8e6aac'>Aerial Kick</font>","5",[3,8],[{id:5,lv:1}],[{
		level:45, sp:25,mp:80,power:"180%+250",casttime:0,cooltime:5,duration:undefined,
	 	description:"Casts a spinning attack from a stationary position damaging up to 3 enemies with a combo attack and launching them into the air. "
	},{
		level:48, sp:25,mp:85,power:"195%+280",casttime:0,cooltime:5,duration:undefined,
	 	description:"Casts a spinning attack from a stationary position damaging up to 5 enemies with a combo attack and launching them into the air. "
	},{
		level:51, sp:25,mp:90,power:"210%+310",casttime:0,cooltime:5,duration:undefined,
	 	description:"Casts a spinning attack from a stationary position damaging up to 7 enemies with a combo attack and launching them into the air. "
	},{
		level:54, sp:25,mp:95,power:"225%+340",casttime:0,cooltime:5,duration:undefined,
	 	description:"Casts a spinning attack from a stationary position damaging up to 9 enemies with a combo attack and launching them into the air. "
	},{
		level:57, sp:25,mp:100,power:"240%+370",casttime:0,cooltime:5,duration:undefined,
	 	description:"Casts a spinning attack from a stationary position damaging up to 11 enemies with a combo attack and launching them into the air. "
	}]);

	dancer.skill[7] = new Skill("./img_p/rog/stance.webp","PASSIVE","<font color='#8e6aac'>Stance</font>","5",[8,0],[],[{
		level:40, sp:10, mp:undefined, power:undefined,casttime:undefined,cooltime:undefined,duration:undefined,
	 	description:"Physical attack power is increased by +80 and physical defense is increased by +40. "
	},{
		level:44, sp:10, mp:undefined, power:undefined,casttime:undefined,cooltime:undefined,duration:undefined,
	 	description:"Physical attack power is increased by +140 and physical defense is increased by +70. "
	},{
		level:48, sp:10, mp:undefined, power:undefined,casttime:undefined,cooltime:undefined,duration:undefined,
	 	description:"Physical attack power is increased by +200 and physical defense is increased by +100. "
	},{
		level:52, sp:10, mp:undefined, power:undefined,casttime:undefined,cooltime:undefined,duration:undefined,
	 	description:"Physical attack power is increased by +260 and physical defense is increased by +130. "
	},{
		level:56, sp:10, mp:undefined, power:undefined,casttime:undefined,cooltime:undefined,duration:undefined,
	 	description:"Physical attack power is increased by +320 and physical defense is increased by +160. "
	}]);

	dancer.skill[8] = new Skill("./img_p/rog/sonicboom.webp","ACTIVE","<font color='#8e6aac'>Sonic Boom</font>","5",[6,2],[],[{
		level:41, sp:10, mp:60, power:"180%+200",casttime:0,cooltime:3,duration:undefined,
	 	description:"Throw boomerang to attack up to 4 enemies. From Lv.2 fallen enemies can be attacked."
	},{
		level:44, sp:10, mp:70, power:"230%+260",casttime:0,cooltime:3,duration:undefined,
	 	description:"Throw boomerang to attack up to 4 enemies."
	},{
		level:47, sp:10, mp:80, power:"280%+320",casttime:0,cooltime:3,duration:undefined,
	 	description:"Throw boomerang to attack up to 6 enemies."
	},{
		level:50, sp:10, mp:90, power:"330%+380",casttime:0,cooltime:3,duration:undefined,
	 	description:"Throw boomerang to attack up to 6 enemies."
	},{
		level:53, sp:10, mp:100, power:"380%+440",casttime:0,cooltime:3,duration:undefined,
	 	description:"Throw boomerang to attack up to 8 enemies."
	}]);

	dancer.skill[9] = new Skill("./img_p/rog/jadgedread.webp","ACTIVE","<font color='#8e6aac'>Judge Dread</font>","5",[6,4],[{id:8,lv:1}],[{
		level:42, sp:10, mp:30, power:"150%+150",casttime:0,cooltime:6,duration:undefined,
	 	description:"Only available in the air. Cast strong ultra sonar attack to give damage up to 4 enemies launched."
	},{
		level:45, sp:10, mp:40, power:"175%+180",casttime:0,cooltime:6,duration:undefined,
	 	description:"Only available in the air. Cast strong untra sonar attack to give damage up to 6 enemies launched."
	},{
		level:48, sp:10, mp:50, power:"200%+210",casttime:0,cooltime:6,duration:undefined,
	 	description:"Only available in the air. Cast strong untra sonar attack to give damage up to 8 enemies launched."
	},{
		level:51, sp:10, mp:60, power:"225%+240",casttime:0,cooltime:6,duration:undefined,
	 	description:"Only available in the air. Cast strong untra sonar attack to give damage up to 10 enemies launched."
	},{
		level:54, sp:10, mp:70, power:"250%+270",casttime:0,cooltime:6,duration:undefined,
	 	description:"Only available in the air. Cast strong ultra sonar attack to give damage up to 12 enemies launched."
	}]);

	dancer.skill[10] = new Skill("./img_p/rog/cossackdance.webp","ACTIVE","<font color='#8e6aac'>Cossack Dance</font>","5",[6,8],[{id:9,lv:2}],[{
		level:46, sp:20, mp:80, power:"190%+200",casttime:0.3,cooltime:10,duration:undefined,
	 	description:"Summon a nut cracker doll that dances russian traditional dance. The doll moves forward while dancing, attacking all targets in its way. 5 standing enemies will be selected as target and if there are more than 5, target will be seleceted randomly. Above skill level 3, fallen enemies can be attacked also."
	},{
		level:49, sp:20, mp:85, power:"210%+240",casttime:0.3,cooltime:10,duration:undefined,
	 	description:"Summon a nut cracker doll that dances russian traditional dance. The doll moves forward while dancing, attacking all targets in its way. 5 standing enemies will be selected as target and if there are more than 5, target will be seleceted randomly. Above skill level 3, fallen enemies can be attacked also."
	},{
		level:52, sp:20, mp:90, power:"230%+280",casttime:0.3,cooltime:10,duration:undefined,
	 	description:"Summon a nut cracker doll that dances russian traditional dance. The doll moves forward while dancing, attacking all targets in its way. 5 standing enemies will be seleceted as target and if there are more than 5, target will be seleceted randomly."
	},{
		level:55, sp:20, mp:95, power:"250%+320",casttime:0.3,cooltime:10,duration:undefined,
	 	description:"Summon a nut cracker doll that dances russian traditional dance. The doll moves forward while dancing, attacking all targets in its way. 5 standing enemies will be seleceted as target and if there are more than 5, target will be seleceted randomly."
	},{
		level:58, sp:20, mp:100, power:"270%+360",casttime:0.3,cooltime:10,duration:undefined,
	 	description:"Summon a nut cracker doll that dances russian traditional dance. The doll moves forward while dancing, attacking all targets in its way. 5 standing enemies will be seleceted as target and if there are more than 5, target will be seleceted randomly."
	}]);

	dancer.skill[11] = new Skill("./img_p/rog/provoke.webp","ACTIVE","<font color='#8e6aac'>Provoke</font>","5",[8,6],[{id:9,lv:1}],[{
		level:43, sp:15, mp:50, power:undefined,casttime:0,cooltime:8,duration:undefined,
	 	description:"Cast super-sonic attack to Stun enemies with 60% chances for 2.5 seconds."
	},{
		level:46, sp:15, mp:55, power:undefined,casttime:0,cooltime:8,duration:undefined,
	 	description:"Cast super-sonic attack to Stun enemies with 65% chances for 2.5 seconds."
	},{
		level:49, sp:15, mp:60, power:undefined,casttime:0,cooltime:8,duration:undefined,
	 	description:"Cast super-sonic attack to Stun enemies with 70% chances for 2.5 seconds."
	},{
		level:52, sp:15, mp:65, power:undefined,casttime:0,cooltime:8,duration:undefined,
	 	description:"Cast super-sonic attack to Stun enemies with 75% chances for 2.5 seconds."
	},{
		level:55, sp:15, mp:70, power:undefined,casttime:0,cooltime:8,duration:undefined,
	 	description:"Cast super-sonic attack to Stun enemies with 80% chances for 2.5 seconds."
	}]);

	dancer.skill[12] = new Skill("./img_p/rog/StepTheBeat.webp","ACTIVE","<font color='#8e6aac'>Step the Beat!</font>","1",[6,0],[],[{
		level:41,sp:20,mp:450,power:undefined,casttime:0,cooltime:180,duration:20, 
	 	description:"Reduces physical and magical damage by 15%. The effect applys to other party members, every one will be in good mood!"	
	}]);	

	dancer.skill[13] = new Skill("./img_p/rog/HeadSpin.webp","ACTIVE","<font color='#8e6aac'>Head Spin</font>","5",[3,4],[{id:4,lv:1}],[{
		level:42,sp:20,mp:40,power:"150.0%+200",casttime:0,cooltime:5,duration:undefined, 
	 	description:"Perform a high speed head spin, attacking every one in range and throw them into air slightly. From Lv3 you can move with the arrow keys. A dance skill that will charge the Fever, once the skill is finished, Fever will disappear after shor period of time. While the skill is running, a spin buff will be effected that will reduce the damage."	
	},{
		level:45,sp:20,mp:45,power:"175.0%+240",casttime:0,cooltime:5,duration:undefined, 
	 	description:"Perform a high speed head spin, attacking every one in range and throw them into air slightly. From Lv3 you can move with the arrow keys. A dance skill that will charge the Fever, once the skill is finished, Fever will disappear after shor period of time. While the skill is running, a spin buff will be effected that will reduce the damage."	
	},{
		level:48,sp:20,mp:50,power:"200.0%+280",casttime:0,cooltime:5,duration:undefined, 
	 	description:"Perform a high speed head spin, attacking every one in range while moving and throw them into air slightly. A dance skill that will charge the Fever, once the skill is finished, Fever will disappear after shor period of time. While the skill is running, a spin buff will be effected that will reduce the damage."	
	},{
		level:52,sp:20,mp:55,power:"225.0%+320",casttime:0,cooltime:5,duration:undefined, 
	 	description:"Perform a high speed head spin, attacking every one in range while moving and throw them into air slightly. A dance skill that will charge the Fever, once the skill is finished, Fever will disappear after shor period of time. While the skill is running, a spin buff will be effected that will reduce the damage."	
	},{
		level:54,sp:20,mp:60,power:"250.0%+360",casttime:0,cooltime:5,duration:undefined, 
	 	description:"Perform a high speed head spin, attacking every one in range while moving and throw them into air slightly. A dance skill that will charge the Fever, once the skill is finished, Fever will disappear after shor period of time. While the skill is running, a spin buff will be effected that will reduce the damage."
	}]);	
	
//Thief - Bandit - Rogue - Savage
	var savage = { 
		name:"Savage",
		skill:new Array(),
		image:"./img_p/savagebg.webp"
	};
	
	savage.skill[0] = new Skill("./img_p/sav/Awakening.webp","PASSIVE","<font color='#8e6aac'>Awakening</font>","1",[5,0],[],[{
		level:60,sp:1,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Whenever you use MP during battle, your Awakening bar will fill up. This allows you to perform certain special skills which consume Awakening points. These skills also consume MP, however the MP they consume does not fill your awakening bar. "
	}]);
	
	savage.skill[1] = new Skill("./img_p/sav/CrazySoul.webp","PASSIVE","<font color='#8e6aac'>Crazy Soul</font>","5",[9,0],[{id:0,lv:1}],[{
		level:60,sp:25,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Suppress your pain with your mind. When a user attacks, there is a 10% chance that the attack animation will not activate, but full damage is dealt to the enemy. "
	},{
		level:61,sp:25,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Suppress your pain with your mind. When a user attacks, there is a 15% chance that the attack animation will not activate, but full damage is dealt to the enemy. "
	},{
		level:62,sp:25,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Suppress your pain with your mind. When a user attacks, there is a 20% chance that the attack animation will not activate, but full damage is dealt to the enemy. "
	},{
		level:63,sp:25,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Suppress your pain with your mind. When a user attacks, there is a 25% chance that the attack animation will not activate, but full damage is dealt to the enemy. "
	},{
		level:64,sp:25,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Suppress your pain with your mind. When a user attacks, there is a 30% chance that the attack animation will not activate, but full damage is dealt to the enemy. "
	}]);
	
	savage.skill[2] = new Skill("./img_p/sav/HellShouting.webp","ACTIVE","<font color='#8e6aac'>Hell Shouting</font>","5",[4,3],[{id:0,lv:1}],[{
		level:61,sp:20,mp:350,power:"100%",casttime:0,cooltime:30,duration:undefined, 
	 	description:"[Awakening Skill] Summons an evil spirit to attack 8 enemies 3 times with a deathly scream. Enemies receive lv 3 stun effect. "
	},{
		level:63,sp:20,mp:375,power:"120%",casttime:0,cooltime:25,duration:undefined, 
	 	description:"[Awakening Skill] Summons an evil spirit to attack 10 enemies 4 times with a deathly scream. Enemies receive lv 4 stun effect. "
	},{
		level:65,sp:20,mp:400,power:"150%",casttime:0,cooltime:20,duration:undefined, 
	 	description:"[Awakening Skill] Summons an evil spirit to attack 12 enemies 5 times with a deathly scream. Enemies receive lv 5 stun effect. "
	},{
		level:67,sp:20,mp:425,power:"175%",casttime:0,cooltime:17,duration:undefined, 
	 	description:"[Awakening Skill] Summons an evil spirit to attack 14 enemies 6 times with a deathly scream. Enemies receive lv 6 stun effect. "
	},{
		level:69,sp:20,mp:450,power:"200%",casttime:0,cooltime:15,duration:undefined, 
	 	description:"[Awakening Skill] Summons an evil spirit to attack 16 enemies 7 times with a deathly scream. Enemies receive lv 7 stun effect. "
	}]);
	
	savage.skill[3] = new Skill("./img_p/sav/ClubMania.webp","ACTIVE","<font color='#8e6aac'>Club Mania</font>","1",[6,3],[{id:0,lv:1}],[{
		level:60,sp:60,mp:undefined,power:undefined,casttime:0,cooltime:300,duration:undefined, 
	 	description:"[Ultimate Skill] Plays a deadly concert with the evil spirit. No one who hears this music lives to tell the tale. 8 sonic attacks on up to 20 monsters with a final attack causing level 5 stun to monsters. During casting, character is invulnerable. "
	}]);
	
	savage.skill[4] = new Skill("./img_p/sav/Marionette.webp","ACTIVE","<font color='#8e6aac'>Marionette</font>","5",[4,5],[{id:2,lv:1}],[{
		level:62,sp:25,mp:300,power:"55%",casttime:0,cooltime:30,duration:undefined, 
	 	description:"[Awakening Skill] Summons an evil spirit that controls the caster to attack 14 times. Target that's attacked last is launched into the air. Target receives level 3 stun effect. "
	},{
		level:64,sp:25,mp:350,power:"65%",casttime:0,cooltime:27,duration:undefined, 
	 	description:"[Awakening Skill] Summons an evil spirit that controls the caster to attack 14 times. Target that's attacked last is launched into the air. Target receives level 4 stun effect. "
	},{
		level:66,sp:25,mp:400,power:"75%",casttime:0,cooltime:24,duration:undefined, 
	 	description:"[Awakening Skill] Summons an evil spirit that controls the caster to attack 14 times. Target that's attacked last is launched into the air. Target receives level 5 stun effect. "
	},{
		level:68,sp:25,mp:450,power:"85%",casttime:0,cooltime:21,duration:undefined, 
	 	description:"[Awakening Skill] Summons an evil spirit that controls the caster to attack 14 times. Target that's attacked last is launched into the air. Target receives level 6 stun effect. "
	},{
		level:70,sp:25,mp:500,power:"95%",casttime:0,cooltime:19,duration:undefined, 
	 	description:"[Awakening Skill] Summons an evil spirit that controls the caster to attack 14 times. Target that's attacked last is launched into the air. Target receives level 7 stun effect. "
	}]);	
	
	savage.skill[5] = new Skill("./img_p/sav/GrapplingClaw.webp","ACTIVE","<font color='#8e6aac'>Claw Fishing</font>","5",[1,0],[],[{
		level:60,sp:20,mp:80,power:undefined,casttime:0,cooltime:15,duration:undefined, 
	 	description:"Quickly throws out a claw to drag 1 enemy towards user. Target receives lv 1 stun effect. "
	},{
		level:62,sp:20,mp:100,power:undefined,casttime:0,cooltime:12.5,duration:undefined, 
	 	description:"Quickly throws out a claw to drag 2 enemies towards user. Target receives lv 1 stun effect. "
	},{
		level:64,sp:20,mp:120,power:undefined,casttime:0,cooltime:10,duration:undefined, 
	 	description:"Quickly throws out a claw to drag 3 enemies towards user. Target receives lv 1 stun effect. "
	},{
		level:66,sp:20,mp:140,power:undefined,casttime:0,cooltime:7.5,duration:undefined, 
	 	description:"Quickly throws out a claw to drag 4 enemy towards user. Target receives lv 2 stun effect. "
	},{
		level:68,sp:20,mp:160,power:undefined,casttime:0,cooltime:5,duration:undefined, 
	 	description:"Quickly throws out a claw to drag 5 enemies towards user. Target receives lv 3 stun effect. "
	}]);
	
	savage.skill[6] = new Skill("./img_p/sav/ChargeTheAwakening.webp","toggle","<font color='#8e6aac'>Awakening Charge</font>","3",[1,7],[],[{
		level:60,sp:10,mp:35,power:undefined,casttime:0,cooltime:3,duration:undefined, 
		description:"Consumes 20% MP to recharge 14% of the Awakening bar every 3 seconds."
	 },{
	 	level:62,sp:10,mp:35,power:undefined,casttime:0,cooltime:3,duration:undefined, 
		description:"Consumes 20% MP to recharge 17% of the Awakening bar every 3 seconds."
	 },{
		level:68,sp:10,mp:35,power:undefined,casttime:0,cooltime:3,duration:undefined, 
		description:"Consumes 20% MP to recharge 20% of the Awakening bar every 3 seconds."
	}]);

	savage.skill[7] = new Skill("./img_p/sav/Dancer.webp","ACTIVE","<font color='#8e6aac'>Dancer</font>","1",[4,7],[{id:4,lv:2}],[{
		level:65,sp:20,mp:undefined,power:undefined,casttime:0,cooltime:10,duration:undefined, 
	 	description:"Transform into a real dancer. When transformed into a dancer, all active skills are disabled except for Windmill, Seven, and Aerial Kick and you get bonus: Move Speed, Speed Attack, Damage increased +25%. Passive skills work just as normal. "
	}]);

//Thief - Infiltrator - Assassin - Ninja 
	var infiltrator = {
		name: "Infiltrator",
		skill: new Array(),
		image: "./img_p/infiltratorbg.webp"
	};
	
	infiltrator.skill[0] = new Skill("./img_p/inf/PoisonCrasher.webp","ACTIVE","<font color='#8e6aac'>Poison Crasher</font>","10",[1,0],[],[{
		level:20,sp:15,mp:200,power:undefined,casttime:0.4,cooltime:80,duration:900,
	 	description:"Put poison on weapon to cause Lv.3 Serious Poison effect to enemies with 5% probability at every attack."
	},{
		level:23,sp:15,mp:230,power:undefined,casttime:0.4,cooltime:80,duration:900,
	 	description:"Put poison on weapon to cause Lv.4 Serious Poison effect to enemies with 8% probability at every attack."
	},{
		level:25,sp:15,mp:260,power:undefined,casttime:0.4,cooltime:80,duration:900,
	 	description:"Put poison on weapon to cause Lv.5 Serious Poison effect to enemies with 11% probability at every attack."
	},{
		level:27,sp:15,mp:290,power:undefined,casttime:0.4,cooltime:80,duration:900,
	 	description:"Put poison on weapon to cause Lv.6 Serious Poison effect to enemies with 14% probability at every attack."
	},{
		level:29,sp:15,mp:320,power:undefined,casttime:0.4,cooltime:80,duration:900,
	 	description:"Put poison on weapon to cause Lv.7 Serious Poison effect to enemies with 17% probability at every attack."
	},{
		level:"CARD",sp:15,mp:350,power:undefined,casttime:0.4,cooltime:80,duration:900,
	 	description:"Put poison on weapon to cause Lv.7 Serious Poison effect to enemies with 19% probability at every attack."		
	},{
		level:"CARD",sp:15,mp:380,power:undefined,casttime:0.4,cooltime:80,duration:900,
	 	description:"Put poison on weapon to cause Lv.7 Serious Poison effect to enemies with 21% probability at every attack."	
	},{
		level:"CARD",sp:15,mp:410,power:undefined,casttime:0.4,cooltime:80,duration:900,
	 	description:"Put poison on weapon to cause Lv.7 Serious Poison effect to enemies with 23% probability at every attack."	
	},{
		level:"CARD",sp:15,mp:440,power:undefined,casttime:0.4,cooltime:80,duration:900,
	 	description:"Put poison on weapon to cause Lv.7 Serious Poison effect to enemies with 25% probability at every attack."	
	},{
		level:"CARD",sp:15,mp:470,power:undefined,casttime:0.4,cooltime:80,duration:900,
	 	description:"Put poison on weapon to cause Lv.7 Serious Poison effect to enemies with 27% probability at every attack."	
	}]);

	infiltrator.skill[1] = new Skill("./img_p/inf/liarstrike.webp","ACTIVE","<font color='#8e6aac'>April Fool</font>","5",[1,2],[{id:0,lv:1}],[{
		level:21,sp:15,mp:60,power:"25%+150",casttime:0,cooltime:8,duration:5,
	 	description:"Attack up to 5 enemy targets and lower their physical and magic attack damage to 1 for 5 seconds. "
	},{
		level:24,sp:15,mp:90,power:"30%+190",casttime:0,cooltime:8,duration:7,
	 	description:"Attack up to 6 enemy targets and lower their physical and magic attack damage to 1 for 7 seconds. "
	},{
		level:27,sp:15,mp:120,power:"35%+230",casttime:0,cooltime:8,duration:9,
	 	description:"Attack up to 7 enemy targets and lower their physical and magic attack damage to 1 for 8 seconds. "
	},{
		level:30,sp:15,mp:150,power:"40%+270",casttime:0,cooltime:8,duration:11,
	 	description:"Attack up to 8 enemy targets and lower their physical and magic attack damage to 1 for 11 seconds. "
	},{
		level:33,sp:15,mp:180,power:"45%+310",casttime:0,cooltime:8,duration:13,
	 	description:"Attack up to 9 enemy targets and lower their physical and magic attack damage to 1 for 13 seconds. "
	}]);

	infiltrator.skill[2] = new Skill("./img_p/inf/suddenattack.webp","ACTIVE","<font color='#8e6aac'>Ambush</font>","10",[3,0],[],[{
		level:20,sp:10,mp:60,power:"70%+150",casttime:0,cooltime:2,duration:undefined,
	 	description:"Attack up to 4 standing, in mid-air or fallen enemies and launch them into the air with damage. After the skill has been executed, Lv3 buff will be applied to increase the critical rate."
	},{
		level:22,sp:10,mp:65,power:"80%+200",casttime:0,cooltime:2.5,duration:undefined,
	 	description:"Attack 1-2 times up to 6 standing, in mid-air or fallen enemies and launch them into the air with damage. After the skill has been executed, Lv3 buff will be applied to increase the critical rate."
	},{
		level:24,sp:10,mp:70,power:"90%+250",casttime:0,cooltime:3,duration:undefined,
	 	description:"Attack 1-3 times up to 8 standing, in mid-air or fallen enemies and launch them into the air with damage. After the skill has been executed, Lv3 buff will be applied to increase the critical rate."
	},{
		level:26,sp:10,mp:75,power:"100%+300",casttime:0,cooltime:3.5,duration:undefined,
	 	description:"Attack 2-3 times up to 10 standing, in mid-air or fallen enemies and launch them into the air with damage. After the skill has been executed, Lv3 buff will be applied to increase the critical rate."
	},{
		level:28,sp:10,mp:80,power:"110%+350",casttime:0,cooltime:4,duration:undefined,
	 	description:"Attack 3-4 times up to 12 standing, in mid-air or fallen enemies and launch them into the air with damage. After the skill has been executed, Lv3 buff will be applied to increase the critical rate."
	},{
		level:"CARD",sp:10,mp:85,power:"120%+400",casttime:0,cooltime:4,duration:undefined,
	 	description:"Attack 4 times up to 12 standing, in mid-air or fallen enemies and launch them into the air with damage. After the skill has been executed, Lv3 buff will be applied to increase the critical rate."
	},{
		level:"CARD",sp:10,mp:90,power:"130%+450",casttime:0,cooltime:4,duration:undefined,
	 	description:"Attack 4 times up to 12 standing, in mid-air or fallen enemies and launch them into the air with damage. After the skill has been executed, Lv3 buff will be applied to increase the critical rate."
	},{
		level:"CARD",sp:10,mp:95,power:"140%+500",casttime:0,cooltime:4,duration:undefined,
	 	description:"Attack 4 times up to 12 standing, in mid-air or fallen enemies and launch them into the air with damage. After the skill has been executed, Lv3 buff will be applied to increase the critical rate."
	},{
		level:"CARD",sp:10,mp:100,power:"150%+550",casttime:0,cooltime:4,duration:undefined,
	 	description:"Attack 4 times up to 12 standing, in mid-air or fallen enemies and launch them into the air with damage. After the skill has been executed, Lv3 buff will be applied to increase the critical rate."
	},{
		level:"CARD",sp:10,mp:105,power:"160%+600",casttime:0,cooltime:4,duration:undefined,
	 	description:"Attack 4 times up to 12 standing, in mid-air or fallen enemies and launch them into the air with damage. After the skill has been executed, Lv3 buff will be applied to increase the critical rate."
	}]);

	infiltrator.skill[3] = new Skill("./img_p/inf/rushbrow.webp","ACTIVE","<font color='#8e6aac'>Volent Blow</font>","10",[3,2],[{id:2,lv:1}],[{
		level:22,sp:20,mp:50,power:"35%+280",casttime:0,cooltime:4,duration:undefined,
	 	description:"Throw 5 combo punch with rapid speed to max 6 standing or fallen enemies. Target will be reselected for each attack and turned into Lv. 1 stun status with 25% chance."
	},{
		level:25,sp:20,mp:55,power:"40%+310",casttime:0,cooltime:4,duration:undefined,
	 	description:"Throw 5 combo punch with rapid speed to max 7 standing or fallen enemies. Target will be reselected for each attack and turned into Lv. 1 stun status with 25% chance."
	},{
		level:28,sp:20,mp:60,power:"45%+340",casttime:0,cooltime:4,duration:undefined,
	 	description:"Throw 5 combo punch with rapid speed to max 8 standing or fallen enemies. Target will be reselected for each attack and turned into Lv. 2 stun status with 25% chance."
	},{
		level:31,sp:20,mp:65,power:"50%+370",casttime:0,cooltime:4,duration:undefined,
	 	description:"Throw 5 combo punch with rapid speed to max 9 standing or fallen enemies. Target will be reselected for each attack and turned into Lv. 2 stun status with 25% chance."
	},{
		level:34,sp:20,mp:70,power:"55%+400",casttime:0,cooltime:4,duration:undefined,
	 	description:"Throw 5 combo punch with rapid speed to max 10 standing or fallen enemies. Target will be reselected for each attack and turned into Lv. 3 stun status with 25% chance."
	},{
		level:"CARD",sp:20,mp:75,power:"60%+430",casttime:0,cooltime:4,duration:undefined,
	 	description:"Throw 5 combo punch with rapid speed to max 10 standing or fallen enemies. Target will be reselected for each attack and turned into Lv. 3 stun status with 25% chance."
	},{
		level:"CARD",sp:20,mp:80,power:"65%+460",casttime:0,cooltime:4,duration:undefined,
	 	description:"Throw 5 combo punch with rapid speed to max 10 standing or fallen enemies. Target will be reselected for each attack and turned into Lv. 4 stun status with 25% chance."
	},{
		level:"CARD",sp:20,mp:85,power:"70%+490",casttime:0,cooltime:4,duration:undefined,
	 	description:"Throw 5 combo punch with rapid speed to max 10 standing or fallen enemies. Target will be reselected for each attack and turned into Lv. 4 stun status with 25% chance."
	},{
		level:"CARD",sp:20,mp:90,power:"75%+520",casttime:0,cooltime:4,duration:undefined,
	 	description:"Throw 5 combo punch with rapid speed to max 10 standing or fallen enemies. Target will be reselected for each attack and turned into Lv. 5 stun status with 25% chance."
	},{
		level:"CARD",sp:20,mp:95,power:"80%+55",casttime:0,cooltime:4,duration:undefined,
	 	description:"Throw 5 combo punch with rapid speed to max 10 standing or fallen enemies. Target will be reselected for each attack and turned into Lv. 5 stun status with 25% chance."
		
	}]);

	infiltrator.skill[4] = new Skill("./img_p/inf/swiftattack.webp","ACTIVE","<font color='#8e6aac'>Swift Attack</font>","10",[3,6],[{id:3,lv:2},{id:7,lv:2}],[{
		level:27,sp:25,mp:60,power:"100%+100",casttime:0,cooltime:6,duration:undefined,
	 	description:"Select up to 2 enemies to attack while moving at an extremely high speed. "
	},{
		level:30,sp:25,mp:65,power:"130%+150",casttime:0,cooltime:6,duration:undefined,
	 	description:"Select up to 4 enemies to attack while moving at an extremely high speed. "
	},{
		level:33,sp:25,mp:70,power:"160%+200",casttime:0,cooltime:6,duration:undefined,
	 	description:"Select up to 6 enemies to attack while moving at an extremely high speed. "
	},{
		level:36,sp:25,mp:75,power:"190%+250",casttime:0,cooltime:6,duration:undefined,
	 	description:"Select up to 8 enemies to attack while moving at an extremely high speed. "
	},{
		level:39,sp:25,mp:80,power:"220%+300",casttime:0,cooltime:6,duration:undefined,
	 	description:"Select up to 10 enemies to attack while moving at an extremely high speed. "
	},{
		level:"CARD",sp:25,mp:85,power:"250%+350",casttime:0,cooltime:6,duration:undefined,
	 	description:"Select up to 10 enemies to attack while moving at an extremely high speed. "
	},{
		level:"CARD",sp:25,mp:90,power:"280%+400",casttime:0,cooltime:6,duration:undefined,
	 	description:"Select up to 10 enemies to attack while moving at an extremely high speed. "
	},{
		level:"CARD",sp:25,mp:95,power:"310%+450",casttime:0,cooltime:6,duration:undefined,
	 	description:"Select up to 10 enemies to attack while moving at an extremely high speed. "
	},{
		level:"CARD",sp:25,mp:100,power:"340%+500",casttime:0,cooltime:6,duration:undefined,
	 	description:"Select up to 10 enemies to attack while moving at an extremely high speed. "
	},{
		level:"CARD",sp:25,mp:105,power:"370%+550",casttime:0,cooltime:6,duration:undefined,
	 	description:"Select up to 10 enemies to attack while moving at an extremely high speed. "
	}]);

	infiltrator.skill[5] = new Skill("./img_p/inf/barrow.webp","toggle","<font color='#8e6aac'>Burrow</font>","5",[7,2],[],[{
		level:20,sp:20,mp:30,power:undefined,casttime:0,cooltime:20,duration:10,
	 	description:"Toggle skill activated once you used, deactivated after using it again. Burrow into ground and hide oneself from enemy up to 10 seconds. After activation, it consumes 30 MP per 3 seconds until its deactivation."
	},{
		level:23,sp:20,mp:30,power:undefined,casttime:0,cooltime:20,duration:10,
	 	description:"Toggle skill activated once you used, deactivated after using it again. Burrow into ground and hide oneself from enemy up to 10 seconds. After activation, it consumes 27 MP per 3 seconds until its deactivation."
	},{
		level:26,sp:20,mp:30,power:undefined,casttime:0,cooltime:20,duration:10,
	 	description:"Toggle skill activated once you used, deactivated after using it again. Burrow into ground and hide oneself from enemy up to 10 seconds. After activation, it consumes 24 MP per 3 seconds until its deactivation."
	},{
		level:29,sp:20,mp:30,power:undefined,casttime:0,cooltime:20,duration:10,
	 	description:"Toggle skill activated once you used, deactivated after using it again. Burrow into ground and hide oneself from enemy up to 10 seconds. After activation, it consumes 21 MP per 3 seconds until its deactivation."
	},{
		level:32,sp:20,mp:30,power:undefined,casttime:0,cooltime:20,duration:10,
	 	description:"Toggle skill activated once you used, deactivated after using it again. Burrow into ground and hide oneself from enemy up to 10 seconds. After activation, it consumes 21 MP per 3 seconds until its deactivation."
	}]);

	infiltrator.skill[6] = new Skill("./img_p/inf/gimret.webp","ACTIVE","<font color='#8e6aac'>Gimlet</font>","5",[7,4],[{id:5,lv:1}],[{
		level:21,sp:15,mp:30,power:"50%+105",casttime:0,cooltime:1,duration:undefined,
	 	description:"When burrowed underground, evoke thorns and rise under 5 nearby enemies. "
	},{
		level:24,sp:15,mp:35,power:"65%+130",casttime:0,cooltime:1,duration:undefined,
	 	description:"When burrowed underground, evoke thorns and rise under 5 nearby enemies. "
	},{
		level:27,sp:15,mp:40,power:"80%+155",casttime:0,cooltime:1,duration:undefined,
	 	description:"When burrowed underground, evoke thorns and rise under 5 nearby enemies. "
	},{
		level:30,sp:15,mp:45,power:"95%+175",casttime:0,cooltime:1,duration:undefined,
	 	description:"When burrowed underground, evoke thorns and rise under 5 nearby enemies. "
	},{
		level:33,sp:15,mp:50,power:"110%+200",casttime:0,cooltime:1,duration:undefined,
	 	description:"When burrowed underground, evoke thorns and rise under 5 nearby enemies. "
	}]);

	infiltrator.skill[7] = new Skill("./img_p/inf/shadowwalk.webp","toggle","<font color='#8e6aac'>Shadow Walk</font>","5",[5,4],[{id:5,lv:1}],[{
		level:22,sp:20,mp:50,power:undefined,casttime:1,cooltime:30,duration:13,
	 	description:"Hide from enemy and move around up to 13 seconds. Movement speed decreases by 19%. "
	},{
		level:25,sp:20,mp:60,power:undefined,casttime:1,cooltime:30,duration:14,
	 	description:"Hide from enemy and move around up to 14 seconds. Movement speed decreases by 18%. "
	},{
		level:28,sp:20,mp:70,power:undefined,casttime:1,cooltime:30,duration:15,
	 	description:"Hide from enemy and move around up to 15 seconds. Movement speed decreases by 17%. "
	},{
		level:31,sp:20,mp:80,power:undefined,casttime:1,cooltime:30,duration:16,
	 	description:"Hide from enemy and move around up to 16 seconds. Movement speed decreases by 16%. "
	},{
		level:34,sp:20,mp:90,power:undefined,casttime:1,cooltime:30,duration:17,
	 	description:"Hide from enemy and move around up to 17 seconds. Movement speed decreases by 15%. "
	}]);

	infiltrator.skill[8] = new Skill("./img_p/inf/katarblocking.webp","PASSIVE","<font color='#8e6aac'>Katar Blocking</font>","10",[9,0],[],[{
		level:20,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined,
	 	description:"Increase chance to block enemy\'s attack by 2.1% when using Katar type weapon."
	},{
		level:24,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined,
	 	description:"Increase chance to block enemy\'s attack by 4.2% when using Katar type weapon."
	},{
		level:28,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined,
	 	description:"Increase chance to block enemy\'s attack by 6.3% when using Katar type weapon."
	},{
		level:32,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined,
	 	description:"Increase chance to block enemy\'s attack by 8.4% when using Katar type weapon."
	},{
		level:36,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined,
	 	description:"Increase chance to block enemy\'s attack by 10.5% when using Katar type weapon."
	},{
		level:"CARD",sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined,
	 	description:"Increase chance to block enemy\'s attack by 12.6% when using Katar type weapon."
	},{
		level:"CARD",sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined,
	 	description:"Increase chance to block enemy\'s attack by 14.7% when using Katar type weapon."
	},{
		level:"CARD",sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined,
	 	description:"Increase chance to block enemy\'s attack by 16.8% when using Katar type weapon."
	},{
		level:"CARD",sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined,
	 	description:"Increase chance to block enemy\'s attack by 18.9% when using Katar type weapon."
	},{
		level:"CARD",sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined,
	 	description:"Increase chance to block enemy\'s attack by 21% when using Katar type weapon."
	}]);

	infiltrator.skill[9] = new Skill("./img_p/inf/throwingdagger.webp","ACTIVE","<font color='#8e6aac'>Throwing Dagger</font>","10",[9,2],[{id:8,lv:1}],[{
		level:21,sp:10,mp:30,power:"40%+80",casttime:undefined,cooltime:2,duration:undefined,
	 	description:"Throw a dagger to enemy to knock it down. At skill level 4, fallen enemy target can be attacked. After throwing the dagger, Lv3 buff will be applied to increase the critical rate."
	},{
		level:24,sp:10,mp:40,power:"50%+110",casttime:undefined,cooltime:2,duration:undefined,
	 	description:"Throw a dagger to enemy to knock it down. At skill level 4, fallen enemy target can be attacked. After throwing the dagger, Lv3 buff will be applied to increase the critical rate."
	},{
		level:27,sp:10,mp:50,power:"60%+140",casttime:undefined,cooltime:2,duration:undefined,
	 	description:"Throw a dagger to enemy to knock it down. At skill level 4, fallen enemy target can be attacked. After throwing the dagger, Lv3 buff will be applied to increase the critical rate."
	},{
		level:30,sp:10,mp:60,power:"70%+170",casttime:undefined,cooltime:2,duration:undefined,
	 	description:"Throw a dagger to standing or fallen enemy to knock it down. After throwing the dagger, Lv3 buff will be applied to increase the critical rate."
	},{
		level:33,sp:10,mp:70,power:"80%+200",casttime:undefined,cooltime:2,duration:undefined,
	 	description:"Throw a dagger to standing or fallen enemy to knock it down. After throwing the dagger, Lv3 buff will be applied to increase the critical rate."
	},{
		level:"CARD",sp:10,mp:80,power:"85%+230",casttime:undefined,cooltime:2,duration:undefined,
	 	description:"Throw a dagger to standing or fallen enemy to knock it down. After throwing the dagger, Lv3 buff will be applied to increase the critical rate."
	},{
		level:"CARD",sp:10,mp:90,power:"90%+260",casttime:undefined,cooltime:2,duration:undefined,
	 	description:"Throw a dagger to standing or fallen enemy to knock it down. After throwing the dagger, Lv3 buff will be applied to increase the critical rate."
	},{
		level:"CARD",sp:10,mp:100,power:"95%+290",casttime:undefined,cooltime:2,duration:undefined,
	 	description:"Throw a dagger to standing or fallen enemy to knock it down. After throwing the dagger, Lv3 buff will be applied to increase the critical rate."
	},{
		level:"CARD",sp:10,mp:110,power:"105%+350",casttime:undefined,cooltime:2,duration:undefined,
	 	description:"Throw a dagger to standing or fallen enemy to knock it down. After throwing the dagger, Lv3 buff will be applied to increase the critical rate."
	},{
		level:"CARD",sp:10,mp:120,power:"120%+440",casttime:undefined,cooltime:2,duration:undefined,
	 	description:"Throw a dagger to standing or fallen enemy to knock it down. After throwing the dagger, Lv3 buff will be applied to increase the critical rate."
	}]);

	infiltrator.skill[10] = new Skill("./img_p/inf/daggermastery.webp","PASSIVE","<font color='#8e6aac'>Dagger Mastery</font>","5",[9,4],[{id:9,lv:1}],[{
		level:22,sp:10,mp:undefined,power:"5%+50",casttime:undefined,cooltime:undefined,duration:undefined,
	 	description:"Increase the damage caused by Throwing Dagger. Increase the number of daggers to 3. "
	},{
		level:26,sp:10,mp:undefined,power:"7%+70",casttime:undefined,cooltime:undefined,duration:undefined,
	 	description:"Increase the damage caused by Throwing Dagger. "
	},{
		level:30,sp:10,mp:undefined,power:"9%+90",casttime:undefined,cooltime:undefined,duration:undefined,
	 	description:"Increase the damage caused by Throwing Dagger. Increase the number of daggers to 5. "
	},{
		level:34,sp:10,mp:undefined,power:"11%+110",casttime:undefined,cooltime:undefined,duration:undefined,
	 	description:"Increase the damage caused by Throwing Dagger. "
	},{
		level:38,sp:10,mp:undefined,power:"13%+130",casttime:undefined,cooltime:undefined,duration:undefined,
	 	description:"Increase the damage caused by Throwing Dagger. Increase the number of daggers to 7. "
	}]);

	infiltrator.skill[11] = new Skill("./img_p/inf/katarmastery.webp","PASSIVE","<font color='#8e6aac'>Katar Mastery</font>","5",[9,6],[{id:10,lv:1}],[{
		level:41,sp:20,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined,
	 	description:"Critical rate and aim rate will be increased by 1%. "
	},{
		level:42,sp:20,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined,
	 	description:"Critical rate and aim rate will be increased by 2%. "
	},{
		level:43,sp:20,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined,
	 	description:"Critical rate and aim rate will be increased by 3%. "
	},{
		level:44,sp:20,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined,
	 	description:"Critical rate and aim rate will be increased by 4%. "
	},{
		level:45,sp:20,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined,
	 	description:"Critical rate and aim rate will be increased by 5%. "
	}]);
	
	//Thief - Infiltrator - Assassin - Ninja 
	var assassin = {
		name: "Assassin",
		skill: new Array(),
		image: "./img_p/assassinbg.webp"
	};
	
	assassin.skill[0] = new Skill("./img_p/ass/yuminko.webp","ACTIVE","<font color='#8e6aac'>Hypnotizer</font>","5",[1,0],[],[{
		level:40,sp:10,mp:50,power:undefined,casttime:0,cooltime:12,duration:undefined, 
	 	description:"Throw a dust which can cause Lv. 1 Sleep status up to 2 standing enemies by 70% change. Above skill level 3, fallen enemies can be attacked also. "
	},{
		level:43,sp:10,mp:55,power:undefined,casttime:0,cooltime:14,duration:undefined, 
	 	description:"Throw a dust which can cause Lv. 2 Sleep status up to 3 standing enemies by 75% change. Above skill level 3, fallen enemies can be attacked also."
	},{
		level:46,sp:10,mp:60,power:undefined,casttime:0,cooltime:16,duration:undefined, 
	 	description:"Throw a dust which can cause Lv. 3 Sleep status up to 3 standing or fallen enemies by 80% change. "
	},{
		level:49,sp:10,mp:65,power:undefined,casttime:0,cooltime:18,duration:undefined, 
	 	description:"Throw a dust which can cause Lv. 4 Sleep status up to 4 standing or fallen enemies by 85% change. "
	},{
		level:52,sp:10,mp:70,power:undefined,casttime:0,cooltime:20,duration:undefined, 
	 	description:"Throw a dust which can cause Lv. 5 Sleep status up to 5 standing or fallen enemies by 90% change. "
	}]);

	assassin.skill[1] = new Skill("./img_p/ass/gennei.webp","ACTIVE","<font color='#8e6aac'>Shadow Leap</font>","5",[3,2],[{id:0,lv:1}],[{
		level:42,sp:20,mp:62,power:"150%+200",casttime:0,cooltime:15,duration:undefined, 
	 	description:"Instantly move to rear of the nearest enemy and knock it down. Skill would also give Lv3 buff that will increase the critical rate."
	},{
		level:46,sp:20,mp:58,power:"175%+240",casttime:0,cooltime:13,duration:undefined, 
	 	description:"Instantly move to rear of the nearest enemy and knock it down. Skill would also give Lv3 buff that will increase the critical rate."
	},{
		level:50,sp:20,mp:54,power:"200%+280",casttime:0,cooltime:11,duration:undefined, 
	 	description:"Instantly move to rear of the nearest enemy and knock it down. Skill would also give Lv3 buff that will increase the critical rate."
	},{
		level:54,sp:20,mp:50,power:"225%+320",casttime:0,cooltime:9,duration:undefined, 
	 	description:"Instantly move to rear of the nearest enemy and knock it down. Skill would also give Lv3 buff that will increase the critical rate."
	},{
		level:58,sp:20,mp:46,power:"250%+360",casttime:0,cooltime:7,duration:undefined, 
	 	description:"Instantly move to rear of the nearest enemy and knock it down. Skill would also give Lv3 buff that will increase the critical rate."
	}]);

	assassin.skill[2] = new Skill("./img_p/ass/issen.webp","ACTIVE","<font color='#8e6aac'>Perfect Strike</font>","5",[3,10],[{id:1,lv:2}],[{
		level:48,sp:30,mp:180,power:"400%+1000",casttime:0,cooltime:60,duration:undefined, 
	 	description:"Travel with extreme speed and attack 2 enemies in front either standing or fallen, with 400% of final Physical Attack Power. Enemies attacked will get damage and be knocked down. "
	},{
		level:50,sp:30,mp:210,power:"450%+1200",casttime:0,cooltime:60,duration:undefined, 
	 	description:"Travel with extreme speed and attack 3 enemies in front either standing or fallen, with 500% of final Physical Attack Power. Enemies attacked will get damage and be knocked down. "
	},{
		level:52,sp:30,mp:240,power:"500%+1400",casttime:0,cooltime:60,duration:undefined, 
	 	description:"Travel with extreme speed and attack 4 enemies in front either standing or fallen, with 600% of final Physical Attack Power. Enemies attacked will get damage and be knocked down. "
	},{
		level:54,sp:30,mp:270,power:"550%+1600",casttime:0,cooltime:60,duration:undefined, 
	 	description:"Travel with extreme speed and attack 5 enemies in front either standing or fallen, with 700% of final Physical Attack Power. Enemies attacked will get damage and be knocked down. "
	},{
		level:56,sp:30,mp:300,power:"600%+1800",casttime:0,cooltime:60,duration:undefined, 
	 	description:"Travel with extreme speed and attack 6 enemies in front either standing or fallen, with 800% of final Physical Attack Power. Enemies attacked will get damage and be knocked down. "
	}]);

	assassin.skill[3] = new Skill("./img_p/ass/shuriken.webp","ACTIVE","<font color='#8e6aac'>Devilstorm Dart</font>","5",[5,0],[],[{
		level:40,sp:10,mp:75,power:"200%+200",casttime:0,cooltime:4,duration:undefined, 
	 	description:"Throw a giant shuriken at up to 4 enemies and knock them down. "
	},{
		level:43,sp:10,mp:80,power:"250%+500",casttime:0,cooltime:4,duration:undefined, 
	 	description:"Throw a giant shuriken at up to 5 enemies and knock them down. "
	},{
		level:46,sp:10,mp:85,power:"300%+800",casttime:0,cooltime:4,duration:undefined, 
	 	description:"Throw a giant shuriken at up to 6 enemies and knock them down. "
	},{
		level:49,sp:10,mp:90,power:"350%+1100",casttime:0,cooltime:4,duration:undefined, 
	 	description:"Throw a giant shuriken at up to 7 enemies and knock them down. "
	},{
		level:52,sp:10,mp:95,power:"400%+1400",casttime:0,cooltime:4,duration:undefined, 
	 	description:"Throw a giant shuriken at up to 8 enemies and knock them down. "
	}]);

	assassin.skill[4] = new Skill("./img_p/ass/katanakenma.webp","PASSIVE","<font color='#8e6aac'>Blade Forging</font>","5",[7,2],[{id:3,lv:1}],[{
		level:41,sp:10,mp:undefined,power:"8%+60",casttime:undefined,cooltime:undefined,duration:10, 
	 	description:"Increase damage of Devilstorm Dart. Victim's max HP is decreased by 7% and suffers a bleeding effect which decreases 3HP per second for 10 seconds. "
	},{
		level:44,sp:10,mp:undefined,power:"11%+80",casttime:undefined,cooltime:undefined,duration:12, 
	 	description:"Increase damage of Devilstorm Dart. Victim's max HP is decreased by 9% and suffers a bleeding effect which decreases 6HP per second for 10 seconds. "
	},{
		level:47,sp:10,mp:undefined,power:"14%+100",casttime:undefined,cooltime:undefined,duration:14, 
	 	description:"Increase damage of Devilstorm Dart. Victim's max HP is decreased by 11% and suffers a bleeding effect which decreases 9HP per second for 10 seconds. "
	},{
		level:50,sp:10,mp:undefined,power:"17%+120",casttime:undefined,cooltime:undefined,duration:16, 
	 	description:"Increase damage of Devilstorm Dart. Victim's max HP is decreased by 13% and suffers a bleeding effect which decreases 12HP per second for 10 seconds. "
	},{
		level:53,sp:10,mp:undefined,power:"20%+140",casttime:undefined,cooltime:undefined,duration:18, 
	 	description:"Increase damage of Devilstorm Dart. Victim's max HP is decreased by 15% and suffers a bleeding effect which decreases 15HP per second for 10 seconds. "
	}]);

	assassin.skill[5] = new Skill("./img_p/ass/taiboku.webp","ACTIVE","<font color='#8e6aac'>Wood Rush</font>","5",[5,6],[{id:3,lv:2}],[{
		level:45,sp:20,mp:70,power:"105%",casttime:1.5,cooltime:30,duration:15, 
	 	description:"Summon a huge log and roll it to the front. The log rolls forward and attacks either standing or fallen enemies in its way with damage of 105% of final Physical Attack Power. Victim\'s ability will be decreased - movement speed by 50% and aim rate by 75%."
	},{
		level:48,sp:20,mp:75,power:"120%",casttime:1.5,cooltime:30,duration:20, 
	 	description:"Summon a huge log and roll it to the front. The log rolls forward and attacks either standing or fallen enemies in its way with damage of 105% of final Physical Attack Power. Victim\'s ability will be decreased - movement speed by 50% and aim rate by 75%. "
	},{
		level:51,sp:20,mp:80,power:"135%",casttime:1.5,cooltime:30,duration:25, 
	 	description:"Summon a huge log and roll it to the front. The log rolls forward and attacks either standing or fallen enemies in its way with damage of 105% of final Physical Attack Power. Victim\'s ability will be decreased - movement speed by 50% and aim rate by 75%. "
	},{
		level:54,sp:20,mp:85,power:"150%",casttime:1.5,cooltime:30,duration:30, 
	 	description:"Summon a huge log and roll it to the front. The log rolls forward and attacks either standing or fallen enemies in its way with damage of 105% of final Physical Attack Power. Victim\'s ability will be decreased - movement speed by 50% and aim rate by 75%. "
	},{
		level:57,sp:20,mp:90,power:"175%",casttime:1.5,cooltime:30,duration:35, 
	 	description:"Summon a huge log and roll it to the front. The log rolls forward and attacks either standing or fallen enemies in its way with damage of 105% of final Physical Attack Power. Victim\'s ability will be decreased - movement speed by 50% and aim rate by 75%. "
	}]);

	assassin.skill[6] = new Skill("./img_p/ass/ninja.webp","toggle","<font color='#8e6aac'>Ninja Frenzy</font>","1",[9,2],[],[{
		level:40,sp:25,mp:1,power:undefined,casttime:0,cooltime:0,duration:undefined, 
	 	description:"Transform yourself into a real ninja. After transformed into a ninja, all active skills are disabled and only basic attack skill with upgraded damage can be used. Launch, Re-launch attack, Aerial combo and Cutdown skill can still be used, but motions will be different. Consumes 15 MP for each second, continuously."
	}]);

	assassin.skill[7] = new Skill("./img_p/ass/sakura.webp","ACTIVE","<font color='#8e6aac'>Cherry Blossom Shower</font>","5",[9,4],[{id:6,lv:1}],[{
		level:41,sp:30,mp:15,power:"60%+200",casttime:0,cooltime:0.5,duration:undefined, 
	 	description:"A skill that mimics cherry blossom leaves falling from a tree. Strikes the enemies to launch them into the air. Hits up to 5 targets. "
	},{
		level:42,sp:20,mp:20,power:"75%+250",casttime:0,cooltime:0.5,duration:undefined, 
	 	description:"A skill that mimics cherry blossom leaves falling from a tree. Strikes the enemies to launch them into the air. Hits up to 6 targets. "
	},{
		level:43,sp:20,mp:25,power:"90%+300",casttime:0,cooltime:0.5,duration:undefined, 
	 	description:"A skill that mimics cherry blossom leaves falling from a tree. Strikes the enemies to launch them into the air. Hits up to 7 targets. "
	},{
		level:44,sp:20,mp:30,power:"105%+350",casttime:0,cooltime:0.5,duration:undefined, 
	 	description:"A skill that mimics cherry blossom leaves falling from a tree. Strikes the enemies to launch them into the air. Hits up to 8 targets. "
	},{
		level:45,sp:20,mp:35,power:"120%+400",casttime:0,cooltime:0.5,duration:undefined, 
	 	description:"A skill that mimics cherry blossom leaves falling from a tree. Strikes the enemies to launch them into the air. Hits up to 9 targets."
	}]);

	assassin.skill[8] = new Skill("./img_p/ass/konoha.webp","ACTIVE","<font color='#8e6aac'>Leaf Fall</font>","10",[9,6],[{id:7,lv:1}],[{
		level:43,sp:30,mp:20,power:"45%+350",casttime:0,cooltime:0.5,duration:undefined, 
	 	description:"Lower yourself down and launch enemy by cutting its legs deeply. Attack 5 standing or fallen enemies."
	},{
		level:44,sp:20,mp:25,power:"60%+440",casttime:0,cooltime:0.5,duration:undefined, 
	 	description:"Lower yourself down and launch enemy by cutting its legs deeply. Attack 6 standing or fallen enemies."
	},{
		level:45,sp:20,mp:30,power:"75%+530",casttime:0,cooltime:0.5,duration:undefined, 
	 	description:"Lower yourself down and launch enemy by cutting its legs deeply. Attack 7 standing or fallen enemies."
	},{
		level:46,sp:20,mp:35,power:"90%+620",casttime:0,cooltime:0.5,duration:undefined, 
	 	description:"Lower yourself down and launch enemy by cutting its legs deeply. Attack 8 standing or fallen enemies."
	},{
		level:47,sp:20,mp:40,power:"105%+710",casttime:0,cooltime:0.5,duration:undefined, 
	 	description:"Lower yourself down and launch enemy by cutting its legs deeply. Attack 9 standing or fallen enemies."
	},{
		level:47,sp:20,mp:45,power:"120%+800",casttime:0,cooltime:0.5,duration:undefined, 
	 	description:"Lower yourself down and launch enemy by cutting its legs deeply. Attack 9 standing or fallen enemies."
	},{
		level:47,sp:20,mp:50,power:"135%+890",casttime:0,cooltime:0.5,duration:undefined, 
	 	description:"Lower yourself down and launch enemy by cutting its legs deeply. Attack 9 standing or fallen enemies."
	},{
		level:47,sp:20,mp:55,power:"150%+980",casttime:0,cooltime:0.5,duration:undefined, 
	 	description:"Lower yourself down and launch enemy by cutting its legs deeply. Attack 9 standing or fallen enemies."
	},{
		level:47,sp:20,mp:60,power:"165%+1070",casttime:0,cooltime:0.5,duration:undefined, 
	 	description:"Lower yourself down and launch enemy by cutting its legs deeply. Attack 9 standing or fallen enemies."
	},{
		level:47,sp:20,mp:65,power:"180%+1160",casttime:0,cooltime:0.5,duration:undefined, 
	 	description:"Lower yourself down and launch enemy by cutting its legs deeply. Attack 9 standing or fallen enemies."
	}]);

	assassin.skill[9] = new Skill("./img_p/ass/kasumi.webp","ACTIVE","<font color='#8e6aac'>Mist Vanish</font>","5",[9,8],[{id:8,lv:1}],[{
		level:45,sp:30,mp:25,power:"78.0%+1200",casttime:0,cooltime:4,duration:undefined, 
	 	description:"Rapidly attack enemy in front 3 times and knock it back. Attacks up to 5 enemies. "
	},{
		level:46,sp:20,mp:30,power:"98.5%+1500",casttime:0,cooltime:4,duration:undefined, 
	 	description:"Rapidly attack enemy in front 3 times and knock it back. Attacks up to 6 enemies. "
	},{
		level:47,sp:20,mp:35,power:"119.0%+1800",casttime:0,cooltime:4,duration:undefined, 
	 	description:"Rapidly attack enemy in front 3 times and knock it back. Attacks up to 7 enemies. "
	},{
		level:48,sp:20,mp:40,power:"139.5%+2100",casttime:0,cooltime:4,duration:undefined, 
	 	description:"Rapidly attack enemy in front 3 times and knock it back. Attacks up to 8 enemies. "
	},{
		level:49,sp:20,mp:45,power:"160.0%+2400",casttime:0,cooltime:4,duration:undefined, 
	 	description:"Rapidly attack enemy in front 3 times and knock it back. Attacks up to 9 enemies. "
	}]);

	assassin.skill[10] = new Skill("./img_p/ass/senpuu.webp","ACTIVE","<font color='#8e6aac'>Sky Penetration</font>","5",[7,10],[{id:7,lv:1},{id:9,lv:1}],[{
		level:47,sp:30,mp:30,power:"52.0%+270",casttime:0,cooltime:2,duration:undefined, 
	 	description:"Attack standing or fallen enemies by dragging and launching them into the air. Attack up to 5 targets. "
	},{
		level:48,sp:20,mp:35,power:"66.5%+340",casttime:0,cooltime:2,duration:undefined, 
	 	description:"Attack standing or fallen enemies by dragging and launching them into the air. Attack up to 6 targets. "
	},{
		level:49,sp:20,mp:40,power:"81.0%+410",casttime:0,cooltime:2,duration:undefined, 
	 	description:"Attack standing or fallen enemies by dragging and launching them into the air. Attack up to 7 targets. "
	},{
		level:50,sp:20,mp:45,power:"95.5%+480",casttime:0,cooltime:2,duration:undefined, 
	 	description:"Attack standing or fallen enemies by dragging and launching them into the air. Attack up to 8 targets. "
	},{
		level:51,sp:20,mp:50,power:"110.0%+550",casttime:0,cooltime:2,duration:undefined, 
	 	description:"Attack standing or fallen enemies by dragging and launching them into the air. Attack up to 9 targets. "
	}]);
	
	assassin.skill[11] = new Skill("./img_p/ass/StormStepping.webp","ACTIVE","<font color='#8e6aac'>Storm Stepping</font>","3",[7,4],[],[{
		level:50,sp:15,mp:90,power:undefined,casttime:0,cooltime:75,duration:45, 
	 	description:"By concentrating the force to the foot, allowing you to perform fast steps. 15% increase in evade rate, 5% increase in movement speed."
	},{
		level:51,sp:20,mp:120,power:undefined,casttime:0,cooltime:105,duration:75, 
	 	description:"By concentrating the force to the foot, allowing you to perform fast steps. 20% increase in evade rate, 10% increase in movement speed."
	},{
		level:52,sp:25,mp:150,power:undefined,casttime:0,cooltime:135,duration:105, 
	 	description:"By concentrating the force to the foot, allowing you to perform fast steps. 25% increase in evade rate, 15% increase in movement speed."
	}]);	

//Thief - Infiltrator - Assassin - Ninja 
	var ninja = { 
		name:"Ninja",
		skill:new Array(),
		image:"./img_p/ninjabg.webp"
	};

	ninja.skill[0] = new Skill("./img_p/nin/Awakening.webp","PASSIVE","<font color='#8e6aac'>Awakening</font>","1",[5,0],[],[{
		level:60,sp:1,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Whenever you use MP during battle, your Awakening bar will fill up. This allows you to perform certain special skills which consume Awakening points. These skills also consume MP, however the MP they consume does not fill your awakening bar. "
	}]);
	
	ninja.skill[1] = new Skill("./img_p/nin/DodgeMaster.webp","PASSIVE","<font color='#8e6aac'>Dodge Master</font>","5",[9,0],[{id:0,lv:1}],[{
		level:60,sp:25,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Magic method of compressing space from ancient book. Increase movement 5% and evade rate 7%."
	},{
		level:61,sp:25,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Magic method ofcompressing space from ancient book. Increase movement 7% and evade rate 14%."
	},{
		level:62,sp:25,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Magic method of compressing space from ancient book. Increase movement 9% and evade rate 21%."
	},{
		level:63,sp:25,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Magic method of compressing space from ancient book. Increase movement 11% and evade rate 28%."
	},{
		level:64,sp:25,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Magic method of compressing space from ancient book. Increase movement 13% and evade rate 35%."
	}]);
	
	ninja.skill[2] = new Skill("./img_p/nin/CrossBlade.webp","ACTIVE","<font color='#8e6aac'>Cross Blade</font>","5",[4,3],[{id:0,lv:1}],[{
		level:61,sp:25,mp:300,power:"35%",casttime:0.5,cooltime:30,duration:undefined, 
	 	description:"[Awakening Skill] Casting mystery of secret art, summon 1 evil Ninja who move forward to the front and attack 5 times standing or fallen up to 6 enemies. Higher skill level will increase damage. Cannot use when transform to Ninja."
	},{
		level:63,sp:25,mp:350,power:"37.5%",casttime:0.5,cooltime:25,duration:undefined, 
	 	description:"[Awakening Skill] Casting mystery of secret art, summon 2 evil Ninja who move forward to the front and attack 6 times standing or fallen up to 7 enemies. Higher skill level will increase damage. Cannot use when transform to Ninja."
	},{
		level:65,sp:25,mp:400,power:"40%",casttime:0.5,cooltime:20,duration:undefined, 
	 	description:"[Awakening Skill] Casting mystery of secret art, summon 2 evil Ninja who move forward to the front and attack 7 times standing or fallen up to 8 enemies. Higher skill level will increase damage. Cannot use when transform to Ninja."
	},{
		level:67,sp:25,mp:450,power:"42.5%",casttime:0.5,cooltime:17,duration:undefined, 
	 	description:"[Awakening Skill] Casting mystery of secret art, summon 3 evil Ninja who move forward to the front and attack 8 times standing or fallen up to 9 enemies. Higher skill level will increase damage. Cannot use when transform to Ninja."
	},{
		level:69,sp:25,mp:500,power:"45%",casttime:0.5,cooltime:15,duration:undefined, 
	 	description:"[Awakening Skill] Casting mystery of secret art, summon 3 evil Ninja who move forward to the front and attack 10 times standing or fallen up to 10 enemies. Higher skill level will increase damage. Cannot use when transform to Ninja."
	}]);
	
	ninja.skill[3] = new Skill("./img_p/nin/MultiIllusion.webp","ACTIVE","<font color='#8e6aac'>Multi Illusion</font>","1",[6,3],[{id:0,lv:1}],[{
		level:60,sp:60,mp:undefined,power:undefined,casttime:0,cooltime:300,duration:undefined, 
	 	description:"[Ultimate Skill] The Ultimate Ninja Technique. Using secret arts, summon 8 ninjas to attack up to 8 monsters. During casting, character will be unbeatable. "
	}]);
	
	ninja.skill[4] = new Skill("./img_p/nin/ShadowBlade.webp","ACTIVE","<font color='#8e6aac'>Shadow Blade</font>","5",[4,5],[{id:2,lv:1}],[{
		level:62,sp:20,mp:350,power:"153.6%",casttime:0.5,cooltime:25,duration:undefined, 
	 	description:"[Awakening Skill] Casting mystery of secret art, summon evil Ninja, rapidly mutilate up to 8 enemies with 4 times. Target that attacked last, launch to the air. Cannot use when transform to Ninja."
	},{
		level:64,sp:20,mp:375,power:"172.8%",casttime:0.5,cooltime:22,duration:undefined, 
	 	description:"[Awakening Skill] Casting mystery of secret art, summon evil Ninja, rapidly mutilate up to 10 enemies with 4 times. Target that attacked last, launch to the air. Cannot use when transform to Ninja."
	},{
		level:66,sp:20,mp:400,power:"192.0%",casttime:0.5,cooltime:19,duration:undefined, 
	 	description:"[Awakening Skill] Casting mystery of secret art, summon evil Ninja, rapidly mutilate up to 12 enemies with 4 times. Target that attacked last, launch to the air. Cannot use when transform to Ninja."
	},{
		level:68,sp:20,mp:425,power:"211.2%",casttime:0.5,cooltime:16,duration:undefined, 
	 	description:"[Awakening Skill] Casting mystery of secret art, summon evil Ninja, rapidly mutilate up to 14 enemies with 4 times. Target that attacked last, launch to the air. Cannot use when transform to Ninja."
	},{
		level:70,sp:20,mp:450,power:"230.4%",casttime:0.5,cooltime:13,duration:undefined, 
	 	description:"[Awakening Skill] Casting mystery of secret art, summon evil Ninja, rapidly mutilate up to 16 enemies with 4 times. Target that attacked last, launch to the air. Cannot use when transform to Ninja."
	}]);	
	
	ninja.skill[5] = new Skill("./img_p/nin/ProtectEdge.webp","ACTIVE","<font color='#8e6aac'>Protect Edge</font>","5",[1,0],[],[{
		level:60,sp:25,mp:350,power:"35%",casttime:2,cooltime:120,duration:60, 
	 	description:"Use the secret arts to cast a spell on a dagger, making it float around the caster. Hits up to 3 enemies with 35% of your attack power. Cannot use while transformed into a ninja."
	},{
		level:62,sp:25,mp:400,power:"40%",casttime:2,cooltime:110,duration:70, 
	 	description:"Use the secret arts to cast a spell on a dagger, making it float around the caster. Hits up to 3 enemies with 40% of your attack power. Cannot use while transformed into a ninja."
	},{
		level:64,sp:25,mp:450,power:"45%",casttime:2,cooltime:100,duration:80, 
	 	description:"Use the secret arts to cast a spell on a dagger, making it float around the caster. Hits up to 4 enemies with 45% of your attack power. Cannot use while transformed into a ninja. "
	},{
		level:66,sp:25,mp:500,power:"50%",casttime:2,cooltime:90,duration:90, 
	 	description:"Use the secret arts to cast a spell on a dagger, making it float around the caster. Hits up to 4 enemies with 50% of your attack power. Cannot use while transformed into a ninja."
	},{
		level:68,sp:25,mp:550,power:"55%",casttime:2,cooltime:80,duration:100, 
	 	description:"Use the secret arts to cast a spell on a dagger, making it float around the caster. Hits up to 5 enemies with 55% of your attack power. Cannot use while transformed into a ninja. "
	}]);
	
	ninja.skill[6] = new Skill("./img_p/nin/ChargeTheAwakening.webp","toggle","<font color='#8e6aac'>Awakening Charge</font>","3",[1,7],[],[{
		level:60,sp:10,mp:35,power:undefined,casttime:0,cooltime:3,duration:undefined, 
		description:"Consumes 20% MP to recharge 14% of the Awakening bar every 3 seconds."
	 },{
	 	level:62,sp:10,mp:35,power:undefined,casttime:0,cooltime:3,duration:undefined, 
		description:"Consumes 20% MP to recharge 17% of the Awakening bar every 3 seconds."
	 },{
		level:68,sp:10,mp:35,power:undefined,casttime:0,cooltime:3,duration:undefined, 
		description:"Consumes 20% MP to recharge 20% of the Awakening bar every 3 seconds."
	}]);

//Shaman - Summoner - Elementalist - Spirit Lord
	var shaman = {
		name: "Shaman",
		skill: new Array(),
		image:"./img_p/shamanbg.webp"
	};	

	shaman.skill[0] = new Skill("./img_p/shaman/BreathOfNature.webp","ACTIVE","<font color='#8e6aac'>Breath of Nature</font>","1",[5,10],[],[{
		level:7,sp:5,mp:30,power:undefined,casttime:0.8,cooltime:3,duration:600, 
		description:"Increases the whole party's HP recovery rate by 20%"
	}]);
	
	shaman.skill[1] = new Skill("./img_p/shaman/StrongerSummon.webp","PASSIVE","<font color='#8e6aac'>Stronger Summon</font>","5",[4,7],[{id:8,lv:1}],[{
		level:15,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
		description:"Adds 5% additional Physical and Magical Defence to summoned spirit."
	},{
		level:16,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
		description:"Adds 10% additional Physical and Magical Defence to summoned spirit."
	},{
		level:17,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
		description:"Adds 15% additional Physical and Magical Defence to summoned spirit."
	},{
		level:18,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
		description:"Adds 20% additional Physical and Magical Defence to summoned spirit."
	},{
		level:19,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
		description:"Adds 25% additional Physical and Magical Defence to summoned spirit."
	}]);
	
	shaman.skill[2] = new Skill("./img_p/shaman/DragonTooth.webp","ACTIVE","<font color='#8e6aac'>Dragon Tooth</font>","5",[6,0],[],[{
		level:3,sp:15,mp:10,power:"45.0%+100",casttime:0,cooltime:3,duration:undefined, 
		description:"Fire 1 Thorn with poison effect. 30% chance to inflict Lv 1 Poison."
	},{
		level:5,sp:15,mp:12,power:"48.0%+135",casttime:0,cooltime:3,duration:undefined, 
		description:"Fire 2 Thorns with poison effect. 35% chance to inflict Lv 2 Poison."
	},{
		level:7,sp:15,mp:14,power:"51.0%+170",casttime:0,cooltime:3,duration:undefined, 
		description:"Fire 3 Thorns with poison effect. 40% chance to inflict Lv 3 Poison."
	},{
		level:9,sp:15,mp:16,power:"54.0%+205",casttime:0,cooltime:3,duration:undefined, 
		description:"Fire 4 Thorns with poison effect. 45% chance to inflict Lv 4 Poison."
	},{
		level:11,sp:15,mp:18,power:"57.0%+240",casttime:0,cooltime:3,duration:undefined, 
		description:"Fire 5 Thorns with poison effect. 50% chance to inflict Lv 5 Poison."
	}]);
	
	shaman.skill[3] = new Skill("./img_p/shaman/SpellTrap.webp","ACTIVE","<font color='#8e6aac'>Spell Trap</font>","5",[6,5],[{id:2,lv:3}],[{
		level:10,sp:15,mp:40,power:undefined,casttime:0.9,cooltime:10,duration:undefined, 
		description:"Attack 3 standing or fallen enemies and restrict their movement for 2 seconds."
	},{
		level:11,sp:15,mp:45,power:undefined,casttime:0.9,cooltime:9,duration:undefined, 
		description:"Attack 4 standing or fallen enemies and restrict their movement for 2.5 seconds."
	},{
		level:12,sp:15,mp:50,power:undefined,casttime:0.9,cooltime:8,duration:undefined, 
		description:"Attack 5 standing or fallen enemies and restrict their movement for 3 seconds."
	},{
		level:13,sp:15,mp:55,power:undefined,casttime:0.9,cooltime:7,duration:undefined, 
		description:"Attack 6 standing or fallen enemies and restrict their movement for 3.5 seconds."
	},{
		level:14,sp:15,mp:60,power:undefined,casttime:0.9,cooltime:6,duration:undefined, 
		description:"Attack 7 standing or fallen enemies and restrict their movement for 4 seconds."
	}]);

	shaman.skill[4] = new Skill("./img_p/shaman/StrongerSpell.webp","PASSIVE","<font color='#8e6aac'>Stronger Spell</font>","3",[6,7],[{id:3,lv:3}],[{
		level:13,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
		description:"Increase damage on Dragon Tooth, Spell Trap, Spike Wave, Mega Spike Wave by 10%"
	},{
		level:15,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
		description:"Increase damage on Dragon Tooth, Spell Trap, Spike Wave, Mega Spike Wave by 20%"
	},{
		level:17,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
		description:"Increase damage on Dragon Tooth, Spell Trap, Spike Wave, Mega Spike Wave by 30%"	
	}]);
	
	shaman.skill[5] = new Skill("./img_p/shaman/GroundPiston.webp","ACTIVE","<font color='#8e6aac'>Ground Piston</font>","5",[8,1],[],[{
		level:4,sp:15,mp:8,power:"23.0%+80",casttime:0.5,cooltime:2,duration:undefined, 
		description:"Attack 4 standing or fallen enemies with a rising rock from the ground and smacking them into the air."
	},{
		level:5,sp:15,mp:11,power:"25.5%+90",casttime:0.5,cooltime:2,duration:undefined, 
		description:"Attack 5 standing or fallen enemies with a rising rock from the ground and smacking them into the air."
	},{
		level:6,sp:15,mp:14,power:"28.0%+100",casttime:0.5,cooltime:2,duration:undefined, 
		description:"Attack 6 standing or fallen enemies with a rising rock from the ground and smacking them into the air."
	},{
		level:7,sp:15,mp:17,power:"30.5%+110",casttime:0.5,cooltime:2,duration:undefined, 
		description:"Attack 7 standing or fallen enemies with a rising rock from the ground and smacking them into the air."
	},{
		level:8,sp:15,mp:20,power:"33.0%+120",casttime:0.5,cooltime:2,duration:undefined, 
		description:"Attack 8 standing or fallen enemies with a rising rock from the ground and smacking them into the air."
	}]);

	shaman.skill[6] = new Skill("./img_p/shaman/AirSplash.webp","ACTIVE","<font color='#8e6aac'>Air Splash</font>","5",[8,4],[{id:5,lv:1}],[{
		level:9,sp:20,mp:20,power:"22.0%+260",casttime:0,cooltime:7,duration:undefined, 
		description:"Attack up to 6 airborne enemies with gun staff 3 times."
	},{
		level:11,sp:20,mp:22,power:"25.0%+290",casttime:0,cooltime:6,duration:undefined, 
		description:"Attack up to 7 airborne enemies with gun staff 4 times."
	},{
		level:13,sp:20,mp:24,power:"28.0%+320",casttime:0,cooltime:5,duration:undefined, 
		description:"Attack up to 8 airborne enemies with gun staff 5 times."
	},{
		level:15,sp:20,mp:26,power:"31.0%+350",casttime:0,cooltime:4,duration:undefined, 
		description:"Attack up to 9 airborne enemies with gun staff 6 times."
	},{
		level:17,sp:20,mp:28,power:"34.0%+380",casttime:0,cooltime:3,duration:undefined, 
		description:"Attack up to 10 airborne enemies with gun staff 7 times."
	}]);
	
	shaman.skill[7] = new Skill("./img_p/shaman/SpikeWave.webp","ACTIVE","<font color='#8e6aac'>Spike Wave</font>","5",[8,10],[{id:12,lv:1},{id:4,lv:1}],[{
		level:16,sp:15,mp:80,power:"35.0%+400",casttime:1.7,cooltime:60,duration:undefined, 
		description:"Attacks up to 5 standing or fallen enemies 5 times. Inflicts Lv 5 Slow (Atk Speed decreased by 22%, Move Speed decrease by 13% for 11 seconds)."
	},{
		level:17,sp:15,mp:95,power:"40.0%+450",casttime:1.7,cooltime:50,duration:undefined, 
		description:"Attacks up to 6 standing or fallen enemies 6 times. Inflicts Lv 5 Slow (Atk Speed decreased by 22%, Move Speed decrease by 13% for 11 seconds)."
	},{
		level:18,sp:15,mp:110,power:"45.0%+500",casttime:1.7,cooltime:40,duration:undefined, 
		description:"Attacks up to 7 standing or fallen enemies 7 times. Inflicts Lv 5 Slow (Atk Speed decreased by 22%, Move Speed decrease by 13% for 11 seconds)."
	},{
		level:19,sp:15,mp:125,power:"50.0%+550",casttime:1.7,cooltime:30,duration:undefined, 
		description:"Attacks up to 8 standing or fallen enemies 8 times. Inflicts Lv 5 Slow (Atk Speed decreased by 22%, Move Speed decrease by 13% for 11 seconds)."
	},{
		level:20,sp:15,mp:140,power:"55.0%+600",casttime:1.7,cooltime:20,duration:undefined, 
		description:"Attacks up to 9 standing or fallen enemies 9 times. Inflicts Lv 5 Slow (Atk Speed decreased by 22%, Move Speed decrease by 13% for 11 seconds)."
	}]);
	
	shaman.skill[8] = new Skill("./img_p/shaman/SummonMastery.webp","PASSIVE","<font color='#8e6aac'>Summon Mastery</font>","2",[4,3],[{id:9,lv:3}],[{
		level:8,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
		description:"Through deep communication with nature, summon point is increased by 1."
	},{
		level:12,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
		description:"Through deep communication with nature, summon point is increased by 1."
	}]);

	shaman.skill[9] = new Skill("./img_p/shaman/SummonMist.webp","ACTIVE","<font color='#8e6aac'>Summon Mist</font>","5",[2,0],[],[{
	
		level:1,sp:10,mp:100,power:undefined,casttime:0,cooltime:40,duration:240, 
		description:"Communicate with nature using Drakan Force, and summon Mist for 4 minutes. Mist has 160% max HP and 30% ATK of the summoner. Uses one Summon Point. Multiple summons allowed."
	},{
		level:2,sp:10,mp:130,power:undefined,casttime:0,cooltime:40,duration:300, 
		description:"Communicate with nature using Drakan Force, and summon Mist for 5 minutes. Mist has 170% max HP and 35% ATK of the summoner. Uses one Summon Point. Multiple summons allowed."
	},{
		level:4,sp:10,mp:160,power:undefined,casttime:0,cooltime:40,duration:360, 
		description:"Communicate with nature using Drakan Force, and summon Mist for 6 minutes. Mist has 180% max HP and 40% ATK of the summoner. Uses one Summon Point. Multiple summons allowed."
	},{
		level:6,sp:10,mp:190,power:undefined,casttime:0,cooltime:40,duration:420, 
		description:"Communicate with nature using Drakan Force, and summon Mist for 7 minutes. Mist has 190% max HP and 45% ATK of the summoner. Uses one Summon Point. Multiple summons allowed."
	},{
		level:8,sp:10,mp:220,power:undefined,casttime:0,cooltime:40,duration:480, 
		description:"Communicate with nature using Drakan Force, and summon Mist for 8 minutes. Mist has 200% max HP and 50% ATK of the summoner. Uses one Summon Point. Multiple summons allowed."
	}]);
	
	shaman.skill[10] = new Skill("./img_p/shaman/SummonDyke.webp","ACTIVE","<font color='#8e6aac'>Summon Dyke</font>","5",[2,7],[{id:9,lv:3}],[{
		level:14,sp:15,mp:220,power:undefined,casttime:0,cooltime:120,duration:240, 
		description:"Summon Dyke for 4 minutes. Dyke has 250% max HP and 75% ATK of the summoner. Uses one Summon Point. Multiple summons allowed."
	},{
		level:15,sp:15,mp:250,power:undefined,casttime:0,cooltime:120,duration:300, 
		description:"Summon Dyke for 5 minutes. Dyke has 300% max HP and 80% ATK of the summoner. Uses one Summon Point. Multiple summons allowed."
	},{
		level:16,sp:15,mp:280,power:undefined,casttime:0,cooltime:120,duration:360, 
		description:"Summon Dyke for 6 minutes. Dyke has 350% max HP and 85% ATK of the summoner. Uses one Summon Point. Multiple summons allowed."
	},{
		level:17,sp:15,mp:310,power:undefined,casttime:0,cooltime:120,duration:420, 
		description:"Summon Dyke for 7 minutes. Dyke has 400% max HP and 90% ATK of the summoner. Uses one Summon Point. Multiple summons allowed."
	},{
		level:18,sp:15,mp:340,power:undefined,casttime:0,cooltime:120,duration:480, 
		description:"Summon Dyke for 8 minutes. Dyke has 450% max HP and 95% ATK of the summoner. Uses one Summon Point. Multiple summons allowed."
	}]);
	
	shaman.skill[11] = new Skill("./img_p/shaman/Regain.webp","ACTIVE","<font color='#8e6aac'>Regain</font>","1",[2,10],[],[{
		level:1,sp:10,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
		description:"Recall spirits. After learning this skill, you may tell your spirit what to do by pressing the spacebar and arrow key. Pressing Spacebar multiple times toggles between summons."
	}]);

	shaman.skill[12] = new Skill("./img_p/shaman/DragonkinForceReinforcement.webp","PASSIVE","<font color='#8e6aac'>Dragonkin Force Reinforcement</font>","1",[8,7],[{id:6,lv:3}],[{
		level:13,sp:10,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
		description:"Increase total MATK increased by 3%"
	}]);

	
	var summoner = {
		name: "Summoner",
		skill: new Array(),
		image:"./img_p/summonerbg.webp"
	};

	summoner.skill[0] = new Skill("./img_p/summoner/DireMist.webp","PASSIVE","<font color='#8e6aac'>Dire Mist</font>","1",[0,0],[{id:109,lv:3}],[{
		level:20,sp:30,mp:undefined,power:undefined,casttime:0,cooltime:undefined,duration:undefined, 
		description:"Mist is upgraded to a more powerful Dire Mist."
	}]);
	
	summoner.skill[1] = new Skill("./img_p/summoner/CryOfLife.webp","ACTIVE","<font color='#8e6aac'>Cry of Life</font>","3",[0,3],[{id:0,lv:1}],[{
		level:24,sp:15,mp:85,power:undefined,casttime:1.5,cooltime:30,duration:undefined, 
		description:"Heal all spirits within range for 30%."
	},{
		level:26,sp:15,mp:125,power:undefined,casttime:1.5,cooltime:25,duration:undefined, 
		description:"Heal all spirits within range for 50%."
	},{
		level:28,sp:15,mp:165,power:undefined,casttime:1.5,cooltime:20,duration:undefined, 
		description:"Heal all spirits within range for 70%."
	}]);

	summoner.skill[2] = new Skill("./img_p/summoner/AwakeInstinct.webp","PASSIVE","<font color='#8e6aac'>Awake Instinct</font>","1",[0,9],[{id:3,lv:1}],[{
		level:35,sp:20,mp:undefined,power:undefined,casttime:0,cooltime:undefined,duration:undefined, 
		description:"Increases the movement speed and attack speed of Kalki by 20%. This skill must be learned prior to summoning Kalki to take effect."
	}]);

	summoner.skill[3] = new Skill("./img_p/summoner/SummonKalki.webp","ACTIVE","<font color='#8e6aac'>Summon Kalki</font>","5",[1,7],[{id:110,lv:1},{id:5,lv:1},{id:1,lv:1}],[{
		level:33,sp:20,mp:400,power:undefined,casttime:0,cooltime:180,duration:300, 
		description:"Summon Kalki spirit for 5 minutes. Kalki has 250% max HP and 140% ATK of the summoner. High DEF and provoke skills. Uses 3 summon points. Multiple summons not allowed."
	},{
		level:34,sp:20,mp:450,power:undefined,casttime:0,cooltime:180,duration:360, 
		description:"Summon Kalki spirit for 6 minutes. Kalki has 275% max HP and 150% ATK of the summoner. High DEF and provoke skills. Uses 3 summon points. Multiple summons not allowed."
	},{
		level:35,sp:20,mp:500,power:undefined,casttime:0,cooltime:180,duration:420, 
		description:"Summon Kalki spirit for 7 minutes. Kalki has 300% max HP and 160% ATK of the summoner. High DEF and provoke skills. Uses 3 summon points. Multiple summons not allowed."
	},{
		level:36,sp:20,mp:550,power:undefined,casttime:0,cooltime:180,duration:480, 
		description:"Summon Kalki spirit for 8 minutes. Kalki has 325% max HP and 170% ATK of the summoner. High DEF and provoke skills. Uses 3 summon points. Multiple summons not allowed."
	},{
		level:37,sp:20,mp:600,power:undefined,casttime:0,cooltime:180,duration:540, 
		description:"Summon Kalki spirit for 9 minutes. Kalki has 350% max HP and 180% ATK of the summoner. High DEF and provoke skills. Uses 3 summon points. Multiple summons not allowed."
	}]);
	
	summoner.skill[4] = new Skill("./img_p/summoner/Gather!.png","ACTIVE","<font color='#8e6aac'>Gather!</font>","1",[2,0],[],[{
		level:20,sp:20,mp:undefined,power:undefined,casttime:0,cooltime:undefined,duration:undefined, 
		description:"Recalls all active spirit immediately to your side."
	}]);
	
	summoner.skill[5] = new Skill("./img_p/summoner/SummonDoonamik.webp","ACTIVE","<font color='#8e6aac'>Summon Doomamik</font>","5",[2,3],[{id:4,lv:1}],[{
		level:26,sp:20,mp:300,power:undefined,casttime:0,cooltime:120,duration:360, 
		description:"Contract with nature using Drakan Force and summon Protector Doomamik"
	},{
		level:27,sp:20,mp:350,power:undefined,casttime:0,cooltime:120,duration:420, 
		description:"Contract with nature using Drakan Force and summon Protector Doomamik"
	},{
		level:28,sp:20,mp:400,power:undefined,casttime:0,cooltime:120,duration:480, 
		description:"Contract with nature using Drakan Force and summon Protector Doomamik"
	},{
		level:29,sp:20,mp:450,power:undefined,casttime:0,cooltime:120,duration:540, 
		description:"Contract with nature using Drakan Force and summon Protector Doomamik"
	},{
		level:30,sp:20,mp:500,power:undefined,casttime:0,cooltime:120,duration:600, 
		description:"Contract with nature using Drakan Force and summon Protector Doomamik"
	}]);
	
	summoner.skill[6] = new Skill("./img_p/summoner/Fury.webp","ACTIVE","<font color='#8e6aac'>Fury</font>","3",[2,9],[{id:2,lv:1}],[{
		level:36,sp:20,mp:undefined,power:undefined,casttime:0,cooltime:undefined,duration:undefined, 
		description:"Tail Spin skill added to Kalki's available skills. This skill must be learned prior to summoning Kalki to take affect."
	},{
		level:37,sp:20,mp:undefined,power:undefined,casttime:0,cooltime:undefined,duration:undefined, 
		description:"Rising Attack skill added to Kalki's available skills. This skill must be learned prior to summoning Kalki to take affect."
	},{
		level:38,sp:20,mp:undefined,power:undefined,casttime:0,cooltime:undefined,duration:undefined, 
		description:"Hydro Strength skill added to Kalki's available skills. This skill must be learned prior to summoning Kalki to take affect."
	}]);
	
	summoner.skill[7] = new Skill("./img_p/summoner/StrongLeather.webp","PASSIVE","<font color='#8e6aac'>Strong Leather</font>","1",[4,5],[{id:5,lv:1}],[{
		level:26,sp:15,mp:undefined,power:undefined,casttime:0,cooltime:undefined,duration:undefined, 
		description:"Increase Doomamik's DEF by 20%. This skill must be learned prior to summoning Doomamik to take effect."
	}]);
	
	summoner.skill[8] = new Skill("./img_p/summoner/StealCrow.webp","PASSIVE","<font color='#8e6aac'>Steal Crow</font>","1",[4,7],[{id:7,lv:1},{id:5,lv:3}],[{
		level:28,sp:15,mp:undefined,power:undefined,casttime:0,cooltime:undefined,duration:undefined, 
		description:"Elemental Beam skill added to Doomamik's available skills. This skill must be learned prior to summoning Doomamik to take effect."
	}]);
	
	summoner.skill[9] = new Skill("./img_p/summoner/RollingWind.webp","PASSIVE","<font color='#8e6aac'>Rolling Wind</font>","1",[4,9],[{id:8,lv:1},{id:5,lv:5}],[{
		level:31,sp:15,mp:undefined,power:undefined,casttime:0,cooltime:undefined,duration:undefined, 
		description:"Rolling Wind skill added to Doomamik's available skills. This skill must be learned prior to summoning Doomamik to take effect."
	}]);
	
	summoner.skill[10] = new Skill("./img_p/summoner/AirSmash.webp","ACTIVE","<font color='#8e6aac'>Air Smash</font>","5",[6,0],[{id:106,lv:3}],[{
		level:20,sp:15,mp:100,power:"120.0%+180",casttime:0,cooltime:6.5,duration:undefined, 
		description:"Can only be used in air. Attack up to 3 standing or fallen enemies."
	},{
		level:22,sp:15,mp:110,power:"130.0%+215",casttime:0,cooltime:6,duration:undefined, 
		description:"Can only be used in air. Attack up to 4 standing or fallen enemies."
	},{
		level:24,sp:15,mp:100,power:"140.0%+250",casttime:0,cooltime:5.5,duration:undefined, 
		description:"Can only be used in air. Attack up to 5 standing or fallen enemies."
	},{
		level:26,sp:15,mp:100,power:"150.0%+285",casttime:0,cooltime:5,duration:undefined, 
		description:"Can only be used in air. Attack up to 6 standing or fallen enemies."
	},{
		level:28,sp:15,mp:100,power:"160.0%+320",casttime:0,cooltime:4.5,duration:undefined, 
		description:"Can only be used in air. Attack up to 7 standing or fallen enemies."
	}]);
	
	summoner.skill[11] = new Skill("./img_p/summoner/NationFury.webp","ACTIVE","<font color='#8e6aac'>Nation Fury</font>","5",[6,4],[{id:10,lv:1}],[{
		level:27,sp:20,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
		description:"Increases max HP and MATK by 6%"
	},{
		level:29,sp:20,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
		description:"Increases max HP and MATK by 9%"
	},{
		level:31,sp:20,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
		description:"Increases max HP and MATK by 12%"
	},{
		level:33,sp:20,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
		description:"Increases max HP and MATK by 15%"
	},{
		level:35,sp:20,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
		description:"Increases max HP and MATK by 18%"
	}]);
	
	summoner.skill[12] = new Skill("./img_p/summoner/Inferno.webp","toggle","<font color='#8e6aac'>Inferno</font>","5",[8,0],[],[{
		level:22,sp:20,mp:100,power:"180.0%+180",casttime:0,cooltime:14,duration:undefined, 
		description:"Shoot a flame towards you, damaging up to 3 standing or fallen enemies. Consumes 20 MP per 0.5 seconds. Cannot move while skill is active."
	},{
		level:24,sp:20,mp:125,power:"190.0%+215",casttime:0,cooltime:12,duration:undefined, 
		description:"Shoot a flame towards you, damaging up to 4 standing or fallen enemies. Consumes 25 MP per 0.5 seconds. Cannot move while skill is active."
	},{
		level:26,sp:20,mp:150,power:"200.0%+250",casttime:0,cooltime:10,duration:undefined, 
		description:"Shoot a flame towards you, damaging up to 5 standing or fallen enemies. Consumes 30 MP per 0.5 seconds. Cannot move while skill is active."
	},{
		level:28,sp:20,mp:175,power:"210.0%+285",casttime:0,cooltime:8,duration:undefined, 
		description:"Shoot a flame towards you, damaging up to 6 standing or fallen enemies. Consumes 35 MP per 0.5 seconds. Cannot move while skill is active."
	},{
		level:30,sp:20,mp:200,power:"220.0%+320",casttime:0,cooltime:6,duration:undefined, 
		description:"Shoot a flame towards you, damaging up to 7 standing or fallen enemies. Consumes 40 MP per 0.5 seconds. Cannot move while skill is active."
	}]);
	
	summoner.skill[13] = new Skill("./img_p/summoner/Volcano.webp","ACTIVE","<font color='#8e6aac'>Volcano</font>","5",[8,2.5],[{id:12,lv:3}],[{
		level:25,sp:20,mp:90,power:"200.0%+1000",casttime:1.5,cooltime:12,duration:undefined, 
		description:"Summon a volcano to the surface, launching up to 5 standing or fallen enemies. Inflicts Lv 11 Burn. At level 3, skill reaches max launch height."
	},{
		level:27,sp:20,mp:95,power:"220.0%+1150",casttime:1.5,cooltime:10,duration:undefined, 
		description:"Summon a volcano to the surface, launching up to 6 standing or fallen enemies. Inflicts Lv 12 Burn. At level 3, skill reaches max launch height."
	},{
		level:29,sp:20,mp:100,power:"240.0%+1300",casttime:1.5,cooltime:9,duration:undefined, 
		description:"Summon a volcano to the surface, launching up to 7 standing or fallen enemies. Inflicts Lv 13 Burn. At level 3, skill reaches max launch height."
	},{
		level:31,sp:20,mp:105,power:"260.0%+1450",casttime:1.5,cooltime:8,duration:undefined, 
		description:"Summon a volcano to the surface, launching up to 8 standing or fallen enemies. Inflicts Lv 14 Burn. At level 3, skill reaches max launch height."
	},{
		level:33,sp:20,mp:110,power:"280.0%+1600",casttime:1.5,cooltime:7,duration:undefined, 
		description:"Summon a volcano to the surface, launching up to 9 standing or fallen enemies. Inflicts Lv 15 Burn. At level 3, skill reaches max launch height."
	}]);
	
	summoner.skill[14] = new Skill("./img_p/summoner/MeteorRain.webp","ACTIVE","<font color='#8e6aac'>Meteor Rain</font>","5",[8,6],[{id:13,lv:1}],[{
		level:30,sp:20,mp:75,power:"60.0%+200",casttime:1.2,cooltime:10,duration:undefined, 
		description:"Summon meteors to attack up to 5 enemies. Inflicts Level 11 Burn."
	},{
		level:32,sp:20,mp:100,power:"75.0%+220",casttime:1.2,cooltime:9,duration:undefined, 
		description:"Summon meteors to attack up to 5 enemies. Inflicts Level 12 Burn."
	},{
		level:34,sp:20,mp:125,power:"90.0%+240",casttime:1.2,cooltime:8,duration:undefined, 
		description:"Summon meteors to attack up to 5 enemies. Inflicts Level 13 Burn."
	},{
		level:36,sp:20,mp:150,power:"105.0%+260",casttime:1.2,cooltime:7,duration:undefined, 
		description:"Summon meteors to attack up to 5 enemies. Inflicts Level 14 Burn."
	},{
		level:38,sp:20,mp:175,power:"120.0%+280",casttime:1.2,cooltime:6,duration:undefined, 
		description:"Summon meteors to attack up to 5 enemies. Inflicts Level 15 Burn."	
	}]);
	
	summoner.skill[15] = new Skill("./img_p/summoner/Earthquake.webp","ACTIVE","<font color='#8e6aac'>Earthquake</font>","5",[8,9],[{id:14,lv:1}],[{
		level:34,sp:20,mp:170,power:"50.0%+180",casttime:1.5,cooltime:25,duration:undefined, 
		description:"Summon an earthquake to attack up to 6 standing or fallen enemies 5 times. Inflicts Lv 1 Jump-Block and Lv 1 Dash-Block."
	},{
		level:35,sp:20,mp:200,power:"65.0%+220",casttime:1.5,cooltime:21,duration:undefined, 
		description:"Summon an earthquake to attack up to 7 standing or fallen enemies 5 times. Inflicts Lv 1 Jump-Block and Lv 1 Dash-Block."
	},{
		level:36,sp:20,mp:230,power:"80.0%+260",casttime:1.5,cooltime:17,duration:undefined, 
		description:"Summon an earthquake to attack up to 8 standing or fallen enemies 5 times. Inflicts Lv 1 Jump-Block and Lv 1 Dash-Block."
	},{
		level:37,sp:20,mp:260,power:"95.0%+300",casttime:1.5,cooltime:13,duration:undefined, 
		description:"Summon an earthquake to attack up to 9 standing or fallen enemies 5 times. Inflicts Lv 1 Jump-Block and Lv 1 Dash-Block."
	},{
		level:38,sp:20,mp:290,power:"110.0%+340",casttime:1.5,cooltime:9,duration:undefined, 
		description:"Summon an earthquake to attack up to 10 standing or fallen enemies 5 times. Inflicts Lv 1 Jump-Block and Lv 1 Dash-Block."
	}]);
	
	summoner.skill[16] = new Skill("./img_p/summoner/ShotMastery.webp","PASSIVE","<font color='#8e6aac'>Shot Mastery</font>","5",[10,0],[],[{
		level:21,sp:15,mp:undefined,power:undefined,casttime:0,cooltime:undefined,duration:undefined, 
		description:"Increases ATK speed by 4%"
	},{
		level:23,sp:15,mp:undefined,power:undefined,casttime:0,cooltime:undefined,duration:undefined, 
		description:"Increases ATK speed by 8%"
	},{
		level:25,sp:15,mp:undefined,power:undefined,casttime:0,cooltime:undefined,duration:undefined, 
		description:"Increases ATK speed by 12%"
	},{
		level:27,sp:15,mp:undefined,power:undefined,casttime:0,cooltime:undefined,duration:undefined, 
		description:"Increases ATK speed by 16%"
	},{
		level:29,sp:15,mp:undefined,power:undefined,casttime:0,cooltime:undefined,duration:undefined, 
		description:"Increases ATK speed by 20%"
	}]);

	summoner.skill[17] = new Skill("./img_p/summoner/AreaSpell.webp","ACTIVE","<font color='#8e6aac'>Area Spell</font>","5",[10,2.5],[{id:12,lv:3}],[{
		level:24,sp:15,mp:220,power:undefined,casttime:1.2,cooltime:420,duration:300, 
		description:"Increases physical and magical DEF by 20%"
	},{
		level:25,sp:15,mp:240,power:undefined,casttime:1.2,cooltime:390,duration:360, 
		description:"Increases physical and magical DEF by 30%"
	},{
		level:26,sp:15,mp:260,power:undefined,casttime:1.2,cooltime:360,duration:420, 
		description:"Increases physical and magical DEF by 40%"
	},{
		level:27,sp:15,mp:280,power:undefined,casttime:1.2,cooltime:330,duration:480, 
		description:"Increases physical and magical DEF by 50%"
	},{
		level:28,sp:15,mp:300,power:undefined,casttime:1.2,cooltime:300,duration:540, 
		description:"Increases physical and magical DEF by 60%"
	}]);
	
	summoner.skill[18] = new Skill("./img_p/summoner/SpellPrison.webp","ACTIVE","<font color='#8e6aac'>Spell Prison</font>","5",[10,9],[{id:17,lv:3}],[{
		level:32,sp:20,mp:185,power:undefined,casttime:1,cooltime:60,duration:32, 
		description:"Cast a spell to slow enemies down. Any enemy in its range will suffer 50% movespeed decrease. Effects are cancelled if the enemies leaves its range."
	},{
		level:34,sp:20,mp:215,power:undefined,casttime:1,cooltime:55,duration:34, 
		description:"Cast a spell to slow enemies down. Any enemy in its range will suffer 55% movespeed decrease. Effects are cancelled if the enemies leaves its range."
	},{
		level:36,sp:20,mp:245,power:undefined,casttime:1,cooltime:50,duration:36, 
		description:"Cast a spell to slow enemies down. Any enemy in its range will suffer 60% movespeed decrease. Effects are cancelled if the enemies leaves its range."
	},{
		level:38,sp:20,mp:275,power:undefined,casttime:1,cooltime:45,duration:38, 
		description:"Cast a spell to slow enemies down. Any enemy in its range will suffer 65% movespeed decrease. Effects are cancelled if the enemies leaves its range."
	},{
		level:39,sp:20,mp:305,power:undefined,casttime:1,cooltime:40,duration:40, 
		description:"Cast a spell to slow enemies down. Any enemy in its range will suffer 70% movespeed decrease. Effects are cancelled if the enemies leaves its range."
	}]);

	summoner.skill[19] = new Skill("./img_p/summoner/AdvSummonMastery.webp","PASSIVE","<font color='#8e6aac'>Adv Summon Mastery</font>","2",[4,0],[{id:108,lv:2}],[{
		level:22,sp:20,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
		description:"Increase summon point by 1."
	},{
		level:25,sp:20,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
		description:"Increase summon point by 1."
	}]);

	summoner.skill[20] = new Skill("./img_p/summoner/Attack.webp","ACTIVE","<font color='#8e6aac'>Attack</font>","1",[4,2],[{id:4,lv:1}],[{
		level:22,sp:20,mp:undefined,power:undefined,casttime:0,cooltime:undefined,duration:25, 
		description:"A skill to tell the spirits what to do, all the summoned spirits attack the monster who try to attack the player. To activate, press the Spacebar and the arrow key to select Attack. Press Spacebar multiple times to toggle through individual spirits."
	}]);

	summoner.skill[21] = new Skill("./img_p/summoner/EnergyCirculation.webp","PASSIVE","<font color='#8e6aac'>Energy Circulation</font>","1",[6,8],[{id:11,lv:1}],[{
		level:36,sp:25,mp:undefined,power:undefined,casttime:0,cooltime:undefined,duration:undefined, 
		description:"Decrease the casting time of all skills. The efficiency of the buff differs depending on the type of summoned spirit that is currently active."
	}]);



	var elementalist = {
		name: "Elementalist",
		skill: new Array(),
		image:"./img_p/elementalistbg.webp"
	};



	elementalist.skill[0] = new Skill("./img_p/elementalist/SummonBlesser.webp","ACTIVE","<font color='#8e6aac'>Summon Blesser</font>","3",[0,0],[],[{
		level:40,sp:20,mp:undefined,power:undefined,casttime:0,cooltime:180,duration:300, 
		description:"Summon Blesser spirit for 5 minutes. Blesser will buff the summoner and any other active spirits wit Lv 1 Nature Recovery. Max HP increase by 10%. This spirit does not attack. Uses 1 summon point. Multiple summons not allowed."
	},{
		level:42,sp:20,mp:undefined,power:undefined,casttime:0,cooltime:180,duration:350, 
		description:"Summon Blesser spirit for 6 minutes. Blesser will buff the summoner and any other active spirits wit Lv 1 Nature Recovery. Max HP increase by 20%. This spirit does not attack. Uses 1 summon point. Multiple summons not allowed."
	},{
		level:44,sp:20,mp:400,power:undefined,casttime:0,cooltime:180,duration:420, 
		description:"Summon Blesser spirit for 7 minutes. Blesser will buff the summoner and any other active spirits wit Lv 1 Nature Recovery. Max HP increase by 30%. This spirit does not attack. Uses 1 summon point. Multiple summons not allowed."
	}]);
	
	elementalist.skill[1] = new Skill("./img_p/elementalist/HawkEye.webp","PASSIVE","<font color='#8e6aac'>Hawk Eye</font>","2",[0,2.5],[{id:0,lv:1}],[{
		level:42,sp:20,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
		description:"Blessing of Spirit buff added to Blesser's available skills. Increases Physical and Magical DEF by 50%"
	},{
		level:46,sp:20,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
		description:"Grace of Mother Earth buff added to Blesser's available skills. Increases MATK by 10%"
	}]);

	elementalist.skill[2] = new Skill("./img_p/elementalist/ElementalBlessing.webp","PASSIVE","<font color='#8e6aac'>Elemental Blessing</font>","2",[0,5],[{id:219,lv:2}],[{
		level:45,sp:25,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
		description:"Increases summon point by 1"
	},{
		level:47,sp:25,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
		description:"Increases summon point by 1"
	}]);

	elementalist.skill[3] = new Skill("./img_p/elementalist/ImpactUnsummon.webp","ACTIVE","<font color='#8e6aac'>Impact Unsummon</font>","1",[0,7.5],[{id:111,lv:1}],[{
		level:48,sp:25,mp:undefined,power:undefined,casttime:0,cooltime:180,duration:undefined, 
		description:"Causes all active spirits except Blesser to explode, inflicting damage on enemies in its range. Command a single spirit to explode by pressing Spacebar multiple times."
	}]);

	elementalist.skill[4] = new Skill("./img_p/elementalist/ImpactMastery.webp","PASSIVE","<font color='#8e6aac'>Impact Mastery</font>","1",[0,10],[{id:3,lv:1}],[{
		level:50,sp:20,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
		description:"Increases Impact Unsummon damage by 20% and adds Lv 10 Bleeding effect."
	}]);

	elementalist.skill[5] = new Skill("./img_p/elementalist/FrozenChain.webp","ACTIVE","<font color='#8e6aac'>Frozen Chain</font>","3",[4,0],[],[{
		level:40,sp:20,mp:250,power:undefined,casttime:0.8,cooltime:60,duration:30, 
		description:"Cast frozen chain buff onto all summoned spirits except Blesser. All enemies near summoned spirits will get Attack Speed reduced by 15%"
	},{	
		level:42,sp:20,mp:280,power:undefined,casttime:0.8,cooltime:60,duration:30, 
		description:"Cast frozen chain buff onto all summoned spirits except Blesser. All enemies near summoned spirits will get Attack Speed reduced by 30%"
	},{	
		level:44,sp:20,mp:300,power:undefined,casttime:0.8,cooltime:60,duration:30, 
		description:"Cast frozen chain buff onto all summoned spirits except Blesser. All enemies near summoned spirits will get Attack Speed reduced by 45%"
	}]);

	elementalist.skill[6] = new Skill("./img_p/elementalist/RegainRefresh.webp","PASSIVE","<font color='#8e6aac'>Regain Refresh</font>","1",[2,7.5],[{id:7,lv:1}],[{
		level:47,sp:20,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
		description:"When recalling the spirits, only Mana points were restored but from now the HP is also restored at the same rate as Mana"
	}]);

	elementalist.skill[7] = new Skill("./img_p/elementalist/NatureBlessing.webp","ACTIVE","<font color='#8e6aac'>Nature Blessing</font>","3",[2,0],[{id:201,lv:1}],[{
		level:41,sp:20,mp:250,power:undefined,casttime:0.8,cooltime:240,duration:120, 
		description:"Spirits around the user receive 'Nature Blessing' buff, increasing their max HP and DEF by 10%"
	},{
		level:43,sp:20,mp:290,power:undefined,casttime:0.8,cooltime:210,duration:150, 
		description:"Spirits around the user receive 'Nature Blessing' buff, increasing their max HP and DEF by 15%"
	},{
		level:45,sp:20,mp:undefined,power:undefined,casttime:0.8,cooltime:180,duration:180, 
		description:"Spirits around the user receive 'Nature Blessing' buff, increasing their max HP and DEF by 20%"
	}]);

	elementalist.skill[8] = new Skill("./img_p/elementalist/SummonGolgon.webp","ACTIVE","<font color='#8e6aac'>Summon Golgon</font>","5",[4,2.5],[{id:7,lv:1}],[{
		level:44,sp:20,mp:550,power:undefined,casttime:0,cooltime:240,duration:300, 
		description:"Summon Golgon spirit for 5 minutes. Golgon has 500% max HP and 150% ATK of the summoner. Uses 4 summon points. Multiple summons not allowed."
	},{
		level:45,sp:20,mp:650,power:undefined,casttime:0,cooltime:240,duration:360, 
		description:"Summon Golgon spirit for 5 minutes. Golgon has 550% max HP and 160% ATK of the summoner. Uses 4 summon points. Multiple summons not allowed."
	},{
		level:46,sp:20,mp:750,power:undefined,casttime:0,cooltime:240,duration:420, 
		description:"Summon Golgon spirit for 5 minutes. Golgon has 600% max HP and 170% ATK of the summoner. Uses 4 summon points. Multiple summons not allowed."
	},{
		level:47,sp:20,mp:850,power:undefined,casttime:0,cooltime:240,duration:480, 
		description:"Summon Golgon spirit for 5 minutes. Golgon has 650% max HP and 180% ATK of the summoner. Uses 4 summon points. Multiple summons not allowed."
	},{
		level:48,sp:20,mp:950,power:undefined,casttime:0,cooltime:240,duration:540, 
		description:"Summon Golgon spirit for 5 minutes. Golgon has 700% max HP and 190% ATK of the summoner. Uses 4 summon points. Multiple summons not allowed."
	}]);

	elementalist.skill[9] = new Skill("./img_p/elementalist/AtomControl.webp","PASSIVE","<font color='#8e6aac'>Atom Control</font>","3",[4,5],[{id:8,lv:3}],[{
		level:46,sp:20,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
		description:"Changes the atomic structure of Golgon to create a stronger Rock Golgon. This skill must be learned prior to summoning Golgon to take effect."
	},{
		level:47,sp:20,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
		description:"Increases MDEF of Rock Golgon by 20%, ATK speed by 5%. This skill must be learned prior to summoning Golgon to take effect."
	},{
		level:48,sp:20,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
		description:"Increases MDEF of Rock Golgon by 40%, ATK speed by 10%. This skill must be learned prior to summoning Golgon to take effect."
	}]);

	elementalist.skill[10] = new Skill("./img_p/elementalist/GolemMastery.webp","PASSIVE","<font color='#8e6aac'>Golem Mastery</font>","2",[4,7.5],[{id:9,lv:3}],[{
		level:48,sp:20,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
		description:"Rock Punch skill added to Golgon's available skills. This skill must be learned prior to summoning Golgon to take effect."
	},{
		level:49,sp:20,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
		description:"Rock n Roll skill added to Golgon's available skills. This skill must be learned prior to summoning Golgon to take effect."
	}]);

	elementalist.skill[11] = new Skill("./img_p/elementalist/BloodShare.webp","PASSIVE","<font color='#8e6aac'>Blood Share</font>","1",[4,10],[{id:10,lv:2}],[{
		level:49,sp:25,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
		description:"Each time Golgon is attacked, adds a 30% chance to restore 200 HP to the summoner."
	}]);

	elementalist.skill[12] = new Skill("./img_p/elementalist/SmareShot.webp","ACTIVE","<font color='#8e6aac'>Smart Shot</font>","5",[6,0],[],[{
		level:41,sp:20,mp:450,power:"24.0%+90",casttime:1.2,cooltime:85,duration:90, 
		description:"Adds a homing effect to normal attack. Homes in on 1 target."
	},{
		level:42,sp:20,mp:550,power:"28.0%+110",casttime:1.2,cooltime:100,duration:105, 
		description:"Adds a homing effect to normal attack. Homes in on 1 target."
	},{
		level:43,sp:20,mp:650,power:"32.0%+130",casttime:1.2,cooltime:115,duration:120, 
		description:"Adds a homing effect to normal attack. Homes in on 2 targets."
	},{
		level:44,sp:20,mp:750,power:"36.0%+150",casttime:1.2,cooltime:130,duration:135, 
		description:"Adds a homing effect to normal attack. Homes in on 2 targets."
	},{
		level:45,sp:20,mp:850,power:"40.0%+170",casttime:1.2,cooltime:145,duration:150, 
		description:"Adds a homing effect to normal attack. Homes in on 3 targets."
	}]);

	elementalist.skill[13] = new Skill("./img_p/elementalist/ManaBurn.webp","ACTIVE","<font color='#8e6aac'>Mana Burn</font>","5",[6,2.5],[],[{
		level:45,sp:20,mp:180,power:undefined,casttime:1.3,cooltime:50,duration:15, 
		description:"Casts a spell around the user that causes enemies in its range to lose 1% MP per 0.5 seconds. Radius of the spell increases per level. Does not effect monsters."
	},{
		level:47,sp:20,mp:190,power:undefined,casttime:1.3,cooltime:45,duration:17, 
		description:"Casts a spell around the user that causes enemies in its range to lose 2% MP per 0.5 seconds. Radius of the spell increases per level. Does not effect monsters."
	},{
		level:49,sp:20,mp:200,power:undefined,casttime:1.3,cooltime:40,duration:19, 
		description:"Casts a spell around the user that causes enemies in its range to lose 3% MP per 0.5 seconds. Radius of the spell increases per level. Does not effect monsters."
	},{
		level:51,sp:20,mp:210,power:undefined,casttime:1.3,cooltime:35,duration:21, 
		description:"Casts a spell around the user that causes enemies in its range to lose 4% MP per 0.5 seconds. Radius of the spell increases per level. Does not effect monsters."
	},{
		level:53,sp:20,mp:220,power:undefined,casttime:1.3,cooltime:30,duration:23, 
		description:"Casts a spell around the user that causes enemies in its range to lose 5% MP per 0.5 seconds. Radius of the spell increases per level. Does not effect monsters."
	}]);

	elementalist.skill[14] = new Skill("./img_p/elementalist/ManaReact.webp","PASSIVE","<font color='#8e6aac'>Mana React</font>","5",[6,6],[{id:13,lv:1}],[{
		level:46,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
		description:"10% of Mana burnt through the skill and will be absorbed by the user."
	},{
		level:47,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
		description:"20% of Mana burnt through the skill and will be absorbed by the users."
	},{
		level:48,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
		description:"30% of Mana burnt through the skill and will be absorbed by the users."
	},{
		level:49,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
		description:"40% of Mana burnt through the skill and will be absorbed by the users."
	},{
		level:50,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
		description:"50% of Mana burnt through the skill and will be absorbed by the users."
	}]);

	elementalist.skill[15] = new Skill("./img_p/elementalist/ImpactPresser.webp","PASSIVE","<font color='#8e6aac'>Impact Presser</font>","3",[6,10],[{id:17,lv:3}],[{
		level:47,sp:20,mp:85,power:"150.0%+264",casttime:0,cooltime:6,duration:undefined, 
		description:"Attack up to 6 standing enemies and push them away. Skill can attack fallen enemies at Lv 2."
	},{
		level:49,sp:20,mp:105,power:"180.0%+312",casttime:0,cooltime:5,duration:undefined, 
		description:"Attack up to 7 standing or fallen enemies and push them away."
	},{
		level:51,sp:20,mp:125,power:"210.0%+360",casttime:0,cooltime:4,duration:undefined, 
		description:"Attack up to 8 standing or fallen enemies and push them away."
	}]);

	elementalist.skill[16] = new Skill("./img_p/elementalist/PoisonGuard.webp","ACTIVE","<font color='#8e6aac'>Poison Guard</font>","5",[8,0],[{id:217,lv:3}],[{
		level:43,sp:20,mp:350,power:undefined,casttime:1.7,cooltime:120,duration:60, 
		description:"Create a poison gas around the user to attack up to 3 enemies. Enemies within range will be inflicted wit Lv 8 Poison."
	},{
		level:44,sp:20,mp:400,power:undefined,casttime:1.7,cooltime:110,duration:70, 
		description:"Create a poison gas around the user to attack up to 4 enemies. Enemies within range will be inflicted wit Lv 9 Poison."
	},{
		level:45,sp:20,mp:450,power:undefined,casttime:1.7,cooltime:100,duration:80, 
		description:"Create a poison gas around the user to attack up to 3 enemies. Enemies within range will be inflicted wit Lv 10 Poison."
	},{
		level:46,sp:20,mp:500,power:undefined,casttime:1.7,cooltime:90,duration:90, 
		description:"Create a poison gas around the user to attack up to 4 enemies. Enemies within range will be inflicted wit Lv 11 Poison."
	},{
		level:47,sp:20,mp:550,power:undefined,casttime:1.7,cooltime:80,duration:100, 
		description:"Create a poison gas around the user to attack up to 5 enemies. Enemies within range will be inflicted wit Lv 12 Poison."
	}]);

	elementalist.skill[17] = new Skill("./img_p/elementalist/MegaInferno.webp","toggle","<font color='#8e6aac'>Mega Inferno</font>","5",[8,4],[{id:212,lv:3}],[{
		level:46,sp:20,mp:100,power:"240.0%+360",casttime:0,cooltime:16,duration:undefined, 
		description:"The upgraded version of Inferno with bigger range and damage. Attack up to 5 standing or fallen enemies. Consumes 40 MP per 0.5 seconds. Cannot move while the skill is active."
	},{
		level:48,sp:20,mp:125,power:"250.0%+430",casttime:0,cooltime:14,duration:undefined, 
		description:"The upgraded version of Inferno with bigger range and damage. Attack up to 6 standing or fallen enemies. Consumes 65 MP per 0.5 seconds. Cannot move while the skill is active."
	},{
		level:50,sp:20,mp:150,power:"260.0%+500",casttime:0,cooltime:12,duration:undefined, 
		description:"The upgraded version of Inferno with bigger range and damage. Attack up to 7 standing or fallen enemies. Consumes 90 MP per 0.5 seconds. Cannot move while the skill is active."
	},{
		level:52,sp:20,mp:175,power:"270.0%+570",casttime:0,cooltime:10,duration:undefined, 
		description:"The upgraded version of Inferno with bigger range and damage. Attack up to 8 standing or fallen enemies. Consumes 115 MP per 0.5 seconds. Cannot move while the skill is active."
	},{
		level:54,sp:20,mp:200,power:"280.0%+640",casttime:0,cooltime:8,duration:undefined, 
		description:"The upgraded version of Inferno with bigger range and damage. Attack up to 9 standing or fallen enemies. Consumes 140 MP per 0.5 seconds. Cannot move while the skill is active."
	}]);

	elementalist.skill[18] = new Skill("./img_p/elementalist/RollingStone.webp","ACTIVE","<font color='#8e6aac'>Rolling Stone</font>","5",[8,10],[{id:17,lv:3}],[{
		level:49,sp:20,mp:180,power:"195.0%+350",casttime:1.5,cooltime:16,duration:undefined, 
		description:"Summon a rock Mable that will roll forward and attack up to 6 standing or fallen enemies. Skill will inflict knock back and Lv. 6 Stun."
	},{
		level:51,sp:20,mp:200,power:"225.0%+395",casttime:1.4,cooltime:14,duration:undefined, 
		description:"Summon a rock Mable that will roll forward and attack up to 7 standing or fallen enemies. Skill will inflict knock back and Lv. 7 Stun."
	},{
		level:53,sp:20,mp:220,power:"255.0%+430",casttime:1.3,cooltime:12,duration:undefined, 
		description:"Summon a rock Mable that will roll forward and attack up to 8 standing or fallen enemies. Skill will inflict knock back and Lv. 8 Stun."
	},{
		level:55,sp:20,mp:240,power:"290.0%+475",casttime:1.2,cooltime:10,duration:undefined, 
		description:"Summon a rock Mable that will roll forward and attack up to 9 standing or fallen enemies. Skill will inflict knock back and Lv. 9 Stun."
	},{
		level:57,sp:20,mp:260,power:"320.0%+520",casttime:1.1,cooltime:8,duration:undefined, 
		description:"Summon a rock Mable that will roll forward and attack up to 10 standing or fallen enemies. Skill will inflict knock back and Lv. 10 Stun."
	}]);

	elementalist.skill[19] = new Skill("./img_p/elementalist/ToxinFluid.webp","PASSIVE","<font color='#8e6aac'>Toxin Fluid</font>","3",[10,1.5],[{id:16,lv:1}],[{
		level:44,sp:20,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
		description:"Add 15% of attack point of the user on the poison guard."
	},{
		level:45,sp:20,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
		description:"Add 20% of attack point of the user on the poison guard."
	},{
		level:46,sp:20,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
		description:"Add 25% of attack point of the user on the poison guard."
	}]);
	
	elementalist.skill[20] = new Skill("./img_p/elementalist/MegaSpikeWave.webp","ACTIVE","<font color='#8e6aac'>Mega Spike Wave</font>","5",[10,10],[{id:107,lv:3},{id:19,lv:3}],[{
		level:48,sp:20,mp:250,power:"125.0%+250",casttime:2,cooltime:30,duration:undefined, 
		description:"The upgraded version of Spike wave with a wider range and damage. Attacks up to 6 standing or fallen enemis 6 times. Inflicts Lv 6 Slow and Lv 1 Dash-Block."
	},{
		level:50,sp:20,mp:295,power:"150.0%+295",casttime:2,cooltime:26,duration:undefined, 
		description:"The upgraded version of Spike wave with a wider range and damage. Attacks up to 7 standing or fallen enemis 7 times. Inflicts Lv 6 Slow and Lv 1 Dash-Block."
	},{
		level:52,sp:20,mp:340,power:"175.0%+340",casttime:2,cooltime:22,duration:undefined, 
		description:"The upgraded version of Spike wave with a wider range and damage. Attacks up to 8 standing or fallen enemis 8 times. Inflicts Lv 6 Slow and Lv 1 Dash-Block."
	},{
		level:54,sp:20,mp:385,power:"200.0%+385",casttime:2,cooltime:18,duration:undefined, 
		description:"The upgraded version of Spike wave with a wider range and damage. Attacks up to 9 standing or fallen enemis 9 times. Inflicts Lv 6 Slow and Lv 1 Dash-Block."
	},{
		level:56,sp:20,mp:430,power:"225.0%+430",casttime:2,cooltime:14,duration:undefined, 
		description:"The upgraded version of Spike wave with a wider range and damage. Attacks up to 10 standing or fallen enemis 10 times. Inflicts Lv 6 Slow and Lv 1 Dash-Block."
	}]);

	
	elementalist.skill[21] = new Skill("./img_p/elementalist/DragonkinForceAmplification.webp","PASSIVE","<font color='#8e6aac'>Dragonkin Force Amplification</font>","1",[8,2],[{id:112,lv:1}],[{
		level:45,sp:20,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
		description:"Increases MATK by 8%"
	}]);



	var spiritlord = {
	
		name: "Spirit Lord",
		skill: new Array(),
		image:"./img_p/spiritlordbg.webp"
	};


	spiritlord.skill[0] = new Skill("./img_p/spiritlord/Awakening.webp","PASSIVE","<font color='#8e6aac'>Awakening</font>","1",[5,0],[],[{
		level:60,sp:1,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Whenever you use MP during battle, your Awakening bar will fill up. This allows you to perform certain special skills which consume Awakening points. These skills also consume MP, however the MP they consume does not fill your awakening bar. "
	}]);
	
	spiritlord.skill[1] = new Skill("./img_p/spiritlord/PainDivision.webp","PASSIVE","<font color='#8e6aac'>Pain Division</font>","3",[9,0],[{id:0,lv:1}],[{
		level:60,sp:25,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Equally distribute 6% of total damage received to the user's summoned spirits except Blesser. Due to spirits' naturally high max HP, damage distributed will be two times greater."
	},{
		level:62,sp:25,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Equally distribute 13% of total damage received to the user's summoned spirits except Blesser. Due to spirits' naturally high max HP, damage distributed will be two times greater."
	},{
		level:64,sp:25,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Equally distribute 20% of total damage received to the user's summoned spirits except Blesser. Due to spirits' naturally high max HP, damage distributed will be two times greater."
	}]);
	
	spiritlord.skill[2] = new Skill("./img_p/spiritlord/ElementalStorm.webp","ACTIVE","<font color='#8e6aac'>Elemental Storm</font>","5",[4,3],[{id:0,lv:1}],[{
		level:61,sp:20,mp:360,power:"300%+458",casttime:1,cooltime:33,duration:undefined, 
	 	description:"[Awakening Skill] Summon an explosive substance, attacking up to 6 enemies. Inflicts Petrification, Move Freezing, Weakening, and Burn. Consumes 360 Awakening Points."
	},{
		level:63,sp:20,mp:420,power:"300+625%",casttime:1,cooltime:31,duration:undefined, 
	 	description:"[Awakening Skill] Summon an explosive substance, attacking up to 7 enemies. Inflicts Petrification, Move Freezing, Weakening, and Burn. Consumes 420 Awakening Points."
	},{
		level:65,sp:20,mp:480,power:"300+729%",casttime:1,cooltime:29,duration:undefined, 
	 	description:"[Awakening Skill] Summon an explosive substance, attacking up to 8 enemies. Inflicts Petrification, Move Freezing, Weakening, and Burn. Consumes 360 Awakening Points."
	},{
		level:67,sp:20,mp:540,power:"300+959%",casttime:0,cooltime:27,duration:undefined, 
	 	description:"[Awakening Skill] Summon an explosive substance, attacking up to 9 enemies. Inflicts Petrification, Move Freezing, Weakening, and Burn. Consumes 360 Awakening Points."
	},{
		level:69,sp:20,mp:600,power:"300+1126%",casttime:0,cooltime:25,duration:undefined, 
	 	description:"[Awakening Skill] Summon an explosive substance, attacking up to 10 enemies. Inflicts Petrification, Move Freezing, Weakening, and Burn. Consumes 360 Awakening Points."
	}]);
	
	spiritlord.skill[3] = new Skill("./img_p/spiritlord/DragonRage.webp","ACTIVE","<font color='#8e6aac'>Dragon Rage</font>","1",[6,3],[{id:0,lv:1}],[{
		level:60,sp:60,mp:undefined,power:"500%",casttime:0,cooltime:300,duration:undefined, 
	 	description:"[Ultimate Skill] Summons a dragon that breathes hell fire, attacking up to 20 enemies 8 times. Inficts Burn. Consumes 3500 Awakening Points. Disabled in PvP."
	}]);
	
	spiritlord.skill[4] = new Skill("./img_p/spiritlord/SummonDarkKnight.webp","ACTIVE","<font color='#8e6aac'>Summon Dark Knight</font>","5",[4,5],[{id:2,lv:1}],[{
		level:62,sp:25,mp:300,power:undefined,casttime:0,cooltime:300,duration:30, 
	 	description:"[Awakening Skill] Summon the most powerful spirit, Dark Knight. Does not consume summon points. Not affected by Impact or Regain. Consumes 240 Awakening Points."
	},{
		level:64,sp:25,mp:350,power:undefined,casttime:0,cooltime:300,duration:35, 
	 	description:"[Awakening Skill] Summon the most powerful spirit, Dark Knight. Does not consume summon points. Not affected by Impact or Regain. Consumes 280 Awakening Points."
	},{
		level:66,sp:25,mp:400,power:undefined,casttime:0,cooltime:300,duration:40, 
	 	description:"[Awakening Skill] Summon the most powerful spirit, Dark Knight. Does not consume summon points. Not affected by Impact or Regain. Consumes 320 Awakening Points."
	},{
		level:68,sp:25,mp:450,power:undefined,casttime:0,cooltime:300,duration:45, 
	 	description:"[Awakening Skill] Summon the most powerful spirit, Dark Knight. Does not consume summon points. Not affected by Impact or Regain. Consumes 360 Awakening Points."
	},{
		level:70,sp:25,mp:500,power:undefined,casttime:0,cooltime:300,duration:50, 
	 	description:"[Awakening Skill] Summon the most powerful spirit, Dark Knight. Does not consume summon points. Not affected by Impact or Regain. Consumes 400 Awakening Points."
	}]);	
	
	spiritlord.skill[5] = new Skill("./img_p/spiritlord/SpiritCounterattack.webp","ACTIVE","<font color='#8e6aac'>Spirit Counterattack</font>","5",[1,0],[],[{
		level:60,sp:20,mp:400,power:undefined,casttime:0.5,cooltime:30,duration:60, 
	 	description:"Casts Lv 1 Revenge (25% chance to reflect 20% damage received) on all summoned spirits within range for 1 minute."
	},{
		level:62,sp:20,mp:450,power:undefined,casttime:0.5,cooltime:30,duration:90, 
	 	description:"Casts Lv 2 Revenge (35% chance to reflect 25% damage received) on all summoned spirits within range for 1 minute 30 seconds."
	},{
		level:64,sp:20,mp:500,power:undefined,casttime:0.5,cooltime:30,duration:120, 
	 	description:"Casts Lv 3 Revenge (45% chance to reflect 30% damage received) on all summoned spirits within range for 2 minutes."
	},{
		level:66,sp:20,mp:550,power:undefined,casttime:0.5,cooltime:30,duration:150, 
	 	description:"Casts Lv 4 Revenge (55% chance to reflect 35% damage received) on all summoned spirits within range for 2 minutes 30 seconds."
	},{
		level:68,sp:20,mp:600,power:undefined,casttime:0.5,cooltime:30,duration:180, 
	 	description:"Casts Lv 5 Revenge (65% chance to reflect 40% damage received) on all summoned spirits within range for 3 minutes."
	}]);
	
	spiritlord.skill[6] = new Skill("./img_p/spiritlord/ChargeTheAwakening.webp","toggle","<font color='#8e6aac'>Awakening Charge</font>","3",[1,7],[],[{
		level:60,sp:10,mp:35,power:undefined,casttime:0,cooltime:3,duration:undefined, 
		description:"Consumes 20% MP to recharge 14% of the Awakening bar every 3 seconds."
	 },{
	 	level:62,sp:10,mp:35,power:undefined,casttime:0,cooltime:3,duration:undefined, 
		description:"Consumes 20% MP to recharge 17% of the Awakening bar every 3 seconds."
	 },{
		level:68,sp:10,mp:35,power:undefined,casttime:0,cooltime:3,duration:undefined, 
		description:"Consumes 20% MP to recharge 20% of the Awakening bar every 3 seconds."
	}]);


//Twin Fighter - Gemini - Mirage - Jumeaux
	var twinfighter = {
		name: "Twin Fighter",
		skill: new Array(),
		image:"./img_p/twinfighterbg.webp"
	};
	
	twinfighter.skill[0] = new Skill("./img_p/twinfighter/SingleStrokeCut.webp","ACTIVE","<font color='#8e6aac'>One Sword, One Cut</font>","5",[2,0],[],[{
		level:3,sp:10,mp:undefined,power:"23.0%+50",casttime:0,cooltime:2,duration:undefined, 
		description:"Throw punch towards ground, attacking up to 3 standing enemies and making them fall down."
	},{
	 	level:4,sp:10,mp:undefined,power:"26.0%+150",casttime:0,cooltime:2,duration:undefined, 
		description:"Throw punch towards ground, attacking up to 4 standing enemies and making them fall down."
	},{
		level:5,sp:10,mp:undefined,power:"29.0%+250",casttime:0,cooltime:2,duration:undefined, 
		description:"Throw punch towards ground, attacking up to 5 standing enemies and making them fall down."
	},{
		level:6,sp:10,mp:undefined,power:"32.0%+350",casttime:0,cooltime:2,duration:undefined, 
		description:"Throw punch towards ground, attacking up to 6 standing enemies and making them fall down."
	},{
		level:7,sp:10,mp:undefined,power:"35.0%+450",casttime:0,cooltime:2,duration:undefined, 
		description:"Throw punch towards ground, attacking up to 7 standing enemies and making them fall down."
	}]);
		
	twinfighter.skill[1] = new Skill("./img_p/twinfighter/PowerFist.webp","ACTIVE","<font color='#8e6aac'>Power Fist</font>","5",[2,2],[{id:0,lv:1}],[{
		level:5,sp:15,mp:17,power:"36.0%+85",casttime:0,cooltime:6,duration:undefined, 
		description:"Throw a powerful punch to enemies solar plexus. Attacks up to 3 standing enemies inflicting Lv 4 Stun."
	},{
		level:7,sp:15,mp:22,power:"39.0%+100",casttime:0,cooltime:5.5,duration:undefined, 
		description:"Throw a powerful punch to enemies solar plexus. Attacks up to 4 standing enemies inflicting Lv 5 Stun."
	},{
		level:9,sp:15,mp:27,power:"42.0%+115",casttime:0,cooltime:5,duration:undefined, 
		description:"Throw a powerful punch to enemies solar plexus. Attacks up to 5 standing enemies inflicting Lv 6 Stun."
	},{
		level:11,sp:15,mp:32,power:"45.0%+130",casttime:0,cooltime:4.5,duration:undefined, 
		description:"Throw a powerful punch to enemies solar plexus. Attacks up to 6 standing enemies inflicting Lv 7 Stun."
	},{
		level:13,sp:15,mp:37,power:"48.0%+145",casttime:0,cooltime:4,duration:undefined, 
		description:"Throw a powerful punch to enemies solar plexus. Attacks up to 7 standing enemies inflicting Lv 8 Stun."
	}]);
	
	twinfighter.skill[2] = new Skill("./img_p/twinfighter/TornadoFist.webp","ACTIVE","<font color='#8e6aac'>Tornado Spin</font>","5",[2,5],[{id:1,lv:1}],[{
		level:7,sp:20,mp:7,power:"8.0%+50",casttime:0,cooltime:5,duration:undefined, 
		description:"By spinning in a face pace, raise the body an attack up to 6 enemies in air 6 times."
	},{
		level:8,sp:20,mp:10,power:"11.0%+80",casttime:0,cooltime:5,duration:undefined, 
		description:"By spinning in a face pace, raise the body an attack up to 7 enemies in air 6 times."
	},{
		level:9,sp:20,mp:13,power:"14.0%+110",casttime:0,cooltime:5,duration:undefined, 
		description:"By spinning in a face pace, raise the body an attack up to 8 enemies in air 6 times."
	},{
		level:10,sp:20,mp:16,power:"17.0%+140",casttime:0,cooltime:5,duration:undefined, 
		description:"By spinning in a face pace, raise the body an attack up to 9 enemies in air 6 times."
	},{
		level:11,sp:20,mp:19,power:"20.0%+170",casttime:0,cooltime:5,duration:undefined, 
		description:"By spinning in a face pace, raise the body an attack up to 10 enemies in air 6 times."
	}]);
	
	twinfighter.skill[3] = new Skill("./img_p/twinfighter/BunkerBuster.webp","ACTIVE","<font color='#8e6aac'>Bunker Buster</font>","5",[2,8.5],[{id:2,lv:1},{id:6,lv:1}],[{
		level:5,sp:20,mp:20,power:"23.0%+50",casttime:0,cooltime:6,duration:undefined, 
		description:"Attack up to 6 standing or fallen enemies with a strong kick from the air towards the ground. Mid launch height."
	},{
		level:7,sp:20,mp:25,power:"26.0%+150",casttime:0,cooltime:6,duration:undefined, 
		description:"Attack up to 7 standing or fallen enemies with a strong kick from the air towards the ground. Mid launch height."
	},{
		level:9,sp:20,mp:30,power:"29.0%+250",casttime:0,cooltime:6,duration:undefined, 
		description:"Attack up to 8 standing or fallen enemies with a strong kick from the air towards the ground. High launch height."
	},{
		level:11,sp:20,mp:35,power:"32.0%+350",casttime:0,cooltime:6,duration:undefined, 
		description:"Attack up to 9 standing or fallen enemies with a strong kick from the air towards the ground. High launch height."
	},{
		level:13,sp:20,mp:40,power:"35.0%+450",casttime:0,cooltime:6,duration:undefined, 
		description:"Attack up to 10 standing or fallen enemies with a strong kick from the air towards the ground. High launch height."
	}]);
	
	twinfighter.skill[4] = new Skill("./img_p/twinfighter/MetalFist.webp","PASSIVE","<font color='#8e6aac'>[MC] Metal Fist</font>","10",[5,0],[],[{
		level:5,sp:10,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
		description:"Increases ATK by 2%"
	},{
		level:7,sp:10,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
		description:"Increases ATK by 4%."
	},{
		level:9,sp:10,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
		description:"Increases ATK by 6%."
	},{
		level:11,sp:10,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
		description:"Increases ATK by 8%."
	},{
		level:13,sp:10,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
		description:"Increases ATK by 10%."
	},{
		level:"CARD",sp:10,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
		description:"Increases ATK by 10% and attack speed by 2%."
	},{
		level:"CARD",sp:10,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
		description:"Increases ATK by 10% and attack speed by 4%."
	},{
		level:"CARD",sp:10,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
		description:"Increases ATK by 10% and attack speed by 6%."
	},{
		level:"CARD",sp:10,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
		description:"Increases ATK by 10% and attack speed by 8%."
	},{
		level:"CARD",sp:10,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
		description:"Increases ATK by 10% and attack speed by 10%."
	}]);
	
	twinfighter.skill[5] = new Skill("./img_p/twinfighter/Weaving.webp","ACTIVE","<font color='#8e6aac'>Weaving</font>","1",[5,7],[{id:4,lv:1}],[{
		level:12,sp:15,mp:15,power:undefined,casttime:0,cooltime:5,duration:1, 
		description:"Allows player to move forward in a very fast speed. While skill is active, the user is invincible."
	}]);

	twinfighter.skill[6] = new Skill("./img_p/twinfighter/RapidStance.webp","ACTIVE","<font color='#8e6aac'>Rapid Stance</font>","1",[5,10],[],[{
		level:1,sp:5,mp:15,power:undefined,casttime:0.8,cooltime:3,duration:600, 
		description:"Increases evade and accuracy by 10%."
	}]);
	
	twinfighter.skill[7] = new Skill("./img_p/twinfighter/SpinKick.webp","ACTIVE","<font color='#8e6aac'>[MC] Spin Kick</font>","5",[8,0],[],[{
		level:1,sp:15,mp:12,power:"33.0%+55",casttime:0,cooltime:6,duration:undefined, 
		description:"Twin active skill. Perform a powerful spin kick against up to 3 standing enemies and push them back"
	},{
		level:2,sp:15,mp:16,power:"37.0%+95",casttime:0,cooltime:5.5,duration:undefined, 
		description:"Twin active skill. Perform a powerful spin kick against up to 4 standing enemies and push them back"
	},{
		level:3,sp:15,mp:20,power:"41.0%+135",casttime:0,cooltime:5,duration:undefined, 
		description:"Twin active skill. Perform a powerful spin kick against up to 5 standing enemies and push them back"
	},{
		level:4,sp:15,mp:24,power:"45.0%+175",casttime:0,cooltime:4.5,duration:undefined, 
		description:"Twin active skill. Perform a powerful spin kick against up to 6 standing enemies and push them back"
	},{
		level:5,sp:15,mp:28,power:"49.0%+215",casttime:0,cooltime:4,duration:undefined, 
		description:"Twin active skill. Powerful spin kick against up to 7 standing enemies and push them back"
	}]);

	twinfighter.skill[8] = new Skill("./img_p/twinfighter/RocketBlow.webp","ACTIVE","<font color='#8e6aac'>[MC] Rocket Blow</font>","5",[8,2.5],[{id:7,lv:1}],[{
		level:6,sp:15,mp:12,power:"36.0%+85",casttime:0,cooltime:4,duration:undefined, 
		description:"Twin active skill. Perform a powerful spin kick against up to 3 standing enemies and throw them into the air. Mid launch height."
	},{
		level:7,sp:15,mp:14,power:"39.0%+100",casttime:0,cooltime:4,duration:undefined, 
		description:"Twin active skill. Perform a powerful spin kick against up to 4 standing enemies and throw them into the air. High launch height."
	},{
		level:8,sp:15,mp:16,power:"42.0%+115",casttime:0,cooltime:4,duration:undefined, 
		description:"Twin active skill. Perform a powerful spin kick against up to 5 standing enemies and throw them into the air. Highest launch height."
	},{
		level:9,sp:15,mp:18,power:"45.0%+130",casttime:0,cooltime:4,duration:undefined, 
		description:"Twin active skill. Perform a powerful spin kick against up to 6 standing enemies and throw them into the air. Highest launch height."
	},{
		level:10,sp:15,mp:20,power:"48.0%+145",casttime:0,cooltime:4,duration:undefined, 
		description:"Twin active skill. Perform a powerful spin kick against up to 7 standing enemies and throw them into the air. Highest launch height."
	}]);	
	
	twinfighter.skill[9] = new Skill("./img_p/twinfighter/DragonKick.webp","ACTIVE","<font color='#8e6aac'>[MC] Dragon Kick</font>","5",[8,6],[{id:5,lv:1},{id:8,lv:3}],[{
		level:10,sp:15,mp:30,power:"52.0%+85",casttime:0,cooltime:7,duration:undefined, 
		description:"Twin active skill. Perform a powerful kick against up to 4 standing enemies causing knock back and knock down."
	},{
		level:12,sp:15,mp:33,power:"57.0%+135",casttime:0,cooltime:6.5,duration:undefined, 
		description:"Twin active skill. Perform a powerful kick against up to 5 standing enemies causing knock back and knock down."
	},{
		level:14,sp:15,mp:36,power:"62.0%+185",casttime:0,cooltime:6,duration:undefined, 
		description:"Twin active skill. Perform a powerful kick against up to 6 standing enemies causing knock back and knock down."
	},{
		level:16,sp:15,mp:39,power:"67.0%+235",casttime:0,cooltime:5.5,duration:undefined, 
		description:"Twin active skill. Perform a powerful kick against up to 7 standing enemies causing knock back and knock down."
	},{
		level:18,sp:15,mp:42,power:"72.0%+285",casttime:0,cooltime:5,duration:undefined, 
		description:"Twin active skill. Perform a powerful kick against up to 8 standing enemies causing knock back and knock down."
	}]);
	
	twinfighter.skill[10] = new Skill("./img_p/twinfighter/NonStopKicking.webp","ACTIVE","<font color='#8e6aac'>Non Stop Kicking</font>","5",[8,10],[{id:9,lv:3}],[{
		level:16,sp:20,mp:25,power:"22.0%+20",casttime:0,cooltime:12,duration:undefined, 
		description:"Twin active skill. Perform a swift kick towards up to 5 standing enemies 4 times."
	},{
		level:17,sp:20,mp:30,power:"24.0%+35",casttime:0,cooltime:11,duration:undefined, 
		description:"Twin active skill. Perform a swift kick towards up to 5 standing enemies 4 times."
	},{
		level:18,sp:20,mp:35,power:"26.0%+50",casttime:0,cooltime:10,duration:undefined, 
		description:"Twin active skill. Perform a swift kick towards up to 5 standing or fallen enemies 5 times."
	},{
		level:19,sp:20,mp:40,power:"28.0%+65",casttime:0,cooltime:9,duration:undefined, 
		description:"Twin active skill. Perform a swift kick towards up to 5 standing or fallen enemies 5 times."
	},{
		level:20,sp:20,mp:45,power:"30.0%+80",casttime:0,cooltime:8,duration:undefined, 
		description:"Twin active skill. Perform a swift kick towards up to 5 standing or fallen enemies 6 times."
	}]);	
	
	var gemini = {
		name: "Twin",
		skill: new Array(),
		image:"./img_p/geminibg.webp"
	};
	
	gemini.skill[0] = new Skill("./img_p/gemini/InfiniteTurningKick.webp","ACTIVE","<font color='#8e6aac'>Infinite Turning Kick</font>","5",[0,0],[{id:103,lv:3}],[{
		level:20,sp:15,mp:30,power:"60.0%",casttime:0,cooltime:8,duration:undefined, 
		description:"Perform a spinning kick against up to 5 standing enemies, pushing them back and knocking them down. Higher levels widen the range of the skill."
	},{
		level:21,sp:15,mp:35,power:"65.0%",casttime:0,cooltime:7.5,duration:undefined, 
		description:"Perform a spinning kick against up to 6 standing enemies, pushing them back and knocking them down. Higher levels widen the range of the skill."	
	},{
		level:22,sp:15,mp:40,power:"70.0%",casttime:0,cooltime:7,duration:undefined, 
		description:"Perform a spinning kick against up to 7 standing enemies, pushing them back and knocking them down. Higher levels widen the range of the skill."	
	},{
		level:23,sp:15,mp:45,power:"75.0%",casttime:0,cooltime:6.5,duration:undefined, 
		description:"Perform a spinning kick against up to 8 standing enemies, pushing them back and knocking them down. Higher levels widen the range of the skill."	
	},{
		level:25,sp:15,mp:50,power:"80.0%",casttime:0,cooltime:6,duration:undefined, 
		description:"Perform a spinning kick against up to 9 standing enemies, pushing them back and knocking them down. Higher levels widen the range of the skill."	
	}]);	
	
	gemini.skill[1] = new Skill("./img_p/gemini/HyperKneeKick.webp","ACTIVE","<font color='#8e6aac'>Hyper Knee Kick</font>","5",[0,4.5],[{id:0,lv:1}],[{
		level:26,sp:15,mp:34,power:"85.0%+200",casttime:0,cooltime:11,duration:undefined, 
		description:"Perform a fast and strong knee kick, penetrating up to 5 standing enemies in a line."
	},{
		level:27,sp:15,mp:40,power:"90.0%+215",casttime:0,cooltime:10,duration:undefined, 
		description:"Perform a fast and strong knee kick, penetrating up to 6 standing enemies in a line."
	},{
		level:28,sp:15,mp:46,power:"95.0%+230",casttime:0,cooltime:9,duration:undefined, 
		description:"Perform a fast and strong knee kick, penetrating up to 7 standing or fallen enemies in a line."
	},{
		level:29,sp:15,mp:52,power:"100.0%+245",casttime:0,cooltime:8,duration:undefined, 
		description:"Perform a fast and strong knee kick, penetrating up to 8 standing or fallen enemies in a line."
	},{
		level:30,sp:15,mp:58,power:"105.0%+260",casttime:0,cooltime:7,duration:undefined, 
		description:"Perform a fast and strong knee kick, penetrating up to 9 standing or fallen enemies in a line."
	}]);	
	
	gemini.skill[2] = new Skill("./img_p/gemini/DragonUpper.webp","ACTIVE","<font color='#8e6aac'>Dragon Upper</font>","5",[0,8],[{id:1,lv:3}],[{
		level:30,sp:20,mp:34,power:"85.0%+200",casttime:0,cooltime:10,duration:undefined, 
		description:"Duck down, run forward and attack up to 3 standing or airborne enemies with a jump uppercut, hitting 3 times."
	},{
		level:31,sp:20,mp:39,power:"90.0%+215",casttime:0,cooltime:9,duration:undefined, 
		description:"Duck down, run forward and attack up to 4 standing or airborne enemies with a jump uppercut, hitting 3 times."
	},{
		level:32,sp:20,mp:44,power:"95.0%+230",casttime:0,cooltime:8,duration:undefined, 
		description:"Duck down, run forward and attack up to 5 standing or airborne enemies with a jump uppercut, hitting 4 times. Super armored."
	},{
		level:33,sp:20,mp:49,power:"100.0%+245",casttime:0,cooltime:7,duration:undefined, 
		description:"Duck down, run forward and attack up to 6 standing or airborne enemies with a jump uppercut, hitting 3 times. Super armored."
	},{
		level:34,sp:20,mp:54,power:"105.0%+260",casttime:0,cooltime:6,duration:undefined, 
		description:"Duck down, run forward and attack up to 7 standing or airborne enemies with a jump uppercut, hitting 3 times. Super armored."
	}]);	
	
	gemini.skill[3] = new Skill("./img_p/gemini/TheRingFromHell.webp","ACTIVE","<font color='#8e6aac'>The Ring from Hell</font>","5",[0,10],[],[{
		level:36,sp:20,mp:65,power:undefined,casttime:0.5,cooltime:45,duration:1, 
		description:"Summon a Ring from Hell. Decreases movespeed and attack speed by 15% for up to 6 enemies in the Ring's range. Debuff is disabled once the enemy leaves the ring."
	},{
		level:37,sp:20,mp:70,power:undefined,casttime:0.5,cooltime:41,duration:1, 
		description:"Summon a Ring from Hell. Decreases movespeed and attack speed by 20% for up to 7 enemies in the Ring's range. Debuff is disabled once the enemy leaves the ring."
	},{
		level:38,sp:20,mp:75,power:undefined,casttime:0.5,cooltime:37,duration:1, 
		description:"Summon a Ring from Hell. Decreases movespeed and attack speed by 25% for up to 8 enemies in the Ring's range. Debuff is disabled once the enemy leaves the ring."
	},{
		level:39,sp:20,mp:80,power:undefined,casttime:0.5,cooltime:33,duration:1, 
		description:"Summon a Ring from Hell. Decreases movespeed and attack speed by 30% for up to 9 enemies in the Ring's range. Debuff is disabled once the enemy leaves the ring."
	},{
		level:40,sp:20,mp:85,power:undefined,casttime:0.5,cooltime:29,duration:1, 
		description:"Summon a Ring from Hell. Decreases movespeed and attack speed by 40% for up to 10 enemies in the Ring's range. Debuff is disabled once the enemy leaves the ring."
	}]);		

	gemini.skill[4] = new Skill("./img_p/gemini/Fusion.webp","toggle","<font color='#8e6aac'>Fusion</font>","3",[2,0],[],[{
		level:22,sp:20,mp:18,power:undefined,casttime:0,cooltime:6,duration:undefined, 
		description:"Enter Fusion status by becoming one with the twin. Increased movespeed by 10%, attack speed and critical rate by 5%. Cooldown for all skil reduced by 0.5 seconds. Consumes 10 MP per second. Twin-active skills cannot be performed while in Fusion status."
	},{
		level:23,sp:20,mp:38,power:undefined,casttime:0,cooltime:4,duration:undefined, 
		description:"Enter Fusion status by becoming one with the twin. Increased movespeed by 15%, attack speed and critical rate by 6%. Cooldown for all skil reduced by 0.6 seconds. Consumes 20 MP per second. Twin-active skills cannot be performed while in Fusion status."
	},{
		level:24,sp:20,mp:68,power:undefined,casttime:0,cooltime:2,duration:undefined, 
		description:"Enter Fusion status by becoming one with the twin. Increased movespeed by 20%, attack speed and critical rate by 8%. Cooldown for all skil reduced by 0.8 seconds. Consumes 25 MP per second. Twin-active skills cannot be performed while in Fusion status."
	}]);	

	gemini.skill[5] = new Skill("./img_p/gemini/Rage.webp","PASSIVE","<font color='#8e6aac'>Rage</font>","3",[2,2.5],[{id:4,lv:1}],[{
		level:23,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
		description:"Decreases 10% of MP usage, increases movespeed and attack rate by 1% while in Fusion status."
	},{
		level:24,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
		description:"Decreases 15% of MP usage, increases movespeed and attack rate by 2% while in Fusion status."
	},{
		level:25,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
		description:"Decreases 20% of MP usage, increases movespeed and attack rate by 3% while in Fusion status."
	}]);	
	
	gemini.skill[6] = new Skill("./img_p/gemini/PowerWeaving.webp","ACTIVE","<font color='#8e6aac'>Power Weaving</font>","3",[2,6],[{id:1,lv:3},{id:106,lv:1}],[{
		level:27,sp:20,mp:24,power:undefined,casttime:0,cooltime:6,duration:1, 
		description:"Weaving can be performed with direction key. While the skill is active, the user is invincible. Casting this skill initiates 'Immersion Lv 1' buff, increasing aim and critical damage by 5% for 2 seconds."
	},{
		level:29,sp:20,mp:29,power:undefined,casttime:0,cooltime:5,duration:1, 
		description:"Weaving can be performed with direction key. While the skill is active, the user is invincible. Casting this skill initiates 'Immersion Lv 2' buff, increasing aim and critical damage by 10% for 2 seconds."
	},{
		level:31,sp:20,mp:34,power:undefined,casttime:0,cooltime:4,duration:1, 
		description:"Weaving can be performed with direction key. While the skill is active, the user is invincible. Casting this skill initiates 'Immersion Lv 3' buff, increasing aim and critical damage by 15% for 2 seconds."
	}]);	

	gemini.skill[7] = new Skill("./img_p/gemini/DodgeMastery.webp","","<font color='#8e6aac'>Dodge Mastery</font>","5",[2,8],[{id:6,lv:3}],[{
		level:32,sp:10,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
		description:"Increases evade by 7%."	
	},{
		level:33,sp:10,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
		description:"Increases evade by 9%."
	},{
		level:34,sp:10,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
		description:"Increases evade by 11%."
	},{
		level:35,sp:10,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
		description:"Increases evade by 13%."
	},{
		level:36,sp:10,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
		description:"Increases evade by 15%."
	}]);	

	gemini.skill[8] = new Skill("./img_p/gemini/BreathControl.webp","PASSIVE","<font color='#8e6aac'>Breath Control</font>","5",[2,10],[{id:7,lv:5}],[{
		level:38,sp:20,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
		description:"Reduces cooldown for all skills by 0.3 seconds."
	},{
		level:39,sp:20,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
		description:"Reduces cooldown for all skills by 0.6 seconds."
	},{
		level:40,sp:20,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
		description:"Reduces cooldown for all skills by 0.9 seconds."
	},{
		level:41,sp:20,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
		description:"Reduces cooldown for all skills by 1.2 seconds."
	},{
		level:42,sp:20,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
		description:"Reduces cooldown for all skills by 1.5 seconds."	
	}]);

	gemini.skill[9] = new Skill("./img_p/gemini/FinishCombo.webp","PASSIVE","<font color='#8e6aac'>Finish Combo</font>","1",[4.5,0],[],[{
		level:20,sp:20,mp:undefined,power:undefined,casttime:0,cooltime:undefined,duration:undefined, 
		description:"Through combo training, an additional combo is added after the 5th combo by pressing 'z'"
	}]);		

	gemini.skill[10] = new Skill("./img_p/gemini/DefiniteDefence.webp","ACTIVE","<font color='#8e6aac'>Definite Defence</font>","1",[4.5,2.5],[{id:4,lv:1}],[{
		level:24,sp:25,mp:undefined,power:undefined,casttime:0,cooltime:15,duration:2, 
		description:"Can only be performed during Fusion status. For 1.5 seconds, become invincible. After 1.5 seconds, receive a Lv3 Critical Rate buff."
	}]);	

	gemini.skill[11] = new Skill("./img_p/gemini/ImpactBlow.webp","ACTIVE","<font color='#8e6aac'>Impact Blow</font>","3",[4.5,6],[{id:6,lv:1},{id:10,lv:1}],[{
		level:29,sp:15,mp:48,power:"205.0%+1000",casttime:0,cooltime:7,duration:undefined, 
		description:"Can only be performed during Fusion status. Attack up to 5 standing enemies, with 25% chance to inflict Lv 3 Stun and Lv 1 Breath Difficulty (decreases DEF and evade by 25% for 10 seconds)"
	},{
		level:30,sp:15,mp:48,power:"215.0%+1100",casttime:0,cooltime:6.5,duration:undefined, 
		description:"Can only be performed during Fusion status. Attack up to 5 standing enemies, with 25% chance to inflict Lv 4 Stun and Lv 2 Breath Difficulty (decreases DEF and evade by 30% for 13 seconds)"
	},{
		level:31,sp:15,mp:48,power:"225.0%+1200",casttime:0,cooltime:6,duration:undefined, 
		description:"Can only be performed during Fusion status. Attack up to 5 standing enemies, with 25% chance to inflict Lv 5 Stun and Lv 3 Breath Difficulty (decreases DEF and evade by 35% for 16 seconds)"
	}]);	

	gemini.skill[12] = new Skill("./img_p/gemini/ReleaseFighterForce.webp","ACTIVE","<font color='#8e6aac'>Release Fighter Force</font>","5",[4.5,8],[{id:11,lv:1}],[{
		level:33,sp:20,mp:30,power:"105.0%+330",casttime:0,cooltime:22,duration:1, 
		description:"Can only be performed during Fusion status. By releasing the fighting force around the body, attack up to 5 standing or fallen enemies 3 times. With each hit, consumes 20 MP."
	},{
		level:35,sp:20,mp:35,power:"115.0%+380",casttime:0,cooltime:20,duration:2, 
		description:"Can only be performed during Fusion status. By releasing the fighting force around the body, attack up to 6 standing or fallen enemies 4 times. With each hit, consumes 25 MP."
	},{
		level:37,sp:20,mp:40,power:"125.0%+410",casttime:0,cooltime:18,duration:2, 
		description:"Can only be performed during Fusion status. By releasing the fighting force around the body, attack up to 7 standing or fallen enemies 5 times. With each hit, consumes 30 MP."
	},{
		level:39,sp:20,mp:45,power:"135.0%+440",casttime:0,cooltime:16,duration:3, 
		description:"Can only be performed during Fusion status. By releasing the fighting force around the body, attack up to 8 standing or fallen enemies 6 times. With each hit, consumes 35 MP."
	},{
		level:40,sp:20,mp:50,power:"145.0%+470",casttime:0,cooltime:14,duration:3, 
		description:"Can only be performed during Fusion status. By releasing the fighting force around the body, attack up to 9 standing or fallen enemies 7 times. With each hit, consumes 40 MP."
	}]);	
		
	gemini.skill[13] = new Skill("./img_p/gemini/SpinBomb.webp","ACTIVE","<font color='#8e6aac'>Spin Bomb</font>","5",[8.5,0],[{id:110,lv:3}],[{
		level:20,sp:15,mp:48,power:"80.0%+240",casttime:0,cooltime:10,duration:undefined, 
		description:"Twin active skill. By concentrating the force into the end of the foot, fires two penetrating objects. Attacks up to 2 standing targets, penetrates up to 5 enemies."
	},{
		level:21,sp:15,mp:53,power:"90.0%+260",casttime:0,cooltime:9,duration:undefined, 
		description:"Twin active skill. By concentrating the force into the end of the foot, fires two penetrating objects. Attacks up to 3 standing targets, penetrates up to 6 enemies."
	},{
		level:22,sp:15,mp:58,power:"100.0%+280",casttime:0,cooltime:8,duration:undefined, 
		description:"Twin active skill. By concentrating the force into the end of the foot, fires two penetrating objects. Attacks up to 4 standing targets, penetrates up to 7 enemies."
	},{
		level:23,sp:15,mp:63,power:"110.0%+300",casttime:0,cooltime:7,duration:undefined, 
		description:"Twin active skill. By concentrating the force into the end of the foot, fires two penetrating objects. Attacks up to 5 standing targets, penetrates up to 8 enemies."
	},{
		level:24,sp:15,mp:68,power:"120.0%+320",casttime:0,cooltime:6,duration:undefined, 
		description:"Twin active skill. By concentrating the force into the end of the foot, fires two penetrating objects. Attacks up to 6 standing targets, penetrates up to 9 enemies."
	}]);	
	
	gemini.skill[14] = new Skill("./img_p/gemini/SpiritSpear.webp","ACTIVE","<font color='#8e6aac'>Spirit Spear</font>","5",[7,5],[{id:13,lv:3}],[{
		level:24,sp:20,mp:42,power:"100.0%+300",casttime:0,cooltime:12,duration:undefined, 
		description:"Twin active skill. Attack up to 4 standing enemies with a charging spin attack."
	},{
		level:25,sp:20,mp:47,power:"105.0%+320",casttime:0,cooltime:11,duration:undefined, 
		description:"Twin active skill. Attack up to 5 standing enemies with a charging spin attack."
	},{
		level:26,sp:20,mp:52,power:"110.0%+340",casttime:0,cooltime:10,duration:undefined, 
		description:"Twin active skill. Attack up to 6 standing enemies with a charging spin attack."
	},{
		level:27,sp:20,mp:57,power:"115.0%+360",casttime:0,cooltime:9,duration:undefined, 
		description:"Twin active skill. Attack up to 7 standing enemies with a charging spin attack."
	},{
		level:28,sp:20,mp:62,power:"120.0%+380",casttime:0,cooltime:8,duration:undefined, 
		description:"Twin active skill. Attack up to 8 standing enemies with a charging spin attack."
	}]);	
	
	gemini.skill[15] = new Skill("./img_p/gemini/SlideKicking.webp","ACTIVE","<font color='#8e6aac'>Slide Kicking</font>","5",[7,7.5],[{id:14,lv:3}],[{
		level:28,sp:20,mp:48,power:"75.0%+230",casttime:0,cooltime:8,duration:undefined, 
		description:"Twin active skill. Sliding towards front and attack up to 3 standing or fallen enemies with low continuous kicks."
	},{
		level:29,sp:20,mp:53,power:"95.0%+280",casttime:0,cooltime:8,duration:undefined, 
		description:"Twin active skill. Sliding towards front and attack up to 4 standing or fallen enemies with low continuous kicks."
	},{
		level:30,sp:20,mp:58,power:"115.0%+330",casttime:0,cooltime:8,duration:undefined, 
		description:"Twin active skill. Sliding towards front and attack up to 5 standing or fallen enemies with low continuous kicks."
	},{
		level:31,sp:20,mp:63,power:"135.0%+380",casttime:0,cooltime:8,duration:undefined, 
		description:"Twin active skill. Sliding towards front and attack up to 6 standing or fallen enemies with low continuous kicks."
	},{
		level:32,sp:20,mp:65,power:"155.0%+430",casttime:0,cooltime:8,duration:undefined, 
		description:"Twin active skill. Sliding towards front and attack up to 7 standing or fallen enemies with low continuous kicks."
	}]);	
	
	gemini.skill[16] = new Skill("./img_p/gemini/RollingGrable.webp","ACTIVE","<font color='#8e6aac'>Rolling Grable</font>","5",[10,3],[{id:13,lv:1}],[{
		level:30,sp:20,mp:30,power:"155.0%+760",casttime:0,cooltime:10,duration:undefined, 
		description:"Twin active skill. Roll toward front and perform a sliding chop, attacking up to 2 standing enemies and make them fall down."
	},{
		level:31,sp:20,mp:35,power:"160.0%+830",casttime:0,cooltime:9,duration:undefined, 
		description:"Twin active skill. Roll toward front and perform a sliding chop, attacking up to 3 standing enemies and make them fall down."
	},{
		level:32,sp:20,mp:40,power:"165.0%+900",casttime:0,cooltime:8,duration:undefined, 
		description:"Twin active skill. Roll toward front and perform a sliding chop, attacking up to 4 standing or fallen enemies and make them fall down."
	},{
		level:33,sp:20,mp:45,power:"170.0%+970",casttime:0,cooltime:7,duration:undefined, 
		description:"Twin active skill. Roll toward front and perform a sliding chop, attacking up to 5 standing or fallen enemies and make them fall down."
	},{
		level:34,sp:20,mp:50,power:"175.0%+1140",casttime:0,cooltime:6,duration:undefined, 
		description:"Twin active skill. Roll toward front and perform a sliding chop, attacking up to 6 standing or fallen enemies and make them fall down."
	}]);	
	
	gemini.skill[17] = new Skill("./img_p/gemini/SmashKick.webp","ACTIVE","<font color='#8e6aac'>Smash Kick</font>","5",[10,5.5],[{id:16,lv:3}],[{
		level:34,sp:20,mp:54,power:"185.0%+800",casttime:0,cooltime:8,duration:undefined, 
		description:"Twin active skill. Jump up to the enemies in air, and smash kick them to the ground. Attacks up to 6 airborne enemies."
	},{
		level:35,sp:20,mp:59,power:"195.0%+900",casttime:0,cooltime:7.5,duration:undefined, 
		description:"Twin active skill. Jump up to the enemies in air, and smash kick them to the ground. Attacks up to 7 airborne enemies."
	},{
		level:36,sp:20,mp:64,power:"205.0%+1000",casttime:0,cooltime:7,duration:undefined, 
		description:"Twin active skill. Jump up to the enemies in air, and smash kick them to the ground. Attacks up to 8 airborne enemies."
	},{
		level:37,sp:20,mp:69,power:"215.0%+1100",casttime:0,cooltime:6.5,duration:undefined, 
		description:"Twin active skill. Jump up to the enemies in air, and smash kick them to the ground. Attacks up to 9 airborne enemies."
	},{
		level:38,sp:20,mp:74,power:"225.0%+1200",casttime:0,cooltime:6,duration:undefined, 
		description:"Twin active skill. Jump up to the enemies in air, and smash kick them to the ground. Attacks up to 10 airborne enemies."
	}]);	
	
	gemini.skill[18] = new Skill("./img_p/gemini/HeavyBlow.webp","PASSIVE","<font color='#8e6aac'>Heavy Blow</font>","3",[10,8],[],[{
		level:21,sp:20,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
		description:"When Twin active skill is cast, adds chance to inflict stun. Higher skill level increase the chance to stun."
	},{
		level:23,sp:20,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
		description:"When Twin active skill is cast, adds chance to inflict stun. Higher skill level increase the chance to stun."
	},{
		level:25,sp:20,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
		description:"When Twin active skill is cast, adds chance to inflict stun. Higher skill level increase the chance to stun."
	}]);	

	var mirage = {
		name: "Mirage",
		skill: new Array(),
		image:"./img_p/miragebg.webp"
	};

	mirage.skill[0] = new Skill("./img_p/mirage/ScrewDropKick.webp","ACTIVE","<font color='#8e6aac'>Screw Dropkick</font>","5",[0,0],[{id:200,lv:1}],[{
		level:40,sp:20,mp:45,power:"205.0%+250",casttime:0,cooltime:5,duration:undefined, 
		description:"Drop down from the air in high speed and perform a spin kick, attacking up to 4 standing enemies. Mid launch height."
	},{
		level:41,sp:20,mp:50,power:"215.0%+300",casttime:0,cooltime:4.5,duration:undefined, 
		description:"Drop down from the air in high speed and perform a spin kick, attacking up to 5 standing or fallen enemies. Mid launch height."
	},{
		level:42,sp:20,mp:55,power:"225.0%+350",casttime:0,cooltime:4,duration:undefined, 
		description:"Drop down from the air in high speed and perform a spin kick, attacking up to 6 standing or fallen enemies. High launch height."
	},{
		level:43,sp:20,mp:60,power:"235.0%+400",casttime:0,cooltime:3.5,duration:undefined, 
		description:"Drop down from the air in high speed and perform a spin kick, attacking up to 7 standing or fallen enemies. High launch height."
	},{
		level:44,sp:20,mp:65,power:"245.0%+450",casttime:0,cooltime:3,duration:undefined, 
		description:"Drop down from the air in high speed and perform a spin kick, attacking up to 8 standing or fallen enemies. Highest launch height."
	}]);	
		
	mirage.skill[1] = new Skill("./img_p/mirage/RoarofLion.webp","ACTIVE","<font color='#8e6aac'>Roar of Lion</font>","5",[0,3.5],[{id:0,lv:1}],[{
		level:45,sp:20,mp:105,power:"110.0%+125",casttime:0,cooltime:12,duration:8, 
		description:"Produce a strong shout, reducing enemy movespeed and evade by 5% for 15 seconds."
	},{
		level:46,sp:20,mp:105,power:"120.0%+140",casttime:0,cooltime:10,duration:10, 
		description:"Produce a strong shout, reducing enemy movespeed and evade by 10% for 18 seconds."
	},{
		level:47,sp:20,mp:105,power:"130.0%+155",casttime:0,cooltime:8,duration:12, 
		description:"Produce a strong shout, reducing enemy movespeed and evade by 15% for 21 seconds."
	},{
		level:48,sp:20,mp:105,power:"140.0%+170",casttime:0,cooltime:6,duration:14, 
		description:"Produce a strong shout, reducing enemy movespeed and evade by 20% for 24 seconds."
	},{		
		level:49,sp:20,mp:105,power:"150.0%+185",casttime:0,cooltime:4,duration:16, 
		description:"Produce a strong shout, reducing enemy movespeed and evade by 25% for 27 seconds."
	}]);

	mirage.skill[2] = new Skill("./img_p/mirage/TornadoUpper.webp","ACTIVE","<font color='#8e6aac'>Tornado Upper</font>","5",[0,7],[{id:1,lv:1}],[{
		level:49,sp:20,mp:80,power:"100.0%+100",casttime:0,cooltime:10,duration:undefined, 
		description:"Concentrate the energy throughout your body before regulating it, releasing a storm, attacking enemies."
	},{
		level:50,sp:20,mp:85,power:"120.0%+250",casttime:0,cooltime:9,duration:undefined, 
		description:"Concentrate the energy throughout your body before regulating it, releasing a storm, attacking enemies."
	},{
		level:51,sp:20,mp:90,power:"140.0%+450",casttime:0,cooltime:8,duration:undefined, 
		description:"Concentrate the energy throughout your body before regulating it, releasing a storm, attacking enemies."
	},{
		level:52,sp:20,mp:90,power:"160.0%+900",casttime:0,cooltime:7,duration:undefined, 
		description:"Concentrate the energy throughout your body before regulating it, releasing a storm, attacking enemies."
	},{
		level:53,sp:20,mp:100,power:"180.0%+1500",casttime:0,cooltime:6,duration:undefined, 
		description:"Concentrate the energy throughout your body before regulating it, releasing a storm, attacking enemies."
	}]);	
	
	mirage.skill[3] = new Skill("./img_p/mirage/WheelofFortune.webp","ACTIVE","<font color='#8e6aac'>Rebound</font>","5",[0,10],[{id:2,lv:3}],[{
		level:54,sp:10,mp:85,power:undefined,casttime:1,cooltime:600,duration:60, 
		description:"Upon reaching 0 HP, instantly revive self with 10% max HP."
	},{
		level:55,sp:10,mp:110,power:undefined,casttime:1,cooltime:600,duration:60, 
		description:"Upon reaching 0 HP, instantly revive self with 15% max HP."
	},{
		level:56,sp:10,mp:135,power:undefined,casttime:1,cooltime:600,duration:60, 
		description:"Upon reaching 0 HP, instantly revive self with 20% max HP."
	},{
		level:57,sp:10,mp:160,power:undefined,casttime:1,cooltime:600,duration:60, 
		description:"Upon reaching 0 HP, instantly revive self with 25% max HP."
	},{
		level:58,sp:10,mp:185,power:undefined,casttime:1,cooltime:600,duration:60, 
		description:"Upon reaching 0 HP, instantly revive self with 30% max HP. Affects party (PvE only)."
	}]);	
	
	mirage.skill[4] = new Skill("./img_p/mirage/IronFistTraining.webp","PASSIVE","<font color='#8e6aac'>Iron Fist Training</font>","3",[2,0],[],[{
		level:42,sp:20,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
		description:"Attack with your fists and legs, tempered to the extent of iron, giving a chance to reduce your enemies' movement speed, evade and DEF."
	},{
		level:43,sp:20,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
		description:"Attack with your fists and legs, tempered to the extent of iron, giving a chance to reduce your enemies' movement speed, evade and DEF."
	},{
		level:44,sp:20,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
		description:"Attack with your fists and legs, tempered to the extent of iron, giving a chance to reduce your enemies' movement speed, evade and DEF."	
	}]);	

	mirage.skill[5] = new Skill("./img_p/mirage/FistHarmony.webp","PASSIVE","<font color='#8e6aac'>Fist Harmony</font>","3",[2,3.5],[{id:1,lv:3}],[{
		level:45,sp:20,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
		description:"Allows twins to accumulate Harmony Points. When successfully chaining combos between a twin active skill and a main skill, initiates up to Lv 1 Saving Harmony buff for 10 seconds. If 'Finish Move' or 'Finish Impact' is cast within this 10 second time frame, player will gain a Harmony buff, increasing movespeed by 5% for 15 seconds, and inflicting Lv 6 Bleeding and Lv 1 Weakening to the enemy."
	},{
		level:46,sp:20,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
		description:"Allows twins to accumulate Harmony Points. When successfully chaining combos between a twin active skill and a main skill, initiates up to Lv 2 Saving Harmony buff for 10 seconds. If 'Finish Move' or 'Finish Impact' is cast within this 10 second time frame, player will gain a Harmony buff, increasing movespeed and evade by 5% for 25 seconds, and inflicting Lv 7 Bleeding and Lv 2 Weakening to the enemy."
	},{
		level:47,sp:20,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
		description:"Allows twins to accumulate Harmony Points. When successfully chaining combos between a twin active skill and a main skill, initiates up to Lv 3 Saving Harmony buff for 10 seconds. If 'Finish Move' or 'Finish Impact' is cast within this 10 second time frame, player will gain a Harmony buff, increasing movespeed and evade by 5%, DEF by 30% for 35 seconds, and inflicting Lv 8 Bleeding and Lv 3 Weakening to the enemy."
	}]);

	mirage.skill[6] = new Skill("./img_p/mirage/HarmonyMastery.webp","PASSIVE","<font color='#8e6aac'>Harmony Mastery</font>","2",[2,6],[{id:5,lv:1}],[{
		level:48,sp:20,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
		description:"Increases the possible max level of Saving Harmony by 1. Lv 4 Saving Harmony grants the player a Harmony buff, increasing movespeed and evade by 5%, DEF by 30% for 45 seconds, and inflicting Lv 9 Bleeding and Lv 4 Weakening to the enemy."
	},{
		level:49,sp:20,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
		description:"Increases the possible max level of Saving Harmony by 1. Lv 5 Saving Harmony grants the player a Harmony buff, increasing movespeed, evade and critical rate by 5%, DEF and max HP by 30% for 55 seconds, and inflicting Lv 10 Bleeding and Lv 5 Weakening to the enemy."
	}]);	

	mirage.skill[7] = new Skill("./img_p/mirage/AtLightSpeed.webp","ACTIVE","<font color='#8e6aac'>At Light Speed</font>","3",[2,8.5],[],[{
		level:52,sp:15,mp:175,power:undefined,casttime:0.6,cooltime:50,duration:20,
		description:"Increase movement speed and attack speed by 150% for 20 seconds."
	},{
		level:54,sp:15,mp:195,power:undefined,casttime:0.6,cooltime:45,duration:25,
		description:"Increase movement speed and attack speed by 175% for 25 seconds."
	},{
		Level:56,sp:15,mp:215,power:undefined,casttime:0.6,cooltime:40,duration:30,
		description:"Increase movement speed and attack speed by 200% for 30 seconds."
	}]);	

	mirage.skill[8] = new Skill("./img_p/mirage/FusionBoost.webp","ACTIVE","<font color='#8e6aac'>Fusion Boost</font>","1",[5,1],[{id:204,lv:3}],[{
		level:41,sp:20,mp:210,power:undefined,casttime:1.5,cooltime:80,duration:30, 
		description:"Can only be used in Fusion status. Removes the animation delay for Fusion skills, allowing them to be chained together more efficiently."
	}]);		

	mirage.skill[9] = new Skill("./img_p/mirage/FinishMove.webp","ACTIVE","<font color='#8e6aac'>Finish Move</font>","5",[5,5],[{id:8,lv:1},{id:5,lv:1}],[{
		level:46,sp:20,mp:70,power:"200.0%+445",casttime:0,cooltime:7,duration:undefined, 
		description:"Can only be used in Fusion status. Spin low once and do cutdown skill, attacking up to 6 standing enemies."
	},{
		level:47,sp:20,mp:70,power:"215.0%+465",casttime:0,cooltime:7,duration:undefined, 
		description:"Can only be used in Fusion status. Spin low once and do cutdown skill, attacking up to 7 standing enemies."
	},{
		level:48,sp:20,mp:70,power:"230.0%+485",casttime:0,cooltime:7,duration:undefined, 
		description:"Can only be used in Fusion status. Spin low once and do cutdown skill, attacking up to 8 standing enemies."
	},{
		level:49,sp:20,mp:70,power:"245.0%+505",casttime:0,cooltime:7,duration:undefined, 
		description:"Can only be used in Fusion status. Spin low once and do cutdown skill, attacking up to 9 standing enemies."
	},{
		level:50,sp:20,mp:70,power:"260.0%+525",casttime:0,cooltime:7,duration:undefined, 
		description:"Can only be used in Fusion status. Spin low once and do cutdown skill, attacking up to 10 standing enemies."
	}]);	

	mirage.skill[10] = new Skill("./img_p/mirage/FinishImpact.webp","ACTIVE","<font color='#8e6aac'>Finish Impact</font>","3",[5,7.5],[{id:9,lv:5}],[{
		level:50,sp:20,mp:105,power:"350.0%+800",casttime:0,cooltime:7,duration:undefined, 
		description:"Can only be used in Fusion status. Jump low and do cutdown skill using one's fist, attacking up to 10 standing or fallen enemies."
	},{
		level:51,sp:20,mp:105,power:"370.0%+900",casttime:0,cooltime:7,duration:undefined, 
		description:"Can only be used in Fusion status. Jump low and do cutdown skill using one's fist, attacking up to 10 standing or fallen enemies."
	},{
		level:52,sp:20,mp:105,power:"390.0%+1000",casttime:0,cooltime:7,duration:undefined, 
		description:"Can only be used in Fusion status. Jump low and do cutdown skill using one's fist, attacking up to 10 standing or fallen enemies."
	}]);	
	
	mirage.skill[11] = new Skill("./img_p/mirage/GhostFighter.webp","ACTIVE","<font color='#8e6aac'>Ghost Fighter</font>","5",[5,10],[{id:10,lv:1}],[{
		level:55,sp:20,mp:100,power:"140.0%+550",casttime:1,cooltime:15,duration:undefined, 
		description:"Can only be used in Fusion status. Rapidly attack up to 4 enemies within attack range. Inflicts stun with each hit."
	},{
		level:56,sp:20,mp:110,power:"150.0%+700",casttime:1,cooltime:13.5,duration:undefined, 
		description:"Can only be used in Fusion status. Rapidly attack up to 4 enemies within attack range. Inflicts stun with each hit."
	},{
		level:57,sp:20,mp:120,power:"160.0%+850",casttime:1,cooltime:12,duration:undefined, 
		description:"Can only be used in Fusion status. Rapidly attack up to 4 enemies within attack range. Inflicts stun with each hit."
	},{
		level:58,sp:20,mp:130,power:"170.0%+1000",casttime:1,cooltime:10.5,duration:undefined, 
		description:"Can only be used in Fusion status. Rapidly attack up to 4 enemies within attack range. Inflicts stun with each hit."
	},{
		level:59,sp:20,mp:140,power:"180.0%+1150",casttime:1,cooltime:9,duration:undefined, 
		description:"Can only be used in Fusion status. Rapidly attack up to 4 enemies within attack range. Inflicts stun with each hit."
	}]);	
	
	mirage.skill[12] = new Skill("./img_p/mirage/SpinBlade.webp","ACTIVE","<font color='#8e6aac'>Spin Blade</font>","5",[7,2.5],[{id:14,lv:3}],[{
		level:46,sp:20,mp:80,power:"150.0%+185",casttime:0,cooltime:9.5,duration:undefined, 
		description:"Twin active skill. Phoenix Kick twice while moving forward, attacking up to 6 enemies 2 times."
	},{
		level:47,sp:20,mp:90,power:"165.0%+220",casttime:0,cooltime:9,duration:undefined, 
		description:"Twin active skill. Phoenix Kick twice while moving forward, attacking up to 6 enemies 3 times."
	},{
		level:48,sp:20,mp:100,power:"180.0%+255",casttime:0,cooltime:8.5,duration:undefined, 
		description:"Twin active skill. Phoenix Kick twice while moving forward, attacking up to 6 enemies 4 times."
	},{
		level:49,sp:20,mp:110,power:"190.0%+290",casttime:0,cooltime:8,duration:undefined, 
		description:"Twin active skill. Phoenix Kick twice while moving forward, attacking up to 6 enemies 5 times."
	},{
		level:50,sp:20,mp:120,power:"200.0%+325",casttime:0,cooltime:7.5,duration:undefined, 
		description:"Twin active skill. Phoenix Kick twice while moving forward, attacking up to 6 enemies 6 times."
	}]);	
	
	mirage.skill[13] = new Skill("./img_p/mirage/InfiniteKicking.webp","ACTIVE","<font color='#8e6aac'>Infinite Kicking</font>","5",[7,6.5],[{id:12,lv:3}],[{
		level:47,sp:20,mp:87,power:"120.0%+260",casttime:0,cooltime:10,duration:undefined, 
		description:"Twin active skill. The upgraded version of Non Stop Kicking. Attack up to 5 standing or fallen enemies 6 times."
	},{
		level:48,sp:20,mp:97,power:"130.0%+275",casttime:0,cooltime:9,duration:undefined, 
		description:"Twin active skill. The upgraded version of Non Stop Kicking. Attack up to 5 standing or fallen enemies 7 times."
	},{
		level:49,sp:20,mp:107,power:"140.0%+290",casttime:0,cooltime:8,duration:undefined, 
		description:"Twin active skill. The upgraded version of Non Stop Kicking. Attack up to 5 standing or fallen enemies 8 times."
	},{
		level:50,sp:20,mp:117,power:"150.0%+305",casttime:0,cooltime:7,duration:undefined, 
		description:"Twin active skill. The upgraded version of Non Stop Kicking. Attack up to 5 standing or fallen enemies 9 times."
	},{
		level:51,sp:20,mp:127,power:"160.0%+320",casttime:0,cooltime:6,duration:undefined, 
		description:"Twin active skill. The upgraded version of Non Stop Kicking. Attack up to 5 standing or fallen enemies 10 times."
	}]);	
	
	mirage.skill[14] = new Skill("./img_p/mirage/Stamper.webp","ACTIVE","<font color='#8e6aac'>Stamper</font>","5",[8.5,0],[{id:215,lv:3}],[{
		level:40,sp:20,mp:65,power:"130.0%+155",casttime:0,cooltime:12,duration:undefined, 
		description:"Twin active skill. Jump and attack up to 2 standing or airborne enemies 5 times with fast stamping steps."
	},{
		level:41,sp:20,mp:70,power:"140.0%+170",casttime:0,cooltime:10,duration:undefined, 
		description:"Twin active skill. Jump and attack up to 3 standing or airborne enemies 5 times with fast stamping steps."
	},{
		level:42,sp:20,mp:75,power:"150.0%+185",casttime:0,cooltime:8,duration:undefined, 
		description:"Twin active skill. Jump and attack up to 4 standing or airborne enemies 5 times with fast stamping steps."
	},{
		level:43,sp:20,mp:80,power:"160.0%+200",casttime:0,cooltime:6,duration:undefined, 
		description:"Twin active skill. Jump and attack up to 5 standing or airborne enemies 5 times with fast stamping steps."
	},{
		level:44,sp:20,mp:85,power:"170.0%+215",casttime:0,cooltime:5,duration:undefined, 
		description:"Twin active skill. Jump and attack up to 6 standing or airborne enemies 5 times with fast stamping steps."	
	}]);	
	
	mirage.skill[15] = new Skill("./img_p/mirage/RisingDropKick.webp","ACTIVE","<font color='#8e6aac'>Rising Drop Kick</font>","5",[8.5,9],[{id:17,lv:1}],[{
		level:48,sp:20,mp:55,power:"350.0%+430",casttime:0,cooltime:10,duration:undefined, 
		description:"Twin active skill. Recoil the body and perform a long distance drop kick, attacking up to 5 standing or airborne enemies."
	},{
		level:49,sp:20,mp:65,power:"365.0%+475",casttime:0,cooltime:9,duration:undefined, 
		description:"Twin active skill. Recoil the body and perform a long distance drop kick, attacking up to 6 standing or airborne enemies."
	},{
		level:50,sp:20,mp:75,power:"380.0%+520",casttime:0,cooltime:8,duration:undefined, 
		description:"Twin active skill. Recoil the body and perform a long distance drop kick, attacking up to 7 standing or airborne enemies."
	},{
		level:51,sp:20,mp:85,power:"395.0%+565",casttime:0,cooltime:7,duration:undefined, 
		description:"Twin active skill. Recoil the body and perform a long distance drop kick, attacking up to 8 standing or airborne enemies."
	},{
		level:52,sp:20,mp:95,power:"410.0%+610",casttime:0,cooltime:6,duration:undefined, 
		description:"Twin active skill. Recoil the body and perform a long distance drop kick, attacking up to 9 standing or airborne enemies."
	}]);	
	
	mirage.skill[16] = new Skill("./img_p/mirage/TwinImpact.webp","PASSIVE","<font color='#8e6aac'>Twin Impact</font>","3",[10,0],[],[{
		level:51,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
		description:"Increases damage of Twin active skills by 5%."
	},{
		level:52,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
		description:"Increases damage of Twin active skills by 7%."
	},{
		level:53,sp:15,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
		description:"Increases damage of Twin active skills by 10%."
	}]);	
	
	mirage.skill[17] = new Skill("./img_p/mirage/SwishKick.webp","ACTIVE","<font color='#8e6aac'>Swish Kick</font>","5",[10,7],[{id:14,lv:1}],[{
		level:44,sp:20,mp:60,power:"150.0%+185",casttime:0,cooltime:8.5,duration:undefined, 
		description:"Twin. Move forward and attack up to 5 standing enemies followed by a spin kick."
	},{
		level:45,sp:20,mp:70,power:"160.0%+200",casttime:0,cooltime:8,duration:undefined, 
		description:"Twin. Move forward and attack up to 6 standing enemies followed by a spin kick."
	},{
		level:46,sp:20,mp:80,power:"170.0%+215",casttime:0,cooltime:7.5,duration:undefined, 
		description:"Twin. Move forward and attack up to 7 standing or fallen enemies followed by a spin kick."
	},{
		level:47,sp:20,mp:90,power:"180.0%+230",casttime:0,cooltime:7,duration:undefined, 
		description:"Twin. Move forward and attack up to 8 standing or fallen eenemies followed by a spin kick."
	},{
		level:48,sp:20,mp:100,power:"190.0%+245",casttime:0,cooltime:6.5,duration:undefined, 
		description:"Twin. Move forward and attack up to 9 standing or fallen eenemies followed by a spin kick."	
	}]);	
		
	var jumeaux = {
		name: "Jumeaux",
		skill: new Array(),
		image:"./img_p/jumeauxbg.webp"
	};


	jumeaux.skill[0] = new Skill("./img_p/jumeaux/Awakening.webp","PASSIVE","<font color='#8e6aac'>Awakening</font>","1",[5,0],[],[{
		level:60,sp:1,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:"Whenever you use MP during battle, your Awakening bar will fill up. This allows you to perform certain special skills which consume Awakening points. These skills also consume MP, however the MP they consume does not fill your awakening bar. "
	}]);
	
	jumeaux.skill[1] = new Skill("./img_p/jumeaux/Unknown.webp","passive","Unknown","5",[9,0],[{id:0,lv:1}],[{
		level:60,sp:25,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:""
	},{
		level:61,sp:25,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:""
	},{
		level:62,sp:25,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:""
	},{
		level:63,sp:25,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:""
	},{
		level:64,sp:25,mp:undefined,power:undefined,casttime:undefined,cooltime:undefined,duration:undefined, 
	 	description:""
	}]);
	
	jumeaux.skill[2] = new Skill("./img_p/jumeaux/InfiniteScuffle.webp","ACTIVE","<font color='#8e6aac'>Infinite Scuffle</font>","5",[4,3],[{id:0,lv:1}],[{
		level:61,sp:25,mp:140,power:"100%+550",casttime:0.5,cooltime:30,duration:undefined, 
	 	description:"[Awakening Skill] Perform a legendary combo. Dash forward and perform a combo with the twin against up to 5 standing or fallen enemies. When in Fusion status, the attack is performed by oneself. Cast can be cancelled by the arrow key. Consumes 1000 Awakening."
	},{
		level:63,sp:25,mp:145,power:"120%+600",casttime:0.5,cooltime:27,duration:undefined, 
	 	description:"[Awakening Skill] Perform a legendary combo. Dash forward and perform a combo with the twin against up to 6 standing or fallen enemies. When in Fusion status, the attack is performed by oneself. Cast can be cancelled by the arrow key. Consumes 1100 Awakening."
	},{
		level:65,sp:25,mp:150,power:"150%+650",casttime:0.5,cooltime:24,duration:undefined, 
	 	description:"[Awakening Skill] Perform a legendary combo. Dash forward and perform a combo with the twin against up to 7 standing or fallen enemies. When in Fusion status, the attack is performed by oneself. Cast can be cancelled by the arrow key. Consumes 1200 Awakening."
	},{
		level:67,sp:25,mp:155,power:"175%+700",casttime:0.5,cooltime:21,duration:undefined, 
	 	description:"[Awakening Skill] Perform a legendary combo. Dash forward and perform a combo with the twin against up to 8 standing or fallen enemies. When in Fusion status, the attack is performed by oneself. Cast can be cancelled by the arrow key. Consumes 1300 Awakening."
	},{
		level:69,sp:25,mp:160,power:"200%+750",casttime:0.5,cooltime:18,duration:undefined, 
	 	description:"[Awakening Skill] Perform a legendary combo. Dash forward and perform a combo with the twin against up to 9 standing or fallen enemies. When in Fusion status, the attack is performed by oneself. Cast can be cancelled by the arrow key. Consumes 1400 Awakening."
	}]);
	
	jumeaux.skill[3] = new Skill("./img_p/jumeaux/CrossFist.webp","ACTIVE","<font color='#8e6aac'>Cross Fist</font>","1",[6,3],[{id:0,lv:1}],[{
		level:60,sp:60,mp:undefined,power:"900.0%",casttime:0,cooltime:300,duration:undefined, 
	 	description:"[Ultimate Skill] A special skill for twins that has been handed down across the Dragonkin generations. By maximizing Dragonkin Force and exploding the concentrated energy, it hits the enemies nearby up to 5 times and does additional damage at the end with an explosion. Final hit inflicts stun."
	}]);
	
	jumeaux.skill[4] = new Skill("./img_p/jumeaux/Consecutivehit.webp","ACTIVE","<font color='#8e6aac'>Consecutive Hit</font>","5",[4,5],[{id:2,lv:1}],[{
		level:62,sp:25,mp:120,power:"420.0%",casttime:0,cooltime:18,duration:undefined, 
	 	description:"[Awakening Skill] Perform a legendary combo with the twin. Twin holds the enemy down while one stabs up to 10 enemies 4 times. If in Fusion status, the combo is done by oneself. Consumes 800 Awakening."
	},{
		level:64,sp:25,mp:125,power:"460.0%",casttime:0,cooltime:18,duration:undefined, 
	 	description:"[Awakening Skill] Perform a legendary combo with the twin. Twin holds the enemy down while one stabs up to 10 enemies 4 times. If in Fusion status, the combo is done by oneself. Consumes 850 Awakening."
	},{
		level:66,sp:25,mp:130,power:"500.0%",casttime:0,cooltime:18,duration:undefined, 
	 	description:"[Awakening Skill] Perform a legendary combo with the twin. Twin holds the enemy down while one stabs up to 10 enemies 5 times. If in Fusion status, the combo is done by oneself. Consumes 900 Awakening."
	},{
		level:68,sp:25,mp:135,power:"540.0%",casttime:0,cooltime:18,duration:undefined, 
	 	description:"[Awakening Skill] Perform a legendary combo with the twin. Twin holds the enemy down while one stabs up to 10 enemies 5 times. If in Fusion status, the combo is done by oneself. Consumes 950 Awakening."
	},{
		level:70,sp:25,mp:140,power:"580.0%",casttime:0,cooltime:18,duration:undefined, 
	 	description:"[Awakening Skill] Perform a legendary combo with the twin. Twin holds the enemy down while one stabs up to 10 enemies 6 times. If in Fusion status, the combo is done by oneself. Consumes 1000 Awakening."
	}]);	
	
	jumeaux.skill[5] = new Skill("./img_p/jumeaux/Trainingtime.webp","ACTIVE","<font color='#8e6aac'>Training Time</font>","5",[1,0],[],[{
		level:60,sp:20,mp:120,power:undefined,casttime:0,cooltime:18,duration:3, 
	 	description:"Transform up to 2 standing enemies in range into a wooden training doll for 3 seconds. While in this status, enemies cannot move. However, the enemies' base DEF is increased by 50%."
	},{
		level:62,sp:20,mp:125,power:undefined,casttime:0,cooltime:16,duration:3, 
	 	description:"Transform up to 3 standing enemies in range into a wooden training doll for 3 seconds. While in this status, enemies cannot move. However, the enemies' base DEF is increased by 50%."
	},{
		level:64,sp:20,mp:130,power:undefined,casttime:0,cooltime:14,duration:3, 
	 	description:"Transform up to 4 standing or fallen enemies in range into a wooden training doll for 3 seconds. While in this status, enemies cannot move. However, the enemies' base DEF is increased by 50%."
	},{
		level:66,sp:20,mp:135,power:undefined,casttime:0,cooltime:12,duration:3, 
	 	description:"Transform up to 5 standing or fallen enemies in range into a wooden training doll for 3 seconds. While in this status, enemies cannot move. However, the enemies' base DEF is increased by 50%."
	},{
		level:68,sp:20,mp:140,power:undefined,casttime:0,cooltime:10,duration:3, 
	 	description:"Transform up to 6 standing or fallen enemies in range into a wooden training doll for 3 seconds. While in this status, enemies cannot move. However, the enemies' base DEF is increased by 50%."
	}]);
	
	jumeaux.skill[6] = new Skill("./img_p/jumeaux/ChargeTheAwakening.webp","toggle","<font color='#8e6aac'>Awakening Charge</font>","3",[1,7],[],[{
		level:60,sp:10,mp:35,power:undefined,casttime:0,cooltime:3,duration:undefined, 
		description:"Consumes 20% MP to recharge 14% of the Awakening bar every 3 seconds."
	 },{
	 	level:62,sp:10,mp:35,power:undefined,casttime:0,cooltime:3,duration:undefined, 
		description:"Consumes 20% MP to recharge 17% of the Awakening bar every 3 seconds."
	 },{
		level:68,sp:10,mp:35,power:undefined,casttime:0,cooltime:3,duration:undefined, 
		description:"Consumes 20% MP to recharge 20% of the Awakening bar every 3 seconds."
	}]);
