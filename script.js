const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") /*valor em Real*/
    const currencyValueConverted = document.querySelector(".currency-value") /*valor outras moedas*/

    console.log(currencySelect.value)

    const realToday = 1.0
    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 6.9
    const bitcoinToday = 144.119 *1000




    if (currencySelect.value == "dolar") { /*Se estiver selecionado o valor de dolar, entre aqui*/
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)

    }

    if (currencySelect.value == "euro") { /*Se estiver selecionado o valor de euro, entre aqui*/
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)

    }

    if (currencySelect.value == "libra") { 
        currencyValueConverted.innerHTML = new Intl.NumberFormat("uk-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)

    }
  

    if (currencySelect.value == "bitcoin") { 
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "decimal",
            currency: "BRL"
        }).format(inputCurrencyValue / bitcoinToday)

    }

    if (currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / realToday)

    }

   

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(inputCurrencyValue)

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format(inputCurrencyValue)

    
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("uk-UK", {
        style: "currency",
        currency: "GBP"
    }).format(inputCurrencyValue)



    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

    
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/dolar.png"

    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"

    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra 1.png"


    }

    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin 1.png"


    }

    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real"
        currencyImage.src = "./assets/real.png"


    }



    convertValues() 

}

        currencySelect.addEventListener("change", changeCurrency)
        convertButton.addEventListener("click", convertValues)

    





