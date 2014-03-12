var weekdays = ["monday", "tuesday", "wednesday", "thursday", "friday"];
days = {

};

for (var i = 0, j = weekdays.length; i < j; i++) {
	days[weekdays[i]] = {
		guys : {
			"time" : timeline
		}
	}
}
//

add = function() {
	var guy = document.querySelector("input#name").value;
	var day = document.querySelector("#day").value;
	var inputs = document.querySelectorAll("fieldset input:not(#day),fieldset select:not(#day)"), input;
	var tmpObj = {};
	if (!days[day].guys[guy]) {
		days[day].guys[guy] = {
			events : []
		}
	};
	var addTo = days[day].guys[guy];
	// add event to guy & weekday
	for (var i = 0, j = inputs.length; i < j; i++) {
		input = inputs[i];
		tmpObj[input.name] = input.value;

	}
	addTo.events.push(tmpObj);
	tmpObj = {};

	console.log(inputs);
	console.log(tmpObj);
	console.log(JSON.stringify(days));
	return tmpObj;
}

function getHTML(data,level){
	html = "";
	for (var i =0;i<level;i++){
	html += "<br>**;"	
	}
	
	for(key in data){
		if(typeof data[key] == "object" || typeof data[key] =="array" )
		{
			html+="<br>"+key+":"+getHTML(data[key],level+1)+"";
		}else{
			html+="<br>&emsp;&emsp;"+key+": "+data[key]+""
		}
		
	}
	html+="";
	return html;
}
function update(){
document.querySelector("#results").innerHTML = getHTML(days,0);
document.querySelector("textarea").innerHTML = "generated = '"+JSON.stringify(days)+"'";	
}
