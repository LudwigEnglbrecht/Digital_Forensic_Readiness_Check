window.onload = function () {

		//get the data from the database
		var enablerNames = getEnablerNames();
		var allQuestions = getQuestions();
		var indikatorData = getIndikatorData();

		//current color
		var color = "";
		var text = "";
		var textTitle = "";

		//Enabler wheel
		var regex = /\s/g;
		var PieSlice;

		//Questions chip vars
		var currentChip = 0;
		var progessCounter = 0;

		var selectedQuestions = [];

		var currentEnabler;
		var innerHtml = '';
		var allQuestionsAtStart= [];

		//set a timeout to wait until the script gets the data from the data.js (database)
		setTimeout(function(){
			
			//set Info Button
			document.getElementById(generalInfoButton_id).style.display = "inline";
			$("#"+generalInfoButton_id).css("display", "block");

			//deleting of duplicates in the questions
			for (var i in allQuestions) {
				allQuestions[i] = deleteDuplicates(allQuestions[i]);
				allQuestionsAtStart.push(allQuestions[i].length);
			}
			//console.log(allQuestions);

			//hide the spinner after loading the wheel
			$('#'+loading_id).hide();
			
			//setup the Info for the single Enablers
			setupEnablerInfo(enablerNames, allQuestions, innerHtml);

			//add linebreaks to the name of the enablers instead of the whitespaces
			var wheelEnablerNames = [];
			for (index in enablerNames) {
				enablerNames[index] = enablerNames[index].replace(regex, "\n");
			}

			//init the wheel with the Enablers
			PieSlice = new wheelnav(pieSlice_id, null);
			PieSlice.initWheel(enablerNames);
			PieSlice.animatetime = 800;
			PieSlice.animateeffect = 'linear';
			PieSlice.selectedNavItemIndex = null;
			PieSlice.slicePathFunction = slicePath().DonutSlice;
			PieSlice.navAngle = 90;
			PieSlice.rotateRound = true;
			PieSlice.createWheel();

			//wenn daten nicht geladen haben aus der Datenbank --> Keine Internetverbindung
			if (PieSlice.navItems[4] == undefined) {
				//document.write("Hello World");
				$("#"+pieSlice_id).html('<div class="text-center vertical-center"><span style="font-size: 40px">'+ "No Server Connection!" + '</span></div>');
			}

			//setup the functions for clicking single segments of the wheel
			PieSlice.navItems[0].navigateFunction = function () {
				//set the color, text and accents for the first segment
				color = colors[0];
				textTitle = enablerNames[0];
				setColorsAccents(color, textTitle);
				//generate a random question out of the question stack
				setCardText(allQuestions["1"]);
				currentEnabler = 1;
			};

			PieSlice.navItems[1].navigateFunction = function () {
				//set the color, text and accents for the first segment
				color = colors[1];;
				textTitle = enablerNames[1];
				setColorsAccents(color, textTitle);
				//generate a random question out of the question stack
				setCardText(allQuestions["2"]);
				currentEnabler = 2;
			};

			PieSlice.navItems[2].navigateFunction = function () {
				//set the color, text and accents for the first segment
				color = colors[2];
				textTitle = enablerNames[2];
				setColorsAccents(color, textTitle);
				//generate a random question out of the question stack
				setCardText(allQuestions["3"]);
				currentEnabler = 3;
			};

			PieSlice.navItems[3].navigateFunction = function () {
				//set the color, text and accents for the first segment
				color = colors[3];
				textTitle = enablerNames[3];
				setColorsAccents(color, textTitle);
				//generate a random question out of the question stack
				setCardText(allQuestions["4"]);
				currentEnabler = 4;
			};

			PieSlice.navItems[4].navigateFunction = function () {
				//set the color, text and accents for the first segment
				color = colors[4];
				textTitle = enablerNames[4];
				setColorsAccents(color, textTitle);
				//generate a random question out of the question stack
				setCardText(allQuestions["5"]);
				currentEnabler = 5;
			};

			PieSlice.navItems[5].navigateFunction = function () {
				//set the color, text and accents for the first segment
				color = colors[5];
				textTitle = enablerNames[5];
				setColorsAccents(color, textTitle);
				//generate a random question out of the question stack
				setCardText(allQuestions["6"]);
				currentEnabler = 6;
			};

			PieSlice.navItems[6].navigateFunction = function () {
				//set the color, text and accents for the first segment
				color = colors[6];
				textTitle = enablerNames[6];
				setColorsAccents(color, textTitle);
				//generate a random question out of the question stack
				setCardText(allQuestions["7"]);
				currentEnabler = 7;
			};
			
		}, 2000);
		
		$(document).ready(function() {
			
			setupInfoTextandBtn();
			
			$("#"+yesButton_id).click(function(event){

				//check if Button got disabled before (Edit function)
				if ($(this).prop(disabled)){
					changeAnswerAndColorsOfBtn(selectedQuestions, yes_str);
					event.preventDefault();
					event.stopPropagation();
				} else {
					
					//variable to check the length of the list of chips for the num
					var rows = document.getElementsByTagName("tr");

					/*
					As long as the length is smaller than the amount of max Questions, its allowed to check more questions.
					First there are two counters, one for the change of the progressbar and one for the current number thats answered, to set an ID for Questions that
					are already answerd.
					*/
					if (rows.length < maxQuestion) {
						currentChip++;
						progessCounter++;

						//appending a new Child Elemnt to the DOM, means adding a new Row/Chip to the List and DOM
						appendChip(currentChip);
						
						//auto scroll down, when chip added
						document.getElementById(tbodyWheel_id).scrollTop = document.getElementById(tbodyWheel_id).scrollHeight;

						//visible the col of the question chips and set accents
						document.getElementById(questionBlock_id).style.display = "none";
						document.getElementById(quetionChipCircle_id + currentChip).style.backgroundColor = color;
						updateProgressBar(progessCounter, color);

						//set unice Id for every Chip
						var idEdit = chipEditButton_id + currentChip;
						var idDelete = chipDeleteButton_id + currentChip;
						var rowId = tr_id + currentChip;

						//current color, Question (text) and textTitle (EnablerName)
						var checkedColor = color;
						var checkedText = text;
						var checkedTextTitle = textTitle;

						//get the right Typ and max. contibutionlevel for every Question
						var typ;
						var max_konstributionslevel;
						
						for (var i in indikatorData[currentEnabler]) {
							var question = indikatorData[currentEnabler][i].frage.replace(/\n/g, " ");
							if(question == checkedText){
								max_konstributionslevel = indikatorData[currentEnabler][i].max_konstributionslevel;
								typ = indikatorData[currentEnabler][i].typ;
							}
						}

						//add the answerd question to the Array of selectedQuestions
						for (index in allQuestions) {
							for (i in allQuestions[index]) {
								if (checkedText == allQuestions[index][i]) {
									selectedQuestions.push({
										enabler: textTitle,
										question: text,
										answer: yes_str,
										index: index,
										typ: typ,
										max_konstributionslevel: max_konstributionslevel
									});
									allQuestions[index].splice(i, 1);
								}
							}
						}
						console.log("-----> ")
						console.log(allQuestions);

						updateEnablerInfo();
						updateQuestionChipNumbers(rows);
						clickEditBtnFunction(idEdit, checkedText, checkedTextTitle, checkedColor);

						document.getElementById(idDelete).addEventListener("click", function(){

							document.getElementById(confirmButton_id).style.display = "none";
							var row = document.getElementById(rowId);
							var parent = row.parentNode;
							parent.removeChild(row);
							$("#"+yesButton_id).prop(disabled, false);
							$("#"+noButton_id).prop(disabled, false);

							progessCounter--;
							updateProgressBar(progessCounter, checkedColor);
							updateQuestionChipNumbers(rows);

							document.getElementById(questionBlock_id).style.display = "none";
							for (elem in selectedQuestions){
								if (selectedQuestions[elem].question == checkedText){
									allQuestions[selectedQuestions[elem].index].push(selectedQuestions[elem].question);
									updateEnablerInfo();
								}
							}
							selectedQuestions = selectedQuestions.filter(function(el) {
								return el.question !== checkedText;
							});
							//alert(JSON.stringify(selectedQuestions, null, ' ') + " without" + checkedText);
						});
						checkIfMaxQuestionReached(rows);
						console.log(selectedQuestions);
					} else { setAttentionAlert(attentionAlertTitle, attentionAlertContentMaxAmount); }
				}
			});

			//OnClick for the remove Button in the QuestionCard
			$("#"+noButton_id).click(function(event){

				if ($(this).prop(disabled)){
					changeAnswerAndColorsOfBtn(selectedQuestions, no_str);
					event.preventDefault();
					event.stopPropagation();
				} else {
					//variable to check the length of the list of chips for the num
					var rows = document.getElementsByTagName("tr");
					/*
					As long as the length is smaller than the amount of max Questions, its allowed to check more questions.
					First there are two counters, one for the change of the progressbar and one for the current number thats answered, to set an ID for Questions that
					are already answerd.
					*/
					if (rows.length < maxQuestion) {
						currentChip++;
						progessCounter++;

						//appending a new Child Elemnt to the DOM, means adding a new Row/Chip to the List
						appendChip(currentChip);
						
						//auto scroll down, when chip added
						document.getElementById(tbodyWheel_id).scrollTop = document.getElementById(tbodyWheel_id).scrollHeight;

						//visible the col of the question chips and set accents
						document.getElementById(questionBlock_id).style.display = "none";
						document.getElementById(quetionChipCircle_id + currentChip).style.backgroundColor = color;
						updateProgressBar(progessCounter, color);

						var idEdit = chipEditButton_id + currentChip;
						var idDelete = chipDeleteButton_id + currentChip;
						var rowId = tr_id + currentChip;

						var checkedColor = color;
						var checkedText = text;
						var checkedTextTitle = textTitle;

						var typ;
						var max_konstributionslevel;

						for (var i in indikatorData[currentEnabler]) {
							var question = indikatorData[currentEnabler][i].frage.replace(/\n/g, " ");
							if(question == checkedText){
								max_konstributionslevel = indikatorData[currentEnabler][i].max_konstributionslevel;
								typ = indikatorData[currentEnabler][i].typ;
							}
						}

						for (index in allQuestions) {
							for (i in allQuestions[index]) {
								if (checkedText == allQuestions[index][i]) {
									selectedQuestions.push({
										enabler: textTitle,
										question: text,
										answer: no_str,
										index: index,
										typ: typ,
										max_konstributionslevel: max_konstributionslevel
									});
									allQuestions[index].splice(i, 1);
								}
							}
						}
						console.log("-----> ")
						console.log(allQuestions)
						//console.log(selectedQuestions);

						updateQuestionChipNumbers(rows);
						updateEnablerInfo();
						clickEditBtnFunction(idEdit, checkedText, checkedTextTitle, checkedColor);

						document.getElementById(idDelete).addEventListener("click", function(){
							document.getElementById(confirmButton_id).style.display = "none";
							var row = document.getElementById(rowId);
							var parent = row.parentNode;
							parent.removeChild(row);
							$("#"+yesButton_id).prop(disabled, false);
							$("#"+noButton_id).prop(disabled, false);

							progessCounter--;
							updateProgressBar(progessCounter, checkedColor);
							updateQuestionChipNumbers(rows);

							document.getElementById(questionBlock_id).style.display = "none";

							for (elem in selectedQuestions){
								if (selectedQuestions[elem].question == checkedText){
									allQuestions[selectedQuestions[elem].index].push(selectedQuestions[elem].question)
									updateEnablerInfo();
								}
							}

							selectedQuestions = selectedQuestions.filter(function(el) {
								return el.question !== checkedText;
							});
						});

						checkIfMaxQuestionReached(rows);
						console.log(selectedQuestions);
					} else { setAttentionAlert(attentionAlertTitle, attentionAlertContentMaxAmount); }
				}
			});

			$("#"+confirmButton_id).click(function() {
				localStorage.setItem(selectedQuestions_str, JSON.stringify(selectedQuestions));
				window.location.href = confirmAlertHref;
			});
		});

		function setCardText(questions) {
			for (i in questions) {
				questions[i] = questions[i].replace(/\n/g, " ");
			}
			if(questions[0] != undefined){
				var randNum = getRandomInt(0, (questions.length-1)) ;
				text = questions[randNum];
				document.getElementById(cardText_id).innerHTML = text;

			} else{
				document.getElementById(questionBlock_id).style.display = "none";
				setAttentionAlert(attentionAlertTitle, attentionAlertContentAnsweredAllQuestions);
			}
		}

		function clickEditBtnFunction (idEdit, checkedText, checkedTextTitle, checkedColor) {
			document.getElementById(idEdit).addEventListener("click", function(){
				updateColorAccents(checkedText, checkedTextTitle, checkedColor);
				$("#"+noButton_id).prop(disabled, true);
				$("#"+yesButton_id).prop(disabled, true);

				for (var i in selectedQuestions) {
					if (selectedQuestions[i].question == checkedText){
						if (selectedQuestions[i].answer == yes_str) {
							$("#"+yesButton_id).css("color", greyColor);
							$("#"+noButton_id).css("color", checkedColor);
							break;
						} else if (selectedQuestions[i].answer == no_str) {
							$("#"+noButton_id).css("color", greyColor);
							$("#"+yesButton_id).css("color", checkedColor);
						}
					}
				}
			});
		}
		
		function updateEnablerInfo () {
			for (var i in enablerNames) {
				document.getElementById(enablerInfoP_id+i).innerHTML =  enablerNames[i] + ": ( " + 
				(allQuestionsAtStart[i] - Object.values(allQuestions)[i].length)  + " / " + allQuestionsAtStart[i] + " )";
			}
		}

		function checkIfMaxQuestionReached (rows) {
			if (rows.length >= maxQuestion) {

				//get keys of enablers
				var allKeys = Object.keys(allQuestions);

				//get the difference of allEnablers and enablers that got answered
				var difference = diff(selectedQuestions.map(a => a.index), allKeys);
				var missingEnablers = [];
				for (j in difference){
					missingEnablers.push(enablerNames[(difference[j]-1)]+"<br>");
				}

				if (missingEnablers.length > 0) {
					setAttentionAlert(attentionAlertTitle, attentionAlertContentOneQuestionOfEveryEnabler + '<br><br>' + missingEnablers.join(" ") );
				} else {
					//console.log(selectedQuestions);
					document.getElementById(confirmButton_id).innerHTML = confirmBtnText;
					document.getElementById(confirmButton_id).style.display = "inline";
					$("#"+confirmButton_id).css("display", "block");
					setConfirmAlert();
					localStorage.setItem(selectedQuestions_str, JSON.stringify(selectedQuestions));
				}
			}
		}
		
}
