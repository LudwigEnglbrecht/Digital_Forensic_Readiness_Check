//__________________________________________________________________________________________________________________________
// 
// for evaluation.js
//

var welcome_str = "Welcome!";
var p_description_str = "This is the Digital Forensics Readiness Tool(DFRT)";
var p_description_2_str = "In the following you will answer Questions, so we can figure out for you how save your company is.";
var a_button_str = "Let's start";


//
//
//__________________________________________________________________________________________________________________________
// 
// for main.js and helper.js
//

//set the colors for the wheel segments and other accents
var colors = ["#0e4882","#4f79bc","#ff8c00","#b5b5b5","#ffc21c","#64a4db","#6faf56"];
var initialRemoveBtn = '<span id="removeButton" class="glyphicon glyphicon-remove glyphicon-style-remove float-right" ></span>';
var greyColor = "#888888";
			
var maxQuestion = 21;

var loading_id = 'loading';
var pieSlice_id = "PieSlice";

var yesButton_id = "yesButton";
var noButton_id = "noButton";
var confirmButton_id = "confirmBtn";
var removeButton_id = "removeButton";
var chipEditButton_id = "chipEditBtn";
var chipDeleteButton_id = "chipDeleteBtn";
var generalInfoButton_id = "generalInfoBtn";

var infoText_id = "infoText";
var enablerInfo_id = "enablerInfo";
var infoText_str = "The more uniformly the enablers are answered, the more accurate the evaluation.";

var questionTitle_id = "questionTitle";
var questionBlock_id = "questionBlock";
var cardText_id = "cardText";
var questionCard_id = "questionCard";
var questionCardBorderWidth = "1.5px";
var progressBar_id = "progressBar";

var tbodyWheel_id = "tbodyWheel";
var quetionChipNum_class = "quetionChipNum";
var quetionChipCircle_id = "quetionChipCircle";
var enablerInfoP_id = "enablerInfoP";
var questionChipCircle_style = "float: left; margin: 0 10px 0 -25px; height: 50px; width: 50px; border-radius: 50%;";
var questionChipNum_style = "margin: 20px 20px 20px 20px; color:white";
var chipEditBtn_style = "margin: 0 10px 0 10px";

var tr_id = "trId";

var yes_str = "yes";
var no_str = "no";

var disabled = "disabled";

var attentionAlertTitle = 'Attention!';
var attentionAlertContentAnsweredAllQuestions = "You answered all questions of this Enabler!";
var attentionAlertContentMaxAmount = "Stop, you can't answer more than the maximum amount of Questions!";
var attentionAlertContentOneQuestionOfEveryEnabler = "Please answer one question of every enabler! Missing: ";

var confirmBtnText = "Confirm to Evaluation";

var confirmAlertTitle = 'Are you finished?!';
var confirmAlertContent = 'You answered the maximum amount of questions for the evaluation!';
var confirmAlertCancelButtonText = 'Edit Questions';
var confirmAlertHref = "evaluation.html";

var selectedQuestions_str = "selectedQuestions";

//
//
//__________________________________________________________________________________________________________________________
// 
// for evaluation.js
//

var checkMarker = '<span id=' + checkBtn_id + ' class="glyphicon glyphicon-ok float-right" ></span>';
var capLevel_label = ["completely<br/>defined","managed","performed","incomplete"];

var initNoAnswerColor = "#FBC0C1";

var infoBtn_id = 'infoBtn';
var checkBtn_id = 'checkBtn';
var infoTable_id = "infoTable";
var tbodyEvaluation_id = "tbodyEvaluation";
var h3_maturity_level_id = "h3_maturity_level";
var h2_capability_level_id = "h2_capability_level";
var h3_show_maturity_level_id = "h3_show_maturity_level";
var levelRow_id = "levelRow";
var chartRow_id = "chartRow";
var questionRow_id = "questionRow";
var chart_area_id = "chart-area";
var span_maturity_level_id = "span_maturity_level";
var capDescriptionTable_id = "capDescriptionTable";
var collapseBtn_id = "collapseBtn";

var collapseBtn_innerHtml_str = "Click to see your Answers!";
var enabler_str = "Enabler";
var question_str = "Question";
var answer_str = "Answer";
var information_str = "Information";
var countOutSymbol_str = " - ";
var level_str = "Level ";
var your_level_str = "Your</br>Level";
var capability_level_description_str = "Description";
var maturity_level_str = "Maturity Levels";
var capability_level_str = "Capability Level of Enablers";

var verpflichtend_str = "verpflichtend";

var alert_str = "You reached Maturity Level ";
