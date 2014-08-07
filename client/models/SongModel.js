// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({
  // when play is invoke, it emits a play event

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    // When we click on song title in playlist, song is going to
    // be played.
    this.trigger('play', this);
  },

  // when we click on song title in library, song is
  // added to the queue
  enqueue : function(){
    //alert('enqueue');


    this.trigger('enqueue', this);
    // this.collection.push(this);
     console.log('enqueue ');

   // add song to songQueue


  },

  // when we click a removeSong button in playlist, song is
  // removed from the queue.
  dequeue : function(){
    this.trigger('dequeue', this);
  },

  // when the song ends, song is removed from the queue
  // which triggers event ended.
  ended : function(){
    this.trigger('ended', this);
  },

});
