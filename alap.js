
const dobasok = new Array();
dobasokszama = 0;

function veletlenszam(mettol,meddig){
    return Math.floor(Math.random()*(meddig-mettol+1)+mettol)
}

function megjelenit(){
    const div = document.getElementById("kockak");
    for (const i in dobasok) {
        let kep = document.createElement("img");
        kep.src = dobasok[i].ertek+".png";
        kep.dataset.index=i;
        kep.setAttribute("onclick","kattintas(this)");
        div.appendChild(kep);
        dobasok[i].kep =kep;
    }
    console.log(dobasok);
}

function dobas(){
    for (let i= 0; i < 5; i++) {
        const kocka = {
            ertek: 0,
            dobhate: true

        }
        dobasok.push(kocka);       
    }
    megjelenit();
    // for (let index = 0; index < dobasok.length; index++) {
    //     console.log(dobasok[index]);
    // }

    // for (const key in dobasok) {//key alapján (index)
    //     console.log(key,dobasok[key]);
    // }

    // for (const elem of dobasok) {
    //     console.log(elem);
    // }
}
dobas();

function porog(kocka){
    kocka.kep.src = kocka.ertek+".png";
    kocka.ertek = veletlenszam(1,6);
}

function kattintas(kocka){
    if(vanePorog()){
        clearInterval(dobasok[kocka.dataset.index].idozites);
        dobasok[kocka.dataset.index].idozites=undefined;
    }
    else if (dobasok[kocka.dataset.index].ertek != 0){
        if(dobasok[kocka.dataset.index].dobhate)
        {
            dobasok[kocka.dataset.index].dobhate = false;
            dobasok[kocka.dataset.index].kep.style.border = "3px solid red";
        }
        else
        {
        
            dobasok[kocka.dataset.index].dobhate = true;
            dobasok[kocka.dataset.index].kep.style.border = "0px solid red";
        }
    }
    
    console.log(kocka);
}

function porget (){
    if(dobasokszama < 3 && vanePorog() == false){
    dobasok.forEach(kocka => {
        if(kocka.dobhate ){
        kocka.idozites= setInterval(porog, 50,kocka);
        }
    });
    dobasokszama++;
}

}

function vanePorog(){
    let i = 0;
    while(i < dobasok.length && dobasok[i].idozites == undefined){
        i++;
    }
    return (i<dobasok.length);
}
function Pontok(kocka)
{
  var hely = document.getElementById("eredmeny");
  var szam = document.createElement("p");
  var eredmeny = 0;
  for(let i = 0; i < dobasok.length;i++)
  {
    eredmeny += kocka;
  }
  hely.innerHTML= "Eredmény:"+eredmeny;
  hely.appendChild(szam);
}
console.log(dobasok);
Pontok();
