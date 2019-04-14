const circle = {
  radius: 10,
  color: 'orange',
  getArea: function() {
    return Math.PI * this.radius * this.radius;
  },
  getCircumference: function() {
    return 2 * Math.PI * this.radius;
  }
};

let {radius, getArea, getCircumference, color} = circle;
console.log(radius);
console.log(getArea);
console.log(getArea()); // NaN
console.log(getCircumference)
console.log(getCircumference())
console.log(color); // orange
