const translateInput = document.getElementById("word");
const language = document.getElementById("language");

const translate = new Translate(translateInput.value, language.value);
const ui = new UI();

//Prototype, Ajax, Callback
eventListeners();

function eventListeners(){
    document.getElementById("translate-form").addEventListener("submit",translateWord);

    //Dilleri seçtiğimiz select list'teki seçimleri dinliyoruz
    document.getElementById("language").onchange = function(){
        //Arayüz işlemleri
        ui.changeUI();
    }
}

function translateWord(event){

    event.preventDefault();

    translate.changeParameters(translateInput.value, language.value);
    translate.translateWord(function(err, response){
        if(err === null){
            ui.displayTranslate(response);
        }else{
            console.log(new Error(err));
        }
    });
    
}
