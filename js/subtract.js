var points = 0;
var a;
var b;
var submitBtn;
var nextBtn;
var lifes = 3;
var clickState = 0;
var container = document.getElementsByClassName("container");

var parent = document.querySelector(".modal-parent");
var X = document.querySelector(".X");


function randomNo() {

    if (points < 99) {
            randomSingleNum = () => Math.floor(Math.random()*10);
    } if (points>=100 && points<199) {
            randomSingleNum = () => Math.floor(Math.random()*100);
    } if (points>=200 && points<=300) {
            randomSingleNum = () => Math.floor(Math.random()*1000);
    }

    // ================================================ Code for subtraction =====================================//
    do { 
        rsn1 = randomSingleNum();
        rsn2 = randomSingleNum();
        answer=rsn1-rsn2;
        console.log(answer);

    } while (rsn1-rsn2<0);

}

// ================================================ Click Start Button =====================================//

function begin001() {
    
    randomNo();
    disappear001.innerHTML = '';
    submitBtn = sum.innerHTML = rsn1 + " - " + rsn2 + ' = <input type="number" id=input001 /> <button onclick=submit001() id="submit">Submit</button>';
    progressBar.style.display = "block";
    lives.innerHTML = "Lives: " + lifes;
    score.innerHTML = "Score: " + points;
    input001.select();

// ================================================ Listen for Enter Key on Submit Button =====================================//

    input001.addEventListener("keyup", function(event){
        if(event.keyCode ===13) {
            event.preventDefault();
            submit001();
        }
    });
}

      //Evaluate User Input

      function submit001() {
        var userResponse = input001.value;  
        document.getElementById('submit').style.display = 'none';
        nextBtn = sum.innerHTML = rsn1 + " - " + rsn2 + ' = ' + userResponse + "<button id='next' onclick=question002()>Next</button>";
    
        // next.keyup() (function(event){
        //     if(event.keyCode ===13) {
        //         question002();  
        //     }
        // });
    
    // ================================================ If userResponse Correct =====================================//  
        if (userResponse == answer) {
            correctIncorrect.innerHTML = "Correct!";
            points = points + 10;
            score.innerHTML = "Score: " + points;
    
     // ================================================ Add glow for correct =====================================//       
            mainStage.setAttribute('class', 'green-glow');
            setTimeout(function() {mainStage.removeAttribute('class', 'green-glow') }, 300);
           
            progressBar1();
    
     // ================================================ Add Levels  =====================================//   
    
            if (points ===100) {
                sum.innerHTML = "You've passed level 1! <br>Advance to level 2!"; 
                showUserInput.innerHTML= "<button id='next' onclick=question002()>Next</button>" ;
            }if (points ===200) {
                sum.innerHTML = "You've passed level 2! <br>Advance to level 3! <button id='next' onclick=question002()>Next</button>" ;
            } if (points ===300) {
                sum.innerHTML = "Congratulations! <br>You have completed addition!";
            }
    
    // ================================================ If userResponse Incorrect (Game Over)=====================================//  
        } else {
            lifes= lifes-1;
            if (lifes>0) {
                correctIncorrect.innerHTML = "Incorrect!";
                showUserInput.innerHTML = answer; 
                lives.innerHTML = "Lives: " + lifes;
            } else {
                lives.innerHTML = "Lives: " + lifes;
                parent.style.display = "block";
            }
            
    
    // ================================================ Add glow for incorrect =====================================//  
            mainStage.setAttribute('class', 'red-glow');
            setTimeout(function() {mainStage.removeAttribute('class', 'red-glow') }, 300);
           
        }
    }
    
    // ================================================ Add next Sum when Next Button is fired =====================================// 
    
    function question002() {
        randomNo();
        begin001();
        correctIncorrect.innerHTML = ""; 
        nextBtn.innerHTML = "";
        showUserInput.innerHTML = ""; 
    }
    
    //Progress Bar
    function progressBar1() {
        if (points< 99) {
            barColor.style.background = "#9CFFFA";
            barColor.style.width = points + '%';
        } if (points>=100 && points<199) {
            barColor.style.background = "#62B6CB";
            barColor.style.width = points-100 + '%';
        } if (points>=200 && points<=300) {
            barColor.style.background = "#004777";
            barColor.style.width = points-200 + '%';
        }
    }
    
    // ================================================ Overlay =====================================// 
    
    function myFunction(x) { 
        if (clickState==0) {
            overlay.style.width ='100%';
            clickState = 1;
        } else {
            overlay.style.width =  "0%";
          clickState = 0;
        }
        x.classList.toggle("change");   
    }
    
    


      