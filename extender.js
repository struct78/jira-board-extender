(function() {
	var jira_container = document.getElementById('ghx-column-header-group');
	var jira_lanes = document.querySelectorAll('.ghx-swimlane');
	var columns = document.querySelectorAll('.ghx-columns .ghx-column');

	if ( jira_container ) {
		if ( columns.length > 10 ) {
			var width = parseInt(getComputedStyle(jira_container).width);
			var multiplier = 1;

			if ( width < 2000 ) {
				multiplier = 2;
			}

			if ( width < 1000 ) {
				multiplier = 4;
			}

			if ( width < 500 ) {
				multiplier = 8;
			}

			width = width * multiplier;
			jira_container.style.width = width + 'px';
			jira_container.style.position = 'relative';
			jira_container.style.top = '0px';
			jira_container.style.left = '0px';

			for ( var x = 0 ; x < jira_lanes.length ; x++ ) {
				var lane = jira_lanes[x];
				lane.style.width = width + 'px';
			}
		}
	}
})();
