var points = 0;
var a;
var b;
var submitBtn;
var nextBtn;

function randomNo() {
//create random sum BRONZE, SLIVER , GOLD
    if (points < 99) {
        randomSingleNum = () => Math.floor(Math.random()*10);
    } if (points>=100 && points<199) {
        randomSingleNum = () => Math.floor(Math.random()*100);
    } if (points>=200 && points<=300) {
        randomSingleNum = () => Math.floor(Math.random()*1000);
    }
    rsn1 = randomSingleNum();
    rsn2 = randomSingleNum();
    answer=rsn1+rsn2;   
    console.log(answer);
}
// ================================================ Click Start Button =====================================//

function begin001() {
    randomNo();
    disappear001.innerHTML = '';
    submitBtn = sum.innerHTML = rsn1 + " + " + rsn2 + ' = <input type="number" id=input001 /> <button onclick=submit001() id="submit">Submit</button>';
    progressBar.style.display = "block";
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
    nextBtn = sum.innerHTML = rsn1 + " + " + rsn2 + ' = ' + userResponse + "<button id='next' onclick=question002()>Next</button>";

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

// ================================================ If userResponse Incorrect =====================================//  
    } else {
        correctIncorrect.innerHTML = "Incorrect!";
        showUserInput.innerHTML = answer; 
        score.innerHTML = "Score: " + points;
// ================================================ Add glow for incorrect =====================================//  
        mainStage.setAttribute('class', 'red-glow');
        setTimeout(function() {mainStage.removeAttribute('class', 'red-glow') }, 300)
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



      