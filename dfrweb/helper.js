//
//
//__________________________________________________________________________________________________________________________
// 
// for start.html
//


 if (window.location.href.match('start.html') != null) {
	window.onload = function () {
	document.getElementById("h1_welcome_id").innerHTML = welcome_str;
	document.getElementById("p_description_id").innerHTML = p_description_str;
	document.getElementById("p_description_2_id").innerHTML = p_description_2_str;
	document.getElementById("a_button_id").innerHTML = a_button_str;   
		
	}	
  }


//
//
//__________________________________________________________________________________________________________________________
// 
// for main.js
//

function setupEnablerInfo(enablerNames, allQuestions, innerHtml) {
	for (var i in enablerNames) {
		innerHtml +='<p id="enablerInfoP' + i + '" class="card badge-type" style = "clear: both;font-size:1em; color:#fff;z-index: 99 !important; width:auto; height:auto; padding: 5px; margin-bottom: 3px; background-color:' + colors[i] +' !important;font-weight: bold;">' + enablerNames[i] + ": ( 0 / " + Object.values(allQuestions)[i].length + ' )</p>';
	}			
	$("#"+enablerInfo_id).append(innerHtml);
}

function setupInfoTextandBtn () {
	$("#"+infoText_id).html(infoText_str);
	$("#"+generalInfoButton_id).html(information_str);
	$('#'+generalInfoButton_id).on('click', function(e){
		$("#"+infoText_id).toggle();
		$("#"+infoText_id).toggleClass('inline');
		$("#"+enablerInfo_id).toggle();
		$("#"+enablerInfo_id).toggleClass('block');
	});
}

function changeAnswerAndColorsOfBtn(selectedQuestions, answer) {
	var currentText = document.getElementById(cardText_id).innerHTML;
	currentText = currentText.replace(/&nbsp;/g, " ");
	var currentColor = document.getElementById(questionTitle_id).style.color;

	for (var i in selectedQuestions) {
		if (selectedQuestions[i].question == currentText) {
			selectedQuestions[i].answer = answer;
			if (selectedQuestions[i].answer == answer) {
				if (answer==yes_str) {
					$("#"+yesButton_id).css("color", greyColor);
					$("#"+noButton_id).css("color", currentColor);
				} else {
					$("#"+yesButton_id).css("color", currentColor);
					$("#"+noButton_id).css("color", greyColor);
				}
			}
		}
	}
}

function appendChip (currentChip) {
	var tr = document.createElement("tr");
	var td = document.createElement("td");
						
	var divChip = document.createElement("div");
	var spanQuetionChipCircle = document.createElement("span");
	var spanQuetionChipNum = document.createElement("span");
						
	var spanChipEditBtn = document.createElement("span");
	var spanChipDeleteBtn = document.createElement("span");
				
	setAttributes(currentChip, tr, divChip, spanQuetionChipCircle, spanQuetionChipNum, spanChipEditBtn, spanChipDeleteBtn);
	appendChildren(tr, td, divChip, spanQuetionChipCircle, spanQuetionChipNum, spanChipEditBtn, spanChipDeleteBtn);
}
			
function setAttributes(currentChip, tr, divChip, spanQuetionChipCircle, spanQuetionChipNum, spanChipEditBtn, spanChipDeleteBtn){
	tr.setAttribute("id", tr_id + currentChip);
	
	divChip.className = "chip";
					
	spanQuetionChipCircle.className = "dot";
	spanQuetionChipCircle.setAttribute("id", quetionChipCircle_id + currentChip);
	spanQuetionChipCircle.style = questionChipCircle_style;
					
	spanQuetionChipNum.innerHTML = currentChip;
	spanQuetionChipNum.setAttribute("class", quetionChipNum_class);
	spanQuetionChipNum.style = questionChipNum_style;
					
	spanChipEditBtn.className = "glyphicon glyphicon-pencil";
	spanChipEditBtn.setAttribute("id", chipEditButton_id + currentChip);
	spanChipEditBtn.style = chipEditBtn_style;
				
	spanChipDeleteBtn.className = "glyphicon glyphicon-trash";
	spanChipDeleteBtn.setAttribute("id", chipDeleteButton_id + currentChip);
}
			
function appendChildren (tr, td, divChip, spanQuetionChipCircle, spanQuetionChipNum, spanChipEditBtn, spanChipDeleteBtn) {
	tr.appendChild(td);
	td.appendChild(divChip); 
	divChip.appendChild(spanQuetionChipCircle); 
	spanQuetionChipCircle.appendChild(spanQuetionChipNum); 
	divChip.appendChild(spanChipEditBtn); 
	divChip.appendChild(spanChipDeleteBtn); 
					
	$("tbody").append(tr);
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

function setConfirmAlert () {
	$.confirm({
		title: confirmAlertTitle,
		content: confirmAlertContent,
		theme: 'modern',
		type: 'blue',
		columnClass: 'col-md-12',
		boxWidth: '50%',
		buttons: {
			confirm: function () {
				window.location.href = confirmAlertHref;
			},
			cancel: {
				text: confirmAlertCancelButtonText,
				btnClass: 'btn-blue',
				keys: ['enter', 'shift'],
			}
		}
	});	
}

function setAttentionAlert(attentionAlertTitle, attentionAlertContent) {
	$.alert({
		title: attentionAlertTitle,
		content: attentionAlertContent,
		theme: 'modern',
		type: 'red',
		columnClass: 'col-md-12',
		boxWidth: '50%',
	});
}
			
function updateProgressBar (progessCounter, checkedColor) {
	document.getElementById(progressBar_id).style = "width:"+ (progessCounter/maxQuestion*100) +"%";
	document.getElementById(progressBar_id).style.backgroundColor = checkedColor;
}
			
function updateQuestionChipNumbers (rows) {
	for (var i = 0; i < rows.length; i++) {
		var index = quetionChipNum_class;
		document.getElementsByClassName(index)[i].textContent = (i+1);		
	}
}
			
function setColorsAccents (color, text) {
	document.getElementById(questionTitle_id).innerHTML = text;
	document.getElementById(questionTitle_id).style.color = color;
	document.getElementById(questionCard_id).style.borderColor = color;
	document.getElementById(questionCard_id).style.borderWidth = questionCardBorderWidth;
	document.getElementById(progressBar_id).style.backgroundColor = color;
	document.getElementById(yesButton_id).style.color = color;
	document.getElementById(noButton_id).style.color = color;
	document.getElementById(questionBlock_id).style.display = "inline";
				
	$("#"+yesButton_id).prop(disabled, false);
	$("#"+noButton_id).prop(disabled, false);
	setupRemoveBtn(); 
}
			
function updateColorAccents (checkedText, checkedTextTitle, checkedColor) {
	document.getElementById(cardText_id).innerHTML = checkedText;
	document.getElementById(questionTitle_id).innerHTML = checkedTextTitle;
	document.getElementById(questionTitle_id).style.color = checkedColor;
	document.getElementById(questionCard_id).style.borderColor = checkedColor;
	document.getElementById(progressBar_id).style.backgroundColor = checkedColor;
	document.getElementById(questionBlock_id).style.display = "inline";
	setupRemoveBtn();
}

function setupRemoveBtn () {
	$("#"+questionTitle_id).append(initialRemoveBtn);
	$("#"+removeButton_id).click(function(){
		document.getElementById(questionBlock_id).style.display = "none";
	});
}

function deleteDuplicates (originalArray) {
	var newArray = [];
	$.each(originalArray, function(i, el){
		if($.inArray(el, newArray) === -1) newArray.push(el);
	});
	return newArray;
}
		
function diff (a1, a2) {
	var a = [], diff = [];
	for (var i = 0; i < a1.length; i++) {
		a[a1[i]] = true;
	}
	for (var i = 0; i < a2.length; i++) {
		if (a[a2[i]]) {
			delete a[a2[i]];
		} else {
			a[a2[i]] = true;
		}
	}
	for (var k in a) {
		diff.push(k);
	}
	return diff;
}



//
//
//__________________________________________________________________________________________________________________________
// 
// for evaluation.js
//



function hexToRgb(hex) {
	// Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
	var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
	hex = hex.replace(shorthandRegex, function(m, r, g, b) {
		return r + r + g + g + b + b;
	});
	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result ? "rgb(" + parseInt(result[1], 16) + "," + parseInt(result[2], 16) + "," + parseInt(result[3], 16) + ", 0.8)" : null;
}

function setupMatDescriptions (matDescriptions, matDescriptionInnerHtml) {
	for (var i in matDescriptions) {
		matDescriptionInnerHtml += "<p class='text-primary matDescription'>" + countOutSymbol_str.concat(matDescriptions[i].replace(/\//g, "<br/> " + countOutSymbol_str + " ")) + "</p>";
		i++;	
		$("#level-" + i + "-content").append(matDescriptionInnerHtml);
		$("#level-" + i + "-tab").html(level_str + i);
		matDescriptionInnerHtml="";
	}
}

function setupCabDescriptions(capLevels, capDescriptions, capDescriptionInnerHtml) {
	capDescriptionInnerHtml = '<tbody id=' + tbodyEvaluation_id + '>';
	capDescriptionInnerHtml += "<tr><th scope='row'>" + level_str + "</th><th scope='row'>" + capability_level_description_str + "</th></tr>";
	for (var i in capLevels) {
		capDescriptionInnerHtml += '<tr><td>' + capLevels[i] + '<br/>(' + capLevel_label[i] + ')</td><td>' + capDescriptions[i].replace(".", ".<br/>").replace(" and not ", " and not<br/>") + '</td></tr>';

	}
	capDescriptionInnerHtml += '</tbody>';
	$("#"+capDescriptionTable_id).append(capDescriptionInnerHtml);
}

function changeTab (reached_maturity_level) {
	$("#level-" + reached_maturity_level + "-tab").append(checkMarker);
	document.getElementById("li" + reached_maturity_level).className += " active";
	document.getElementById("level-" + reached_maturity_level + "-content").className += " active";
}

function setupCollapseBtn(answers) {
	$("#"+collapseBtn_id).on('click', function(e){
		$('.collapse').collapse();
		$("html,body").animate({scrollTop: $("#"+questionRow_id).offset().top}, 300);
	});
	
	$("#"+collapseBtn_id).html(collapseBtn_innerHtml_str);
	var innerHtml = "<tbody class='collapseStyle'><tr><th></th><th scope='row'>" + enabler_str + "</th><th scope='row'>" + question_str + "</th><th scope='row'>" + answer_str + "</th></tr>";
	
	for (var i in answers) {
		var noAnswerColor = initNoAnswerColor;
		
		if (answers[i].answer != no_str) { 
			noAnswerColor ="";
		}
		
		innerHtml += '<tr style="background:' + noAnswerColor + '"><td style="background:' + colors[(answers[i].index-1)] + '"></td><td>' + answers[i].enabler + '</td><td>' + answers[i].question + '</td><td>' + answers[i].answer + '</td></tr>';
	}
	
	innerHtml += "</tbody>";
	$("#t1").append(innerHtml);
}
	
