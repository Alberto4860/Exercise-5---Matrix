/*
López Pérez Juan Alberto    ID:4860
Exercise 5 - Create a function to print a matrix
*/

//Primero declaro la funcion que imprimira la matriz
function Matrix(a) {
    //Uso un ciclo for para recorrer las filas de la matriz
    for (let i = 0; i < a; i++) {
        //Dentro del ciclo de filas, uso otro ciclo for para recorrer las columnas de la matriz
        let row = "";
        for (let j = 0; j < a; j++) {
            //En cada vuelta del ciclo de columnas, agrego el valor de la fila y columna
            row += `[${i},${j}] `;
        }
        //Al finalizar todos los for, imprimo la fila completa
        console.log(row);
    }
}
//Uso un prompt para que el usuario ingrese el tamaño de la matriz
let tamaño = parseInt(prompt("Ingrese el tamaño de la matriz: "))

Matrix(tamaño);


