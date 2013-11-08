
$(document).ready(function () {
    // grid
    var zoom = 1.2;
    var move = -20;
    //On mouse over those thumbnail
    $('.grid .item.rollable').hover(function () {

        //Set the width and height according to the zoom percentage
        width = $('.item').width() * zoom;
        height = $('.item').height() * zoom;

        //Move and zoom the image
        $(this).find('img').stop(false, true).stop().animate({ 'width': width, 'height': height, 'top': move, 'left': move }, { duration: 200 });

        //Display the caption
        $(this).find('div.caption').stop(false, true).fadeIn(200);
    },
        function () {
            //Reset the image
            $(this).find('img').stop(false, true).stop().animate({ 'width': $('.item').width(), 'height': $('.item').height(), 'top': '0', 'left': '0' }, { duration: 100 });

            //Hide the caption
            $(this).find('div.caption').stop(false, true).fadeOut(200);
        });

    if ($('.strava-widget').length > 0) {
        $.ajax({
            url: 'http://www.strava.com/athletes/1535191/latest-rides/4509dc61116eb2747b6b0bf0d5caa0ec3f4bb229',
            success: function (data) {
                var stravaHtml = $(data);
                $('.strava-widget').html(stravaHtml.find('.content').html());
            }
        });
    }
});
