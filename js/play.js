/**
 *
 * @authors Marte (iqianduan@126.com)
 * @date    2020-08-08 07:59:25
 * @version $Id$
 */






/*  播放时候显示对应的歌曲信息  */


let messages = document.getElementsByClassName("info")[0];
console.log(messages);
let song_name = messages.children[0],song_artise = messages.children[1],song_album = messages.children[2];




/* 播放键的功能 */

let function_btn = document.getElementsByClassName("btn_J");
let pre_btn = function_btn[0];
let pau_pl_btn = function_btn[1];
let nex_btn = function_btn[2];
let audio = document.getElementsByTagName("audio")[0];
let source = document.getElementsByTagName("source")[0];
let count = 2;


pau_pl_btn.addEventListener("click",Cancel,false);
nex_btn.addEventListener("click",function(){
    if(count == 4)
    {
        count = 1;
    }
    audio.setAttribute("src","../QQMusic/audio/"+count+".mp3");
    audio.load();
    judged_to_play();
    count ++;
},false);

pre_btn.addEventListener("click",function(){
    if(audio.paused){
        pau_pl_btn.style.backgroundPositionX = -28+"px";
        audio.play();
    }
    if(count == 0)
    {
        count = 3;
    }
    audio.setAttribute("src","../QQMusic/audio/"+count+".mp3");
    audio.load();
    judged_to_play();
    count --;
},false);


function Cancel(){
    audio.paused == true ? judged_to_play() :judged_to_pause();
}
function judged_to_play(){
        pau_pl_btn.style.backgroundPositionX = -28+"px";
        audio.play();
}
function judged_to_pause(){
        pau_pl_btn.style.backgroundPositionX = 0+"px";
        audio.pause();
}




