function KonamiCodeDetector(handler, code) {
  this.code = code || [38,38,40,40,37,39,37,39,66,65];
  if (handler) this.handler = handler;
  this.soFar = 0;
  window.addEventListener('keyup', (function (detector) {
	return function (e) { detector.listener(e); }
  })(this), false);
}

KonamiCodeDetector.prototype = {
  handler: function (event) { 
    console.log('30 lives'); 
  },
  listener: function (e) {
    if (this.code[this.soFar] == e.keyCode) {
      this.soFar++;
    } else {
      this.reset();
    }
    
    if (this.soFar == this.code.length) {
      this.handler();
      this.reset();
    }
  },
  reset: function () {
    this.soFar = 0;
  },
  detach: function () {
    window.removeEventListener('keyup', this.listener);
  }
};
