var makeTacoNyan = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node.addClass('tacoNyan cat');
  this.$node.html('<img src="assets/neutral_cat.png"></img>');

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

makeTacoNyan.prototype = Object.create(makeDancer.prototype);
makeTacoNyan.prototype.constructor = makeTacoNyan;

makeTacoNyan.prototype.step = function() {
  this.$node.toggleClass('gradient');
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

makeTacoNyan.prototype.lineUp = function(y) {
  this.$node.css('top', '85%');
  this.$node.css('left', y);
};