const CREDENTIALSPATH = "../auth/Auth.json"

const credentials = () => {
    fetch(CREDENTIALSPATH)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.log(error);
    })
}