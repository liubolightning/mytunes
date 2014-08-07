// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  // default: when you click on song, it invokes play() which
  // triggers play event.

  // to do (extra): when you click on a song, it invokes on addToPlayList()
  // which will trigger addToPlayList event
  events: {
    'click': function() {
      this.model.play();
      this.model.enqueue();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
