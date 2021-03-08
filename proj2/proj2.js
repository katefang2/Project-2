var canvas;
var ctx;

// setUpCanvas();

function p1grow(){
var Image_Id1 = document.getElementById('p1s1');
            if (Image_Id1.src.match("p1s1.png")) {
                Image_Id1.src = "img/p1.gif";
            }
            // else if (Image_Id1.src.match("p1s2.png")){
            //     Image_Id1.src = "img/p1s3.png";
            // }
            
            // else {
            //     Image_Id1.src = "p1s1.png";
            // }
        }  
        
        function p2grow(){
            var Image_Id2 = document.getElementById('p2s1');
                        if (Image_Id2.src.match("p2s1.png")) {
                            Image_Id2.src = "img/p2.gif";
                        }
                        // else {
                        //     Image_Id2.src = "p2s1.png";
                        // }
                    }  
function p3grow(){
            var Image_Id3 = document.getElementById('p3s1');
                        if (Image_Id3.src.match("p3s1.png")) {
                            Image_Id3.src = "img/p3.gif";
                        }
                        // else {
                        //     Image_Id3.src = "p3s1.png";
                        // }
                    }   


                    function p4grow(){
                        var Image_Id4 = document.getElementById('p4s1');
                                    if (Image_Id4.src.match("p4s1.png")) {
                                        Image_Id4.src = "img/p4.gif";
                                    }
                                    // else {
                                    //     Image_Id4.src = "p4s1.png";
                                    // }
                                }  
function p5grow(){
var Image_Id5 = document.getElementById('p5s1');
if (Image_Id5.src.match("p5s1.png")) {
            Image_Id5.src = "img/p5.gif";
            }
// else {
// Image_Id5.src = "p5s1.png";
//     }
    }   

// function p1grow(){
//     document.getElementById("p1s1").src == "img/p1grow.gif"
// }

// $("p1s1").click(p1grow);
$("#p1s1").draggable(); 
$("#p2s1").draggable(); 
$("#p3s1").draggable(); 
$("#p4s1").draggable(); 
$("#p5s1").draggable(); 

function myFunction() {
    var txt;
    var answer = prompt("What is your answer?");
    if (answer == "And the secret garden bloomed and bloomed and every morning revealed new miracles.") {
      txt = alert("Well Done!");
    }
    else if (answer == "And the secret garden bloomed and bloomed and every morning revealed new miracles"){
        txt = alert("Well Done!");  
      }
     else {
      txt = alert("It's not correct, try again!");
    }
//     document.getElementById("demo").innerHTML = txt;
  }
  

// function setUpCanvas(){
//     canvas = document.querySelector("#myCanvas");
//     ctx = canvas.getContext("2d");
//     canvas.width = 750;
//     canvas.height = 600;
//     canvas.style.border = "5px dotted orange";
// }

console.log("This is a puzzle game, but if you want to cheat you can google The Secret Garden quotes by Frances Hodgson Burnett to find the correct answer")
