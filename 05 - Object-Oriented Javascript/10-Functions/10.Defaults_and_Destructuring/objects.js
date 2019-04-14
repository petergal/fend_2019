function createSundae({
  scoops = 1,
  toppings = ['Hot Fudge']
}) {
  const scoopText = scoops === 1 ? 'scoop' : 'scoops';
  return `Your sundae has ${scoops} ${scoopText} with ${toppings.join(' and ')} toppings.`;
}

console.log(createSundae({})); // Your sundae has 1 scoop with Hot Fudge toppings.
console.log(createSundae({
  scoops: 2
})); // Your sundae has 2 scoops with Hot Fudge toppings.
console.log(createSundae({
  scoops: 2,
  toppings: ['Sprinkles', 'noch-ein-topping']
})); // Your sundae has 2 scoops with Sprinkles toppings.
console.log(createSundae({
  toppings: ['Cookie Dough']
})); // Your sundae has 1 scoop with Cookie Dough toppings.
