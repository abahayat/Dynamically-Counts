$(document).ready(function(){
    
    
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    if($('.progress-line').length) {
        $('.progress-line').appear(function(){
            var el = $(this);
            var percent = el.data('width');
            $(el).css('width', percent+'%');
        }, {accY: 0});
   }
    
});