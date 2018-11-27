var g = G$('Seba', 'Wacki');

g.greet().setLang('pl').greet(true).log();

$('#login').click(function() {

	var loginGrtr = G$('Seba', 'Glo');

	$('#logindiv').hide();

	loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();

});