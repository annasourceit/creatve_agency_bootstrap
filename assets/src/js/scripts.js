;(function ($) {
    // Scripts that will only run once the page Document Object Model (DOM) is ready for JavaScript code to execute.
    $(document).ready(function () {
        var headerHeight = $('.header').outerHeight();
        var navHeight = $('.header')
        console.log( headerHeight);

    });

})(jQuery); // Fully reference jQuery after this point.


//----------------------------------------Google Maps------------------------------------------
function initMap() {
    google = window.google;
    var uluru0 = {lat: 40.6976637, lng: -74.119764};    // координаты NewYork

    var map0 = new google.maps.Map(document.getElementById('map0'), {
        zoom: 11,
        center: uluru0,
        disableDefaultUI: true,
    });
    var image = 'https://www.shareicon.net/data/64x64/2017/05/22/886131_map_512x512.png';
    var marker = new google.maps.Marker({
        position: uluru0,
        map: map0,
        icon: image,
    });
}
initMap();
