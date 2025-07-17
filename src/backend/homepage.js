const ACCOUNTURL = "https://ciapi.cityindex.com/v2/userAccount/ClientAndTradingAccount"
const MARGINURL = "https://ciapi.cityindex.com/v2/margin/clientAccountMargin"

let cookies = readCookies()

window.addEventListener("DOMContentLoaded", () => {
    getPageInformation()
})

function getPageInformation() {
    console.log(cookies["username"], cookies["session"])

    let url = buildQueryUrl(ACCOUNTURL, {"Username":cookies["username"], "Session":cookies["session"]})

    sendRequest(url, "GET", setAccountId);
}

function setAccountId(data) {

    const welcomeHeader = document.getElementById("welcomeTitle")
    welcomeHeader.innerHTML = `Welcome, ${data["accountHolders"][0]["name"]}`

    document.cookie = `accountId=${data["clientAccounts"][0].clientAccountId}; path=/`;
    document.cookie = `accountCurrency=${data["clientAccounts"][0].clientAccountCurrency}; path=/`
    cookies = readCookies()

    let marginUrl = buildQueryUrl(MARGINURL, {"clientAccountId": cookies["accountId"], "Username":cookies["username"], "Session":cookies["session"]})

    sendRequest(marginUrl, "GET", setMarginInformation)

}

function setMarginInformation(data) {
    let currencyType = cookies["accountCurrency"]

    const totalAccountBalance = document.getElementById("accountBalanceValue");
    const availableAccountBalance = document.getElementById("availableBalanceValue");
    const marginUtilization = document.getElementById("marginUtilValue");
    const utilizedBalance = document.getElementById("utilBalanceValue");
    
    totalAccountBalance.innerHTML = `${data.cash} ${currencyType}`
    availableAccountBalance.innerHTML = `${data.tradableFunds} ${currencyType}`
    marginUtilization.innerHTML = `${data.margin}%`
    utilizedBalance.innerHTML = `${data.openTradeEquity} ${currencyType}`
}