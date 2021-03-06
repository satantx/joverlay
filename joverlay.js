$.fn.joverlay = function(options) {
	var options = $.extend({
		close: true,
		closeText: 'Закрыть',
		closeClass: ''
	},
	options);
	return this.each(function(){
		var joverlay = $(this),
			 joverlayMain = joverlay.attr('href'),
			 closeClassText = ''+options.closeClass+' joverlay-close';

		var wi = (function(){
	      var $outer = $('<div>').css({visibility: 'hidden', width: 100, overflow: 'scroll'}).appendTo('body'),
	          widthWithScroll = $('<div>').css({width: '100%'}).appendTo($outer).outerWidth();
	      $outer.remove();
	      return 100 - widthWithScroll;
	  }());
			 
		if (!$(joverlayMain).hasClass('joverlay-box')) {
			$(joverlayMain).wrapInner('<div class="joverlay-tb"><div class="joverlay-td"><div class="joverlay-main"></div><div class="joverlay-shadow"></div></div></div>').addClass('joverlay-box');
			if (options.close == true) {
				$('.joverlay-main', joverlayMain).prepend('<div class="'+closeClassText+'">'+options.closeText+'</div>');
			};
		}

		$(joverlay).on('click', function() {
			$('.joverlay-box').hide();
			$(joverlayMain).show();
			$('body').addClass('hidden').css({'paddingRight': wi});
			return false;
		});

		$('.joverlay-close, .joverlay-shadow', joverlayMain).on('click', function() {
			$(joverlayMain).hide();
			$('body').removeClass('hidden').css({'paddingRight': 0});
		});
	});
};
