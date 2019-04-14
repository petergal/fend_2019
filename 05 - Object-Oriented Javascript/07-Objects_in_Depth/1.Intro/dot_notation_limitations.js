const bicycle = {
  color: 'blue',
  type: 'mountain bike',
  wheels: {
    diameter: 18,
    width: 8
  }
};
console.log(bicycle);
const myVar = 'color';
console.log(bicycle[myVar]);//blue
console.log(bicycle.myVar);//undefind
