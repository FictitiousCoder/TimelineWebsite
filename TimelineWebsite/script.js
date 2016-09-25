// IIFE - Immediately Invoked Function Expression
(function(yourcode) {

// The global jQuery object is passed as a parameter
yourcode(window.jQuery, window, document);

}(function($, window, document) {

    // The $ is now locally scoped 

    // Shorthand for ready event method on document object: $(document).ready(function()
    $(function() {
        var isMobile = window.matchMedia("only screen and (max-width: 760px)");
        var timelineSlider = $("#timelineSlider");
        var timeLineElement = $(".timelineElement");
        var timeLineImages = $("#timelineSlider img");
        
        if (isMobile.matches) {
            
            $("p").css({
                'font-size' : '32px',
                'font-family' : 'fjordOne'
            });

            // Make the timeline horizontal
            timelineSlider.css({
                'height' : '10px',
                'width' : '950px',
                'position' : 'relative',
                'float' : 'left', 
                'left' : '60px',
                'top' : '60px' 
            });
            
            timeLineElement.css({
                'position' : 'relative',
                'display' : 'inline-block',
                'bottom' : '120px',
                'width' : '150px',
                'margin-right' : '5px' 
            });
        }  
         
        $(window).on("load", function() {
            $("#loadingOverlay").fadeOut(800);
        });
        
        timeLineImages.on("mouseover",function() {
            $(this).animate({width:225}, 325)
        });
        
        timeLineImages.on("mouseleave",function() {
            if(!$(this).hasClass("timelineSelected"))
                {
                    $(this).animate({width:150}, 275);
                }
        });
        
        // Scroll to the selected element upon clicking its corresponding icon on the timeline
        timeLineImages.on("click",function() {
            if(!$(this).hasClass("timelineSelected"))
                {
                    $(".timelineSelected").animate({width:150}, 200);
                    $(".timelineSelected").removeClass("timelineSelected");
                    $(this).addClass("timelineSelected");
                }

            var timelinePosition = $(".timelineSelected").parent().position();
            var classes = $(this).parent().attr("class").split(' ');
            var scrollTo = $(".panel." + classes[1]).position();
            $("#timelineBall").animate({top: timelinePosition.top + 90}, 300);
            $("html, body").animate({ scrollTop: scrollTo.top }, 800);
        });
    });
}));
