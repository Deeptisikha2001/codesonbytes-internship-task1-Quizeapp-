var que =[[" what is the answer of this 15+20=?."],[" solve the problem 22*2=?."],["15+__=25 fill in the blanks."],["what will be the answer of 11+4+5=?."],[" what is the answer of 3+_+5-4=6."]];
var option=[["18","15","22","35"],["11","19","44","88"],["5","10","15","25"],["3","9","12","20"],["13","1","2","5"]];
var ans=["35","44","10","20","2"];
var anstaken=[];
var repeat=[];
var count=0;

var temp =0;
let rdo=0,io=0;
let state=0;




function start(){
  document.getElementById("start").style.display='none';
}
 //repeatation checking
function rc()      
{
 
    document.getElementById("screen").style.visibility='visible';
    
      rd=count;
document.getElementById ("qs").innerHTML=que[rd][0];
document.getElementById ("one").innerHTML=option[rd][0];
document.getElementById ("two").innerHTML=option[rd][1];
document.getElementById ("three").innerHTML=option[rd][2];
document.getElementById ("four").innerHTML=option[rd][3];

document.getElementById ("one").style.backgroundColor='orange';
document.getElementById ("two").style.backgroundColor='orange';
document.getElementById ("three").style.backgroundColor='orange';
document.getElementById ("four").style.backgroundColor='orange';

       if(state==0)
       {
        anstaken[count]=999;
       } 

    
    
         count++;
            start();
            if(count==5)
{

  document.getElementById("submit").style.display='block';
  document.getElementById("next").style.display='none';
  document.getElementById("ok").style.display='none';


}



}

// Get all elements with the "clickable" class
function clickable()
{
const divElements = document.querySelectorAll(".option");


divElements.forEach(function(divElement) {
  divElement.addEventListener("click", function() {
   temp =divElement.textContent; 
    
    
  });

   });

   
   return temp;
  }

function anstake()
{
  var te=clickable();
anstaken[io]=te;
io++;
state=1;

document.getElementById("next").click();

}

function scorecount(){
  let score=0;
 for(let j=0;j<5;j++)
 {
  for(let k=0;k<5;k++)
  {
if(ans[k]==anstaken[j])
{
  score++;
}
  }

 }
  
  return score;

}


function submit()
{
 anstake();
 
 document.getElementById("screen").style.visibility='hidden';

  //alert("mark is "+ scorecount() + "ans" + anstaken);
  document.getElementById("scorecard").innerHTML="mark is "+ scorecount();
  document.getElementById("scorecard").style.visibility='visible';
  


}
const divElements = document.querySelectorAll(".option");


divElements.forEach(divElement=> {
  divElement.setAttribute('data-clicked','false');

  divElement.addEventListener("click", function() {
    divElement.setAttribute('data-clicked','true');
    clickable();
    temp =divElement.textContent; 
    divElement.style.backgroundColor='green';

    
    
    const elements = document.querySelectorAll(".option");
    elements.forEach(element=> {
    if(divElement!=element) {
      element.style.backgroundColor='orange';
 
    }
    });

    
  
 });

   });

   document.getElementById("start").addEventListener('click',function(){

    rc();
   });
