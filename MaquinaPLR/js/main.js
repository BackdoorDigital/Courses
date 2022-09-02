var latediv = document.getElementsByClassName("latediv")[0];

latediv.style.display = "none";

function timeOut() {
	setTimeout(function () {
		latediv.style.display = "inline";
	}, /* in ms = */ 240000);
}

timeOut();

// Button click:
document.getElementById("buttonCTA").onclick = function () {
	const utmParamQueryString = new URLSearchParams(window.location.search);	
	
	location.href = "https://pay.kiwify.com.br/QxpJvsl" + "?" + utmParamQueryString.toString();
};