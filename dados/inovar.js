let fs = require('fs');

let soma = 0;

fs.readFile('gastos2017.json', function (err, data) {
    let dados = JSON.parse(data);
    for (let i = 0; i < dados.length; i++) {
        let array = dados[i].data;
        for (let j = 0; j < array.length; j++) {
            let valor = array[j][3];
            valor = valor.split(' ');
            valor[1] = valor[1].replace('.', '');
            valor[1] = valor[1].replace(',', '.');
            soma += parseFloat(valor[1]);
        }
    }
    console.log(soma);
});