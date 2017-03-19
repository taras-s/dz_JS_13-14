'use strict';

// =========================================== Test Data and Saving

var quest = {items:[
	{	question: "Кто у нас нехищный?",
		correct: 3,
		answer: ["Лисичка", "Волчик", "Заяц"]
	},

	{	question: "Чего не хотим на десерт?",
		correct: 4,
		answer: ["Пироженых", "Селедочку","Тортиков", "Дурацкий вопрос!"]
	},

	{	question: "Что хотите написать?",
		correct: 1,
		answer: ["Пост в ФБ", "Декларацию о налогах", "Объяснительную начальнику"]
	}
]};



$(document).ready(function() {

	$("#data-modify").on('click', function(){						// on CHECK BUTTON click
				// console.log("SHOW RES:", this);

		if ( $(this).hasClass('reset-data') ) {			// WIPE DATA
			$(this).removeClass('reset-data').val('Сохранить данные теста');

			document.getElementById("results").innerHTML = 
			'<br><b>Нет данных в localStorage</b><br>Чтобы начать тестирование, нажмите кнопку ниже';

			localStorage.clear('test');
		}

		else {														// save to localStorage
			localStorage.setItem( 'test', JSON.stringify(quest) );

			// console.log('=============\nto save>', JSON.stringify(quest));
			// console.log('=============\nrestored>', JSON.parse(localStorage.getItem('test') );

			document.getElementById("results").innerHTML =  
			'<br><b>Данные сохранены в localStorage</b><br>Начинайте тестирование';

			$(this).addClass('reset-data').val('Очистить память');
		}

	});



});
