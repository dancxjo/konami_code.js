function KonamiCodeDetector(handler, keys, code) {
  this.keys = keys;
  this.code = code;
  this.soFar = 0;
  this.handler = handler;
  window.addEventListener('keypress', this.listener, false);
}

KonamiCodeDetector.prototype = {
  code: [38,38,40,40,37,39,37,39,17,18],
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
    this.soFar = [];
  },
  detach: function () {
    window.removeEventListener('keypress', this.listener);
  }
};
