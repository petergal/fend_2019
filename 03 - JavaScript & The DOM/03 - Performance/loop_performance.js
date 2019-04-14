const startingTime = performance.now();
for (let i = 1; i <= 100; i++) {
  for (let j = 1; j <= 100; j++) {
    console.log('i and j are: ', i, j);
  }
}
const endingTime = performance.now();
console.log('this code took' + (endingTime - startingTime) + ' ms');
