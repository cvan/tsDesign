$(document).ready(function(){
	//mobile menu controls
	$('#mobileMenu a').click(function(e){
		e.preventDefault();
		alert('bob!!!');
		$('#topMenu').toggle('blind',200);
		
	});
});