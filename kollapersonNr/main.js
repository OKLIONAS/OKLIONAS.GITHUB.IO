function kollaStringLength(tpersonnr) {
    let length_ok = false;
    if (tpersonnr.length === 10)
        length_ok = true;
    return length_ok;
}

function pnrToNumber(tpersonnr) {
    const arr_pnr = tpersonnr.split('');
    const newPnrArr = arr_pnr.map((textsiffra) => {
        const num_siffra = parseInt(textsiffra);
        return num_siffra;
    })
    return newPnrArr;
}

function multipliceraPnr(arr_med_pnr_siffro) {
    let str_multiplicerade_siffror = "";
    for (let i = 0; i < 9; i++) {
        if ((i+1)%2 === 0){
            const num_siffra = Number(arr_med_pnr_siffro[i]) * 1;
            str_multiplicerade_siffror += num_siffra;
        }
        else {
            const num_siffra = Number(arr_med_pnr_siffro[i]) * 2;
            str_multiplicerade_siffror += num_siffra;
        }
    }
    return str_multiplicerade_siffror;
}

function addSiffrorAndCheck(multipsiffror_str) {
    const arr_siffror = multipsiffror_str.split('');
    let summa = 0;
    let kontrollsiffra = 0;
    let substractfrom = 0;
    for (i = 0; i < arr_siffror.length; i++) {
        summa += Number(arr_siffror[i]);
    }
    if (summa % 10 !== 0){
        substractfrom = (Math.floor(summa /10))*10;
        substractfrom += 10;
        kontrollsiffra = substractfrom - summa;
    }
    return kontrollsiffra;
}

function getKontrollSiffran(tpersonnumret) {
    let kontrollsiffra = tpersonnumret[tpersonnumret.length-1];
    return kontrollsiffra;
}

function checkButtClick() {
    let textfelt = document.getElementById("prsnr_input").value;
    let psvar = document.getElementById("svar");
    let len_ok = kollaStringLength(textfelt);
    if (len_ok) {
        const arr_pnr_siffror = pnrToNumber(textfelt);
        const multiplicerade_siffror = multipliceraPnr(arr_pnr_siffror);
        const kalkylerad_kontrollsiffra = addSiffrorAndCheck(multiplicerade_siffror);
        const kontrollsiffran = getKontrollSiffran(arr_pnr_siffror);
        let svar = "";
        if (kalkylerad_kontrollsiffra === kontrollsiffran) {
            svar = `Kontroll siffran är ${kalkylerad_kontrollsiffra}, personnumret stämmer!`;
        }
        else {
            svar = `Kontroll siffran stämmer inte, personnumret är ogiltigt!`;
        }
        psvar.innerHTML = svar;
    }
    else {
        alert("Personnumret måste innehålla 10 st siffror!");
    }
}
