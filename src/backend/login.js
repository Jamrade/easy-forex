const AUTHURL = "https://ciapi.cityindex.com/v2/Session"

let sessionId = null
let username = null

const goToSignUp = () => {
    window.location.href = 'https:/www.forex.com/en-us/premium-trader-tools/api-trading/'
}

function sendCredentials() {

    username = document.getElementById("usernameInput").value;
    document.cookie = `username=${username}; path:/`

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

    sendRequest(AUTHURL, "POST", getAccountId, headers, body)
}

function getAccountId(data) {

    sessionId = data.session
    
    document.cookie = `session=${sessionId}; path=/`;

    window.location.href = "../pages/homepage.html"
}