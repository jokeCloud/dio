const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function pares(arr) {
  return arr.filter(filtro)
}

function filtro(item) {
  return item % 2 === 0
}

function pares1(arr) {
  return arr.filter(function (item) {
    return item % 2 === 0
  })
}

function impares(arr) {
  return arr.filter(function (item) {
    return item % 2 !== 0               
  })
}

console.log(pares(arr))

console.log(pares1(arr))

console.log(impares(arr))