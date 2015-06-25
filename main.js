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
		$('body').append('<ul><li>Money</li><li>Cars</li><li>Ladies</li></ul>')
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
		$('.popup').append('this is a popup!!').css({
			'position' : 'fixed',
			'background-color' : 'peachpuff',
			'margin' : 'auto',
			'width' : '50%',
			'height' : '50%',
			'top' : '100px',
			'text-align' : 'center',
			'verticle-align' : 'middle',
			'line-height' : '25px'
		})
	});



});

