
setInterval(function(){
	//Reescribe la popup de reactions
	var el = document.querySelectorAll('div._4sm1')
	for(e in el){if (el[e].innerText === "Angry") el[e].innerText = "Vamo a Calmarno"; }
	//Reescribe las reactions ya hechas
	var el = document.querySelectorAll('.uiContextualLayerParent._khz span')
	for(e in el){if (el[e].innerText === "Angry") el[e].innerText = "Vamo a Calmarno"; }

},200);


