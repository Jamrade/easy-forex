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

    const username = document.getElementById("usernameInput").value;

    if(username == "") {
        throw Error("No Username Given")
    }

    const password = document.getElementById("passwordInput").value;

    if(password == "") {
        throw Error("No Password Given")
    }

    const appKey = document.getElementById("apiKeyInput").value;

    if(appKey == "") {
        throw Error("No AppKey Given")
    }

    const body = {
        UserName: username,
        AppVersion: "1",
        AppComments: "",
        Password: password,
        AppKey: appKey
    }

    const headers = {
        "content-type": "application/json"
    }

    sendRequest(AUTHURL, "POST", headers, body, getAccountId)
}

function getAccountId(data) {
    console.log("Resolved")
    console.log(data)
    
}