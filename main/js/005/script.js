function compararNumeros (a, b) {
  if (a === b) {
    console.log(`${a} e ${b} são iguais.`)
  } else if (a != b && (a+b) < 10) {
    console.log(`Os números ${a} e ${b} não são iguais. Sua soma é: ${a+b}. E sua soma é menor que 10 e menor que 20.1`)
  } else if (a != b && (a+b) > 10 && (a+b) > 20) {
    console.log(`Os números ${a} e ${b} não são iguais. Sua soma é: ${a+b}. E sua soma é maior que 10 e maior que 20.2`)
  } else {
    console.log(`Os números ${a} e ${b} não são iguais. Sua soma é: ${a+b}. E sua soma é maior que 10 e menor que 20.3`)
  }
}

function verifica (a, b) {
  if ((a+b) > 10 && (a+b) < 20 ) {
    console.log(`${a} + ${b} é maior que 10 e menor que 20.`)
  } else if ((a+b) < 10) {
    console.log(`${a} + ${b} é menor que 10.`)
  } else {
    console.log(`${a} + ${b} é maior que 20.`)
  }
}

compararNumeros(17, 2)
verifica(19, 2)