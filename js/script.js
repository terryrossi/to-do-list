function newItem() {
	const list = $("#list");
	const inputValue = $("#input").val();
	const li = $(`<li>${inputValue}</li>`);
	list.append(li);

	// Crossing out an Item from the list of items
	function crossOut() {
		li.toggleClass("strike");
	}
	li.on("click", crossOut);
	// li.on("dblclick", function crossOut() {
	// 	li.toggleClass("strike");
	// });

	// ADDING DELETE BUTTON 'X'
	const crossOutButton = $(`<crossOutButton>X</crossOutButton>`);
	li.append(crossOutButton);

	crossOutButton.on("click", deleteListedItem);

	function deleteListedItem() {
		li.addClass("delete");
	}

	// MAKE LIST RE-ORDERABLE
	$("#list").sortable();
}
