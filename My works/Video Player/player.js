"use-strict";
/* My simple video player */
let video = document.querySelector(".video");
let playBtn = document.querySelector(".__play");
let player = document.querySelector(".player");
let edition = document.querySelector(".edition");
let cpanel = document.querySelector(".control_panel");
let videoTimes = document.querySelector(".__video_Times");
let totalTimes = document.querySelector(".__total_Times");
let currentTime = document.querySelector(".__current_Time");
let btomOpt = document.querySelector(".bottom_options");
let videoName = document.querySelector("#video_name")
let videoDes = document.querySelector("#video_descript")
let speed = document.querySelector("#speed");
let pbRate = document.querySelector(".playbackRate");
let videoSize = document.querySelector("#video_size");
let sizeVid = document.querySelector(".size_vid");
let size = document.querySelector("#size");
let full = document.querySelector("#fullscreen");
let floating = document.querySelector("#float");
let seekL = document.querySelector(".seek_left");
let seekR = document.querySelector(".seek_right");
let moreBtn = document.querySelector(".__more");
let extra = document.querySelector(".extra");
let exClose = document.querySelector(".extra_close");
let water = document.querySelector("#watermark");
let waterHelp = document.querySelector(".water_help");
let playTx = document.querySelector("#playText");
let soundSys = document.querySelector(".sound_system");
let sound = document.querySelector(".sound");
let download = document.querySelector("#download");

function myPlayer() {
  videoTimes.max = video.duration;
  let x = video.src.lastIndexOf("/");
  let y = video.src.substr(x+1, video.src.length-x-5);
  let scr = videoDes.scrollWidth;
  videoName.innerHTML = decodeURI(y);
  let playText = videoDes.innerHTML = "Playing <b>" + decodeURI(y) + "</b> to this video player...";
  if (Boolean(video.paused) == true) {
    videoDes.innerHTML = "";
    myText = setInterval(() => {
      playTx.innerHTML -= -1;
      videoDes.innerHTML = playText.substr(0, playTx.innerHTML);
      if (playText.length == playTx.innerHTML) {
        playTx.innerHTML = 0;
        myText;
      }
      
      if (videoDes.scrollWidth > scr) {
        let scrolling = videoDes.scrollWidth - scr;
        videoDes.scrollLeft = scrolling;
      }
      if (water.scrollWidth > 90) {
        water.scrollLeft = water.scrollWidth - 90;
      }
    }, 100);
  }
  sumTimes();
}
window.onload = () => myPlayer();

video.currentTime = 20;
cpanel.addEventListener("click", () => {
  if (edition.getAttribute("id") == "cp1") {
    edition.setAttribute("id", "cp0");
    btomOpt.style.zIndex = -1;
    cpanel.style.top = 0;
    cpanel.style.bottom = 0;
  } else {
    edition.setAttribute("id", "cp1");
    btomOpt.style.zIndex = 1;
    cpanel.style.top = "40px";
    cpanel.style.bottom = "80px";
  }
});

playBtn.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    playBtn.src = "images/pause.png";
    setTimeout(() => {
      edition.setAttribute("id", "cp0");
    }, 4000);
    
  } else {
    video.pause();
    playBtn.src = "images/play.png";
  }
  if (video.currentTime == 20) {video.currentTime = 0}
});

function sumTimes() {
  let durate = video.duration;
  let hour = Math.floor(durate / 3600);
      if (hour < 10) {hour = "0" + hour}
  let min = Math.floor((durate % 3600) / 60);
      if(min < 10) {min = "0" + min}
  let sec = Math.floor(durate % 60);
      if(sec < 10) {sec = "0" + sec}
  return totalTimes.innerHTML = hour + ":" + min + ":" + sec;
}

function runTime() {
  let run = video.currentTime;
  let hour = Math.floor(run / 3600);
      if (hour < 10) {hour = "0" + hour}
  let min = Math.floor((run % 3600) / 60);
      if(min < 10) {min = "0" + min}
  let sec = Math.floor(run % 60);
      if(sec < 10) {sec = "0" + sec}
  videoTimes.value = video.currentTime;
  return currentTime.innerHTML = hour + ":" + min + ":" + sec;
}

videoTimes.addEventListener("input", () => {
  video.currentTime = videoTimes.value;
  runTime();
});

video.addEventListener("timeupdate", () => {runTime()});

speed.addEventListener("click", () => {
  if (pbRate.getAttribute("id") == "cp0") {
    pbRate.setAttribute("id", "cp1");
  } else {
    pbRate.setAttribute("id", "cp0");
  }
  
  pbRate.oninput = () => {
    speed.innerHTML = pbRate.value + "x";
    video.playbackRate = pbRate.value;
    if (pbRate.value == 1) {
      speed.innerHTML = "Speed";
    }
  }
});
speed.ondblclick = () => {
  pbRate.value = 1;
  video.playbackRate = pbRate.value;
  if (video.playbackRate == 1) {
    speed.innerHTML = "Speed";
  }
}

videoSize.addEventListener("click", () => {
  size.innerHTML -= -1;
  if (size.innerHTML > 5) {size.innerHTML = 0}
  
  if (size.innerHTML == 0) {
    video.style.height = "100%";
    video.style.width = "100%";
    sizeVid.innerHTML = "Stretch";
    videoSize.src = "images/stretch.png";
    decr();
  }
  else if (size.innerHTML == 1) {
    video.style.height = "130%";
    video.style.width = "100%";
    sizeVid.innerHTML = "Crop";
    videoSize.src = "images/crop.png";
    decr();
  }
  else if (size.innerHTML == 2) {
    video.style.height = "100%";
    video.style.width = "80%";
    sizeVid.innerHTML = "16:9";
    videoSize.src = "images/16_9.png";
    decr();
  }
  else if (size.innerHTML == 3) {
    video.style.height = "100%";
    video.style.width = "90%";
    sizeVid.innerHTML = "18:9";
    videoSize.src = "images/18_9.png";
    decr();
  }
  else if (size.innerHTML == 4) {
    video.style.height = "100%";
    video.style.width = "70%";
    sizeVid.innerHTML = "4:3";
    videoSize.src = "images/4_3.png";
    decr();
  }
  else if (size.innerHTML == 5) {
    video.style.height = "auto";
    video.style.width = "auto";
    sizeVid.innerHTML = "Original";
    videoSize.src = "images/original.png";
    decr();
  }
  
  function decr() {
    sizeVid.style.zIndex = 1;
    sizeVid.style.opacity= 1;
    clearTimeout(x);
  }
  var x = setTimeout(() => {
    sizeVid.style.zIndex = -1;
    sizeVid.style.opacity= 0;
  }, 1000);
});

//Floating...
function swim(event) {
  let clientX = event.touches[0].clientX;
  let clientY = event.touches[0].clientY;
  
  player.setAttribute("id", "whenFloating");
  player.style.top = clientY - 150 + "px";
  player.style.left = clientX - 200 + "px";
  player.style.width = "90vw";
}
floating.onclick = () => {
  if (floating.getAttribute("src") == "images/float.png") {
    player.style.transition = "0.2s";
    floating.src = "images/float_exit.png";
    
    full.style.filter = "brightness(50%)";
    full.style.pointerEvents = "none";
    player.ontouchmove = () => swim(event);
  } else {
    player.setAttribute("id", "whenFloatEnd");
    floating.src = "images/float.png";
    
    full.style.filter = "brightness(100%)";
    full.style.pointerEvents = "auto";
    player.ontouchmove = () => {}
  }
}  

fullscreen.addEventListener("click", () => {
  if (fullscreen.getAttribute("src") == "images/fullscreen.png") {
    player.setAttribute("id", "whenFull");
    
    fullscreen.src = "images/exit_full.png";
    floating.style.filter = "brightness(50%)";
    floating.style.pointerEvents = "none";
    video.style.height = "100%";
    video.style.width = "100%";
    sizeVid.innerHTML = "Stretch";
    videoSize.src = "images/original.png";
  } else {
    player.setAttribute("id", "whenMin");
    
    floating.style.filter = "brightness(100%)";
    floating.style.pointerEvents = "auto";
    fullscreen.src = "images/fullscreen.png";
  }
});

//Double tap seek..
seekL.ondblclick = () => {
  seekL.style.opacity = 1;
  video.currentTime -= 10;
  seeking();
}
seekR.ondblclick = () => {
  seekR.style.opacity = 1;
  video.currentTime += 10;
  seeking();
}
function seeking() {
  setTimeout(() => {
    seekL.style.opacity = 0;
    seekR.style.opacity = 0;
  }, 500);
}

moreBtn.onclick = () => {
  extra.style.transform = "scale(1)";
  exClose.onclick = () => {
    extra.style.transform = "scale(0)";
  }
}

video.onended = () => {
  playBtn.src = "images/replay.png";
}

function wat() {
  let watText = water.innerHTML;
  let myPlayCount = setInterval(() => {
  waterHelp.innerHTML -= -1;
  water.innerHTML = watText.substr(0, waterHelp.innerHTML);
  if (watText.length == waterHelp.innerHTML) {
      waterHelp.innerHTML = 0;
      myPlayCount;
    }
  }, 200);
}
wat();

document.querySelector("#share").onclick = () => {
  let url = window.location.href;
  if (navigator.share) {
    navigator.share({
      title: decodeURI(videoName.innerHTML),
      url: url
    }).then(() => {
      alert("Thanks for sharing!");
    });
  } else {
    prompt("Unfortunately your browser doesn't supported " +
      " navigator.share() API.\nPlease select to copy..", url);
      alert("Thanks for sharing!")
  }
}

download.href = video.src;

window.onresize = () => {
    let aspects = screen.orientation.type;
    if (aspects == "landscape-primary" || aspects == "landscape-secondary") {
      player.style.width = "50vw";
      player.style.cssFloat = "left";
      player.style.marginRight = "10px";
      alert("Please disable your device rotation to watch video nicely.");
    } else {
      player.style.width = "100vw";
    }
}

function NXSpeed() {
  let curRate = pbRate.value;
  let num = 0;
  let intx = setInterval(function() {
    num += 1;
    if (num >= 48 && num <= 50) {
      navigator.vibrate(100)
    }
    if (num >= 50) {
      video.playbackRate = curRate * 2;
      sizeVid.style.zIndex = 1;
      sizeVid.style.opacity= 1;
      sizeVid.innerHTML = video.playbackRate + "x Speed";
      speed.innerHTML = video.playbackRate + "x";
      if (video.playbackRate == 1) {
        speed.innerHTML = "Speed";
      }
    }
  }, 10);
  function clearSpeed() {
    clearInterval(intx);
    intx = 0;
    video.playbackRate = curRate;
    speed.innerHTML = curRate + "x";
    sizeVid.style.zIndex = -1;
    sizeVid.style.opacity= 0;
  }
  
  cpanel.ontouchend = () => {
    clearSpeed();
    if (video.playbackRate == 1) {
        speed.innerHTML = "Speed";
      }
  }
  cpanel.onmouseup = () => {
    clearSpeed();
    if (video.playbackRate == 1) {
        speed.innerHTML = "Speed";
      }
  }
  cpanel.ontouchmove = () => {clearSpeed()}
}
cpanel.ontouchstart = () => NXSpeed();
cpanel.onmousedown = () => NXSpeed();
