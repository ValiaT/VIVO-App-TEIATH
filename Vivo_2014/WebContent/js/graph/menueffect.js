$(document).ready(function() {
		
			// Toggle the dropdown menu's
			$(".dropdown .button, .dropdown button").click(function () {
				if (!$(this).find('span.toggle').hasClass('active')) {
					$('.dropdown-slider').slideUp();
					$('span.toggle').removeClass('active');
				}
       
        // open selected dropown
				$(this).parent().find('.dropdown-slider');
				$(this).find('span.toggle').toggleClass('active');
				$(this).parent().find('.dropdown-slider').slideToggle('fast');

				return false;
			});
		
		});
		
		// Close open dropdown slider by clicking elsewhwere on page
		$(document).bind('click', function (e) {
			if (e.target.id != $('.dropdown').attr('class')) {
				$('.dropdown-slider').slideUp();
				$('span.toggle').removeClass('active');
			}
});