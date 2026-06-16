const coverterBtn = document.querySelector(".btn");

const moedaSelecionada = document.querySelector(".selecionar");

function convert() {
  const input = document.querySelector(".convertendo").value;

  const moedaSelecionada = document.querySelector(".selecionar");
  const dolarToday = 5.09;
  const euroValor = 5.91;
  const libraValor = 6.83;
  const bitcoin = 334344;

  const convertido = input / dolarToday;

  const moedaConevrter = document.querySelector(".valor-moeda-real");
  const moedaEstrangira = document.querySelector(".valor-Dolar");
 
  if (moedaSelecionada.value == "dolar") {
    moedaEstrangira.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(input / dolarToday);
  }

  if (moedaSelecionada.value == "euro") {
   moedaEstrangira.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(input / euroValor);
  }

  if (moedaSelecionada.value == "bitcoin") {
   moedaEstrangira.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BTC",
    
      maximumFractionDigits: 8,
    }).format(input / bitcoin);
  }

  if (moedaSelecionada.value == "libra") {
    moedaEstrangira.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(input / libraValor);
  }

  moedaConevrter.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(input);
}

function troca() {
    const moedaName = document.getElementById("doleta");
    const moedaImg = document.querySelector(".moeda-imagem");

    if (moedaSelecionada.value === "dolar") {
        moedaName.innerHTML = "Dólar Americano";
        moedaImg.src = "./assets/usa.png";
    } 
    if (moedaSelecionada.value === "euro") {
        moedaName.innerHTML = "Euro";
        moedaImg.src = "./assets/euro.png";
    }

    if(moedaSelecionada.value === "libra"){

        moedaName.innerHTML = "Libra";
        moedaImg.src = "./assets/libra.png"

    }

    if(moedaSelecionada.value === "bitcoin"){

        moedaName.innerHTML = "Bitcoin"
        moedaImg.src = "./assets/bitcoin.png"

    }

    convert();
}

moedaSelecionada.addEventListener("change", troca)
coverterBtn.addEventListener("click", convert);
