/*
 * Programming Quiz: Using the Rest Parameter (1-5)
 */

// your code goes here

function average(...nums) {
  if (nums.length > 0) {
    let sum = 0;
    for (const num of nums) {
      sum += num;
    }
    return sum / nums.length;
  } else {
    return 0;
  }
}

console.log(average(2, 6));
console.log(average(2, 3, 3, 5, 7, 10));
console.log(average(7, 1432, 12, 13, 100));
console.log(average());
