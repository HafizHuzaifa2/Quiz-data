import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-analytics.js";
import {
    getDatabase,
    ref,
    push,
    set,

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

var submit = document.getElementById("submit");

submit.addEventListener("click", function() {
    var questions = {};

    questions.question = document.getElementById("question").value;
    questions.option1 = document.getElementById("option1").value;
    questions.option2 = document.getElementById("option2").value;
    questions.option3 = document.getElementById("option3").value;
    questions.option4 = document.getElementById("option4").value;
    questions.correctOption = document.getElementById("correctOption").value;



    const Ref = ref(db, `Questions`);
    const newPostRef = push(Ref);
    questions.id = newPostRef.key;
    set(newPostRef, questions)
        .then(function() {
            console.log("success");
        })
        .catch(function(err) {
            console.log(err);
        });

    console.log(questions);
});