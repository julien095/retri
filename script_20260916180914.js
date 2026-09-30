function aleDezyem(){
    if(siyati.value ==""|| non.value =="" || imel.value =="" ){
        mesaj.textContent = "Ranpli tout chan yo"
    } else{
        mesaj.textContent ="";
        premye.style.display = "none"
        dezyem.style.display = "block"
    }
}

function aletwazyem(){
    if(itilizate.value =="" || modpas.value =="" || konfimasyon.value == "" ){
        mesaj.textContent = "ranpli tout chan yo"
    } else if (modpas.value != konfimasyon.value){
        mesaj.textContent = "modpas yo dwe men m tanpri"
    } else{
        mesaj.textContent = "";
        dezyem.style.display = "none"
        twazyem.style.display = "block"
    }
}

function tounenPremye(){
    mesaj.textContent = "";
    premye.style.display = "block"
    dezyem.style.display = "none"
}

function tounenDezyem(){
    mesaj.textContent = "";
    deyem.style.display = "block"
    twazyem.style.display = "none"
}

function enskri(){
    if(telefon.value =="" || vil.value =="" || peyi.value =="" ){
        mesaj.textContent = "Ranpli tout chan yo"
    } else{
        mesaj.textContent = "";
        reyisi.textContent ="Enskripsyon fet avek sikse"
    }
}