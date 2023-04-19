// function reverseStr (string) {
//   let splitStr = string.split("");
//   let revStr = splitStr.reverse("");
//   let joinStr = revStr.join("");
//   console.log(joinStr);
// }
// reverseStr('hello');

function reverseStr (string) {
  let revStr = string.split("").reverse("").join("");
  console.log(revStr);
}
reverseStr('hello');

module.exports = reverseStr;