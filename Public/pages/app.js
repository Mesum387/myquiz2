// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-analytics.js";
import { getDatabase, ref, push, set,onValue,update,remove } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCS_361J60tZoh-CixP1CupWzdvzzjFgCQ",
    authDomain: "quiz-39aba.firebaseapp.com",
    projectId: "quiz-39aba",
    storageBucket: "quiz-39aba.appspot.com",
    messagingSenderId: "133158016400",
    appId: "1:133158016400:web:c5a0000afacf096a888f15",
    measurementId: "G-8ZSVN5K6VR"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();

window.addingQues= function(){
    var obj={
        question: document.getElementById("myinpques").value,
        opt1: document.getElementById("opt1").value,
        opt2: document.getElementById("opt2").value,
        opt3: document.getElementById("opt3").value,
        opt4: document.getElementById("opt4").value,
        correctopt: document.getElementById("correctopt").value,

    }
    var myques_ref = push(ref(db,"qAndAns")) 
   obj.key = myques_ref.key; 
    set(myques_ref,obj)

}


window.oldtodo = function(){
    var myques = document.getElementById("myques")
    var myopt1 = document.getElementById("myopt1")
    var myopt2 = document.getElementById("myopt2")
    var myopt3 = document.getElementById("myopt3")
    var myopt4 = document.getElementById("myopt4")
    var mycorrectopt = document.getElementById("mycorrectopt")

    onValue(ref(db,"qAndAns"),function(data){
        // console.log(data.val());
        // var TodoList=Object.values(data.val())
        // for(var j =0;j<TodoList;i++){
        //     console.log(TodoList[j])
        // }
        // console.log(TodoList)
        
        myques.innerHTML=''
        data.forEach(function(que){
            console.log(que.val())
            var quesLi =que.val().question
            var quesLi1 =que.val().opt1
            var quesLi2 =que.val().opt2
            var quesLi3 =que.val().opt3
            var quesLi4 =que.val().opt4
            var quesLi5 =que.val().correctopt
            var quesKey =que.val().key
            if(quesLi){
                myques.innerHTML+=`Ques : ${quesLi}   
                
                <button class="btn btn-outline-primary fs-4 fw-bold" onclick="edit('${quesKey}')">Edit</button>
                <button class="btn btn-outline-danger fs-4 fw-bold" onclick="DeleteTodo('${quesKey}')">Delete</button>
                 <br/>`
                
            }
            else if(quesLi1){
                myopt1.innerHTML+=`Ques 1: ${quesLi1}   
                
                <button class="btn btn-outline-primary fs-4 fw-bold" onclick="edit('${quesKey}')">Edit</button>
                <button class="btn btn-outline-danger fs-4 fw-bold" onclick="DeleteTodo('${quesKey}')">Delete</button>
                 <br/>`
            }
            else if(quesLi2){
                myopt2.innerHTML+=`Ques 2: ${quesLi2}   
                
                <button class="btn btn-outline-primary fs-4 fw-bold" onclick="edit('${quesKey}')">Edit</button>
                <button class="btn btn-outline-danger fs-4 fw-bold" onclick="DeleteTodo('${quesKey}')">Delete</button>
                 <br/>`
            }
            else if(quesLi3){
                myopt3.innerHTML+=`Ques 3: ${quesLi3}   
                
                <button class="btn btn-outline-primary fs-4 fw-bold" onclick="edit('${quesKey}')">Edit</button>
                <button class="btn btn-outline-danger fs-4 fw-bold" onclick="DeleteTodo('${quesKey}')">Delete</button>
                 <br/>`
            }
            else if(quesLi4){
                myopt4.innerHTML+=`Ques 4: ${quesLi4}   
                
                <button class="btn btn-outline-primary fs-4 fw-bold" onclick="edit('${quesKey}')">Edit</button>
                <button class="btn btn-outline-danger fs-4 fw-bold" onclick="DeleteTodo('${quesKey}')">Delete</button>
                 <br/>`
            }
            else if(quesLi5){
                mycorrectopt.innerHTML+=`Ques 5: ${quesLi5}   
                
                <button class="btn btn-outline-primary fs-4 fw-bold" onclick="edit('${quesKey}')">Edit</button>
                <button class="btn btn-outline-danger fs-4 fw-bold" onclick="DeleteTodo('${quesKey}')">Delete</button>
                 <br/>`
            }
        else{
            myques.innerHTML='No Questions are available.'
        }
        });

    })
    
}
window.edit = function(id){
var NewQues = prompt(`EDIT Ques `)
var NewOpt1 = prompt(`EDIT Opt1 `)
var NewOpt2 = prompt(`EDIT Opt2 `)
var NewOpt3 = prompt(`EDIT Opt3 `)
var NewOpt4 = prompt(`EDIT Opt4 `)
var NewCorrectans = prompt(`EDIT New Correct Answer `)

console.log(id)
update(ref(db,`qAndAns/${id}`),{
    question:NewQues,
    opt1:NewOpt1,
    opt2:NewOpt2,
    opt3:NewOpt3,
    opt4:NewOpt4,
    correctopt:NewCorrectans,
})


}

window.DeleteTodo=function(id){
    remove(ref(db,`qAndAns/${id}`))
}


//delete all
window.deleteall=function()
{
remove(ref(db));
}





