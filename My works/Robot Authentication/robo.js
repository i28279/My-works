//My simple Human Authentication checker...
let math = document.querySelector(".math");
let random = document.querySelector("#random");
let veriTest = document.getElementById("veriTest");
let verify = document.querySelector(".verify");
let canvas = document.querySelector(".auth");
let ctx = canvas.getContext("2d");
let tPos = []; //To check the input...
//Main function...
function robo(event) {
  clientX = event.touches[0].screenX.toFixed();
  clientY = event.touches[0].screenY.toFixed();
  //Draw
  ctx.beginPath();
  ctx.moveTo(lastX-105, lastY-400);
  ctx.lineTo(clientX-105, clientY-400);
  ctx.strokeStyle = "#00ff03";
  ctx.lineCap = "round";
  ctx.lineWidth = 10;
  ctx.stroke();
  lastX = event.touches[0].screenX.toFixed();
  lastY = event.touches[0].screenY.toFixed();
  
  //Put x & y axis to an array-object to check all the axis point...
  touchFoo = {x: clientX, y: clientY}
  tPos.push(touchFoo);
}
canvas.addEventListener("touchmove", () => robo(event));
canvas.addEventListener("touchstart", (event) => {
    lastX = event.touches[0].screenX.toFixed();
    lastY = event.touches[0].screenY.toFixed();
});

function auth() {
    ctx.clearRect(0, 0, 200, 200);
    mathRan = (Math.random() * 10).toFixed();
    if (mathRan == 10) {
      mathRan = 8;
    }    
    random.innerHTML = mathRan;
    tPos.length = 0;
    veriTest.innerHTML = "";
}
math.onclick = () => auth();
auth();

verify.addEventListener("click", () => {
  try{
    v1 = v2 = v4 = v5 = v6 = v8 = v9 = 0;
    for (let i = 0; i < tPos.length; i++) {
      if (tPos[i].x >= 180 && tPos[i].x <= 210 && tPos[i].y <= 440) {v1 = 1;}
      if (tPos[i].x >= 260 && tPos[i].y >= 460 && tPos[i].y <= 470) {v2 = 4;}
      if (tPos[i].x <= 140 && tPos[i].y >= 460 && tPos[i].y <= 470) {v4 = 8;}
      if (tPos[i].x >= 180 && tPos[i].x <= 210 && tPos[i].y >= 495 && tPos[i].y <= 510) {v5 = 5;}
      if (tPos[i].x >= 260 && tPos[i].y >= 530 && tPos[i].y <= 540) {v6 = 6;}
      if (tPos[i].x <= 140 && tPos[i].y >= 530 && tPos[i].y <= 540) {v8 = 2;}
      if (tPos[i].x >= 190 && tPos[i].x <= 215 && tPos[i].y >= 560) {v9 = 9;}
    }
    
    v = v1 + v2 + v4 + v5 + v6 + v8 + v9;
    //Get the decoded authentic value...
    notVerified = "something unexpected.";
    aut0 = aut1 = aut2 = aut3 = aut4 = aut5 = aut6 = aut7 = aut8 = aut9 = 0;
    if (v == 30) {aut0 = 0; notVerified = 0;}
    else if (v == 10) {aut1 = 1; notVerified = 1;}
    else if (v == 21) {aut2 = 2; notVerified = 2;}
    else if (v == 25) {aut3 = 3; notVerified = 3;}
    else if (v == 23) {aut4 = 4; notVerified = 4;}
    else if (v == 29) {aut5 = 5; notVerified = 5;}
    else if (v == 31) {aut6 = 6; notVerified = 6;}
    else if (v == 11) {aut7 = 7; notVerified = 7;}
    else if (v == 35) {aut8 = 8; notVerified = 8;}
    else if (v == 33) {aut9 = 9; notVerified = 9;}
    else { throw "<b style='color:#be0800'>Please draw correctly or take help.</b> You wrote <b>" + notVerified + "</b>";}
    
    //Verify...
    if (random.innerHTML == aut0) throw "You wrote 0";
    else if (random.innerHTML == aut1) throw "You wrote 1";
    else if (random.innerHTML == aut2) throw "You wrote 2";
    else if (random.innerHTML == aut3) throw "You wrote 3";
    else if (random.innerHTML == aut4) throw "You wrote 4";
    else if (random.innerHTML == aut5) throw "You wrote 5";
    else if (random.innerHTML == aut6) throw "You wrote 6";
    else if (random.innerHTML == aut7) throw "You wrote 7";
    else if (random.innerHTML == aut8) throw "You wrote 8";
    else if (random.innerHTML == aut9) throw "You wrote 9";
    else throw "<b style='color:#be0800'>Please draw correctly or take help.</b> You wrote <b>" + notVerified + "</b>";
  } catch(err) {
    veriTest.innerHTML = err;
  }
  
  //Show the verify button as verified...
  for (let x = 0; x < 10; x++) {
    if (veriTest.innerHTML == `You wrote ${x}`) {
      verify.innerHTML = "Verified";
      verify.style.background = "#696969";
      setTimeout(function() {location.reload()}, 1500);
    }
  }
});

//Time function 
function timeUp() {
  let timeUp = document.getElementById("times-up");
  let time = document.getElementById("time");
  time.innerHTML = 30;
  let timeInt = setInterval(function() {
    time.innerHTML -= 1;
    if (time.innerHTML < 10) {
      time.innerHTML = "0" + time.innerHTML;
    }
    if (time.innerHTML == 0) {
      clearTimeout(timeInt);
      location.reload();
    }
  }, 1000);
}
timeUp();


//Help zone...
let box = document.querySelector(".help-box");
document.querySelector(".close-help").onclick = () => {box.style.transform = "scale(0)"}
//Draw the number to help...
let help = document.querySelector("#help-txt");

document.querySelector(".help-btn").onclick = () => {
  box.style.transform = "scale(1)";
  help.innerHTML = random.innerHTML;
}
