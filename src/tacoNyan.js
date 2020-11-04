var makeTacoNyan = function(top, left, timeBetweenSteps) {
  //var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node.addClass('tacoNyan');

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

makeTacoNyan.prototype = Object.create(makeDancer.prototype);
makeTacoNyan.prototype.constructor = makeTacoNyan;

makeTacoNyan.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
  this.$node.toggleClass('gradient');
  // Spin + changes size
  setInterval(this.step.bind(this), this.timeBetweenSteps);
};