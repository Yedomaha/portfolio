$(document).ready(function(){
	$('.slick-slider').slick({
		dots: true,
		autoplay: true,   
    	autoplaySpeed: 4000
	});
});

$(document).ready(function(){
    $(".qqq").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
}); 

/* $.scrollify({
		section:".scroll",
		scrollbars : false 
	});*/


// var isMobile = false;
// // проверка на размер экрана (размер я брал вроде с Bootstrap-а)
// $(document).ready( function() {
//     if ($('body').width() <= 800) {
//         isMobile = true;
//     }
//     // и потом если нужен код только для телефона:
//     /*if (isMobile) {
//         ...
//     }*/
//     // или для остальных
//     if (!isMobile) {
//          $.scrollify({
// 		section:".scroll",
// 		scrollbars : false 
// 	});
//     }
// } );