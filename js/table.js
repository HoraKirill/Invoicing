    let nomenclature = document.querySelector('.nomenclature'),
    quantity = document.querySelector('.quantity'),
    price = document.querySelector('.price'),
    amount = document.querySelector('.amount');

    const row = `<tr>
<th scope="row">1</th>
<td><input type="text" class="nomenclature"></td>
<td><input type="text" class="quantity"></td>
<td><input type="text" class="price"></td>
<td><input type="text" class="amount"></td>
<td><select name="prcentNdc" id="">
  <option value="20prc">20% НДС</option>
  <option value="bezNdc">Без ндс</option>
</select></td>
<td><div class="Ndc"></div></td>
<td><div class="summ"></div></td>
</tr>`;