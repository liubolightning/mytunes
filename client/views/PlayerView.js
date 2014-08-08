// PlayerView.js - Defines a backbone view class for the music player.
// This view is related to SongModel.

var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  initialize: function() {
    this.$el.on('ended', (function(){this.model.dequeue();}).bind(this));
  },

  events: {
    'ended' : function(){
      this.model.ended();
    }
  },

  setSong: function(song){
    this.model = song;
    this.render();
  },

  render: function(){
    // if the song model exists, get the url for the song,
    // and add the url to the audio player.
    // url is listed in data/data.js.
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
