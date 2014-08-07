// SongQueue.js - Defines a backbone model class for the song queue.

//Songs is a Collection of song
var SongQueue = Songs.extend({

  initialize: function(){
    //console.log(this, 'queue');
    this.on('enqueue', this.addSongToQueue, this);
  },

  add: function (song){
    this.models.push(song);
    // console.log(song, 'add song to queue');

  },

  playFirst: function(){
    console.log('playFirst');
  }

});
