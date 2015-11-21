/**
*Module Dependencies
*/

import $ from 'jquery'


$(function() {
  /**
   * Submit serach form
   */

   var $tvShowsContainer = $('#app-body').find('.tv-shows');

    $tvShowsContainer.on('click', 'button.like', function(ev){
        var $this = $(this);
        // $this.animate({
        //     'fontSize':'30px'
        // },   'fast');
        $this.closest('.tv-show').toggleClass('liked')
   })


   function renderShows(shows) {
    $tvShowsContainer.find('.loader').remove();
    shows.forEach(function (show) {
      var article = template
        .replace(':name:', show.name)
        .replace(':img:', show.image ? show.image.medium : '')
        .replace(':summary:', show.summary)
        .replace(':img alt:', show.name + " Logo")

      var $article = $(article)
      $article.hide();
      $tvShowsContainer.append($article.show());
    })
  }

  $('#app-body')
    .find('form')
    .submit(function (ev) {
      ev.preventDefault();
      var search = $(this)
        .find('input[type="text"]')
        .val();
      $tvShowsContainer.find('.tv-show').remove()
      var $loader = $('<div class="loader">');
      $loader.appendTo($tvShowsContainer)
      $.ajax({
        url: 'http://api.tvmaze.com/search/shows',
        data: { q: search},
        success: function(res, textStatus, xhr ) {
          $loader.remove();
          var shows = res.map(function(el){
            return el.show;
          })

          renderShows(shows);

        }

      })
    })

  var template = '<article class="tv-show">' +
          '<div class="left img-container">' +
            '<img src=":img:" alt=":img alt:">' +
          '</div>' +
          '<div class="right info">' +
            '<h1>:name:</h1>' +
            '<p>:summary:</p>' +
            '<button class="like">💙</button>'
          '</div>' +
        '</article>';
      

  if (!localStorage.shows) {
    
  } else {
    renderShows(JSON.parse(localStorage.shows));
  }
  
})