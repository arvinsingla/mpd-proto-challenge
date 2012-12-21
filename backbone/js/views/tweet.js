var app = app || {};

$(function() {
  'use strict';

  // tweet Item View
  // --------------

  // The DOM element for a tweet item...
  app.tweetView = Backbone.View.extend({

    //... is a list tag.
    tagName:  'li',

    // Cache the template function for a single item.
    template: _.template( $('#item-template').html() ),

    // The DOM events specific to an item.
    events: {
    },

    initialize: function() {
    },

    // Re-render the titles of the tweet item.
    render: function() {
      this.$el.html( this.template( this.model.toJSON() ) );
      return this;
    },
  });
});
