const t0 = performance.now();
const myCustomDiv = document.createElement('div');
for (let i = 1; i <= 200; i++) {
  const newElem = document.createElement('p');
  newElem.innerText = 'para number ' + i;
  myCustomDiv.appendChild(newElem);
}
document.body.appendChild(myCustomDiv);
const t1 = performance.now();
console.log("This code took " + (t1 - t0) + "ms.");

const t10 = performance.now();
const fragment = document.createDocumentFragment();
for (let i = 0; i < 200; i++) {
  const newElement = document.createElement('p');
  newElement.innerText = 'This is paragraph number ' + i;

  fragment.appendChild(newElement);
}
document.body.appendChild(fragment);
const t11 = performance.now();
console.log("This code took " + (t11 - t10) + "ms.");
