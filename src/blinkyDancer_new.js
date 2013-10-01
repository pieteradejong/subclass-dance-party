var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
	return new BlinkyDancer(top, left, timeBetweenSteps);
}

var BlinkyDancer = function (top, left, timeBetweenSteps) {

  var blinkyDancer = {};
  var oldStep = Dancer.prototype.step;
  return blinkyDancer;
}

BlinkyDancer.prototype = new Dancer();
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.step = function () {
  oldStep();
  blinkyDancer.$node.toggle();
}