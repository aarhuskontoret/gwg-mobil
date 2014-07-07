var base = (function() {

	return {

		init: function() {
			var scope = this;
			if($('.flexslider').length) {
				$('.flexslider').flexslider({
					selector : '.slides > li',
					directionNav: false,
					animation: 'slide'
				});
			}

			$('#menuTrigger').click(function(e) {
				$('html').toggleClass('show-menu');
				e.preventDefault();
			});

			$('select,input[type="checkbox"],input[type="radio"],input[type="file"]').uniform();
		}
	};

})();

$(document).ready(function() {
	base.init();
});

var toldSlideHandler = (function ($, window, document) {  

	this.slideContent = function (relId) {
		var pDir = parseInt(relId,10);
		$('#toldSkema').animate({ left:0 - (pDir*100)+"%"}, 400);
		$('#toldreglerTop ul li a').each(function(){

			if($(this).attr('rel') == relId ){
				$(this).addClass('active');
			} else {
				$(this).removeClass('active');
			}
		});
    };
    return this;

}(jQuery, window, document));