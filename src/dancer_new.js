function Dancer(top, left, timeBetweenSteps) {
  var dancer = {};

  this.$node = $('<span class="dancer"></span>');
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;

  this.step();
}

Dancer.prototype = {

  step : function() {
	setTimeout(this.step, timeBetweenSteps);
  },

  setPosition : function(top, left){
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  }

 // this.step();
}