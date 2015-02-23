$(function() {
    $('.banner').unslider();
});

/*=================== Projects Accordion ================	*/
    
    (function($) {
    
  var allPanels = $('.projectsaccordion > dd').hide();
    
  $('.projectsaccordion > dt > a').click(function() {
    allPanels.slideUp();
    $(this).parent().next().slideDown();
    return false;
  });
        
/*=================== Tool Tip ================	*/
        
    $(function() {
        $(document).tooltip();
  });
        
/*================ Accordion =========================*/

    $('ul.tabs').each(function(){


        var $active, $content, $links = $(this).find('a');
                                          
        $active = $($links.filter('[href="'+location.hash+'"]')[0] ||
            $links[0]);
        $active.addClass('active');
        
        $content = $($active[0].hash);
        
        $links.not($active).each(function () {
            $(this.hash).hide();
        });
        
        $(this).on('click', 'a', function(e){
                            console.log('run');

            $active.removeClass('active');
            $content.hide();
            
        $active = $(this);
        $content = $(this.hash);
            
        $active.addClass('active');
        $content.show();
            
        e.preventDefault();
            
    });
});

})(jQuery);