let win = window.innerHeight;
let player = document.getElementById("player");
player.style.marginTop = (win - 750) / 2 + "px";
player.style.marginBottom = (win - 750) / 2 + "px";
function playIt() {
			//Play or Pause audio 
			var playBtn = document.getElementById("playBtn"); 
			var imgOfSong = document.getElementById("imgOfSong");
			let playSong = document.getElementById("mySong");
			if (playSong.paused) {
						document.getElementById("playBtn").innerHTML="⏸️";
						playSong.play();
			} else {
						document.getElementById("playBtn").innerHTML="▶️"
						playSong.pause();
			}
			playSong.onpause = function() {
						playBtn.style.animation="none"
						imgOfSong.style.animation="none";
			}
			playSong.onended = function() {
						playBtn.style.animation="none";
						imgOfSong.style.animation="none";
						playBtn.innerHTML="💫";
			}
			
			playSong.onplaying = function() {
						playBtn.style.animation = "playing 1s linear infinite";
						imgOfSong.style.animation = "imgOfSong 1s linear infinite";
						imgOfSong.style.animationTimingFunction = "cubic-bezier(0.01,0.01,0.09,0.1,0.7,1.0,0.1)";
						//Duration of audio
						let maxDur = document.getElementById("progressBar").max = playSong.duration;
						let dur = document.getElementById("fullTime");
						dur.innerHTML = "0:" + playSong.duration.toFixed();
						let durationOfFile = playSong.duration;
						let hour = Math.floor(durationOfFile / 3600);
									if (hour < 10) {
												hour = "0" + hour;
									}
						let secToMin = Math.floor((durationOfFile % 3600) / 60);
									if (secToMin < 10) {
												secToMin = "0" + secToMin;
						}
						let modulus = Math.floor(durationOfFile % 60);
									if (modulus < 10) {
												modulus = "0" + modulus;
						}
						dur.innerHTML = hour + ":" + secToMin + ":" + modulus;
			}
			
			playSong.ontimeupdate = function() {
						let ct = document.getElementById("currentTime");
						let cuTi = this.currentTime;
						ct.innerHTML = "0:" + cuTi.toFixed();
						let currentHour = Math.floor(cuTi / 3600);
						if (currentHour < 10) {
									currentHour = "0" + currentHour;
						}
						let cTime = Math.floor((cuTi / 60) % 60);
						if (cTime < 10) {
									cTime = "0" + cTime;
						}
						let modul = Math.floor(cuTi % 60);
						if (modul < 10) {
									modul = "0" + modul;
						}
						ct.innerHTML = currentHour + ":" + cTime + ":" + modul;
						let valDur = document.getElementById("progressBar").value = this.currentTime;
						
						
			}
			
}

//Progress Bar of audio
function setTime() {
			let playSong = document.getElementById("mySong");
			let rangeVal = document.getElementById("progressBar").value;
			playSong.currentTime = rangeVal;
			let maxDur = document.getElementById("progressBar").max = playSong.duration;
}

var sHead = document.getElementById("songHeader");
			var artist = document.getElementById("artist");
//play next 
function next() {
			let as = ["Barbaroslar.mp3", "Alparslan.mp3"]
			let play = document.getElementById("mySong");
			let y = play.getAttribute("src");
						if (y==as[0]) {
									play.setAttribute("src",as[1]);
									sHead.innerHTML = "Alparslan";
									document.getElementById("imgOfSong").src = "Alparslan.png"
						} else {
									play.setAttribute("src",as[0]);
									sHead.innerHTML = "Barbaroslar"
									document.getElementById("imgOfSong").src = "Barbarossa.png"
						}
			
}


//Play previous
function pre() {
			let as = ["Barbaroslar.mp3", "Alparslan.mp3"]
			let play = document.getElementById("mySong");
			let y = play.getAttribute("src");
						if (y==as[1]) {
									play.setAttribute("src",as[0]);
									sHead.innerHTML = "Barbaroslar";
									document.getElementById("imgOfSong").src = "Barbarossa.png";
						} else {
									play.setAttribute("src",as[1]);
									sHead.innerHTML = "Alparslan";
									document.getElementById("imgOfSong").src = "Alparslan.png";
						}
}


//Favourites 
function love() {
		let love = document.getElementById("love");
		if (love.className == "love") {
					love.className = "loved";
		} else {
					love.className = "love";
		}
}

//Shuffle
function shuffle() {
		let shuffle = document.getElementById("shuffle");
		if (shuffle.className == "shuffle") {
					shuffle.className = "shuffled";
		} else {
					shuffle.className = "shuffle";
		}
}


//Sound
function sound() {
			let sou = document.getElementById("sound");
			let sound = sou.value;
			document.getElementById("mySong").volume = sound;
			let nd = document.getElementById("soundValue").innerHTML = Math.floor(sound * 100) + "%";
			document.getElementById("soundOfSong").ontouchmove = function(){
					document.getElementById("soundOfSong").style.opacity = 1;
					setTimeout(() => {
					    document.getElementById("soundOfSong").style.opacity = 0;
					}, 1500);
		  }
}



//Hide all
function hideAll() {
			const myNodelist = document.querySelectorAll('[hide]');
  for (let i = 0; i < myNodelist.length; i++) {  
  	 myNodelist[i].style.display = "none";
  	 document.getElementById("body").style.background = "teal";
    let player = document.getElementById("player");
    player.style.height = "120px";
    player.style.position = "fixed";
    player.style.top = "calc(100vh - 100px)";
    player.style.width = "80vw";
    document.getElementById("full").style.display = "block";
    document.getElementById("lorem").style.display = "block";
  }
}
//Hide All
function showAll() {
	const myNodelist = document.querySelectorAll('[hide]');
  for (let i = 0; i < myNodelist.length; i++) {  
  	 myNodelist[i].style.display = "block";
  	 document.getElementById("body").style.background = "conic-gradient(from 90deg at 50% 50%, #889B06 0%, #A73BFF 7%, #2196F3 13%, #002ED4 19%, #5F9918 25%, #373F6C 32%, #992A04 38%, #B0275F 45%, #147F84 50%, #21F325 57%, #EE07FF 63%, #FFEB3B 75%, #03A9F4 82%, #3FA8B5 88%, #EE82EE 100%) no-repeat 100% 100%";
  	 document.getElementById("time").style.display = "flex";
  	 document.getElementById("playSpeed").style.display = "flex";
    let player = document.getElementById("player");
    player.style.height = "auto";
    player.style.position = "absolute";
    player.style.top = "50%";
    player.style.width = "350px";
    document.getElementById("full").style.display = "none";
    document.getElementById("lorem").style.display = "none";
  }
}


//Playback Speed
function  setSpeed() {
			let spe = document.getElementById("speed").value;
			document.getElementById("mySong").playbackRate = spe;
			let ed = document.getElementById("speedVal").innerHTML = spe;
}
