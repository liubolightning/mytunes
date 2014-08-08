// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({
  // when play is invoke, it emits a play event
  // When we click on song title in playlist, song is going to
  // be played.
  play: function(){
    this.trigger('play', this);
  },

  enqueue: function(){
  	this.trigger('enqueue', this);
  },

  dequeue: function(){
  	this.trigger('dequeue', this);
  }

});
