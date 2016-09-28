$.fn.joverlay = function(options) {
	var options = $.extend({
		close: true,
		closeText: 'Закрыть'
	},
	options);
	return this.each(function(){
		var joverlay = $(this),
			 joverlayMain = joverlay.attr('href');
			 
		if (!$(joverlayMain).hasClass('joverlay-box')) {
			$(joverlayMain).wrapInner('<div class="joverlay-tb"><div class="joverlay-td"><div class="joverlay-main"></div><div class="joverlay-shadow"></div></div></div>').addClass('joverlay-box');
			if (options.close == true) {
				$('.joverlay-main', joverlayMain).prepend('<div class="joverlay-close">'+options.closeText+'</div>');
			};
		}

		$(joverlay).on('click', function() {
			$('.joverlay-box').hide();
			$(joverlayMain).show();
			return false;
		});

		$('.joverlay-close, .joverlay-shadow', joverlayMain).on('click', function() {
			$(joverlayMain).hide();
		});
	});
};
