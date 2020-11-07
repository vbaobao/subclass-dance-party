describe('nyanCatDancer', function() {

  var nyanCatDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    nyanCatDancer = new makeNyanCat(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(nyanCatDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node fadeToggle', function() {
    sinon.spy(nyanCatDancer.$node, 'fadeToggle');
    nyanCatDancer.step();
    expect(nyanCatDancer.$node.fadeToggle.called).to.be.true;
  });

  it('should run the lineUp function', function() {
    sinon.spy(nyanCatDancer, 'lineUp');
    nyanCatDancer.lineUp();
    expect(nyanCatDancer.lineUp.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(nyanCatDancer, 'step');
      expect(nyanCatDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(nyanCatDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(nyanCatDancer.step.callCount).to.be.equal(2);
    });
  });
});
