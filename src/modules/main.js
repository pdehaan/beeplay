// constructor
module.exports = function (option) {
  option = (typeof option === 'object') ? option : {};
  // Song object meta info {{{
  this.bpm = option.bpm || 120;
  this.sampleRate = option.sampleRate || 44100;
  this.key = option.key || 'C';
  this.time = option.time || '4/4';
  // }}}

  this.stack = [];
  this.currentTime = 0;
  try {
    var AudioContext = window.AudioContext ||
      window.webkitAudioContext ||
      window.mozAudioContext ||
      window.oAudioContext ||
      window.msAudioContext;
    this.context = window.__audioContext__ || new AudioContext();
    this.context.sampleRate = this.sampleRate;
    window.__audioContext__ = this.context;
  } catch(e) {
    console.error(e.message);
  }
  return this;
};
