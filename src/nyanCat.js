var makeNyanCat = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeNyanCat.prototype = Object.create(makeDancer.prototype);
makeNyanCat.prototype.constructor = makeNyanCat;

makeNyanCat.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
  // Spins
  this.$node.toggle();
};