function readCookies() {
    const cookies = document.cookie.split(";");

    const cookieObject = {};

    for(index in cookies) {
        let cookieKeyValuePair = cookies[index].split("=")
        let cookieKey = cookieKeyValuePair[0];
        let cookieValue = cookieKeyValuePair[1];
        
        cookieKey = cookieKey.trim();
        cookieValue = cookieValue.trim();

        cookieObject[cookieKey] = cookieValue;

        console.log(`The value for ${cookieKey} is ${cookieValue}`);
    }

    return cookieObject;
}