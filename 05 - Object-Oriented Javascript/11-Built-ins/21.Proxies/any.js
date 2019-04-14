const richard = {
  status: 'looking for work',
  nickname: 'richi'
};
const handler = {
  get(target, propName) {
    console.log(target);
    console.log(propName);
    return target[propName];
    // return target.propName;
  }
};
const agent = new Proxy(richard, handler);
console.log(agent.nickname);
console.log(agent.status);
// (1)logs the richard object, (2)logs the property being accessed, (3)returns the text in richard.status
