function Cat(name) {
  this.name = name;
  this.sayName = function() {
    console.log(`Meow! My name is ${this.name}`);
  };
}

const bailey = new Cat('Bailey');
bailey.sayName();
