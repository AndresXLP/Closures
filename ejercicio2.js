function createContador() {
  let num = 0;
  return function () {
    num += 1;
    console.log(num);
  };
}
const contar = createContador();
contar();
contar();
contar();
