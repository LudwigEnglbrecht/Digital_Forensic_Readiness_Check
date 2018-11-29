window.onload = function () {

	var hexColors = [];
	for (c in colors) { hexColors.push(hexToRgb(colors[c])); }

	var enablerNames = getEnablerNames();
	var maturityLevels = getAllMaturityLevel();
	var capabilityLevels = getAllCapabilitylevel();

	var reached_capability_levels = [];
	var reached_maturity_level;

	//get Data of wheel.html
	var retrievedObject = localStorage.getItem(selectedQuestions_str);
	//console.log('Questions: ', JSON.parse(retrievedObject));
	var answers = JSON.parse(retrievedObject)

	setTimeout(function(){

		var answeredEnabler = [];
		var capabilityLevelList = [];

		//-----------------------Calculate maturity Level--------------------------------------

		//loop Answers for the seven Enabeler
		for (var i = 1; i<=7;i++){
			var eId = i.toString();
		  answeredEnabler =  getEnablerById(eId);
			var capLevel = getCapabilityLevel(answeredEnabler);
			capabilityLevelList.push({
				index: eId,
				capabilityLevel: capLevel,
			});
		}

		//console.log("Capability Level: "+eId,capabilityLevelList);
		getMaturityLevel();


		function getEnablerById(eId){
			var listOfAnswers = [];
			answers.forEach(function(entry){
			 var id = entry.index;
			 if (id == eId){
				 listOfAnswers.push(entry);
				}
			});
			console.log("Sorted List: ",listOfAnswers);
			return listOfAnswers;
		}

		//loop Answers to one Enabler to get his Capability Level
		function getCapabilityLevel(anEnabler){
			var i;
			var saveContributionLevel=0;
			var o=3;
			var mandAsked = false;
			var capabilityLevel = 0;
			for(i = 1; i<=3;i++){
				var listlength = anEnabler.length;
				var stop = false;
				for(var a = 0; a<listlength;a++){
					var answer = anEnabler[a].answer;
					var contributionLevel = anEnabler[a].max_konstributionslevel;
	 			  var type = anEnabler[a].typ;
					if (contributionLevel == i){
						if(type == verpflichtend_str){
							mandAsked = true;
							if(answer != yes_str){
								stop = true;
								break;
							} else {
								//console.log("test1");
								saveContributionLevel = i;
							}
						} else if (o=>i) {
							 	if (answer == yes_str){
										o = i;
									} else {
										o = i-1;
									}
						  }
					}
				}
				if (stop == true){
					break;
				}
			} if (i>=4){
				//console.log("test2");
				if (mandAsked == false){
					i = o+1;
				} else {
					i = saveContributionLevel+1;
				}
			}
			capabilityLevel = i-1;
			return capabilityLevel;

		}

		//get Maturity level for Principles, Policies and Frameworks.
		function getMaturityLevel(){
			//console.log ("Get Maturity Level")
			var capabilityLevelPrinciplesPoliciesFrameworks = capabilityLevelList[0].capabilityLevel ;
			var capabilityLevelProcess =  capabilityLevelList[1].capabilityLevel;
			var capabilityLevelOrganizationalStructures =  capabilityLevelList[2].capabilityLevel;
			var capabilityLevelInformation =  capabilityLevelList[3].capabilityLevel;
			var cababilityLevelCulturEthicsBehavior =  capabilityLevelList[4].capabilityLevel;
			var cababilityLevelPeopleSkillsCompetences =  capabilityLevelList[5].capabilityLevel;
			var cababilityLevelServicesInfrastructureApplications =  capabilityLevelList[6].capabilityLevel;

		  if (
		 	capabilityLevelPrinciplesPoliciesFrameworks >=3 &&
		 	capabilityLevelProcess >=3 &&
		 	capabilityLevelOrganizationalStructures >=3 &&
		 	capabilityLevelInformation >=3 &&
		 	cababilityLevelCulturEthicsBehavior >=3 &&
		 	cababilityLevelPeopleSkillsCompetences >=3 &&
		 	cababilityLevelServicesInfrastructureApplications >=3
		 ) {
		 	//condition for Level 5
		 	 reached_maturity_level = 5;
		 } else if (
			 capabilityLevelPrinciplesPoliciesFrameworks >=2 &&
			 capabilityLevelProcess >=3 &&
			 capabilityLevelOrganizationalStructures >=3 &&
			 capabilityLevelInformation >=3 &&
			 cababilityLevelCulturEthicsBehavior >=3 &&
			 cababilityLevelPeopleSkillsCompetences >=3 &&
			 cababilityLevelServicesInfrastructureApplications >=2
		 ) {
			 //condition for Level 4
			 reached_maturity_level = 4;
		 }  else if (
				capabilityLevelPrinciplesPoliciesFrameworks >=2 &&
				capabilityLevelProcess >=2 &&
				capabilityLevelOrganizationalStructures >=2 &&
				capabilityLevelInformation >=1 &&
				cababilityLevelCulturEthicsBehavior >=2 &&
				cababilityLevelPeopleSkillsCompetences >=2 &&
				cababilityLevelServicesInfrastructureApplications >=2
			) {
				//condition for Level 3
				reached_maturity_level=3;
			}else if (
				 capabilityLevelPrinciplesPoliciesFrameworks >=1 &&
				 capabilityLevelProcess >=1 &&
				 capabilityLevelOrganizationalStructures >=1 &&
				 capabilityLevelInformation >=1 &&
				 cababilityLevelCulturEthicsBehavior >=1 &&
				 cababilityLevelPeopleSkillsCompetences >=1 &&
				 cababilityLevelServicesInfrastructureApplications >=1
			 ){
				 //condition for Level 2
				 reached_maturity_level = 2;
			 } else {
				//Level 1
				 reached_maturity_level=1;
			}

		}

		reached_capability_levels = getDatasetForChart();

		var capLevels = capabilityLevels.map(x => x.level);
		var capDescriptions = capabilityLevels.map(x => x.beschreibung);

		var matDescriptions = maturityLevels.map(x => x.beschreibung);

		var matDescriptionInnerHtml = "";
		var capDescriptionInnerHtml = "";

		var ctx;
		var myChart;

		$('#'+loading_id).hide();

		$.alert({
			title: alert_str + reached_maturity_level,
			content: "",
			theme: 'supervan',
			type: 'red',
			columnClass: 'col-md-12',
			boxWidth: '50%',
		});
		//show the rows after the getting data from database and spinner is gone
		document.getElementById(levelRow_id).style.display = "inline";
		document.getElementById(chartRow_id).style.display = "inline";
		document.getElementById(questionRow_id).style.display = "block";

		//setup the info Button on top of the page to get informations about the capabilityLevel
		$("#"+infoBtn_id).html(information_str);
		$('#'+infoBtn_id).on('click', function(e){
			$("#"+infoTable_id).toggle();
			$(this).toggleClass('inline')
		});

		//setup the Titles
		$("#"+h3_maturity_level_id).html(maturity_level_str);
		$("#"+h2_capability_level_id).html(capability_level_str);
		$("#"+h3_show_maturity_level_id).html(your_level_str + ': </br><span id=' + span_maturity_level_id + ' style="font-size: 80px">'+ reached_maturity_level + '</span>');

		//setup the descriptions for the maturity level
		setupMatDescriptions(matDescriptions, matDescriptionInnerHtml);

		//setup the descriptions for the cabability level
		setupCabDescriptions(capLevels, capDescriptions, capDescriptionInnerHtml);

		//change Tab of the maturity level
		function activaTab(tab){
			$('.nav-tabs a[href="#' + tab + '"]').tab('show');
		};
		changeTab(reached_maturity_level);

		//setup CollapseBtn and Table of answered Questions
		setupCollapseBtn(answers);

		//setup the polar area chart with the capability levels that are reached
		ctx = document.getElementById(chart_area_id).getContext('2d');
		mayChart = new Chart(ctx, {
			type: 'polarArea',
			data: {
				datasets: [{
					data: reached_capability_levels,
					backgroundColor: hexColors,
					borderColor : hexColors,
					borderWidth : 0
				}],
				labels: enablerNames,
			},
			options: {
				responsive: true,
				legend: {
					display: true,
					position: 'right',
					labels: {
						fontColor: greyColor
					}
				},
				title: {
					display: true
				},
				scale: {
					ticks: {
						max: (capLevels.length - 1),
						min: (capLevels.indexOf(capLevels[0]) - 1),
						stepSize: 1,
						fontColor: "#000000",
						fontFamily: 'Helvetica',
						fontSize: 15
					},
					reverse: false
				},
				animation: {
					animateRotate: true,
					animateScale: true
				}
			}
		});

		function getDatasetForChart(){
		  var chartSet=[];
		  capabilityLevelList.forEach(function(result){
			var a = result.capabilityLevel;
			chartSet.push(a);
		  });
		  console.log("DataSet: ", chartSet);
		  return chartSet;

		}

	}, 2000);
}
