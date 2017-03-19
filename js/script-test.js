'use strict';
// =========================================== restore & template

$(function(){

	var results = document.getElementById("results");

	if (localStorage.getItem('test')) {

		var restored = JSON.parse(localStorage.getItem('test') );
		// console.log('=============\nrestored>', restored);

		results.innerHTML = tmpl("item_tmpl", restored);
	}

	else {
		results.innerHTML = 
		'<br><b>Нет данных в localStorage</b><br>Нажмите кнопку "Сохранить данные теста"';
	}

});


// ===================================================== event handlers

$(document).ready(function() {


	$("#check-button").on('click', function(){						// on CHECK BUTTON click
				// console.log("SHOW RES:", this);
				// console.log(  $("li input").filter(".tru")   );


		if ( $("#check-button").hasClass('reset-data') ) {			// reset

			$(this).removeClass('reset-data').val('Проверить мои результаты');
			$("li input").removeClass('checked-false checked-true').prop( "checked", false );
		}

		else {														// show results

			$("li input").filter(".fal").each( function() { 
					if ( $(this).prop("checked") ) { $(this).addClass("checked-false"); } });

			$("li input").filter(".tru").each( function() { 
					if ( $(this).prop("checked") ) { $(this).addClass("checked-true"); } });

			$(this).addClass('reset-data').val('Сброс');
		}

	});

});