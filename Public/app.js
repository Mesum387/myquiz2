var quesdisplay = document.getElementById("quesdisplay");
var optparent = document.getElementById("optparent")
var currentquesno= document.getElementById("currentquesno")
var totalquesno= document.getElementById("totalquesno")
var quiz= document.getElementById("quiz")
var resultofquiz = document.getElementById("resultofquiz")
var finalperc = document.getElementById("finalperc")
var valindex = 0;
var percentage=0;


var ques = [
    {
        question:'Css Stands For _____________',
        option:['Cascading Stylesheet','Cascade sheet','Cascading Super Sheet','None OF Them'],
        rightans:'Cascading Stylesheet',

    },
    {
        question:'Which HTML attribute is used to define inline styles?',
        option: ['Styles','font','class','style'],
        rightans:'style',

    },
    {
        question:'Which CSS property controls the text size?',
        option:['text-size','font-size','font-style','None OF Them'],
        rightans:'font-size',

    },
    {
        question:'How do you select an element with id demo?',
        option:['demo','#demo','.demo','*demo'],
        rightans:'#demo',

    },
    {
        question:'How do you select elements with class name test?',
        option:['test','#test','.test','None OF Them'],
        rightans:'.test',

    },
    {
        question:'What is the default value of the position property?',
        option:['Relative','Absolute','Fixed','Sticky'],
        rightans:'Relative',

    }
]


function displayques(){
    quesdisplay.innerHTML=ques[valindex].question;
    for(var i=0;i<ques[valindex].option.length;i++){
        var itsopt = ques[valindex].option[i]; 
        var itscorrect=ques[valindex].rightans ;

        optparent.innerHTML += `<div class="col-md-6 py-2">
<button
onclick="rightorwrong('${itsopt}','${itscorrect}')"
class="
btn
p-3
fs-4
bg-dark
w-100
rounded
shadow
d-block
fw-bold
mybhg
"
>
    ${itsopt}
</button>
</div>`
}
totalquesno.innerHTML=ques.length;
currentquesno.innerHTML=valindex + 1 +"/";

}
displayques();
function nxtque(){
    
    optparent.innerHTML="";
    if(valindex + 1 == ques.length){
     resultofquiz.style.display = 'block';
     quiz.style.display = 'none';
     finalperc.innerHTML=percentage/6*100
     
     
    } else{
        valindex++;
        displayques();
    }
    
}


function rightorwrong(valofopt,valofcorrectopt){
if(valofopt==valofcorrectopt){
    percentage++
    console.log(percentage)
}
nxtque()
}