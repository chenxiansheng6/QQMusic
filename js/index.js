// 返回顶部
var btn = document.getElementsByClassName('btn_bottom_top')[0];
// window.onscroll实时获取滚动条滚动的距离
window.onscroll = function() {
    var st = document.documentElement.scrollTop; // 距离顶部的距离（滚动条滚动的距离）
    if(st>300) {
        btn.style.display= "block"
    }else {
        btn.style.display = "none"
    }
};
// 点击按钮回到顶部
btn.onclick = function() {
    document.documentElement.scrollTop = 0
};



