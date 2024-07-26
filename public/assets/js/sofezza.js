AOS.init();

window.addEventListener('scroll', function () {
    var myDiv = document.getElementById('navbar-bottom');
    var backToTop = document.getElementById('back-to-top');
    if (window.scrollY >= 600) {
        myDiv.style.display = 'block';
        backToTop.style.display = 'flex';
    } else {
        myDiv.style.display = 'none';
        backToTop.style.display = 'none';
    }
});

var btn = $('#back-to-top');
btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0, behavior: 'smooth' }, '2500');
    // window.scrollTo({ top: 0, behavior: 'smooth' });
});


$(".client-logo-block").slick({
    speed: 3000,
    autoplay: true,
    slidesToShow: 5,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    infinite: true,
    swipeToSlide: true,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 750,
            settings: {
                slidesToShow: 6,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 4,
            }
        }
    ]
});