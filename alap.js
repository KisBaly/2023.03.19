const dobasok = [];
var dobott;
const dobasok = new Array();
dobasokszama = 0;

function veletlenszam(mettol,meddig){
    return Math.floor(Math.random()*(meddig-mettol+1)+mettol)
}

function megjelenit() {
  const div = document.getElementById("kockak");
  div.style.backgroundImage = "url(fejlec.png)";
  div.innerHTML = "";
  let h1 = document.createElement("h1");
  let br = document.createElement("br");
  h1.style.textAlign="center";
  div.appendChild(h1);
  div.appendChild(br);
  h1.innerHTML = "Dobások:";
  for (const i in dobasok) {
    let img = document.createElement("img");
    img.src = dobasok[i].ertek + ".png";
    img.dataset.index = i;
    img.style.paddingLeft="25px";
    img.style.paddingRight="25px";
    img.setAttribute("onclick", "kattintas(this)");
    img.style.width = "80px";
    img.style.height = "80px";
    div.appendChild(img);
    dobasok[i].img = img;
  }
}
function kattintas(kocka) {
  clearInterval(dobasok[kocka.dataset.index].idozites);
}

function dobas() {
  for (let i = 0; i < 5; i++) {
    const kocka = {
      ertek: 0,
      dobhate: true
    };
    dobasok.push(kocka);
  }
  megjelenit();
}
function porget() {
  dobasok.forEach((kocka) => {
    kocka.idozites = setInterval(porog, 25, kocka);
    kocka.ertek = veletlenszamgenereal(1, 6);
  });
  megjelenit();
}
function porog(kocka) {
  kocka.ertek = veletlenszamgenereal(1, 6);
  kocka.img.src = kocka.ertek + ".png";
}
porget();
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
