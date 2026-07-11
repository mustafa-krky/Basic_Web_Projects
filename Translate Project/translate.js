function Translate(word, language){
    //this.apiKey = "000000xxx";
    this.word = word;
    this.language = language;

    //XHR object
    this.xhr = new XMLHttpRequest();
}

Translate.prototype.translateWord = function(callback){
    //Ajax işlemleri
    const endPoint = `https://api.mymemory.translated.net/get?q=${this.word}&langpair=${this.language}`;

    this.xhr.open("GET", endPoint);
    this.xhr.onload = () => {

        if(this.xhr.status === 200){
            const json = JSON.parse(this.xhr.responseText);
            const translatedWord = json.responseData.translatedText;

            //hata yoksa null
            callback(null,translatedWord);
        }else{
            callback("Bir hata oluştu", null);
        }

    }

    this.xhr.send();
}

Translate.prototype.changeParameters = function(newWord, newLang){
    this.word = newWord;
    this.language = newLang;
}


