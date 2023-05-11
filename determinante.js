//CRIANDO AS MATRIZES QUE SERÃO UTILIZADAS
var matrizo2 = new Array(); //matriz ordem 2
var matrizo3 = new Array(); //matriz ordem 3 

//GERANDO VALORES NAS MATRIZES
for (var i = 0; i < 2; i++) {
    var minto2 = new Array();
    for (var j = 0; j < 2; j++) {
        var valor = parseInt(Math.random() * 50);
        minto2[j] = valor;
    }
    matrizo2.push(minto2);
}

console.table(matrizo2);

for (var i = 0; i < 3; i++) {
    var minto3 = new Array();
    for (var j = 0; j < 3; j++) {
        var valor = parseInt(Math.random() * 50);
        minto3[j] = valor;
    }
    matrizo3.push(minto3);
}

function determinante2 (matrizo2) {
    var determinanteo2 = 0;
    var mult = new Array();

    do {
        var m1 = 0;
        var m2 = 1;
        mult[m1] = matrizo2[0][m1] * matrizo2[1][m2];
        m1++;
        m2--;
    } while ((m1 < 2) && (m2 => 0));

    determinanteo2 = mult[0] - mult[1];
    //for (var m1 = 0; m1 < 2; m1++) {
    //    for (var m2 = 1; m2 = 0; m2--) {
    //        mult[m1] = matrizo2[0][m1] * matrizo2[1][m2];
    //   }
    //    determinanteo2 = mult[0] - mult[1];
    //}
    return determinanteo2;
}

document.write(determinante2(matrizo2));