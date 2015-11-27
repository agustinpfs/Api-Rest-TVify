import $ from 'jquery'

var $tvShowsContainer = $('#app-body').find('.tv-shows')

$tvShowsContainer.on('click', 'button.like', function (ev) {
  var $this = $(this);
  var id = $this.data('id') // return data-id(index.js-render)
  $.post('/api/vote/' + id, function(){  //ajax jquery
  	$this.closest('.tv-show').toggleClass('liked')
  })  
})

export default $tvShowsContainer