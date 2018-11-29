var API_URL = "./api.php";

function getAllCapabilitylevel() {
	
	var result = [];
	var fn = function( msg ) {
		msg.forEach((elem)=>{
			result.push({
				level: elem["level"],
				beschreibung: elem["beschreibung"]
			});
		});
	}
	callApi("faehigkeitslevel", fn);
	return result;
}

function getAllMaturityLevel() {
	
	var result = [];
	var fn = function( msg ) {
		msg.forEach((elem)=>{
			result.push({
				grad: elem["grad"],
				beschreibung: elem["beschreibung"]
			});
		});
	}
	callApi("reifegrad", fn);
	return result;
}

function getQuestions() {
	
	var arrayOfQuestions = [];
	var result = {}
	var fn = function( msg ) {
		msg.forEach((elem)=>{
			arrayOfQuestions.push(elem);
		});
		arrayOfQuestions.forEach((elem)=>{
			var key = elem["enabler_id"];
			(result[key] =  result[key] || []).push(elem["frage"]);
		});
	}
	callApi("indikator", fn);
	return result;
}

function getIndikatorData() {
	
	var arrayOfIndikators = [];
	var result = [];
	var fn = function( msg ) {
		msg.forEach((elem)=>{
			arrayOfIndikators.push(elem);
		});
		arrayOfIndikators.forEach((elem)=>{
			var key = elem["enabler_id"];
			(result[key] =  result[key] || []).push({
				typ: elem["typ"],
				max_konstributionslevel: elem["max. konstributionslevel"],
				frage: elem["frage"]
			});
		});	
	}
	callApi("indikator", fn);
	return result;
}

function getEnablerNames(){
	
	var arrayOfEnablers = [];
	var fn = function( msg ) {
		msg.forEach((elem)=>{
			//console.log(elem["name"]);
			arrayOfEnablers.push(elem["name"]);
		})
	}
	callApi("enabler", fn);
	return arrayOfEnablers;
}

function callApi (tableName, callback){
	$.ajax({
		url: API_URL,
		method: "GET",
		dataType: "json",
		data: {
			table : tableName
		}
	})
	.done(callback);
}










