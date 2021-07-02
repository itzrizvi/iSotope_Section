jQuery(document).ready(function($){
    
    $('.project-filter li').on('click', function(){

        //ACTIVATE CLASS FUNCTION
        $('.project-filter li').removeClass('active');
        $(this).addClass('active');

        // ISOTOPE FUNCTIONS
        var selector = $(this).attr('data-filter');

        $('.project-list').isotope({
            filter: selector,
        }); 
    });

    $('.project-list').isotope();

});