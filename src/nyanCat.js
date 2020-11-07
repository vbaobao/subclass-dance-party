var makeNyanCat = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('nyanCat cat');
  this.$node.html('<img src="assets/happy_cat.png"></img>');
};

makeNyanCat.prototype = Object.create(makeDancer.prototype);
makeNyanCat.prototype.constructor = makeNyanCat;

makeNyanCat.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.fadeToggle();
};

makeNyanCat.prototype.lineUp = function(x) {
  this.$node.css('left', '85%');
  this.$node.css('top', x);
};