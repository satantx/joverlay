$.fn.joverlay = function(options) {
	var options = $.extend({
		close: true
	},
	options);
	return this.each(function(){
		var joverlay = $(this),
			 joverlayMain = joverlay.attr('href');
			 
		$(joverlayMain).addClass('joverlay-box');

		$(joverlayMain).wrapInner('<div class="joverlay-tb"><div class="joverlay-td"><div class="joverlay-main"></div><div class="joverlay-shadow"></div></div></div>');
		if (options.close) {
			$('.joverlay-main', joverlayMain).prepend('<div class="joverlay-close"></div>');
		};

		$(joverlay).on('click', function() {
			$(joverlayMain).show();
			return false;
		});

		$('.joverlay-close, .joverlay-shadow', joverlayMain).on('click', function() {
			$(joverlayMain).hide();
		});
	});
};
