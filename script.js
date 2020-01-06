window.onload = function() {

//--------Déclaration varaibles
    const idAdd         = document.getElementById("addition");
    const idSous        = document.getElementById("soustraction");
    const idMulti       = document.getElementById("multiplication");
    const idDivis       = document.getElementById("division");
    const idClear       = document.getElementById("clear");
    const idResultat    = document.getElementById("resultat");
    const idSpan1       = document.getElementById("span1");
    const idSpan2       = document.getElementById("span2");
    const idDivInvalide = document.getElementById("invalide");


    let idNombre1 = document.getElementById("nombre1");
    let idNombre2 = document.getElementById("nombre2");

//--Verification input
    let verif = (a, b) => {
        if (a == "" || b == "") 
        {
            idDivInvalide.style.visibility = "visible";
            return false;
        }
        else 
        {   
            idDivInvalide.style.visibility = "hidden";
        	return true;
        }
    };

//----Operateurs------------------
    let addition = (a, b) => {

        if ( verif(a, b) ) 
        {
            let resultat = parseFloat(a) + parseFloat(b);
            idResultat.innerHTML += `<p>${a} <span>➕</span> ${b} = ${resultat} </p>`;
        }
    };

    let soustraction = (a, b) => {

        if (verif(a, b))
        {
            let resultat = parseFloat(a) - parseFloat(b);
            idResultat.innerHTML += `<p>${a} <span>➖</span> ${b} = ${resultat} </p>`;
    	}
    };

    let multiplication = (a, b) => {

        if (verif(a, b))
        {
            let resultat = parseFloat(a) * parseFloat(b);
            idResultat.innerHTML += `<p>${a} <span>✖️</span> ${b} = ${resultat} </p>`;
        }
    };


    let division = (a, b) => {

        if (verif(a, b))
        {
        	let resultat = parseFloat(a) / parseFloat(b);
            if(b=="0") idResultat.innerHTML +=`<p>${a} / ${b} = <i>division par 0 impossible</i> </p>`;

        	else idResultat.innerHTML += `<p>${a} <span>➗</span> ${b} = ${resultat} </p>`; 
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

    idClear.onclick = () => {idResultat.innerHTML="";};





//----Verifcation en direct de la saisie Nombre
	const verifEnLive = (nombre,span) =>
		{
			let regex = /^\d*.?\d+$/;
	        if (!regex.test(nombre.value))
	        {
	    		span.innerHTML   = "❌";
                idDivInvalide.style.visibility = "visible";

	    	}
	        else
	        {    
	    		span.innerHTML   = " ✔️";
                idDivInvalide.style.visibility = "hidden";
	    	}
		};

	idNombre1.onkeyup = () => {verifEnLive(idNombre1, idSpan1); };
    idNombre2.onkeyup = () => {verifEnLive(idNombre2, idSpan2); };

//-----Selection de la valeur sur l'element survolé

	idNombre1.onmouseover = () => {idNombre1.select(); };
	idNombre2.onmouseover = () => {idNombre2.select(); };


	



}