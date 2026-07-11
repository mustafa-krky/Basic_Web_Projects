function UI(){
    this.outputImage = document.getElementById("outputImage");
    this.outputLanguage = document.getElementById("outputLanguage");
    this.outputWord = document.getElementById("outputWord");
    this.languageList = document.getElementById("language");
}

UI.prototype.changeUI = function(){
    this.outputImage.src = `images/${this.languageList.value.split("|")[1]}.png`;

    let targetLanguage = this.languageList.options[this.languageList.selectedIndex].textContent;

    this.outputLanguage.textContent = targetLanguage;
}

UI.prototype.displayTranslate = function(word){
    this.outputWord.textContent = word;
}

