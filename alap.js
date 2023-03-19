const dobasok = [];
var dobott;

function veletlenszamgenereal(mettol, meddig) {
  return Math.floor(Math.random() * (meddig - mettol + 1) + mettol);
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
porget();

function porog(kocka) {
  kocka.ertek = veletlenszamgenereal(1, 6);
  kocka.img.src = kocka.ertek + ".png";
}

function porget() {
  dobasok.forEach((kocka) => {
    kocka.idozites = setInterval(porog, 25, kocka);
    kocka.ertek = veletlenszamgenereal(1, 6);
  });
  megjelenit();
}



dobas();