window.addEventListener('load', function() {
	//stran nalozena
	var opomniki = document.getElementById("opomniki");
	opomniki.setAttribute("class", "rob senca");
	var txtUser = document.getElementById("uporabnisko_ime");
	var gumb = document.getElementById("prijavniGumb");
	var pokrivalo = document.getElementsByClassName("pokrivalo")[0];
	gumb.onclick = function(){
		var p = document.getElementById("uporabnik");
		console.log(txtUser.value);
		p.innerHTML = txtUser.value;
		pokrivalo.style.display = "none";
	};
	
	var btnDodajOpomnik = document.getElementById("dodajGumb");
	btnDodajOpomnik.onclick = function(){
		var txtNazivOpomnika = document.getElementById("naziv_opomnika");
		var txtTrajanjeOpomnika = document.getElementById("cas_opomnika");
		var naziv = txtNazivOpomnika.value;
		var trajanje = txtTrajanjeOpomnika.value;
		txtNazivOpomnika.value = "";
		txtTrajanjeOpomnika.value = "";
		
		opomniki.innerHTML = opomniki.innerHTML+"<div class='opomnik rob senca'><div class='naziv_opomnika'>"+naziv+"</div><div class='cas_opomnika'> Opomnik čez <span>"+trajanje+"</span> sekund.</div></div>";
		
	};
		
	//Posodobi opomnike
	var posodobiOpomnike = function() {
		var opomniki = document.querySelectorAll(".opomnik");
		
		for (var i = 0; i < opomniki.length; i++) {
			var opomnik = opomniki[i];
			var casovnik = opomnik.querySelector("span");
			var cas = parseInt(casovnik.innerHTML);
			
			if(cas > 0) {
				cas--;
				casovnik.innerHTML = cas;
				if(cas == 0) alert("Opomnik!\n\nZadolžitev "+opomnik.querySelector(".naziv_opomnika").innerHTML+" je potekla!");
			}
			//TODO: 
			// - če je čas enak 0, izpiši opozorilo "Opomnik!\n\nZadolžitev NAZIV_OPOMNIK je potekla!"
			// - sicer zmanjšaj čas za 1 in nastavi novo vrednost v časovniku
		}
	}
	setInterval(posodobiOpomnike, 1000);
	
});