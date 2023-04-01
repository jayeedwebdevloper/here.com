var loader = document.getElementById('loader');

window.addEventListener('load', function () {
    loader.style.display = "none";
});

window.addEventListener("scroll", (e) => {
    const nav = document.querySelector('header');
    if (window.pageYOffset > 0) {
        nav.classList.add("menubar");
    } else {
        nav.classList.remove("menubar");
    }
});
$(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
        $('#scroll-top').fadeIn("3000").show();
    } else {
        $('#scroll-top').fadeOut("3000").hide();
    }
});
$("#scroll-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 100);
})
