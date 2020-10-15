//Test jQuery
jQuery(document).ready(function($) {
    //$("h2").css("color", "red");
	//alert("JQUERY IS HERE");

    //Desktop Main Menu Hover Support
    $(".mainNav li").children("ul").hide();
    $(".mainNav li").hover(function() {
        var isHovered = $(this).is(":hover");
        if (isHovered) {
            $(this).children("ul").show(300);
            $(this).children("ul li .third-level").hide();
        } else {
            $(this).children("ul").stop().hide(300);
        }
    });

    //Side Tertiary Nav Active Support
    var sideNav = $("div.nav.side-menu ul.menu li.level-1");
    //$(sideNav).children("ul").css("display", "none");
    $(document).ready(function() { 
        var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
        $(this).each(function() {
            if (this.href === path) {
                $(this).addClass('active');
            }
        });

        $(sideNav).click(function() {   
        }); 
    });


});// End document load function