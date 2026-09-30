function aleDezyem() {
    if (siyati.value === "" || non.value === "" || imel.value === "") {
        mesaj.textContent = "Ranpli tout chan yo";
    } else {
        mesaj.textContent = "";
        premye.style.display = "none";
        dezyem.style.display = "block";
    }
}

function aleTwayem() {
    if (itilizate.value === "" || modpas.value === "" || konfimasyon.value === "") {
        mesaj.textContent = "Ranpli tout chan yo";
    } else if (modpas.value !== konfimasyon.value) {
        mesaj.textContent = "Modpas yo dwe menm, tanpri";
    } else {
        mesaj.textContent = "";
        dezyem.style.display = "none";
        twazyem.style.display = "block";
    }
}

function tounenPremye() {
    mesaj.textContent = "";
    premye.style.display = "block";
    dezyem.style.display = "none";
}

function tounenDezyem() {
    mesaj.textContent = "";
    dezyem.style.display = "block";
    twazyem.style.display = "none";
}

function enskri() {
    if (telefon.value === "" || vil.value === "" || peyi.value === "") {
        mesaj.textContent = "Ranpli tout chan yo";
    } else {
        mesaj.textContent = "";
        reyisi.textContent = "Enskripsyon fet avek sikse";

        setTimeout(function() {
            fomEnskripsyon.submit();
        }, 3000);
    }
}