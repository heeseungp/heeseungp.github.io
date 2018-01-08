$( document ).ready(function() {
	$(".nav-item").addClass("topmenu");
	$(".topmenu").addClass("ml-4").addClass("mr-4");
	$("h5 > a").addClass("experience");

	// Tooltip
	$('button').tooltip({
	trigger: 'click',
	placement: 'bottom'
	});

	function setTooltip(btn, message) {
	$(btn).tooltip('hide')
	    .attr('data-original-title', message)
	    .tooltip('show');
	}

	function hideTooltip(btn) {
	setTimeout(function() {
	    $(btn).tooltip('hide');
	}, 1000);
	}

	// Clipboard
	var clipboard = new Clipboard('.btn');

	clipboard.on('success', function(e) {
	setTooltip(e.trigger, 'Copied!');
	hideTooltip(e.trigger);
	});

	clipboard.on('error', function(e) {
	setTooltip(e.trigger, 'Failed!');
	hideTooltip(e.trigger);
	});


});
