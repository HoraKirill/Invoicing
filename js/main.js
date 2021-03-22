let organizationList = [],
    counterPartyList = [];

function getData () {
    if (localStorage.getItem('Organization') !== null) {
        organizationList = JSON.parse(localStorage.getItem('Organization'));
    }
    if (localStorage.getItem('Counterparty') !== null) {
        counterPartyList = JSON.parse(localStorage.getItem('Counterparty'));
    }
};

// Modal

// let more = document.querySelector('.counterparty-btn'),
//     overlay = document.querySelector('.overlay'),
//     close = document.querySelector('.popup-close');

// // more.addEventListener('click', function () {
// //     overlay.style.display = 'block';
// //     this.classList.add('more-splash');
// //     document.body.style.overflow = 'hidden';
// // });

// // close.addEventListener('click', function () {
// //     overlay.style.display = 'none';
// //     more.classList.remove('more-splash');
// //     // document.body.style.overflow = '';
// // });

// Displaying organizations, counterParty

let orgDisplay = JSON.parse(localStorage.getItem('Organization')),
    countDisplay = JSON.parse(localStorage.getItem('Counterparty')),
    selectOrg = document.getElementById('organization'),
    selectCount = document.getElementById('counterparty'),
    jsSavebtn = document.querySelector ('.js-save-btn'),
    jsEditbtn = document.querySelector ('.js-edit-btn');

// Update list

function listOrg() {
    getData();
    if (organizationList !== null) {
        selectOrg.options.length = 0;
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
        selectCount.options.length = 0;
        for (let i = 0; i < countDisplay.length; i++) {
            let option = document.createElement("option");
            option.setAttribute("class", "content");
            option.text = counterPartyList[i].el.name;
            selectCount.appendChild(option);
        }
    }
}

// Delete organizations, counterParty

let deleteBtnOrg = document.querySelector('.deleteBtnOrg'),
    deleteBtnCount = document.querySelector('.deleteBtnСount');

deleteBtnOrg.addEventListener('click', function () {
    for (let i = 0; i < orgDisplay.length; i++) {
        if (orgDisplay[i].el.name === selectOrg.value) {
            orgDisplay.splice(i, 1);
            localStorage.setItem('Organization', JSON.stringify(orgDisplay));
            organizationList = orgDisplay;
            listOrg();
            listCount();
        }
    }
});

deleteBtnCount.addEventListener('click', function () {
    for (let i = 0; i < countDisplay.length; i++) {
        if (countDisplay[i].el.name === selectCount.value) {
            countDisplay.splice(i, 1);
            localStorage.setItem('Counterparty', JSON.stringify(countDisplay));
            counterPartyList = countDisplay;
            listOrg();
            listCount();
        }
    }
});

// Edit organizations, counterParty

let cash = [];

let editBtnOrg = document.querySelector('.editBtnOrg').addEventListener('click', function () {
    for (let i = 0; i < organizationList.length; i++) {
        if (organizationList[i].el.name === selectOrg.value) { 
            form.el.querySelector('.js-name-data').value =  organizationList[i].el.name;
            form.el.querySelector('.js-inn-data').value =  organizationList[i].el.inn;
            form.el.querySelector('.js-kpp-data').value =  organizationList[i].el.kpp;
            form.el.querySelector('.js-bik-data').value =  organizationList[i].el.bik;
            form.el.querySelector('.js-pchet-data').value =  organizationList[i].el.pchet;
            form.el.querySelector('.js-kchet-data').value =  organizationList[i].el.kchet;
            form.el.querySelector('.js-address-data').value =  organizationList[i].el.address;
            form.el.querySelector('.js-phone-data').value =  organizationList[i].el.phone;
            jsEditbtn.style.display = 'block';
            jsSavebtn.style.display = 'none';
            cash = organizationList[i];
            cash.number = i;
        }
    }
});

let editBtnCount = document.querySelector('.editBtnСount').addEventListener('click', function () {
    for (let i = 0; i < counterPartyList.length; i++) {
        if (counterPartyList[i].el.name === selectCount.value) { 
            form.el.querySelector('.js-name-data').value =  counterPartyList[i].el.name;
            form.el.querySelector('.js-inn-data').value =  counterPartyList[i].el.inn;
            form.el.querySelector('.js-kpp-data').value =  counterPartyList[i].el.kpp;
            form.el.querySelector('.js-bik-data').value =  counterPartyList[i].el.bik;
            form.el.querySelector('.js-pchet-data').value =  counterPartyList[i].el.pchet;
            form.el.querySelector('.js-kchet-data').value =  counterPartyList[i].el.kchet;
            form.el.querySelector('.js-address-data').value =  counterPartyList[i].el.address;
            form.el.querySelector('.js-phone-data').value =  counterPartyList[i].el.phone;
            jsEditbtn.style.display = 'block';
            jsSavebtn.style.display = 'none';
            cash = organizationList[i];
            cash.number = i;;
        }
    }
});

function start() {
    getData();
    listCount();
    listOrg();
}

start();