/* Hamberger Menu */
$(document).ready(function(){
    $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
        $(this).toggleClass('open');
        $('nav').toggleClass('open');
    });
});

/* Random Banner main)slide */
$(window).load(function() {
    // var randombg1 = Math.floor(Math.random() * 4);
    // var randombg2 = Math.floor(Math.random() * 3);
    // var randombg3 = Math.floor(Math.random() * 3);
    // var randombg4 = Math.floor(Math.random() * 1);
    // var randombg5 = Math.floor(Math.random() * 3);
    // $('body').css('background-image', 'url(img/main/bg_0' + randombg1 + '.jpg)');
    // $('.slide_02 .rsImg').attr('src', 'http://sntworks.speedgabia.com/ithinkso/shop/main/banner/onecopy/snackpackable/m_packablebag_0' + randombg2 + '.jpg');
    // $('.slide_03 .rsImg').attr('src', 'http://sntworks.speedgabia.com/ithinkso/shop/main/banner/justleavenow/just_0' + randombg3 + '.jpg');
    // $('.slide_04 .rsImg').attr('src', 'http://sntworks.speedgabia.com/ithinkso/shop/event/150828/m_schoollife_0' + randombg4 + '.jpg');
    // $('.slide_05 .rsImg').attr('src', 'http://sntworks.speedgabia.com/ithinkso/shop/event/150904_anotherseason/anotherseason_0' + randombg5 + '.jpg');
});   




 $(window).scroll(function(){
    
    if ($(this).scrollTop() > 300) {
        //$('#').css("position","fixed");
        //$('.category_nav').css("top","50px");
        $('header').css("background-color","rgba(255,255,255,0.9)");
        // $('#header').css("top","-13px");
        
    } else {
        //$('.category_nav').css("position","relative");
        //$('.category_nav').css("top","inherit");
        $('header').css("background-color","rgba(255,255,255,0.1)");
        // $('#header').css("top","0px");
    }
});

//Check to see if the window is top if not then display button
$(window).scroll(function(){
    if ($(this).scrollTop() > 50) {
        $('.scrollToTop').fadeIn(500);
    } else {
        $('.scrollToTop').fadeOut(500);
    }
});


//Click event to scroll to top
$(document).ready(function(){
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
});

//Change input:focus
$(document).ready(function(){
    // $('#id_user').focus();
    // $("input").focus(function(){
    //     $(this).css("background-color","rgba(184, 164, 116, 0.7);");
    // });
    // $("input").blur(function(){
    //     $(this).css("border","solid 1px #bca474");
    // });
});

//Change input:focus
// $(document).ready(function(){
//     $('.cs-options').hover(function(){
//         $('.cs-skin-elastic > span').css("background-color","rgba(38, 38, 38, 1)");
//     });
// });



$(document).ready(function(){
    // on page load...
    moveProgressBar();
    // on browser resize...
    $(window).resize(function() {
        moveProgressBar();
    });

    // SIGNATURE PROGRESS
    function moveProgressBar() {
      console.log("moveProgressBar");
        var getPercent = ($('.progress-wrap').data('progress-percent') / 100);
        var getProgressWrapWidth = $('.progress-wrap').width();
        var progressTotal = getPercent * getProgressWrapWidth;
        var animationLength = 2500;
        
        // on page load, animate percentage bar to data percentage length
        // .stop() used to prevent animation queueing
        $('.progress-bar').stop().animate({
            left: progressTotal
        }, animationLength);
    }
}); 

/* Sign_up Side bar */
$(document).ready(function(){
    $(function() {
        $( "#accordion" ).accordion({
        heightStyle: "content"
        });
    });
});
