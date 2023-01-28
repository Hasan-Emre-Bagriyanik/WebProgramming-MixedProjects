(function($) {
    
    "use strict";

     
    function preloader() {
        if($('.preloader').length) {
            $('.preloader').delay(1250).fadeOut(500);
        }
    } 
    $(window).on('load', function() {
        // add your functions
        preloader();
    }); 
})(window.jQuery);