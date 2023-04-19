function simpleCal (num1, num2){
  const add = num1 + num2;
  const sub = num1 - num2;
  const mul = num1 * num2;
  const div = num1 / num2;
  console.log(add, sub, mul, div);
}
simpleCal(10,5);

module.exports = simpleCal;