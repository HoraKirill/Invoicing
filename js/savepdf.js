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
		{text: 'Счет на оплату №  от ', style: 'header'},
		{text: 'Поставщик ', style: 'tableHeader'},
		{text: 'Получатель', style: 'tableHeader'},
		{text: 'Основание', style: 'tableHeader'},
		{	style: 'tableExample',
			
			table: {
				widths: [20, 290, 50, 50, 50],
				heights: [10, 10, 10, 10, 10],
				body: dateTable (),
					
				
			}
		}

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