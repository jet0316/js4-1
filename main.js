$(document).ready(function(){

	$('.first-button').click(function(){
		console.log('first button has been clicked')
		$('body').append('<p>This is a button!</p>')
	});

	$('.header-button').click(function(){
		console.log('header button has been clicked')
		$('body').append('<p><h1>BIG BUTTON!</h1></p>')
	});

	$('.button-list').click(function(){
		console.log('list button has been clicked')
		$('body').append('<ul><li>Number 1</li><li>Number 2</li><li>Number 3</li></ul>')
	});

	$('.paragraph').hover(function(){
		$(this).css('color', 'pink')
	}, function(){
		$(this).css('color', 'black')
	});

	$('.header').append( $( '<span>!!!</span>' ) )

	$('.link').click(function(){
		var confirmed = confirm('Are you sure?')
		if (!confirmed){
			$(this).hide()
			return false
			}
	});

	$('.giant-button').on('click', function(){
		$('.popup').append('<div class="popup-box">this is a popup!! <br /><button class="close-button">close</button></div>')
		$('body').css('background-color', 'gray')
			$('.close-button').on('click', function(){
			$('.popup-box').hide()
			$('body').css('background-color', 'white')
		});

	});

});

