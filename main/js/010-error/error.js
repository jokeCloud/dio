function validaArr(arr, num) {
  try {
  
  if (!arr && !num) throw new ReferenceError('Não foram enviados parâmetros - verifique!');
  if (typeof arr !== 'object') throw new TypeError('Não foi enviado um array como parâmetro - verifique!');
  if (typeof num !== 'number') throw new TypeError('Não foi enviado um número como parâmetro - verifique!');
  if (arr.length !== num) throw new RangeError('Array com tamanho diferente do número enviado - verifique!');
  
  return arr

  } catch (e) {
    
    let m = console.log(`${e.name}: ${e.message}`) 

    if (e instanceof ReferenceError) {
      return m
    } else if (e instanceof TypeError) {
      return m
    } else if (e instanceof RangeError) {
      return m
    } else {
    console.log('Erro inesperado: ' + e)
    }
  }
}

validaArr([1, 2, 3], 1*9)


