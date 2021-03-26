let num = 0;

function getRow() {
    const row = `<tr>
        <th scope="row">${getNum()}</th>
        <td><input type="number" class="nomenclature${num}"></td>
        <td><input type="number"  class="quantity${num}"></td>
        <td><input type="number" class="price${num}"></td>
        <td><input type="number"  class="amount${num}"></td>
        <td><select name="prcentNdc" id="">
          <option value="20prc">20% НДС</option>
          <option value="bezNdc">Без ндс</option>
        </select></td>
        <td><div class="Ndc${num}"></div></td>
        <td><div class="summ${num}"></div></td>
        </tr>`;
    return row;
};

function getNum() {
    num += 1;
    return num;
}

const pushString = () => {
    const table = document.querySelector('.bodytable');
    const fragment = document.createDocumentFragment();
    const tr = document.createElement('tr');
    tr.innerHTML = getRow(); 
    fragment.appendChild(tr);
    table.appendChild(fragment);
    add(document.querySelector(`.quantity${num}`)); 
    add(document.querySelector(`.price${num}`)); 
};

pushString();

const deleteString = () => {
    const table = document.querySelector('.bodytable');
    if (table.lastElementChild.rowIndex > 1) {
        table.removeChild(table.lastElementChild);
        num -= 1;
    }
};

let btnPlusStr = document.querySelector('.btnPlusStr').addEventListener('click', function () {
    pushString();
});

let btnDeleteStr = document.querySelector('.btnDeleteStr').addEventListener('click', function () {
    deleteString();
});

//Calculations table

function add(el){
    el.addEventListener('input', () => {
        let quan = document.querySelector(`.quantity${num}`),
            pr = document.querySelector(`.price${num}`);
            amount = document.querySelector(`.amount${num}`);
        sum = 0;
        amount.value = pr.value * quan.value;
        sum = amount.value * 20 / 120;
        document.querySelector(`.Ndc${num}`).textContent = sum.toFixed(2);
    });
}
