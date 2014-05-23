function markdownHumanize() {
	"use strict";
	var contentInput = document.getElementById('content-input'),
		contentDiv = document.getElementById('content'),
		rawContent = contentInput.value,
		humanizedContent = marked(rawContent),
		toneSelect = document.getElementById('tone-select'),
		tone = toneSelect.options[toneSelect.selectedIndex].value;
	 
	contentDiv.innerHTML = "<br><br>" + humanizedContent;
	contentDiv.setAttribute("class", "content " + tone + " view");
	
	// ADD TONE SPECIFIC FONTS
	
	switch (tone) {
  case "jolly":
    var headHTML = document.getElementsByTagName('head')[0].innerHTML;
		headHTML += '<link rel="stylesheet" href="//brick.a.ssl.fastly.net/Comic+Neue:300,300i,400,400i,700,700i">';

		document.getElementsByTagName('head')[0].innerHTML = headHTML;
    break;
  case "classy":
    var headHTML = document.getElementsByTagName('head')[0].innerHTML;
		headHTML += "<link rel='stylesheet' href='//brick.a.ssl.fastly.net/Linux+Libertine:400,400i,700,700i'>";
			
		document.getElementsByTagName('head')[0].innerHTML = headHTML;
    break;
  case "boring":
    var headHTML = document.getElementsByTagName('head')[0].innerHTML;
		headHTML += '<link rel="stylesheet" href="//brick.a.ssl.fastly.net/Roboto:300,300i,700,700i,900,900i">';
		document.getElementsByTagName('head')[0].innerHTML = headHTML;
    break;
  case "everyday":
  case "hipster":
  default:
    console.log("Tone is "+tone);
    break;
}
	
	
	var interfaceElements = document.getElementsByClassName('ui');

	while(interfaceElements[0]) {
    interfaceElements[0].parentNode.removeChild(interfaceElements[0]);
	 };
	
}


