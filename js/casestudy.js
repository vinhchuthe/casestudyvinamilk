// init controler
var controller = new ScrollMagic.Controller();

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

//NiceScroll
$(document).ready(function () {

    $("html").niceScroll({
        cursoropacitymax: 0.5,
        autohidemode: false,
        zindex: "999",
        scrollspeed: 300,
        // Mousescrollstep: 80,
        // Smoothscroll: true
    });

});

// photo stack
var tl1 = new TimelineMax();
tl1.to($(".photo-img2 .photos-img__inner"), 1, { x: 0, y: "-90%", rotation: -7, ease: Power2.easeInOut })
    .to($(".photo-img3 .photos-img__inner"), 1, { x: "-95%", y: "-60%", rotation: 15, ease: Power2.easeInOut }, "-=1")
    .to($(".photo-img4 .photos-img__inner"), 1, { x: "95%", y: "-60%", rotation: -7, ease: Power2.easeInOut }, "-=1")
    .to($(".photo-img5 .photos-img__inner"), 1, { x: "105%", y: "35%", rotation: 20, ease: Power2.easeInOut }, "-=1")
    .to($(".photo-img6 .photos-img__inner"), 1, { x: "-105%", y: "35%", rotation: -20, ease: Power2.easeInOut }, "-=1");

new ScrollMagic.Scene({
    triggerElement: '.photo-stack',
    offset: -150,
    duration: 630,
})
    .setTween(tl1)
    // .addIndicators()
    .addTo(controller);


// Group Hover1
TweenMax.set($(".hover-overlay"), { x: "-40%", y: "-50%", opacity: 0 });
$(".hover1-img1").on("mouseenter", function () {
    TweenMax.to($(".left"), 1, { x: "-50%", y: "-50%", opacity: 1, ease: Power2.easeInOut });
})
$(".hover1-img1").on("mouseleave", function () {
    TweenMax.to($(".left"), 1, { x: "-40%", opacity: 0, ease: Power2.easeInOut });
})
$(".hover1-img2").on("mouseenter", function () {
    TweenMax.to($(".right"), 1, { x: "-50%", y: "-50%", opacity: 1, ease: Power2.easeInOut });
})
$(".hover1-img2").on("mouseleave", function () {
    TweenMax.to($(".right"), 1, { x: "-40%", opacity: 0, ease: Power2.easeInOut });
})

// Section5 hover
// $(".box-item .img-top").on("mouseenter", function () {
//     $(this).parents(".box-item").addClass("ishover");
// })
// $(".group-hover2__inner .box-item").on("mouseleave", function () {
//     $(".group-hover2__inner .box-item").removeClass("ishover");
// })

// Counter

function numberWithCommas(n) {
    var parts = n.toString().split(".");
    return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

var counter1 = { var: 0 };
var counter2 = { var: 0 };
var tal1 = document.getElementById("tal1");
var tal2 = document.getElementById("tal2");

var num1 = TweenMax.to(counter1, 2, {
    var: 160000,
    onUpdate: function () {
        var nwc = numberWithCommas(counter1.var);
        tal1.innerHTML = nwc;
    },
    ease: Circ.easeOut
});

var num2 = TweenMax.to(counter2, 2, {
    var: 21000,
    onUpdate: function () {
        var nwc = numberWithCommas(counter2.var);
        tal2.innerHTML = nwc;
    },
    ease: Circ.easeOut
});

var timeline2 = new TimelineMax();
timeline2.add([num1, num2]);
new ScrollMagic.Scene({
    triggerElement: '.count-box-item__inner',
    offset: 150,
    reverse: false
})
    .setTween(timeline2)
    // .addIndicators()
    .addTo(controller);

