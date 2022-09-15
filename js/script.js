$(document).ready(function(){
    $('#mycarousel').carousel({interval: 2000});
    $('#carouselButton').click(function(){
        if ($('#carouselButton').children('span').hasClass('fa-pause')){
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
            $('#carouselButton').removeClass('btn-danger');
            $('#carouselButton').addClass('btn-success');
        } else {
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
            $('#carouselButton').removeClass('btn-success');
            $('#carouselButton').addClass('btn-danger')
        }
    });
    //modal buttons
    //login modal
    $('#loginButton').click(function(){
        $('#loginModal').modal('toggle');
    });
    //reserve modal
    $('#reserveButton').click(function(){
        $('#reserveModal').modal('toggle');
    });
});