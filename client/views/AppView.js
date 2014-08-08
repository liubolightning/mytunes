// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params){

    this.playerView = new PlayerView({model: this.model.get('currentSong')});

    this.libraryView = new LibraryView({collection: this.model.get('library')});
    this.playerListView = new SongQueueView({collection: this.model.get('songQueue')});


    //add songQueueView here

    this.model.on('change:currentSong', function(){
      this.playerView.setSong(this.model.get('currentSong'));
    }, this);
  },

  render: function(){
    return this.$el.html([
      this.playerView.$el,
      this.libraryView.$el,
      this.playerListView.$el
    ]);
  }
});
