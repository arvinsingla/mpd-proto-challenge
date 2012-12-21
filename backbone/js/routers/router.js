var app = app || {};

(function() {
  'use strict';

  // tweet Router
  // ----------

  var Workspace = Backbone.Router.extend({
    routes:{
     '*filter': 'setFilter'
    },

    setFilter: function( param ) {
      // Set the current filter to be used
      window.app.tweetFilter = param.trim() || '';
  
      // Trigger a collection filter event, causing hiding/unhiding
      // of tweet view items
      window.app.tweets.trigger('filter');
    }
  });

  app.tweetRouter = new Workspace();
  Backbone.history.start();

}());
