// Variables
// Questions Objects Array
var questions = [      
    {
        "id": 0,
        "category": "Literacy",
        "prompt": "What is a digraph?",
        "answers": {
            "a": "Two-syllable word.",
            "b": "Two sounds coming together to make a new sound.",
            "c": "The first two letters in a word.",
            "d": "A word with repeating letters (examples: book, full, buzz).",
            "r": "Two sounds coming together to make a new sound."
        },
        "correctGif": "00right.gif",
        "wrongGif": "00wrong.gif"
    },
    {
        "id": 1,
        "category": "Books",
        "prompt": "The main character in the book Corduroy is a:",
        "answers": {
            "a": "Flamingo",
            "b": "Elephant",
            "c": "Puppy",
            "d": "Bear",
            "r": "Bear"
        },
        "correctGif": "01right.gif",
        "wrongGif": "01wrong.gif"
    },
    {
        "id": 2,
        "category": "Math",
        "prompt": "Which of the following is NOT a 3-D shape?",
        "answers": {
            "a": "Pyramid",
            "b": "Cone",
            "c": "Trapezoid",
            "d": "Sphere",
            "r": "Trapezoid"
        },
        "correctGif": "02right.gif",
        "wrongGif": "02wrong.gif"
    },
    {
        "id": 3,
        "category": "Science",
        "prompt": "Which of the following represents the life cycle of a butterfly most accurately:",
        "answers": {
            "a": "pupa, chrysalis, egg, caterpillar",
            "b": "Egg, caterpillar, adult, chrysalis",
            "c": "Egg, larvae, pupa, adult",
            "d": "Pupa, egg, chrysalis, caterpillar",
            "r": "Egg, larvae, pupa, adult"
        },
        "correctGif": "03right.gif",
        "wrongGif": "03wrong.gif"
    },
    {
        "id": 4,
        "category": "Spanish",
        "prompt": "Which of the following is NOT a Spanish word for a color?",
        "answers": {
            "a": "Rojo",
            "b": "Amarillis",
            "c": "Azul",
            "d": "Verde",
            "r": "Amarillis"
        },
        "correctGif": "04right.gif",
        "wrongGif": "04wrong.gif"
    },
    {
        "id": 5,
        "category": "P.E.",
        "prompt": "How many people can play in a game of gaga?",
        "answers": {
            "a": "2-4",
            "b": "Any even amount (for even teams)",
            "c": "The more the better!",
            "d": "10",
            "r": "The more the better!"
        },
        "correctGif": "05right.gif",
        "wrongGif": "05wrong.gif"
    },
    {
        "id": 6,
        "category": "Art",
        "prompt": "You do NOT need a paintbrush to use:",
        "answers": {
            "a": "Liquid Watercolor",
            "b": "Oil Pastels",
            "c": "Tempura Paint",
            "d": "Acryllic",
            "r": "Oil Pastels"
        },
        "correctGif": "06right.gif",
        "wrongGif": "06wrong.gif"
    },
    {
        "id": 7,
        "category": "Social Emotional",
        "prompt": "What should you do if a stranger approaches you and asks you to come with them?",
        "answers": {
            "a": "Say \"okay\" and follow them wherever they take you.",
            "b": "Stand quietly and give them a mean look.",
            "c": "Yell STRANGER DANGER and run away.",
            "d": "Ask \"what's in it for me\"?",
            "r": "Yell STRANGER DANGER and run away."
        },
        "correctGif": "07right.gif",
        "wrongGif": "07wrong.gif"
    },
    {
        "id": 8,
        "category": "Music",
        "prompt": "In the popular song Baby Shark, the lyrics go:  Baby shark ______.",
        "answers": {
            "a": "doo, doo, doo, doo, doo, doo, doo",
            "b": "just keep swimming la la la la la la",
            "c": "eating fish, eating fishy fish",
            "d": "great white, tiger, hammerhead",
            "r": "doo, doo, doo, doo, doo, doo, doo"
        },
        "correctGif": "08right.gif",
        "wrongGif": "08wrong.gif"
    },
    {
        "id": 9,
        "category": "History",
        "prompt": "The Colorado state flower is a:",
        "answers": {
            "a": "Sunflower",
            "b": "Lilly",
            "c": "Columbine",
            "d": "Western Blue Virginsbower",
            "r": "Columbine"
        },
        "correctGif": "09right.gif",
        "wrongGif": "09wrong.gif"
    },
    {
        "id": 10,
        "category": "Miscellaneous",
        "prompt": "A flip shirt is:",
        "answers": {
            "a": "Made of multi-colored sequins.",
            "b": "A reversible shirt.",
            "c": "A shirt that twirls at the bottom.",
            "d": "A shirt you can do gymnastics in.",
            "r": "Made of multi-colored sequins."
        },
        "correctGif": "10right.gif",
        "wrongGif": "10wrong.gif"
    }
];
console.log(questions);
// Question Tracker
var currentQuestion;
// Answer Tracker
var correct;
var incorrect;
var unanswered;
// Time Tracker
var questionTimer;
var answerTimer;
var questionTimeLeft = 20;
var answerTimeLeft = 5;
// Ready to play
$(document).ready(function(){
    startGame();
});
// Functions
function startGame() {
    currentQuestion = 0;
    correct = 0;
    incorrect = 0;
    unanswered = 0;
    // Clear timers
    clearTimeout(answerTimer);
    clearInterval(questionTimer);
    $("#chalkBoard").empty();
    var startButton = $("<button>");
    $(startButton).addClass("btn, btn-success")
                  .attr("id", "start")
                  .html("I'll prove I'm smarter!");
    $("#chalkBoard").html("<h2 id='startMessage' class='h2'>Hey you! <br> Do you think you're smarter than a 5 year old?</h2><br>");
    // var startMessage = ["Hey you!","Do you think you're smarter than a 5 year old?"]
    // setTypeWriter(JSON.stringify(startMessage), 'startMessage')
    $("#chalkBoard").append(startButton);
    $(startButton).click(function(){
        askQuestion();
    });
};
function askQuestion() {
    $("#chalkBoard").empty();
    clearTimeout(answerTimer);
    if(currentQuestion < questions.length) {
        var q = questions[currentQuestion];
        var qNum = currentQuestion + 1;             
        console.log(questions[0]);
        console.log(q.prompt);
        var output = "<h4 class='chalkTimer'> Time remaining: <span>" + questionTimeLeft + "</span></h4>";
        output += "<h1 class='h1'><b>" + q.category + "</b></h1>";
        output += "<h3 class='h3'>" + qNum + ". " + q.prompt + "</h3>";
        output += "<div class='list-group'>";
        output += "<button id='a' type='button' style='background-color:rgba(51, 170, 51, .1)' class='list-group-item btn-outline-info h5 text-white text-left answer'>a. " + q.answers.a + "</button>";
        output += "<button id='b' type='button' style='background-color:rgba(51, 170, 51, .1)' class='list-group-item btn-outline-info h5 text-white text-left answer'>b. " + q.answers.b + "</button>";
        output += "<button id='c' type='button' style='background-color:rgba(51, 170, 51, .1)' class='list-group-item btn-outline-info h5 text-white text-left answer'>c. " + q.answers.c + "</button>";
        output += "<button id='d' type='button' style='background-color:rgba(51, 170, 51, .1)' class='list-group-item btn-outline-info h5 text-white text-left  answer'>d. " + q.answers.d + "</button>";
        output += "</div>";
        $("#chalkBoard").html(output);
        startQuestionTimer(questionTimeLeft, q);
        currentQuestion++;        
        $(".answer").on("click", function() {
        clearInterval(questionTimer);
        var userAnswer = $(this).attr("id");
            if (q.answers.r == q.answers[userAnswer]) {
                rightAnswer(q);
            } else {
                wrongAnswer(q);
            };
        });
    } else {
        // Gameover
        var output = "<h2 id='goMessage' class='h2 typewrite'>Now we can see how smart you really are.</h2>";
        // var goMessage = ["Now we can see how smart you really are."]
        // var goMessageID = "goMessage"
        output += "<table><tbody><tr><td class='left'>";
        output += "Correct: </td><td class='left'>  " + correct + "</td></tr><tr><td class='left'>";
        output += "Incorrect: </td><td class='left'>  " + incorrect + "</td></tr><tr><td class='left'>";
        output += "Unanswered: </td><td class='left'>  " + unanswered + "</td></tr></tbody></table><br>";
        var resetButton = $("<button>");
        $(resetButton).addClass("btn, btn-success")
                      .attr("id", "reset")
                      .html("I want to do it again!");
        $("#chalkBoard").html(output);
        $("#chalkBoard").append(resetButton);
        // setTypeWriter(goMessage, 'goMessage')
        $(resetButton).click(function(){
            startGame();
        });
    };
};
function rightAnswer(q) {
    console.log("right answer");
    startAnswerTimer();
    correct++;
    var output = "<h1 class='h1'><b>Correct!</h1>";
    output += "<h3>Yup that's right! 5 year old ain't got nothing on you! </h3>";
    output += "<img src='./assets/images/" + q.correctGif + "'>";
    $("#chalkBoard").html(output);
};
function wrongAnswer(q, outOfTime) {
    console.log("wrong answer");
    clearInterval(questionTimer);
    startAnswerTimer();
    var output;
    if (outOfTime == true) {
        output = "<h1 class='h1'><b>Out of Time!</b></h1>";
        unanswered++;
    } else {
        output = "<h1 class='h1'><b>Wrong!</h1>";
        incorrect++;
    }
    output += "<h5 class='h5'>Really? Come on now; 5 year olds know that one!</h5>";
    output += "<h5 class='h5'>The answer is: " + q.answers.r + "</h5>";
    output += "<img src='./assets/images/" + q.wrongGif + "'>";
    $("#chalkBoard").html(output);
};
function alertMe(text) {
    alert(text);    
}
function startQuestionTimer(t, q) {
    // start countdown
    questionTimer = setInterval(function(){
        if (t <= 0) {
            wrongAnswer(q, true);
            return;
        } else {
            t--;
            var output = "<h4 class='chalkTimer h4'> Time remaining: <span>" + t + "</span></h4>";
            $(".chalkTimer").html(output);            
        }
    }, 1000);
}
function startAnswerTimer(){
    console.log(answerTimeLeft);
    answerTimer = setTimeout(function(){
    askQuestion();
    }, answerTimeLeft * 1000);
}

/* ==============================================
   Following code is to wrtie text out using 
   setTimeout() to mimic hand writing to 
   chalkboard. It is buggy however and ran
   out of time to fully implement. 
   Almost done though! 
   ./assets/testing/test.html test sample of this
   ==============================================*/
// var aText = new Array("");
// console.log(aText);
// var iSpeed // time delay of print out
// var iIndex // start printing array at this posision
// var iArrLength // the length of the text array
// var iScrollAt // start scrolling up at this many lines                
// var iTextPos // initialise text position
// var sContents // initialise contents variable
// var iRow; // initialise current row
// var destinationWrite;
// function setTypeWriter(content, id) {
//     aText = content;
//     console.log(aText);
//     iSpeed = 30; // time delay of print out
//     iIndex = 0; // start printing array at this posision
//     iArrLength = aText[0].length; // the length of the text array
//     iScrollAt = 20; // start scrolling up at this many lines                
//     iTextPos = 0; // initialise text position
//     sContents = ''; // initialise contents variable
//     iRow; // initialise current row
//     console.log(id)
//     typewriter(id)
// }
// function typewriter(id) {
//     sContents =  ' ';
//     iRow = Math.max(0, iIndex-iScrollAt);
//     if (id == 'goMessage') {
//         destinationWrite = document.getElementById('goMessage');
//         console.log('true')
//     } else if (id == 'startMessage') {
//         destinationWrite = document.getElementById('startMessage');
//     }
//     // destinationWrite = document.getElementById(id); //I do not know why this is not working had touse if statments
//     console.log(destinationWrite);
//     while ( iRow < iIndex ) {
//     sContents += aText[iRow++] + '<br />';
//     }
//     destinationWrite.textContent = sContents + aText[iIndex].substring(0, iTextPos) + "";
//     if ( iTextPos++ == iArrLength ) {
//     iTextPos = 0;
//     iIndex++;
//     if ( iIndex != aText.length ) {
//     iArrLength = aText[iIndex].length;
//     setTimeout("typewriter()", 500);
//     }
//     } else {
//     setTimeout("typewriter()", iSpeed);
//     }
// }
// var timeLeft = 30;
// var elem = document.getElementById('timer');
// var timerId = setInterval(countdown, 1000);
// countdown();
// function countdown() {
//     if (timeLeft == -1) {
//         clearTimeout(timerId);
//         doSomething();
//     } else {
//         elem.innerHTML = timeLeft + ' seconds remaining';
//         timeLeft--;
//     }
// }

// function doSomething() {
//     alert("Hi");
// }