const proxyObj = new Proxy({
  age: 5,
  height: 4
}, {
  get(targetObj, property) {
    console.log(`getting the ${property} property`);
    console.log(targetObj[property]);
  }
});
proxyObj.age; // logs 'getting the age property' & 5
proxyObj.height; // logs 'getting the height property' & 4
proxyObj.weight = 120; // set a new property on the object
proxyObj.weight; // logs 'getting the weight property' & 120
// console.log(proxyObj); 
