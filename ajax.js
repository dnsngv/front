$( document ).ready(function() {
    $("#modal").submit(
		function(e){
			sendAjaxForm('result', 'modal', 'action_ajax.php');
			return false; 
		}
	);
});

function sendAjaxForm(result, modal, url) {
    $.ajax({
        url:     'https://60376bfd5435040017722533.mockapi.io/form', //url страницы (action_ajax.php)
        type:     "POST", //метод отправки
        dataType: "html", //формат данных
        data: $("#"+modal).serialize(),  // Сеарилизуем объект
        success: function(response) { //Данные отправлены успешно
        	result = $.parseJSON(response);
			alert("Данные отправлены")
    	},
    	error: function(response) { // Данные не отправлены
			alert("Данные не отправлены")
    	}
 	});
}