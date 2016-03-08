window.addEventListener('load', function() {
	//stran nalozena
	var txtUser = document.getElementById("uporabnisko_ime");
	var gumb = document.getElementById("prijavniGumb");
	var pokrivalo = document.getElementsByClassName("pokrivalo")[0];
	gumb.onclick = function(){
		var p = document.getElementById("uporabnik");
		console.log(txtUser.value);
		p.innerHTML = txtUser.value;
		pokrivalo.style.display = "none";
	};
		
	//Posodobi opomnike
	var posodobiOpomnike = function() {
		var opomniki = document.querySelectorAll(".opomnik");
		
		for (var i = 0; i < opomniki.length; i++) {
			var opomnik = opomniki[i];
			var casovnik = opomnik.querySelector("span");
			var cas = parseInt(casovnik.innerHTML);
	
			//TODO: 
			// - če je čas enak 0, izpiši opozorilo "Opomnik!\n\nZadolžitev NAZIV_OPOMNIK je potekla!"
			// - sicer zmanjšaj čas za 1 in nastavi novo vrednost v časovniku
		}
	}
	setInterval(posodobiOpomnike, 1000);
	
});