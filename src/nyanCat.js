var makeNyanCat = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('nyanCat');
  // this.$node.html(<img>)
};

makeNyanCat.prototype = Object.create(makeDancer.prototype);
makeNyanCat.prototype.constructor = makeNyanCat;

makeNyanCat.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
  // Spins
  this.$node.fadeToggle();
};

makeNyanCat.prototype.lineUp = function(x) {
  this.$node.css('left', '85%');
  this.$node.css('top', x);
};