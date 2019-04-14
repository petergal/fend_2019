const chameleon = {
  eyes: 2,
  lookAround: function() {
    console.log(`
      I see
      you
      with my
      ${this.eyes} eyes!`);
  }
};

chameleon.lookAround();
