// Delete organizations, counterParty

let deleteBtnOrg = document.querySelector('.deleteBtnOrg'),
    deleteBtnCount = document.querySelector('.deleteBtnСount'),
    jsSavebtn = document.querySelector('.js-save-btn'),
    jsEditbtn = document.querySelector('.js-edit-btn'),
    cash = [];

function deleteFun(el, el2, org) {
    if (el !== null) {
        for (let i = 0; i < el.length; i++) {
            if (el[i].el.name === el2.value) {
                el.splice(i, 1);
                localStorage.setItem(org, JSON.stringify(el));
                organizationList = el;
                listOrg();
                listCount();
            }
        }
    }
}

deleteBtnOrg.addEventListener('click', function () {
    deleteFun(orgDisplay, selectOrg, 'Organization');
});

deleteBtnCount.addEventListener('click', function () {
    deleteFun(countDisplay, selectCount, 'Counterparty');
});


// Edit organizations, counterParty

function editEl(el, el2) {
    for (let i = 0; i < el.length; i++) {
        if (el[i].el.name === el2.value) {
            form.el.querySelector('.js-name-data').value = el[i].el.name;
            form.el.querySelector('.js-inn-data').value = el[i].el.inn;
            form.el.querySelector('.js-kpp-data').value = el[i].el.kpp;
            form.el.querySelector('.js-bik-data').value = el[i].el.bik;
            form.el.querySelector('.js-name-bank').value = el[i].el.nameBank;
            form.el.querySelector('.js-pchet-data').value = el[i].el.pchet;
            form.el.querySelector('.js-kchet-data').value = el[i].el.kchet;
            form.el.querySelector('.js-address-data').value = el[i].el.address;
            form.el.querySelector('.js-phone-data').value = el[i].el.phone;
            jsEditbtn.style.display = 'block';
            jsSavebtn.style.display = 'none';
            cash = el[i];
            cash.number = i;
        }
    }
}

let editBtnOrg = document.querySelector('.editBtnOrg').addEventListener('click', function () {
    editEl(organizationList, selectOrg);
});

let editBtnCount = document.querySelector('.editBtnСount').addEventListener('click', function () {
    editEl(counterPartyList, selectCount);
});

// View organizations, counterParty

function viewEl(el, el2) {
    for (let i = 0; i < el.length; i++) {
        if (el[i].el.name === el2.value) {
            form.el.querySelector('.js-name-data').value = el[i].el.name;
            form.el.querySelector('.js-inn-data').value = el[i].el.inn;
            form.el.querySelector('.js-kpp-data').value = el[i].el.kpp;
            form.el.querySelector('.js-bik-data').value = el[i].el.bik;
            form.el.querySelector('.js-name-bank').value = el[i].el.nameBank;
            form.el.querySelector('.js-pchet-data').value = el[i].el.pchet;
            form.el.querySelector('.js-kchet-data').value = el[i].el.kchet;
            form.el.querySelector('.js-address-data').value = el[i].el.address;
            form.el.querySelector('.js-phone-data').value = el[i].el.phone;
        }
    }
};
let viewBtnСount = document.querySelector('.viewBtnСount').addEventListener('click', function () {
    viewEl(counterPartyList, selectCount);
    jsEditbtn.style.display = 'none';
    jsSavebtn.style.display = 'none';
    document.querySelector('.js-type-data').value = "counterparty-sel";
});

let viewBtnOrg = document.querySelector('.viewBtnOrg').addEventListener('click', function () {
    viewEl(organizationList, selectOrg);
    jsEditbtn.style.display = 'none';
    jsSavebtn.style.display = 'none';
    document.querySelector('.js-type-data').value = "organization-sel";
});