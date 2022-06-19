// make a function that inputs text and registers item as hav or need

$(function() {
	var callback = function(event) {
		event.preventDefault();
		var input = $('input[type=text][name=item]'),
			value = input.val(),
			need = ($(event.target).attr('id') === 'addNeed'),
			item = $('<li><input type="checkbox" name="item"> ' + value + ' <a href="#">remove</a></li>'),
			list = (need) ? $('ul').first() : $('ul').last();
		
		input.val("");
		input.focus();

        // then make if funtions to add to the work flow of function, so if you have the item click need if not click have in this case its true if you need it check in th needed if not uncheck in the have and vice versa.

		if (value === "") return;

		if (!need) {
			item.find('input').attr('checked', true);
		}
		item.appendTo(list);
	}

	$('#addHave, #addNeed').click(callback);
	
	$('ul').on('click', 'li a', function(event){
		$(event.target).parent('li').remove();
	});

	$('ul').on('click', 'input[type=checkbox]', function(event){
		var listItem = $(event.target).parent('li'),
			list = (event.target.checked) ? $('ul').last() : $('ul').first();
		listItem.appendTo(list);
	});
});