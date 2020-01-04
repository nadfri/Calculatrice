window.onload = function() {

//--------Déclaration varaibles
    const idAdd = document.getElementById("addition");
    const idSous = document.getElementById("soustraction");
    const idMulti = document.getElementById("multiplication");
    const idDivis = document.getElementById("division");
    const idResultat = document.getElementById("resultat");
    const idSpan1 = document.getElementById("span1");
    const idSpan2 = document.getElementById("span2");

    let idNombre1 = document.getElementById("nombre1");
    let idNombre2 = document.getElementById("nombre2");

//--Verification input
    let verif = (a, b) => {
        if (a == "" || b == "") return false;
        else 
        	return true;
    };

//----Operateurs------------------
    let addition = (a, b) => {

        if ( verif(a, b) ) 
        {
            let resultat = parseInt(a) + parseInt(b);
            idResultat.innerHTML += `<p>${a} + ${b} = ${resultat} <p>`;
        }
    };

    let soustraction = (a, b) => {

        if (verif(a, b))
        {
            let resultat = parseInt(a) - parseInt(b);
            idResultat.innerHTML += `<p>${a} - ${b} = ${resultat} <p>`;
    	}
    };

    let multiplication = (a, b) => {

        if (verif(a, b))
        {
            let resultat = parseInt(a) * parseInt(b);
            idResultat.innerHTML += `<p>${a} x ${b} = ${resultat} <p>`;
        }
    };


    let division = (a, b) => {

        if (verif(a, b))
        {
        	let resultat = parseInt(a) / parseInt(b);
        	idResultat.innerHTML += `<p>${a} / ${b} = ${resultat} <p>`; 
        }
    };
    
//-------------Event onclick--------------
    idAdd.onclick = () => {
        addition(idNombre1.value, idNombre2.value);
    };

    idSous.onclick = () => {
        soustraction(idNombre1.value, idNombre2.value);
    };

    idMulti.onclick = () => {
        multiplication(idNombre1.value, idNombre2.value);
    };

    idDivis.onclick = () => {
        division(idNombre1.value, idNombre2.value);
    };


//----Verifcation en direct de la saisie Nombre
	const verifEnLive = (nombre,span) =>
		{
			let regex = /\d/;
	        if (!regex.test(nombre.value))
	        {
	        	span.style.display = "inline";
	        	span.style.color = "red";
	    		span.innerHTML   = "❌ <i>Entrez un nombre valide</i>";
	    	}
	        else
	        {    
	    		span.style.display = "inline";
	    		span.style.color = "green";
	    		span.innerHTML   = " ✔️";
	    	}
		};

	idNombre1.onkeyup = () => {verifEnLive(idNombre1, idSpan1); };
    idNombre2.onkeyup = () => {verifEnLive(idNombre2, idSpan2); };

//-----Focus sur l'element survolé

	idNombre1.onmouseover = () => {idNombre1.focus();};
	idNombre2.onmouseover = () => {idNombre2.focus();};


	



}