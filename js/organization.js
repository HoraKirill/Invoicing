class Organization {
    constructor(el) {
        this.el = el;
        
    }

    rootEl(el) {
        this.el = el;
    }

    render() {
        if (!this.el) return;
        const html = `<div>
            <h2>${this.name}</h2>
        </div>`;
        this.el.innerHTML = html;
    }
}

class OrganizationForm {

    constructor(el) {
        this.el = el;
        this.el.querySelector('.js-save-btn').addEventListener('click', this.save);
        this.el.querySelector('.js-edit-btn').addEventListener('click', this.edit);
    }

    get type() {
        return this.el.querySelector('.js-type-data');
    }
    get name() {
        return this.el.querySelector('.js-name-data');
    }
    get inn() {
        return this.el.querySelector('.js-inn-data');
    }
    get kpp() {
        return this.el.querySelector('.js-kpp-data');
    }
    get bik() {
        return this.el.querySelector('.js-bik-data');
    }
    get pchet() {
        return this.el.querySelector('.js-pchet-data');
    }
    get kchet() {
        return this.el.querySelector('.js-kchet-data');
    }
    get address() {
        return this.el.querySelector('.js-address-data');
    }
    get phone() {
        return this.el.querySelector('.js-phone-data');
    }

    dispose() {
        this.el.querySelector('.js-save-btn').removeEventListener('click', this.save);
    }

    save = (event) => {
        event.preventDefault();
        let item = new Organization(this.toJson());
        if (document.querySelector('.js-type-data').value == "organization-sel") {
        organizationList.push(item);
        localStorage.setItem('Organization', JSON.stringify(organizationList));
    } else {
        counterPartyList.push(item);
        localStorage.setItem('Counterparty', JSON.stringify(counterPartyList));
    }
        window.location.reload();
    }

    edit = (event) => {
        if (cash.el.type === 'organization-sel') { 
    
            organizationList.splice(cash.number, 1);
        } else {
            counterPartyList.splice(cash.number, 1);
        }
        event.preventDefault();
        let item = new Organization(this.toJson());
        if (document.querySelector('.js-type-data').value == "organization-sel") {
        organizationList.push(item);
        localStorage.setItem('Organization', JSON.stringify(organizationList));
    } else {
        counterPartyList.push(item);
        localStorage.setItem('Counterparty', JSON.stringify(counterPartyList));
    }
        window.location.reload();
    }

    toJson() {
        return { name: this.name.value, inn: this.inn.value, kpp: this.kpp.value, bik: this.bik.value, pchet: this.pchet.value, kchet: this.kchet.value, address: this.address.value,
            phone: this.phone.value, type: this.type.value };
    }

}

const form = new OrganizationForm(document.querySelector('.main-form'));

