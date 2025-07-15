/*

Request Builder

Query Builder

*/

function sendRequest(url, method, resolve, headers={"content-type": "application/json"}, body=null) {

    if (!(body == null)) {
        body = JSON.stringify(body)
    }

    fetch(url, {
        method: method,
        headers: headers,
        body: body
    })
    .then(response => {
        if (response.ok) {
            return response.json().then((data) => {resolve(data)});
        } else {
            return response.json().then((errorObj) => {showError(errorObj)});
        }
    })
    .catch(error => {
        console.log(error)
    })

}

function buildQueryUrl(baseUrl, credentials, parameters=[]) {

    baseUrl += "?";

    for (parameter in parameters) {
        baseUrl += parameter + "=" + parameters[parameter];
        baseUrl += "&";
    }

    for (credentialIndex in credentials) {
        let credentialArgument = credentialIndex + "=" + credentials[credentialIndex]
        baseUrl += credentialArgument
        baseUrl += "&"
    }

    baseUrl = baseUrl.slice(0, baseUrl.length-1)

    return baseUrl
}

function showError(errorObj) {
    errorElement = document.createElement("p");
    errorElement.innerHTML = errorObj
}
