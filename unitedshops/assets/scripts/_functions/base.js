var base = (function() {

	return {

		loadShops: function() {
			var markers = [];
			var container = $('#shops');
			var shopsList = '<ul>';

			$.getJSON('butikker.json', function(feed) {
				$.each(feed,function(key,data) {
					
					// MARKERS ON MAP
					var infoContentString = '<div class="shop-info">'+
						//'<img src="'+data.logo+'" />'+ //logo
						'<p>'+data.adress[0]+'<br>'+data.adress[1]+'<br>'+data.adress[2]+'</p>'+
						'<h4>Åbningstider</h4>';
					for(var i in data.open) {
						infoContentString += '<strong>'+i+'</strong><br>'+
						data.open[i]+'<br>';
					}
						infoContentString += "<div class='links'>"+
							"<a href='http://www.google.dk/maps/dir//"+data.latlng[0]+","+data.latlng[1]+"/' target='_blank'>Se rutevejledning</a></div>";

					shopsList += '<li><a href="#" class="title">'+data.name+'</a>'+
					infoContentString+
					'</li>';
				});

				shopsList += "</ul>";
				container.append(shopsList);
			});

			container.on('click','.title',function() {
				var shop = $(this).parent('li');
				shop.toggleClass('active');
				$('.shop-info',shop).slideToggle();

				return false;
			});
		},
		init: function() {
			var scope = this;
			if($('.flexslider').length) {
				$('.flexslider').flexslider({
					selector : '.slides > li',
					directionNav: false,
					animation: 'slide'
				});
			}

			if($('#shops').length){
				scope.loadShops();
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