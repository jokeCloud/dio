//palíndromo
var palavra = "omississimo";

function invertePalavra (palavra) {
  let palavraReversa = palavra.split("").reverse().join("");
  return palavraReversa
}


function verificaPalindromo (palavra) {
  let inverteP = invertePalavra(palavra)
  if (inverteP === palavra) {
    console.log(`Padrão de palíndromo encontrado: ${palavra} e ${inverteP}.`)
  } else {
    console.log(`${palavra} e ${inverteP}, não é um palíndromo.`)
  }
}

verificaPalindromo(palavra)
verificaPalindromo('palavra')


//troca pares por 0
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function indicePares (arr) {
  let indicePares = []
  for (let i of arr) {
    if (i % 2 == 0) {
      indicePares.push(arr.indexOf(i))
    }
  }
  return indicePares
}

function substituiPares (arr) {
  if (!arr.length) {return -1} 

  let indices = indicePares(arr)
  for (let i of indices) {
    arr[i] = 0;
  }
  return arr
}

console.log(substituiPares([]))








