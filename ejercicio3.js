function createGame() {
  const numRandom = Math.floor(Math.random() * 5 - 1 + 1) + 1;
  console.log(numRandom);
  return function valid(num) {
    while (num !== numRandom && typeof num !== "undefined") {
      if (num > numRandom) {
        return "Numero Alto";
      } else {
        return "Muy Bajo";
      }
    }
    if (num === numRandom) {
      return "Felicidades numero Correcto";
    }
    return "Por favor ingrese un numero";
  };
}

const guess = createGame();
// console.log(guess());
console.log(guess(3));
console.log(guess(4));
console.log(guess(5));
