function exercicio2NaSequenciaDeFibonacci(n) {
    let fibAnterior = 0;
    let fibAtt = 1;
    
    if (n === 0) {
      return true;
    }

    while (fibAtt <= n) {
      if (fibAtt === n) {
        return true;
      }
      
      const temp = fibAtt;
      fibAtt = fibAnterior + fibAtt;
      fibAnterior = temp;
    }
    
    return false;
  }
  
  // Exemplo com o número 25
  const num = 25;
  const pertence = exercicio2NaSequenciaDeFibonacci(num);
  
  if (pertence) {
    console.log(num + " pertence à sequência de Fibonacci.");
  } else {
    console.log(num + " não pertence à sequência de Fibonacci.");
  }
  