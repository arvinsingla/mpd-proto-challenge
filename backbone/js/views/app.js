var app = app || {};

$(function( $ ) {
  'use strict';

  // The Application
  // ---------------

  // Our overall **AppView** is the top-level piece of UI.
  app.AppView = Backbone.View.extend({

    // Instead of generating a new element, bind to the existing skeleton of
    // the App already present in the HTML.
    el: '#tweetapp',

    // Our template for the line of statistics at the bottom of the app.
    statsTemplate: _.template( $('#stats-template').html() ),

    // Delegated events for creating new items, and clearing completed ones.
    events: {
      // 'click #toggle-all': 'toggleAllComplete' Example of a view driven event
    },

    // At initialization we bind to the relevant events on the `tweets`
    // collection
    initialize: function() {
      this.$footer = this.$('#footer');
      this.$main = this.$('#main');

      window.app.tweets.on( 'add', this.addOne, this );
      window.app.tweets.on( 'reset', this.addAll, this );
      window.app.tweets.on( 'all', this.render, this );

      app.tweets.fetch();
    },

    // Re-rendering the App just means refreshing the statistics -- the rest
    // of the app doesn't change.
    render: function() {

      if ( app.tweets.length ) {
        this.$main.show();
        console.log(this.$main);
      } else {
        this.$main.hide();
        this.$footer.hide();
      }
    },

    // Add a single tweet item to the list by creating a view for it, and
    // appending its element to the `<ul>`.
    addOne: function( tweet ) {
      var view = new app.tweetView({ model: tweet });
      $('#tweet-list').append( view.render().el );
    },

    // Add all items in the **tweets** collection at once.
    addAll: function() {
      this.$('#tweet-list').html('');
      app.tweets.each(this.addOne, this);
    },

    // Example of views event
    //toggleAllComplete: function() {
    //  var completed = this.allCheckbox.checked;
    //
    //  app.tweets.each(function( tweet ) {
    //    tweet.save({
    //     'completed': completed
    //    });
    //  });
    //}
    
  });
});
