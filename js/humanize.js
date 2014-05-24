function printPDF(htmlPage) {
	var w = window.open("about:blank");
	w.document.write(htmlPage);
	if (navigator.appName === 'Microsoft Internet Explorer') {
		window.print();
	} else {
		w.print();
	}
}

function dismiss (id) {
	document.getElementById(id).style.display = 'none';
}

function markdownHumanize() {
	"use strict";
	
	var contentInput = document.getElementById('content-input'),
		contentDiv = document.getElementById('content'),
		rawContent = contentInput.value,
		humanizedContent = marked(rawContent),
		toneSelect = document.getElementById('tone-select'),
		tone = toneSelect.options[toneSelect.selectedIndex].value;
	
	if (humanizedContent.match("<[^>]*script")) {
		alert('To protect our users, we do not scripts in the markdown; please try again after removing any script tags (or making sure they are in code blocks). If this is an error let us know and we will be happy to help.');
		return;
	}
	

	contentDiv.innerHTML = "<br><br>" + humanizedContent;
	contentDiv.innerHTML += "<br><hr><footer class='attribution'><em>Markdown, Humanized by <a href='http://markdowner.github.io'>Markdowner</a></em></span>";
	var settingsHTML = "<aside class='settings' id='settings'>";
	settingsHTML += "<p>Typesetting tone: <strong>" + tone + "</strong>.</p>";
	settingsHTML += "<button class='submit-button' onClick='javascript:window.print()'>Print</button><br>";
	settingsHTML += "<p><em><strong>ProTip:</strong> Want to keep a permanent copy of your document? Select “Print to File” in the print dialog to generate &amp; save a .PDF.</em></p>";
	settingsHTML += "<a href='#!' onClick=\"dismiss('settings')\">DISMISS</a>";
	settingsHTML += "</aside>";

	contentDiv.setAttribute("class", "content " + tone + " view");
	
	document.body.innerHTML += settingsHTML;
	
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
	case "everyday":
		var headHTML = document.getElementsByTagName('head')[0].innerHTML;
		headHTML += '<link rel="stylesheet" href="//brick.a.ssl.fastly.net/Roboto:300,300i,700,700i,900,900i">';
		document.getElementsByTagName('head')[0].innerHTML = headHTML;
		break;
	case "academic":
		var headHTML = document.getElementsByTagName('head')[0].innerHTML;
		headHTML += '<link rel="stylesheet" href="//brick.a.ssl.fastly.net/Latin+Modern+Roman:400,400i,700,700i">';
		document.getElementsByTagName('head')[0].innerHTML = headHTML;
		break;
	case "hipster":
	default:
		console.log("Tone is " + tone);
		break;
	}

	var interfaceElements = document.getElementsByClassName('ui');

	while (interfaceElements[0]) {
    interfaceElements[0].parentNode.removeChild(interfaceElements[0]);
	}
	
}


