let organizationList = [],
    counterPartyList = [];

let orgDisplay = JSON.parse(localStorage.getItem('Organization')),
    countDisplay = JSON.parse(localStorage.getItem('Counterparty')),
    selectOrg = document.getElementById('organization'),
    selectCount = document.getElementById('counterparty');

function getData() {
    if (localStorage.getItem('Organization') !== null) {
        organizationList = JSON.parse(localStorage.getItem('Organization'));
    }
    if (localStorage.getItem('Counterparty') !== null) {
        counterPartyList = JSON.parse(localStorage.getItem('Counterparty'));
    }
};

function listOrg() {
    getData();
    if (organizationList !== null) {
        selectOrg.options.length = 1;
        for (let i = 0; i < orgDisplay.length; i++) {
            let option = document.createElement("option");
            option.setAttribute("class", "content");
            option.text = organizationList[i].el.name;
            selectOrg.appendChild(option);
        }
    }
}
function listCount() {
    getData();
    if (counterPartyList !== null) {
        selectCount.options.length = 1;
        for (let i = 0; i < countDisplay.length; i++) {
            let option = document.createElement("option");
            option.setAttribute("class", "content");
            option.text = counterPartyList[i].el.name;
            selectCount.appendChild(option);
        }
    }
}

function start() {
    getData();
    listCount();
    listOrg();
}

start();



