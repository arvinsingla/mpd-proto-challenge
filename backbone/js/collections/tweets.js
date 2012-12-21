var app = app || {};

(function() {
    'use strict';

    // tweet Collection
    // ---------------

    var TweetList = Backbone.Collection.extend({
      // Reference to this collection's model.
      model: app.tweet,
      url: 'http://localhost/backbone/tweets.json'
    });

    // Create our global collection of **tweets**.
    app.tweets = new TweetList();

}());
