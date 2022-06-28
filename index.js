window.onload=function(){
    var numCircles=4;
    var colors=[];
    var pickedColor;
    var circles=document.querySelectorAll(".circle");
    var colorText=document.getElementById("colorDisplay");
    var score=document.getElementById('score');
    var highScore=document.getElementById('highScore');
    
    initData();
    
    function initData(){
        setupCircles();
        reset();
    }
    
    function setupCircles(){
        for (var i=0; i<4; i++){
            console.log("setup");
            circles[i].style.background=colors[i];
            circles[i].addEventListener("click",function(){
                var clickedColor=this.style.background;
                if(clickedColor===pickedColor){
                    reset();
                    console.log("correct");
                    score.textContent=parseInt(score.textContent)+1;
                }else{
                    // circles[i].style.borderColor="red";
                    // circles[i].style.borderWidth="thick";
                    // circles[i].classList.toggle("wrong-border");
                    if(parseInt(score.textContent)>parseInt(highScore.textContent)){
                        highScore.textContent=score.textContent;
                    }
                    score.textContent=0;
                    reset();
                }
            });
        }
    }
    
    function reset(){
        colors=generateRandomColors(numCircles);
        pickedColor=pickColor();
        colorText.textContent=pickedColor;
        for(var i=0; i<4; i++){
          circles[i].style.background=colors[i];
        }
    }
    
    function pickColor(){
        var rand=Math.floor(Math.random()*colors.length);
        return colors[rand];
    }
    
    function generateRandomColors(num){
        var arr=[];
        for(var i=0; i<num; i++){
            arr.push(randomColor())
        }
        return arr;
    }
    
    function randomColor(){
        var r = Math.floor(Math.random()*256);
        var g = Math.floor(Math.random()*256);
        var b = Math.floor(Math.random()*256);
        return "rgb("+r+", "+g+", "+b+")";
    }
}
