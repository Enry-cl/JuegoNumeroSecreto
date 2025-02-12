// desafios

// 1. Crea una lista vacia llamada "listaGenerica"
let  listaGenerica = [];
console.log(listaGenerica);

//2. Crea Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los 
// siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguajesDeProgramacion = ["JavaScript", "C", "C++", "Kotlin", "Python"];
console.log(lenguajesDeProgramacion);

// 3. Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguajesDeProgramacion.push("Java", "Ruby", "GoLang");
console.log(lenguajesDeProgramacion);

// 4. Crea una función que muestre en la consola todos los elementos de la 
// lista "lenguagesDeProgramacion.
function mostrarLenguagesSeparadamente() {
    for (let i = 0; i < lenguajesDeProgramacion.length; i++) {
      console.log(lenguajesDeProgramacion[i]);
    }
  }
  
  mostrarLenguagesSeparadamente();

// 5. Crea una función que muestre en la consola todos los elementos de la 
// lista "lenguagesDeProgramacion en orden inverso.
function mostrarLenguagesReversoSeparadamente() {
    for (let i = lenguajesDeProgramacion.length - 1; i >= 0; i--) {
      console.log(lenguajesDeProgramacion[i]);
    }
  }
  
  mostrarLenguagesReversoSeparadamente();

// 6. Crea una función que calcule el promedio de los elementos en una lista de números.
function calcularMedia(lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
      suma += lista[i];
    }
    return suma / lista.length;
  }
  
  let numeros = [10, 20, 30, 40, 50];
  let media = calcularMedia(numeros);
  console.log('Média:', media);

// 7. Crea una función que muestre en la consola el número más grande y el número más pequeño en una 
// lista.
function encontrarMayorMenor(lista) {
    let mayor = lista[0];
    let menor = lista[0];
  
    for (let i = 1; i < lista.length; i++) {
      if (lista[i] > mayor) {
        mayor = lista[i];
      }
      if (lista[i] < menor) {
        menor = lista[i];
      }
    }
  
    console.log('Mayor:', mayor);
    console.log('Menor:', menor);
  }
  
  let numerosNuevos = [15, 8, 25, 5, 12];
  encontrarMayorMenor(numerosNuevos);

// 8. Crea una función que devuelva la suma de todos los elementos en una lista.
function calcularSuma(lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
      suma += lista[i];
    }
    return suma;
  }
  
  let numerosNuevos2 = [15, 8, 25, 5, 12];
  let suma = calcularSuma(numerosNuevos2);
  console.log('Suma:', suma);

// 9. Crea una función que reciba una lista como parámetro y retorne el índice de un elemento 
// también pasado como parámetro. Si ese elemento no existe en la lista, retorna -1.
function encontrarIndiceElemento(lista0, elemento) {
    for (let i = 0; i < lista0.length; i++) {
        console.log(lista0[i], elemento);
      if (lista0[i] === elemento) {
        return i; // Retorna el índice del elemento encontrado
      }
    }
    return -1; // Retorna -1 si el elemento no se encuentra en la lista
    console.log(lista0, elemento);
  }
  lista0 = [15, 8, 25, 5, 12];
  elemento = 1
  encontrarIndiceElemento(lista0, elemento);
  


// 10. Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva 
// lista con la suma de los elementos uno a uno.
function sumarListas(lista1, lista2) {
    return lista1.map((num, index) => num + lista2[index]);
}

const lista1 = [1, 2, 3];
const lista2 = [4, 5, 6];
const resultado = sumarListas(lista1, lista2);
console.log(resultado);

// 11. Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado 
// de cada número.
function cuadradoLista(listaU) {
    return listaU.map(num => num ** 2);
}

const listaU = [2, 3, 4];
const resultadoU = cuadradoLista(listaU);
console.log(resultadoU); 


