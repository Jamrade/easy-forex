/*

GET Request Builder

POST Request Builder

Query Builder


*/

function sendGetRequest(url, headers, method) {
   fetch(url, {
        method: method,
        headers: headers,
        body: null
    })
   .then(response => {
    if (response.ok) {
        return response.json();
    } else {
        return response.json().then((errorObj) => {console.log(errorObj)});
    }
   })
   .then(data => {
    return data;
   })
   .catch(error => {
    console.log(error);
   })
}

function sendPostRequest(url, headers, body, method) {
    fetch(url, {
        method: method,
        headers: headers,
        body: json.stringify(body)
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            return response.json().then((errorObj) => {console.log(errorObj)});
        }
    })
    .then(data => {
        return data;
    })
    .catch(error => {
        console.log(error);
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