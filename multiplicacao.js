//CRIANDO MATRIZES PARA A MULTIPLICACAO
var matriz1 = new Array(); //cria a matriz 1 principal que será utilizada
var matriz2 = new Array(); //cria a matriz 2 principal que será utilizada

var linm1 = parseInt(Math.random() * 5) + 1; //criará o número de linhas da matriz 1
var colm1linm2 = parseInt(Math.random() * 5) + 1; //criará o número de colunas da matriz 1 e de linhas da matriz 2 que deve ser igual
var colm2 = parseInt(Math.random() * 5) + 1; //criará o número de colunas da matriz 2

//GERANDO VALORES DA MATRIZ 1
for ( var i = 0; i < linm1; i++) { //fazendo um laço de repetição que irá criar as matrizes interiores que serão as linhas
    var matrizinterna1 = new Array(); //repetindo a criação da matriz interna 1 até dar o número de linhas gerado
    for ( var j = 0; j < colm1linm2; j++) { //fazendo um laço de repetição para colocar valores dentro do número de colunas gerado
        var valor1 = parseInt(Math.random() * 50); //criando os valores que serão colocados na matriz 1
        matrizinterna1[j] = valor1; //colocando os valores aleatórios dentro da matriz interna 1
    }
    matriz1.push(matrizinterna1); //colocando a matriz interna (linhas) dentro da matriz 1
}

//GERANDO VALORES DA MATRIZ 2
for ( var i = 0; i < colm1linm2; i++) { //fazendo um laço de repetição que irá criar as matrizes interiores que serão as linhas
    var matrizinterna2 = new Array(); //repetindo a criação da matriz interna 1 até dar o número de linhas gerado
    for ( var j = 0; j < colm2; j++) { //fazendo um laço de repetição para colocar valores dentro do número de colunas gerado
        var valor2 = parseInt(Math.random() * 50); //criando os valores que serão colocados na matriz 1
        matrizinterna2[j] = valor2; //colocando os valores aleatórios dentro da matriz interna 1
    }
    matriz2.push(matrizinterna2); //colocando a matriz interna (linhas) dentro da matriz 1
}

function multiplicacao(matriz1, matriz2) {
    var multip = new Array();
    for (m1 = 0; m1 < linm1; m1++) { //como a matriz resultado terá como dimensões o número de linhas da matriz 1 e o número de colunas da matriz 2, faremos um lop de criamento das linhas da matriz 1
        var minterna = new Array();
        for (m2 = 0; m2 < colm2; m2++) { //como explicado anteriormente, o número de colunas que a matriz terá será o número de colunas da matriz 2
            var soma = 0;
            for (m3 = 0; m3 < colm1linm2; m3++){
                var mult;
                mult = matriz1[m1][m3] * matriz2[m3][m2];
                soma = soma + mult;
            }
            minterna[m2] = soma;
        }
        multip.push(minterna);
    }
    return multip;
}

console.table(matriz1);
console.table(matriz2);
console.table(multiplicacao(matriz1, matriz2));

// MOSTRANDO AS MATRIZES E RESULTADOS DA MULTIPLICAÇÃO COM A TABELA 
// QUE ESTÁ NO CONTEÚDO DISPONIBILIZADO NO SIGAA
document.write("<div class=container-fluid><div class=row>"); 

//MOSTRANDO MATRIZ 1
document.write("<div class=col-sm-4><table>")
for (i = 0; i < linm1; i++) {
    var linha = "<tr>";
    for (j = 0; j < colm1linm2; j++) {
        linha = linha + "<td>" + matriz1[i][j] + "</td>";
    }
    linha = linha + "</tr>"
    document.write(linha);
}
document.write("</table></div>");
//MOSTRANDO MATRIZ 2
document.write("<div class=col-sm-4><table>")
for (i = 0; i < colm1linm2; i++) {
    var linha = "<tr>";
    for (j = 0; j < colm2; j++) {
        linha = linha + "<td>" + matriz2[i][j] + "</td>";
    }
    linha = linha + "</tr>"
    document.write(linha);
}
document.write("</table></div>");
//MOSTRANDO MATRIZ MULTIPLICAÇÃO
document.write("<div class=col-sm-4><table>")
for (i = 0; i < linm1; i++) {
    var linha = "<tr>";
    for (j = 0; j < colm2; j++) {
        linha = linha + "<td>" + multiplicacao(matriz1, matriz2)[i][j] + "</td>";
    }
    linha = linha + "</tr>"
    document.write(linha);
}
document.write("</table></div>");

document.write("</div></div>");

/*
//TESTE MATRIZ DE MULTIPLICAÇÃO

var matrizt1 = new Array();
var matrizt2 = new Array();

matrizt1.push([1, 2, 3]);
matrizt1.push([5, 6, 7]);

matrizt2.push([10, 20, 30, 40]);
matrizt2.push([50, 60, 70, 80]);
matrizt2.push([90, 12, 15, 24]);

//FUNÇÃO DE MULTIPLICAÇÃO PARA AS MATRIZES

function mult(matrizt1, matrizt2) {
    var matrizmult = new Array();
    for (i = 0; i < 2; i++) {
        var matrizints = new Array();
        for (j = 0; j < 4; j++) {
            var soma = 0;
            for (x = 0; x < 3; x++){
                var mult;
                mult = matriz1[i][x] * matriz2[x][j];
                soma = soma + mult;
            }
            minterna[j] = soma;
        }
        matrizmult.push(matrizints);
    }
    return matrizmult;
}

document.write("<table>")
for (i = 0; i < 2; i++) {
    var linha = "<tr>";
    for (j = 0; j < 4; j++) {
        linha = linha + "<td>" + mult(matrizt1, matrizt2)[i][j] + "</td>";
    }
    linha = linha + "</tr>"
    document.write(linha);
}
document.write("</table>");

console.table(mult(matrizt1, matrizt2));
*/