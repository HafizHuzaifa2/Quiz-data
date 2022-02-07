import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-analytics.js";
import {
    getDatabase,
    ref,
    onValue,
} from "https://www.gstatic.com/firebasejs/9.6.3/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAVLIfypza32cBJ21-ygC7fKGIO7RHUD3I",
    authDomain: "quizapp-huzaifa.firebaseapp.com",
    databaseURL: "https://quizapp-huzaifa-default-rtdb.firebaseio.com",
    projectId: "quizapp-huzaifa",
    storageBucket: "quizapp-huzaifa.appspot.com",
    messagingSenderId: "796820498671",
    appId: "1:796820498671:web:09dcc216993ed032f4d31a",
    measurementId: "G-DRRKHGYCTT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();
const dbRef = ref(db, "Questions");


var QuestionForQuiz = document.getElementById("QuestionForQuiz");
var Options = document.getElementById("Options");
var QuestionNo = document.getElementById("QuestionNo");
var TotalQuestion = document.getElementById("TotalQuestion");
var results = document.getElementById("result");
var passed = document.getElementById("passed");
var inval = 0
var mark = 0
var selectoptions = document.getElementsByName("Option")

var questions1 = []

// function render() {
//     var QuestionForQuiz = document.getElementById("QuestionForQuiz");
//     // QuestionForQuiz.innerHTML = "";
//     Options.innerHTML = ""
//     questions.forEach(function(e) {
//         console.log(e);

//         Options.innerHTML += `<h1 class="p-5 my-3 fs-4 fw-bold" style="background-color: #f5ebe0 ; border-bottom: 1px solid black;" id="QuestionForQuiz">${e.question}</h1>

//         <div class="row">
//         <div class="col-md-6">
//         <div class="form-check m-1">
//             <input class="form-check-input" type="radio" name="Option" value="${e.option1}" id="option1">
//             <label class="form-check-label btn btn-primary  rounded-pill fw-bold w-100 shadow" for="option1">
//      ${e.option1}
//     </label>
//         </div>
//     </div>
//     <div class="col-md-6">
//         <div class="form-check m-1">
//             <input class="form-check-input" type="radio" name="Option" value="${e.option2}" id="option2">
//             <label class="form-check-label btn btn-primary  rounded-pill fw-bold w-100 shadow" for="option2">
//             ${e.option2}
//     </label>
//         </div>
//     </div>
//     <div class="col-md-6">
//         <div class="form-check m-1">
//             <input class="form-check-input" type="radio" name="Option" value="${e.option3}" id="option3">
//             <label class="form-check-label btn btn-primary  rounded-pill fw-bold w-100 shadow" for="option3">
//             ${e.option3}
//     </label>
//         </div>
//     </div>
//     <div class="col-md-6">
//         <div class="form-check m-1">
//             <input class="form-check-input " type="radio" name="Option" value="${e.option4}" id="option4">
//             <label class="form-check-label btn btn-primary  rounded-pill fw-bold w-100 shadow" for="option4">
//             ${e.option4}
//     </label>
//         </div>
//     </div>
//     </div>`;

// function nexts() {
//     console.log(selectoptions.value)
//     console.log(mark)
//     if (`${e.correctOption}` == selectoptions.value) {
//         mark++
//         console.log(mark)

//     }
// }
// TotalQuestion.innerHTML = `${e.id}`
// QuestionNo.innerHTML = inval + 1
//         if (inval + 1 == questions.length) {


//             var total = mark * 100 / questions.length
//             total = total.toFixed(2)

//             percentage.innerHTML = total

//             document.getElementById("firstpage").style.display = "none"
//             document.getElementById("results").style.display = "block"

//             if (total >= 70) {

//                 passed.innerHTML = "Passed!"
//             } else {
//                 passed.innerHTML = "Failed!"

//             }
//         } else {

//             inval++;
//             render()
//         }



// });
// }


// onValue(
//     dbRef,
//     function(snapshot) {
//         snapshot.forEach(function(childSnapshot) {
//             questions.push(childSnapshot.val());
//             render();
//         });
//     }, {
//         onlyOnce: false,
//     }
// );





function render() {
    questions1.forEach(function(e) {
        console.log(e)


        var questions = [{
                questionss: `${e.question} ________`,
                Optionss: [`${e.option1}`, `${e.option2}`, `${e.option3}`, `${e.option4}`],
                CorrectOpt: `${e.correctOption}`
            },
            {
                questionss: `${e.question} ________`,
                Optionss: [`${e.option1}`, `${e.option2}`, `${e.option3}`, `${e.option4}`],
                CorrectOpt: `${e.correctOption}`
            },
            {
                questionss: `${e.question} ________`,
                Optionss: [`${e.option1}`, `${e.option2}`, `${e.option3}`, `${e.option4}`],
                CorrectOpt: `${e.correctOption}`
            },
            {
                questionss: `${e.question} ________`,
                Optionss: [`${e.option1}`, `${e.option2}`, `${e.option3}`, `${e.option4}`],
                CorrectOpt: `${e.correctOption}`
            },
            {
                questionss: `${e.question} ________`,
                Optionss: [`${e.option1}`, `${e.option2}`, `${e.option3}`, `${e.option4}`],
                CorrectOpt: `${e.correctOption}`
            },
            {
                questionss: `${e.question} ________`,
                Optionss: [`${e.option1}`, `${e.option2}`, `${e.option3}`, `${e.option4}`],
                CorrectOpt: `${e.correctOption}`
            },
            {
                questionss: `${e.question} ________`,
                Optionss: [`${e.option1}`, `${e.option2}`, `${e.option3}`, `${e.option4}`],
                CorrectOpt: `${e.correctOption}`
            },
            {
                questionss: `${e.question} ________`,
                Optionss: [`${e.option1}`, `${e.option2}`, `${e.option3}`, `${e.option4}`],
                CorrectOpt: `${e.correctOption}`
            },
            {
                questionss: `${e.question} ________`,
                Optionss: [`${e.option1}`, `${e.option2}`, `${e.option3}`, `${e.option4}`],
                CorrectOpt: `${e.correctOption}`
            },



        ]

        function Rendered() {

            Options.innerHTML = ""
            QuestionForQuiz.innerHTML = questions[inval].questionss

            for (var i = 0; i < questions[inval].Optionss.length; i++) {
                var opts = questions[inval].Optionss[i]

                Options.innerHTML += `<div class="col-md-6">
                <button onclick=" CheckQuest('${questions[inval].Optionss[i]}','${questions[inval].CorrectOpt}') " class="btn btn-primary rounded-pill fw-bold m-3   w-100 shadow">${opts}</button>
            </div>`
            }
            TotalQuestion.innerHTML = questions.length

            QuestionNo.innerHTML = inval + 1



        }

        Rendered()

        function Nexts() {

            Options.innerHTML = ""

            if (inval + 1 == questions.length) {


                var total = mark * 100 / questions.length
                total = total.toFixed(2)

                percentage.innerHTML = total

                document.getElementById("firstpage").style.display = "none"
                document.getElementById("results").style.display = "block"

                if (total >= 70) {

                    passed.innerHTML = "Passed!"
                } else {
                    passed.innerHTML = "Failed!"

                }
            } else {

                inval++;
                Rendered()
            }




        }



        document.CheckQuest = function(optio, correct) {




            if (optio == correct) {

                mark++
            }
            Nexts()


            console.log(mark)




        }

    });
}

onValue(
    dbRef,
    function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            questions1.push(childSnapshot.val());
            render();
        });
    }, {
        onlyOnce: false,
    }
);


// var questions = [{
//         questionss: "HTML stands for ________",
//         Optionss: ["Hyper Text Markup Language", "Hyper Tag Markup Leaque", "Hyper Text Magnitude", "HTML"],
//         CorrectOpt: "Hyper Text Markup Language"
//     },
//     {
//         questionss: "CSS stands for ________",
//         Optionss: ["Cascading Style Sheet", "Hyper Tag Markup Leaque", "Hyper Text Magnitude", "HTML"],
//         CorrectOpt: "Cascading Style Sheet"
//     },
//     {
//         questionss: "RAM stands for _________",
//         Optionss: ["Random Access Memory", "Hyper Tag Markup Leaque", "Hyper Text Magnitude", "HTML"],
//         CorrectOpt: "Random Access Memory"
//     },
//     {
//         questionss: "ROM stands for ________",
//         Optionss: ["Read Only Memory", "Hyper Tag Markup Leaque", "Hyper Text Magnitude", "HTML"],
//         CorrectOpt: "Read Only Memory"
//     },
//     {
//         questionss: "RAM stands for ________",
//         Optionss: ["Random Access Memory", "Hyper Tag Markup Leaque", "Hyper Text Magnitude", "HTML"],
//         CorrectOpt: "Random Access Memory"
//     },
//     {
//         questionss: "ROM stands for ________",
//         Optionss: ["Read Only Memory", "Hyper Tag Markup Leaque", "Hyper Text Magnitude", "HTML"],
//         CorrectOpt: "Read Only Memory"
//     },
// ]