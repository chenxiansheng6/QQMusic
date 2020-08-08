let choose = document.getElementsByClassName("bottom_item");
let recommand_part = document.getElementsByClassName("main")[0];
let rank_part = document.getElementsByClassName("Top_main")[0];
let search_part = document.getElementsByClassName("search")[0];
let rank = choose[1];
let recommand = choose[0];

recommand.addEventListener("click",function(){

    recommand_part.style.display = "block";
    rank_part.style.display = "none";
    search_part.style.opacity = "1";

    rank.style.color = "black";
    rank.style.borderBottom = "none";

    this.style.color = "#31c27c";
    this.style.borderBottom = ".02rem solid #31c27c";
},false);

rank.addEventListener("click",function(){

    recommand_part.style.display = "none";
    rank_part.style.display = "block";
    search_part.style.opacity = "0";

    recommand.style.color = "black";
    recommand.style.borderBottom ="none";

    this.style.color = "#31c27c";
    this.style.borderBottom = ".02rem solid #31c27c";
},false);


(function () {
    function resizeBaseFontSize() {
        var rootHtml = document.documentElement,
            deviceWidth = rootHtml.clientWidth;
        if (deviceWidth > 800) {
            deviceWidth = 800;
        }
        rootHtml.style.fontSize = deviceWidth /7.5 + "px";
    }
    resizeBaseFontSize();
    window.addEventListener("resize", resizeBaseFontSize, false);
    window.addEventListener("orientationchange", resizeBaseFontSize, false);
})();