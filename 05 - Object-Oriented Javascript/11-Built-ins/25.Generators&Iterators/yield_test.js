function* udacity() {
  console.log('the beginning');
  yield 'Richard';
  yield 'James';
  console.log('the end');
}

const iter = udacity();
console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next());
