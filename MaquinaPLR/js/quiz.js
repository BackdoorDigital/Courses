const questionTitle = document.querySelector(".question-title");
const questionText  = document.querySelector(".question-text");

let countQuestion = 0;

function changeQuestion() {
	countQuestion++;

	if (countQuestion === 1){
		questionTitle.innerText = "Pergunta 2:";
		questionText.innerHTML  = 
			"Você gostaria de aprender um <b>método secreto</b> que permitisse que você criasse <b>seu primeiro Jogo em apenas 14 dias</b>?";
	}
	else if (countQuestion === 2){
		questionTitle.innerText = "Pergunta 3:";
		questionText.innerHTML  = 
			" No vídeo a seguir, <b>eu vou te revelar esse método secreto</b>, mas só irei compartilhar com algumas pessoas... <b>Você pretende assistir até o fim?</b>";
	}
	else {
		const utmParamQueryString = new URLSearchParams(window.location.search);			
		//var target = "https://www.instagram.com/";
		var target = "main.html";
		
		if (utmParamQueryString.toString()) {
			if (target.indexOf('?') === -1) {
				 target += '?' + utmParamQueryString.toString();
			} 
			else {
				 target += '&' + utmParamQueryString.toString();
			}
		}
		window.location.href = target;
	}
}