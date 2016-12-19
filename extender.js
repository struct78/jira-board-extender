function extendBoard() {
	var swimlane = document.querySelectorAll('#ghx-pool .ghx-swimlane');
	var body = document.getElementsByTagName('body');
	var total = 0;

	[].forEach.call(swimlane, function(item) {
		var count = item.querySelectorAll('li.ghx-column');
		item.classList.add( 'struct-jira-board-extender' );
		item.classList.add( 'struct-jira-board-extender-' + count.length );

		total = ( count > total ) ? count : total;
	});

	body[0].classList.add( 'struct-jira-board-extender-' + total );
}

document.addEventListener('DOMNodeInserted', extendBoard);
