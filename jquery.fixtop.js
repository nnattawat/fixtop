/*!
 * jQuery Fix Top v1.0
 * https://github.com/nnattawat/fixtop
 *
 * Copyright 2014, Nattawat Nonsung
 */


/**
* Use immediately Invoked Function Expression to
* - Prevent conflicting with other libary on alias $
* - Scope varaible to be private
*/
(function( $ ) {
  $.fn.fixtop = function(options) {

		// Define default setting
		var settings = $.extend({
			marginTop: 0,
			zIndex: 1
    }, options );

		var form_top = this.offset().top - settings.marginTop;
		var el = this;
		var missingHeight = el.height() + settings.marginTop;
	  $(window).scroll(function(e){ 
	    //Set position of sub navogation
	    var y = form_top;
	    if ($(this).scrollTop() > y && el.css('position') != 'fixed'){ 
	      el.css({
	      	'position': 'fixed', 
	      	'top': settings.marginTop+'px',
	      	'z-index': settings.zIndex, 
	      	'width': el.width()+'px' 
	      }); 
	      if(settings.fixed !== undefined){
	      	settings.fixed(el);
	      }
	    } 
	    if ($(this).scrollTop() < y && el.css('position') == 'fixed'){
	    	el.css({
	     		'position': 'relative', 
	     		'top': '0px',
	     		'z-index': settings.zIndex 
	     	});
	     	if(settings.unfixed !== undefined){
	      	settings.unfixed(el);
	     	}
	    }
	  });
	
		// Return jQuery so that it's chainable 
		return this;		
  };
 
}( jQuery ));