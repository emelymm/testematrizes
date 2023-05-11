
// CRIANDO A MATRIZES DE MESMO TAMANHO PARA SOMA E SUBTRAÇÃO
var matriz1 = new Array(); //cria a matriz 1 principal que será utilizada
var matriz2 = new Array(); //cria a matriz 2 principal que será utilizada
var numcol = parseInt(Math.random() * 5) + 1; //declara uma váriavel do número de colunas(número de casas dentro de cada matriz) 
//que vai gerar um número aleatório inteiro de colunas de 1 a 5
var numlin = parseInt(Math.random() * 5) + 1; //declara uma váriavel do número de linhas(número de matrizes dentro da matriz principal) 
//que vai gerar um número aleatório inteiro de linhas de 1 a 5

// GERANDO VALORES DAS 2 MATRIZES
for ( var i = 0; i < numlin; i++) { //fazendo um laço de repetição que irá criar as matrizes interiores que serão as linhas
    var matrizinterna1 = new Array(); //repetindo a criação da matriz interna 1 até dar o número de linhas gerado
    var matrizinterna2 = new Array(); //repetindo a criação da matriz interna 2 até dar o número de linhas gerado
    for ( var j = 0; j < numcol; j++) { //fazendo um laço de repetição para colocar valores dentro do número de colunas gerado
        var valor1 = parseInt(Math.random() * 50); //criando os valores que serão colocados na matriz 1
        var valor2 = parseInt(Math.random() * 50); //criando os valores que serão colocados na matriz 2
        matrizinterna1[j] = valor1; //colocando os valores aleatórios dentro da matriz interna 1
        matrizinterna2[j] = valor2; //colocando os valores aleatórios dentro da matriz interna 2
    }
    matriz1.push(matrizinterna1); //colocando a matriz interna (linhas) dentro da matriz 1
    matriz2.push(matrizinterna2); //colocando a matriz interna (linhas) dentro da matriz 2
}

console.table(matriz1);
console.table(matriz2);

// FAZENDO A FUNÇÃO SOMA
function soma(matriz1, matriz2) { //função para retornar a matriz que terá a soma
    var matrizsoma = new Array(); //criando a matriz que guardará os valores da soma
    for ( var m1 = 0; m1 < numlin; m1++ ) { //laço de repetição para a criação das linhas da matriz soma
        var matrizsinterna = new Array(); //repetindo a criação da matriz interna da soma (linhas)
        for ( var m2 = 0; m2 < numcol; m2++ ) {
            matrizsinterna[m2] = matriz1[m1][m2] + matriz2[m1][m2];
        }
        matrizsoma.push(matrizsinterna);
    }
    return matrizsoma;
}

console.table(soma(matriz1, matriz2));

//FAZENDO A FUNÇÃO SUBTRAÇÃO
function subtrai(matriz1, matriz2) { //função para retornar a matriz que terá a subtração
    var matrizsubtracao = new Array(); //criando a matriz que guardará os valores da subtração
    for ( var m1 = 0; m1 < numlin; m1++ ) { //laço de repetição para a criação das linhas da matriz subtração
        var matrizsubinterna = new Array(); //repetindo a criação da matriz interna da subtração (linhas)
        for ( var m2 = 0; m2 < numcol; m2++ ) {
            matrizsubinterna[m2] = matriz1[m1][m2] - matriz2[m1][m2];
        }
        matrizsubtracao.push(matrizsubinterna);
    }
    return matrizsubtracao;
}

console.table(subtrai(matriz1, matriz2));

// MOSTRANDO AS MATRIZES E RESULTADOS DA SOMA COM A TABELA 
// QUE ESTÁ NO CONTEÚDO DISPONIBILIZADO NO SIGAA
document.write("<div class=container-fluid><div class=row>"); 

//MOSTRANDO MATRIZ 1
document.write("<div class=col-sm-4><table>")
for (i = 0; i < numlin; i++) {
    var linha = "<tr>";
    for (j = 0; j < numcol; j++) {
        linha = linha + "<td>" + matriz1[i][j] + "</td>";
    }
    linha = linha + "</tr>"
    document.write(linha);
}
document.write("</table></div>");
//MOSTRANDO MATRIZ 2
document.write("<div class=col-sm-4><table>")
for (i = 0; i < numlin; i++) {
    var linha = "<tr>";
    for (j = 0; j < numcol; j++) {
        linha = linha + "<td>" + matriz2[i][j] + "</td>";
    }
    linha = linha + "</tr>"
    document.write(linha);
}
document.write("</table></div>");
//MOSTRANDO MATRIZ SOMA
document.write("<div class=col-sm-4><table>")
for (i = 0; i < numlin; i++) {
    var linha = "<tr>";
    for (j = 0; j < numcol; j++) {
        linha = linha + "<td>" + soma(matriz1, matriz2)[i][j] + "</td>";
    }
    linha = linha + "</tr>"
    document.write(linha);
}
document.write("</table></div>");

document.write("</div></div>");











/*
//TESTE DE SOMA COM MATRIZES CRIADAS
//Declarando variáveis de ADIÇÃO
var matriz = new Array();
var matriz2 = new Array();
var soma = new Array();

//Colocando os valores
soma.push([0, 0, 0, 0]);
soma.push([0, 0, 0, 0]);
matriz.push([1, 2, 3, 4]);
matriz.push([5, 6, 7, 8]);
matriz2.push([10, 20, 30, 40]);
matriz2.push([50, 60, 70, 80]);

//Função para somar os números
function somam(matriz, matriz2) {
    for (var i = 0; i < matriz.length; i++) {
        for (var j = 0; j < matriz[i].length; j++) {
            soma[i][j] = matriz[i][j] + matriz2[i][j];
        }
    }
    return soma;
}

//Chamando a função
somam(matriz, matriz2);

//Mostrando a matriz do resultado de ADIÇÃO
document.write("<table>");
for (i = 0; i < soma.length; i++) {
    var linha = "<tr>";
    for (j = 0; j < soma[i].length; j++) {
        linha = linha + "<td>" + soma[i][j] + "</td>";
    }
    linha = linha + "</tr>"
    document.write(linha);
}
document.write("</table>");

*/
