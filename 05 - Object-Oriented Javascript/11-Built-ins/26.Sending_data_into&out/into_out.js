function* getEmployee() {
  const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita',
    'Orit', 'Richard'
  ];
  const facts = [];
  for (const name of names) {
    // yield *out* each name AND store the returned data into the facts array
    facts.push(yield name);
  }
  return facts;
}
const generatorIterator = getEmployee();
// get the first name out of the generator
let name = generatorIterator.next().value;
// pass data in *and* get the next name
name = generatorIterator.next(`${name} is cool!`).value;
// pass data in *and* get the next name
name = generatorIterator.next(`${name} is awesome!`).value;
// pass data in *and* get the next name
name = generatorIterator.next(`${name} is stupendous!`).value;
// you get the idea
name = generatorIterator.next(`${name} is rad!`).value;
name = generatorIterator.next(`${name} is impressive!`).value;
name = generatorIterator.next(`${name} is stunning!`).value;
name = generatorIterator.next(`${name} is awe-inspiring!`).value;
// pass the last data in, generator ends and returns the array
const positions = generatorIterator.next(`${name} is magnificent!`).value;
// displays each name with description on its own line
console.log(positions.join('\n'));
