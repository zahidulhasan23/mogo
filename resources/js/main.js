$(document).ready(function () {


    //SMOOTH SCROLL FOR IE/EDGE/SAFARI

    $("a").on('click', function (event) {

        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });

        }

    });


    //STICKY MENU

    $(".js--about-section").waypoint(function (direction) {
        if (direction == "down") {
            $("nav").addClass("sticky");
        } else {
            $("nav").removeClass("sticky");
        }
    });


    //    ACCORDION

    $(".accordion-header").click(function () {
        $(".accordion-header").removeClass("active");
        $(this).addClass("active");
    });


});

//    MOBILE MENU
    
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
    document.getElementById("myNav").style.width = "0";
}


//ACTIVE CLASS

var sections = $('section'),
    nav = $('nav'),
    nav_height = nav.outerHeight();

$(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();

    sections.each(function () {
        var top = $(this).offset().top - nav_height,
            bottom = top + $(this).outerHeight();

        if (cur_pos >= top && cur_pos <= bottom) {
            nav.find('a').removeClass('navactive');
            sections.removeClass('navactive');

            $(this).addClass('navactive');
            nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('navactive');
        }
    });
});

nav.find('a').on('click', function () {
    var $el = $(this),
        id = $el.attr('href');

    $('html, body').animate({
        scrollTop: $(id).offset().top - nav_height
    }, 0);

    return false;
});


//SLIDER-1

var slideIndex = 1;
showSlides1(slideIndex);

function plusSlides1(n) {
    showSlides1(slideIndex += n);
}

function showSlides1(n) {
    var i;
    var slides1 = document.getElementsByClassName("slide1");
    if (n > slides1.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides1.length
    }
    for (i = 0; i < slides1.length; i++) {
        slides1[i].style.display = "none";

    }
    slides1[slideIndex - 1].style.display = "block";
}


//SLIDER-2

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    var slides2 = document.getElementsByClassName("slide2");
    if (n > slides2.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides2.length
    }
    for (i = 0; i < slides2.length; i++) {
        slides2[i].style.display = "none";

    }
    slides2[slideIndex - 1].style.display = "block";
}

//GO TO TOP

//mybutton = document.getElementById("mybtn");
//
//window.onscroll = function() {
//    scrollFunction()
//};
//
//function scrollFunction() {
//    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
//        mybutton.style.display = "block";
//    } else {
//        mybutton.style.display = "none";
//    }
//}
//
//function topFunction() {
//    document.body.scrollTop = 0;
//    document.documentElement.scrollTop = 0;
//}

/*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 500) {
        $('#mybtn').fadeIn();
    } else {
        $('#mybtn').fadeOut();
    }
});
$(document).ready(function () {
    $("#mybtn").click(function (event) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, "0");
        return false;
    });

});
/*Scroll to top when arrow up clicked END*/
