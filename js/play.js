/**
 *
 * @authors Marte (iqianduan@126.com)
 * @date    2020-08-08 07:59:25
 * @version $Id$
 */






/*  播放时候显示对应的歌曲信息  */

let messages = document.getElementsByClassName("info")[0];

/* 进度条占位符的信息显示 */

let bar_song_name = document.getElementsByClassName("bar_song_name")[0];
let bar_song_artist = document.getElementsByClassName("bar_song_artist")[0];
let bar_song_start = document.getElementsByClassName("bar_song_time_start")[0];
let bar_song_time_end = document.getElementsByClassName("bar_song_time_end")[0];


/* 进度条及原点图标的信息显示 */
let progressBar = document.getElementById("progress_bar");

// let alarm = setInterval(function(){
//     if(progressBar.value == 50){
//         clearInterval(alarm);
//     }
//     progressBar.value +=1;
// },1000);


/* 右边占位符的信息显示 */
let song_name = messages.children[0],song_artist = messages.children[1],song_album = messages.children[2];

/* 播放键位 */

let songName = document.getElementsByClassName("songlist_songname");
let songArtist = document.getElementsByClassName("songlist_artist");
let songTime = document.getElementsByClassName("songlist_time");
let songNumber = document.getElementsByClassName("songlist_number");


/* 播放键的功能 */

let function_btn = document.getElementsByClassName("btn_J");
let pre_btn = function_btn[0];
let pau_pl_btn = function_btn[1];
let nex_btn = function_btn[2];
let audio = document.getElementsByTagName("audio")[0];
let source = document.getElementsByTagName("source")[0];
let count = 0;


pau_pl_btn.addEventListener("click",Cancel,false);
nex_btn.addEventListener("click",next_song,false);
pre_btn.addEventListener("click",previous_song,false);


function getSongTimes(count){
    let temp = songTime.item(count).innerText;
    let tempArr = temp.split(":");
    let newMax = parseInt(tempArr[0]) * 60 + parseInt(tempArr[1]);
    return newMax;
}
let seconds = 0,minutes = 0;
let fuck = setInterval(function(){
        if(!audio.paused&&(parseInt(60*minutes+seconds)<getSongTimes(count))){
            progressBar.value += 100/getSongTimes(count);
        if(seconds == 60)
        {
            seconds = 0;
            minutes +=1;
        }
        else {seconds++;}
        bar_song_start.innerText = `0${minutes}:${seconds}`;
        }
},1000);

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
        clearInterval(fuck);
}
function next_song(){
    count ++;
    if(count == songNumber.length)
    {
        count = 0;
    }
    acquire_song_message(count);
    audio.setAttribute("src","../QQMusic/audio/"+count+".mp3");
    audio.load();
    judged_to_play();
}
function previous_song(){
     count --;
    if(count == -1)
    {
        count = songNumber.length-1;
    }
    acquire_song_message(count);
    audio.setAttribute("src","../QQMusic/audio/"+count+".mp3");
    audio.load();
    judged_to_play();
}
function acquire_song_message(count){
    song_name.innerText = "歌曲名: "+songName.item(count).innerText;
    song_artist.innerText = "歌手名: "+songArtist.item(count).innerText;
    song_album.innerText = "专辑名: "+songName.item(count).innerText;

    bar_song_name.innerText = songName.item(count).innerText;
    bar_song_artist.innerText = songArtist.item(count).innerText;
    bar_song_time_end.innerText = songTime.item(count).innerText;
}



