//Elements
const amountElement = document.querySelector("#amount");
const firstSelect = document.querySelector("#firstCurrency");
const secondSelect = document.querySelector("#secondCurrency");
//Objects
const currency = new Currency("USD","TRY");
const ui = new UI(firstSelect, secondSelect);

eventListeners();

function eventListeners(){
    //Input girildikçe "sonuç" kısmında anlık değişim olacak
    amountElement.addEventListener("input",exchangeCurrency);

    firstSelect.onchange = function(){
        currency.changeFirstCurrency(firstSelect.options[firstSelect.selectedIndex].textContent);
        ui.changeFirst();

        exchangeCurrency();
    }

    secondSelect.onchange = function(){
        currency.changeSecondCurrency(secondSelect.options[secondSelect.selectedIndex].textContent);
        ui.changeSecond();

        exchangeCurrency();
    }
}

function exchangeCurrency(){
    //Inputtan girilen value sürekli Currency sınıfına gönderilerek güncellenir
    currency.changeAmount(amountElement.value);

    //Promise dönüyor
    currency.exchange()
    .then(result => {
        ui.displayResult(result);
        console.log(result);
    })
    .catch(err => {
        console.log(err);
    });
}

