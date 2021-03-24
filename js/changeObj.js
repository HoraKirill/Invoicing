// Delete organizations, counterParty

let deleteBtnOrg = document.querySelector('.deleteBtnOrg'),
    deleteBtnCount = document.querySelector('.deleteBtnСount'),
    jsSavebtn = document.querySelector('.js-save-btn'),
    jsEditbtn = document.querySelector('.js-edit-btn');

deleteBtnOrg.addEventListener('click', function () {
    if (orgDisplay !== null) {
        for (let i = 0; i < orgDisplay.length; i++) {
            if (orgDisplay[i].el.name === selectOrg.value) {
                orgDisplay.splice(i, 1);
                localStorage.setItem('Organization', JSON.stringify(orgDisplay));
                organizationList = orgDisplay;
                listOrg();
                listCount();
            }
        }
    }
});

deleteBtnCount.addEventListener('click', function () {
    if (countDisplay !== null) {
        for (let i = 0; i < countDisplay.length; i++) {
            if (countDisplay[i].el.name === selectCount.value) {
                countDisplay.splice(i, 1);
                localStorage.setItem('Counterparty', JSON.stringify(countDisplay));
                counterPartyList = countDisplay;
                listOrg();
                listCount();
            }
        }
    }
});

// Edit organizations, counterParty

let cash = [];

let editBtnOrg = document.querySelector('.editBtnOrg').addEventListener('click', function () {
    for (let i = 0; i < organizationList.length; i++) {
        if (organizationList[i].el.name === selectOrg.value) {
            form.el.querySelector('.js-name-data').value = organizationList[i].el.name;
            form.el.querySelector('.js-inn-data').value = organizationList[i].el.inn;
            form.el.querySelector('.js-kpp-data').value = organizationList[i].el.kpp;
            form.el.querySelector('.js-bik-data').value = organizationList[i].el.bik;
            form.el.querySelector('.js-pchet-data').value = organizationList[i].el.pchet;
            form.el.querySelector('.js-kchet-data').value = organizationList[i].el.kchet;
            form.el.querySelector('.js-address-data').value = organizationList[i].el.address;
            form.el.querySelector('.js-phone-data').value = organizationList[i].el.phone;
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
            form.el.querySelector('.js-name-data').value = counterPartyList[i].el.name;
            form.el.querySelector('.js-inn-data').value = counterPartyList[i].el.inn;
            form.el.querySelector('.js-kpp-data').value = counterPartyList[i].el.kpp;
            form.el.querySelector('.js-bik-data').value = counterPartyList[i].el.bik;
            form.el.querySelector('.js-pchet-data').value = counterPartyList[i].el.pchet;
            form.el.querySelector('.js-kchet-data').value = counterPartyList[i].el.kchet;
            form.el.querySelector('.js-address-data').value = counterPartyList[i].el.address;
            form.el.querySelector('.js-phone-data').value = counterPartyList[i].el.phone;
            jsEditbtn.style.display = 'block';
            jsSavebtn.style.display = 'none';
            cash = counterPartyList[i];
            cash.number = i;
        }
    }
});

// View organizations, counterParty

let viewBtnСount = document.querySelector('.viewBtnСount').addEventListener('click', function () {
    for (let i = 0; i < counterPartyList.length; i++) {
        if (counterPartyList[i].el.name === selectCount.value) {
            form.el.querySelector('.js-name-data').value = counterPartyList[i].el.name;
            form.el.querySelector('.js-inn-data').value = counterPartyList[i].el.inn;
            form.el.querySelector('.js-kpp-data').value = counterPartyList[i].el.kpp;
            form.el.querySelector('.js-bik-data').value = counterPartyList[i].el.bik;
            form.el.querySelector('.js-pchet-data').value = counterPartyList[i].el.pchet;
            form.el.querySelector('.js-kchet-data').value = counterPartyList[i].el.kchet;
            form.el.querySelector('.js-address-data').value = counterPartyList[i].el.address;
            form.el.querySelector('.js-phone-data').value = counterPartyList[i].el.phone;
            jsEditbtn.style.display = 'none';
            jsSavebtn.style.display = 'none';
            
            document.querySelector('.js-type-data').value = "counterparty-sel";
        }
    }
});

 let viewBtnOrg = document.querySelector('.viewBtnOrg').addEventListener('click', function () {
    for (let i = 0; i < organizationList.length; i++) {
        if (organizationList[i].el.name === selectOrg.value) {
            form.el.querySelector('.js-name-data').value = organizationList[i].el.name;
            form.el.querySelector('.js-inn-data').value = organizationList[i].el.inn;
            form.el.querySelector('.js-kpp-data').value = organizationList[i].el.kpp;
            form.el.querySelector('.js-bik-data').value = organizationList[i].el.bik;
            form.el.querySelector('.js-pchet-data').value = organizationList[i].el.pchet;
            form.el.querySelector('.js-kchet-data').value = organizationList[i].el.kchet;
            form.el.querySelector('.js-address-data').value = organizationList[i].el.address;
            form.el.querySelector('.js-phone-data').value = organizationList[i].el.phone;
            jsEditbtn.style.display = 'none';
            jsSavebtn.style.display = 'none';
            
            document.querySelector('.js-type-data').value = "organization-sel";
        }
    }
});
