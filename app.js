var clickState = 0;
var container = document.getElementsByClassName("container");
var parent = document.querySelector(".modal-parent");

// ================================================ Modal Hello On page ready =====================================// 

    document.addEventListener('DOMContentLoaded', function(){ 
        parent.style.display = "block";
        setTimeout(function() {
            parent.style.display = "none"; 
        }, 3000);        
    });


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

