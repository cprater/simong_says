$(document).ready(function(){

	$('#get_color').on('click', function(event){
		event.preventDefault();
		
		var data;

		$.post('/color', data, function(serverResponse){
			var cell = serverResponse["cell"];
			var color = {'background-color': serverResponse["color"]};
			console.log(cell);
			$('#color_me > li:nth-child('+cell+')').css(color);
		}, 'json');
	});

});