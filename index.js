document.addEventListener("click", function (event) {
    if (event.target.matches("#btn")) {
      startGame();
    }
  });

function startGame(){
    initialScore=0;
    makeBubble();
    runTimer();
    HITgen();    
}
function makeBubble(){
    let bubbles = "";
    for (let i = 0; i < 500; i++) {
        let num = Math.floor(Math.random() * 15);
        bubbles += `<div class="bubble">${num}</div>`;
    }

    let bottom = document.querySelector("#pbtm");
    bottom.innerHTML = bubbles;
}
function runTimer(){
    let timer = 61;
    let t = document.querySelector("#time");
   var timerInterval = setInterval(() => {
    timer--;
    if(timer>=0){
        t.textContent = timer;
    }
    else{
        clearInterval(timerInterval);
        gameover();
    }
   }, 1000); 
}

let hitNUM = document.querySelector("#hit");
function HITgen(){
    let num = Math.floor(Math.random() * 15);
    hitNUM.textContent = num;
}

function scoreUpdate(){
    initialScore+=10;
    document.querySelector("#score").textContent=initialScore;
}
var bubbleHit = document.querySelector("#pbtm");
bubbleHit.addEventListener("click",function(dets){
    if(Number(dets.target.textContent)==Number(hitNUM.textContent)){
        scoreUpdate();
        HITgen();
    }
})
function gameover(){
    let bottom = document.querySelector("#pbtm");
    let lorem = `                <div id="finish">
    <h3>GAME OVER!</h3>
    <h4>FINAL SCORE: ${initialScore}</h4>
    <button id="btn"><i class="ri-gamepad-fill"></i>  PLAY AGAIN</button>
</div>`;
    bottom.innerHTML = lorem;
}
