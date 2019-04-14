// constructor
function IceCream() {
  console.log('new IceCream');
  this.scoops = 0;
}
// // adds scoop to ice cream
// IceCream.prototype.addScoop = function() {
//   setTimeout(function() {
//     this.scoops++;
//     console.log('scoop added!');
//   }, 500);
// };
// const dessert = new IceCream();
// dessert.addScoop();
//
// console.log(dessert.scoops);


// adds scoop to ice cream
IceCream.prototype.addScoopClosure = function() {
  const cone = this; // sets `this` to the `cone` variable
  console.log('this: ');
  console.log(this);
  setTimeout(function() {
    cone.scoops++; // references the `cone` variable
    console.log('setTimeout function: ' + 'scoop added!');
    console.log('setTimeout function: ' + cone.scoops);
  }, 0.5);
};
const dessertClosure = new IceCream();
dessertClosure.addScoopClosure();
console.log('result: ' + dessertClosure.scoops);

// ACHTUNG setTimeout ;-)
