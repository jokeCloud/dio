const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const separaImparesPares = array => {
  const nPar = []
  const nImpar = []
  for (let i of array) {
    if (i % 2 == 0) {
      nPar.push(i)
    } else {
      nImpar.push(i)
    }
  }
  console.log(`Números pares: ${nPar}. Números ímpares: ${nImpar}`)
}

separaImparesPares(arr)

const nomes = ['E', 'M']

const printNames = names => {
  for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i])
  }
}
printNames(nomes)
