class Table {
    constructor(el) {
        this.el = el;
    }

}


class TableForm {
    constructor(el, num) {
        this.num = num;
        this.el = el;
        this.el.querySelector('.btnPlusStr').addEventListener('click', this.plusStr);
        this.el.querySelector('.btnDeleteStr').addEventListener('click', this.deleteStr);
    }

    getRow() {
        const row = `<tr>
        <th scope="row">${this.num}</th>
        <td><input type="text" class="nomenclature${this.num}"></td>
        <td><input type="number" class="quantity${this.num}"></td>
        <td><input type="number" class="price${this.num}"></td>
        <td><input type="number" class="amount${this.num}"></td>
        <td><select class="prcentNdc${this.num}" id="">
            <option value="20prc">20% НДС</option>
            <option value="bezNdc">Без ндс</option>
          </select></td>
        <td>
          <div class="Ndc${this.num}"></div>
        </td>
        <td>
          <div class="summ${this.num}"></div>
        </td>
        </tr>`;
        return row;
    }

    changeAllSumm(el) {
        let allSumm = document.getElementById("allSumm");
        console.log(allSumm);
        allSumm.textContent = +allSumm.textContent + +el.textContent;
    }

    plusStr = (event) => {
        event.preventDefault();
        let table = document.querySelector('.bodytable');
        this.num += 1;
        let tableForm = new Table(this.getRow());
        const fragment = document.createDocumentFragment();
        const tr = document.createElement('tr');
        tr.innerHTML = tableForm.el;
        fragment.appendChild(tr);
        table.appendChild(fragment);
        this.add(document.querySelector(`.quantity${this.num}`), this.num);
        this.add(document.querySelector(`.price${this.num}`), this.num);
        this.change(document.querySelector(`.prcentNdc${this.num}`), this.num);
        this.changeAmount(document.querySelector(`.amount${this.num}`), this.num);
    }

    deleteStr() {
        const el = document.querySelector('.bodytable');
        const allSumm = document.getElementById("allSumm");
        if (el.lastElementChild.rowIndex > 1) {
            table.num -= 1;
            allSumm.textContent = +allSumm.textContent  - +el.lastElementChild.lastElementChild.innerText;
            el.removeChild(el.lastElementChild);

        }
    }

    add(el, numT) {
        el.addEventListener('input', () => {
            let prcentNdc = document.querySelector(`.prcentNdc${numT}`),
                ndc = document.querySelector(`.Ndc${numT}`),
                quan = document.querySelector(`.quantity${numT}`),
                pr = document.querySelector(`.price${numT}`),
                amount = document.querySelector(`.amount${numT}`),
                sum = 0,
                summ = document.querySelector(`.summ${numT}`);
            amount.value = pr.value * quan.value;
            sum = amount.value * 20 / 120;
            if (prcentNdc.value == '20prc') {
                ndc.textContent = sum.toFixed(2);
            } else {
                ndc.textContent = 'Без ндс';
            };
            summ.textContent = amount.value;
            this.changeAllSumm(summ);
        });
    }

    check(elPrc, elNdc) {
        if (elPrc.value == '20prc') {
            elNdc.textContent = sum.toFixed(2);
        } else {
            elNdc.textContent = 'Без ндс';
        }
    }

    change(el, numT) {
        el.addEventListener('change', () => {
            let prcentNdc = document.querySelector(`.prcentNdc${numT}`),
                ndc = document.querySelector(`.Ndc${numT}`),
                quan = document.querySelector(`.quantity${numT}`),
                pr = document.querySelector(`.price${numT}`),
                amount = document.querySelector(`.amount${numT}`),
                sum = 0,
                summ = document.querySelector(`.summ${numT}`);
            amount.value = pr.value * quan.value;
            sum = amount.value * 20 / 120;
            if (prcentNdc.value == '20prc') {
                ndc.textContent = sum.toFixed(2);
            } else {
                ndc.textContent = 'Без ндс';
            };
            summ.textContent = amount.value;
            this.changeAllSumm(summ);
        });
    }

    changeAmount(el, numT) {
        el.addEventListener('change', () => {
            let prcentNdc = document.querySelector(`.prcentNdc${numT}`),
                ndc = document.querySelector(`.Ndc${numT}`),
                quan = document.querySelector(`.quantity${numT}`),
                pr = document.querySelector(`.price${numT}`),
                sum = 0,
                summ = document.querySelector(`.summ${numT}`);
            pr.value = el.value / quan.value;
            console.log(typeof pr.value);
            pr.value = (+pr.value).toFixed(2);
            summ.textContent = el.value;
            this.changeAllSumm(summ);
            sum = el.value * 20 / 120;
            if (prcentNdc.value == '20prc') {
                ndc.textContent = sum.toFixed(2);
            } else {
                ndc.textContent = 'Без ндс';
            };
        });
    }


};


const table = new TableForm(document.querySelector('.table'), 0);