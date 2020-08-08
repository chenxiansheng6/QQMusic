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

pre_btn.onclick = function (){
    console.log("ddd");
};



let source0 = "D:/git/project/QQMusic/audio/1.mp3";
let source1 = "D:/git/project/QQMusic/audio/2.mp3";
let source2 = "D:/git/project/QQMusic/audio/3.mp3";
   let audio = document.getElementsByTagName("audio")[0];

   let source = document.getElementsByTagName("source")[0];
   console.log(source);
   console.log(source.src);
   console.log(source.src);

let aa = 0;
function played(){
   console.log("adad");

};


pau_pl_btn.addEventListener("click", played , false);


let count = 1;
nex_btn.addEventListener("click",function(){
    if(count == 3)
    {
        count = 0;
    }
    source.setAttribute("src",source+`${count}`);
    count ++;
    console.log(count);
},false);

