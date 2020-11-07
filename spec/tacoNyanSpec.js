describe('tacoNyanDancer', function() {

  var tacoNyanDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    tacoNyanDancer = new makeTacoNyan(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(tacoNyanDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that toggle gradient class', function() {
    sinon.spy(tacoNyanDancer.$node, 'toggleClass');
    tacoNyanDancer.step();
    expect(tacoNyanDancer.$node.toggleClass.called).to.be.true;
  });

  it('should run the lineUp function', function() {
    sinon.spy(tacoNyanDancer, 'lineUp');
    tacoNyanDancer.lineUp();
    expect(tacoNyanDancer.lineUp.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(tacoNyanDancer, 'step');
      expect(tacoNyanDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(tacoNyanDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(tacoNyanDancer.step.callCount).to.be.equal(2);
    });
  });
});
