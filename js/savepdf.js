function dateTable () {
	let dateTab = [
		['№', 'Товары', 'Кол-во', 'Цена', 'Сумма'],
	];
	for (let i = 1; i <= table.num; i++) {
		let nomenclature = document.querySelector(`.nomenclature${i}`),
            quan = document.querySelector(`.quantity${i}`),
            pr = document.querySelector(`.price${i}`), 
            amount = document.querySelector(`.amount${i}`);
			dateTab.push([i, nomenclature.value, quan.value, pr.value, amount.value])
	}
	return dateTab;
};

function initialization (){

	function getOoo (el, el2) {
		for (let i = 0; i < el.length; i++) {
			if (el[i].el.name === el2.value) {
				return el[i].el.name + ' ИНН ' + el[i].el.inn + ' КПП ' + el[i].el.kpp + ' ' + el[i].el.address + ', ' + el[i].el.phone;
			}
	}
}
	
let docInfo = {
    info: {
        title: 'Текстовый документ',
        autor: 'Kirill',
        subject: 'Theme',
        keyword: 'Ключевые слова'
    },
    padeSize: 'A4',
    pageOritation: 'landscape',
    pageMargin: [50, 50, 50, 60],

    content: [
		{   style: 'tableExample',
			table: {
				widths: [300, 30, 150],
				heights: [12, 12, 12],
				body: [
					[{rowSpan: 2, text: selectOrg.value}, 'БИК', {rowSpan: 2, text:'\n'}],
					['', 'Сч.№', ''],
					['ИНН', {rowSpan: 2, text: 'Сч.№'}, {rowSpan: 2, text: ''}],
					['Получатель', '', ''],
				]
			}
		},
		{text: 'Счет на оплату № ' + document.querySelector('.numberChet').value, style: 'header'},
		{text: 'Поставщик: ' + getOoo(organizationList, selectOrg), style: 'tableHeader'},
		{text: 'Получатель: ' +  getOoo(counterPartyList, selectCount), style: 'tableHeader'},
		{text: 'Основание Договор № ' + document.querySelector('.contract').value, style: 'tableHeader'},
		{	style: 'tableExample',
			
			table: {
				widths: [20, 290, 50, 50, 50],
				heights: [10, 10, 10, 10, 10],
				body: dateTable (),
					
				
			}
		},
		{ text: 'Оплата данного счета означает согласие с условиями поставки товара. \n Уведомление об оплате обязательно, в противном случае не гарантируется наличие товара на складе.Товар отпускается по факту прихода денег на р/с Поставщика, самовывозом, при наличии доверенности и паспорта.' },
    ],

    styles: {
		header: {
			fontSize: 18,
			bold: true,
			margin: [0, 0, 0, 10]
		},
		subheader: {
			fontSize: 16,
			bold: true,
			margin: [0, 10, 0, 5]
		},
		tableExample: {
			margin: [0, 5, 0, 15]
		},
		tableHeader: {
			bold: true,
			fontSize: 13,
			color: 'black',
			margin: [0, 5, 0, 15]
		}
	},
};
return docInfo;
}

document.querySelector('.openPdf').addEventListener('click', () => {
    pdfMake.createPdf(initialization()).open();
});