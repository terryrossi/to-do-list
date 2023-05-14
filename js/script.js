// const toDoListApp = (function newItem() {
$(document).ready(function () {
	$(window).keydown(function (event) {
		if (event.keyCode == 13) {
			event.preventDefault();
			return false;
		}
	});
});

function newItem() {
	const list = $('#list');
	const inputValue = $('#input').val();
	const li = $(`<li>${inputValue}</li>`);

	if (inputValue.length < 1) {
		alert('Please enter an Item to add on the list');
	} else {
		list.append(li);
		$('#input').val('');
	}
	// Crossing out an Item from the list of items
	// function crossOut() {
	// 	li.toggleClass('strike');
	// }
	// li.on("dblclick", crossOut);
	li.on('click', function crossOut() {
		li.toggleClass('strike');
	});

	// ADDING DELETE BUTTON 'X'
	const crossOutButton = $(`<crossOutButton>X</crossOutButton>`);
	li.append(crossOutButton);

	crossOutButton.on('click', deleteListedItem);

	function deleteListedItem() {
		li.addClass('delete');
	}

	// MAKE LIST RE-ORDERABLE
	$('#list').sortable();
	// return {
	// 	newItem,
}
// })();
