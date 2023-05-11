//CRIANDO A MATRIZ QUE SERÁ TRANSPOSTA
var matriz = new Array();
var numcol = parseInt(Math.random() * 5) + 1; //declara uma váriavel do número de colunas(número de casas dentro da matriz) 
//que vai gerar um número aleatório inteiro de colunas de 1 a 5
var numlin = parseInt(Math.random() * 5) + 1; //declara uma váriavel do número de linhas(número de matrizes dentro da matriz) 
//que vai gerar um número aleatório inteiro de linhas de 1 a 5

//GERANDO OS VALORES DA MATRIZ QUE SERÁ TRANSPOSTA
for ( var i = 0; i < numlin; i++) { //fazendo um laço de repetição que irá criar as matrizes interiores que serão as linhas
    var matrizinterna = new Array(); //repetindo a criação da matriz interna 1 até dar o número de linhas gerado
    for ( var j = 0; j < numcol; j++) { //fazendo um laço de repetição para colocar valores dentro do número de colunas gerado
        var valor = parseInt(Math.random() * 50); //criando os valores que serão colocados na matriz 1
        matrizinterna[j] = valor; //colocando os valores aleatórios dentro da matriz interna 1
    }
    matriz.push(matrizinterna); //colocando a matriz interna (linhas) dentro da matriz 1
}

//FAZENDO A TRANSPOSIÇÃO
function transposicao(matriz){
    var mtransp = new Array();
    for ( var m1 = 0; m1 < numcol; m1++){
        var matrizint = new Array();
        for ( var m2 = 0; m2 < numlin; m2++) {
            matrizint[m2] = matriz[m2][m1];
        }
        mtransp.push(matrizint);
    }

    return mtransp;
}

console.table(matriz);
console.table(transposicao(matriz));