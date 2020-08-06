// 歌单推荐轮播
var swiper1 = new Swiper('.swiper-container', {
    spaceBetween: 30,
    slidesPerView: 5,
    slidesPerGroup: 5,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
        reverseDirection: true
    },
    pagination:{
        el:'.swiper-pagination',
        clickable:true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
//鼠标覆盖停止自动切换
swiper1.el.onmouseover = function(){
    swiper1.autoplay.stop();
};
//鼠标离开开始自动切换
swiper1.el.onmouseout = function(){
    swiper1.autoplay.start();
};

// 新歌首发轮播
var swiper2 = new Swiper('.swiper-container-song', {
    slidesPerView: 3,
    slidesPerGroup: 3,
    // loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    pagination:{
        el:'.swiper-pagination-s',
        clickable:true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
swiper2.el.onmouseover = function(){
    swiper2.autoplay.stop();
};
swiper2.el.onmouseout = function(){
    swiper2.autoplay.start();
};

//  精彩推荐轮播
var swiper3 = new Swiper('.swiper-container-event', {
    slidesPerView: 2,
    slidesPerGroup: 2,
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    pagination:{
        el:'.swiper-pagination-e',
        clickable:true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// 新碟首发轮播
var swiper4 = new Swiper('.swiper-container-album', {
    spaceBetween: 30,
    slidesPerView: 5,
    slidesPerGroup: 5,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
        reverseDirection: true
    },
    pagination:{
        el:'.swiper-pagination-a',
        clickable:true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});