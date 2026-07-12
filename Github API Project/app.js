//Elements
const githubForm = document.querySelector("#github-form");
const nameInput = document.querySelector("#githubname");
const clearLastUsers = document.querySelector("#clear-last-users");
const lastUsers = document.querySelector("#last-users");

//Objects
const github = new Github();
const ui = new UI();

eventListeners();

function eventListeners(){
    githubForm.addEventListener("submit", getDataOfUser);
    clearLastUsers.addEventListener("click", clearAllSearched);
    document.addEventListener("DOMContentLoaded", getAllSearched);
}

function getDataOfUser(event){
    event.preventDefault();

    let userName = nameInput.value.trim();

    if(userName === ""){
        alert("Geçerli bir kullanıcı adı giriniz.")
    }else{
        //Promise yapısı
        github.getGithubData(userName)
        .then(response => {
            if(response.user.message === "Not Found"){
                ui.showError("Kullanıcı bulunamadı!")
            }else{
                ui.showUserInfo(response.user);
                ui.showRepoInfo(response.repo);
                ui.addSearchedUserToUI(userName);
                Storage.addSearchedUserToStorage(userName);
            }
        })
        .catch(err => ui.showError(err));
    }

    ui.clearInput();

}

function clearAllSearched(){
    //Tüm arananları temizle
    if(confirm("Emin misiniz?")){
        Storage.clearAllSearchedUsersFromStorage();
        ui.clearAllSearchedFromUI();
    }
}

function getAllSearched(){
    //Arananları storage'den al ve ui'a ekle
    let users = Storage.getSearchedUsersFromStorage();

    let result = "";
    users.forEach(user => {
        result += `<li class="list-group-item">${user}</li>`;
    });

    lastUsers.innerHTML = result;
}

