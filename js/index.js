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

// 登录的一些效果功能
let loginBtn = document.getElementsByClassName("top_login_link")[0];
let LoginMethods = document.getElementsByClassName("QQ_Login");
let LoginBody = document.getElementsByClassName("Login_body")[0];
let LoginHiddenBody = document.getElementsByClassName("Login_hidden_body")[0];
let CloseLogin = document.getElementsByClassName("Login_close_btn")[0];
let Login = document.getElementsByClassName("Login")[0];
LoginMethods[0].addEventListener("click",function(){
    this.style.color = `#31c27c`;
    LoginMethods[1].style.color ="#333";
    LoginBody.style.display = "block";
    LoginHiddenBody.style.display = "none";
},false);

LoginMethods[1].addEventListener("click",function(){
    LoginMethods[0].style.color ="#333";
    this.style.color = `#31c27c`;
    LoginHiddenBody.style.display = "block";
    LoginBody.style.display = "none";

},false);
function CloseLoginWindow (){
    Login.style.display = "none";
}
CloseLogin.addEventListener("click",CloseLoginWindow,false);

function openLoginWindow(){
    Login.style.display = "block";
}
loginBtn.addEventListener("click",openLoginWindow,false);



