/**
 *
 * @authors Marte (iqianduan@126.com)
 * @date    2020-08-08 07:59:25
 * @version $Id$
 */






/* */




let function_btn = document.getElementsByClassName("btn_J");
let pre_btn = function_btn[0];
let pau_pl_btn = function_btn[1];
let nex_btn = function_btn[2];



let source0 = "D:/git/project/QQMusic/audio/1.mp3";
let source1 = "D:/git/project/QQMusic/audio/2.mp3";
let source2 = "D:/git/project/QQMusic/audio/3.mp3";
let audio = document.getElementsByTagName("audio")[0];

let source = document.getElementsByTagName("source")[0];
console.log(source);



let count = 2;
pau_pl_btn.addEventListener("click",function(){
    if(audio.paused){

            audio.play();
        }
    else{
            audio.pause();
    }

},false);

nex_btn.addEventListener("click",function(){
    if(count == 4)
    {
        count = 1;
    }
    audio.setAttribute("src","D:/git/project/QQMusic/audio/"+count+".mp3");
    audio.load();
    count ++;
},false);

pre_btn.addEventListener("click",function(){
    if(count == 0)
    {
        count = 3;
    }
    audio.setAttribute("src","D:/git/project/QQMusic/audio/"+count+".mp3");
    audio.load();
    count --;
},false);



