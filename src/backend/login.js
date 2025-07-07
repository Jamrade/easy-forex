const AUTHURL = "https://ciapi.cityindex.com/v2/Session"
const ACCOUNTURL = "https://ciapi.cityindex.com/v2/userAccount/ClientAndTradingAccount"


const goToSignUp = () => {
    window.location.href = 'https:/www.forex.com/en-us/premium-trader-tools/api-trading/'
}

function login() {
    new Promise(() => {
        return credentials()
    })
    .then(data => {
        let requestBody = {
            Password: data.password,
            AppVersion: "1",
            AppComments: "",
            UserName: data.UserName,
            AppKey: data.appKey
        }
        return submitPostRequest(AUTHURL,)
    })
    .catch(error => {
        console.log(error)
    })
}

function makeErrorBox(text) {

    const errorBox = document.createElement("p");

    errorBox.innerHTML = text



}

function sendCredentials() {

    const username = document.getElementById("usernameInput").innerText;

    if(username == null) {
        throw Error("No Username given")
    }

    const password = document.getElementById("passwordInput").innerText;

}