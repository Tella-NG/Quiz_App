

// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language",
    options: [
      "Hyper Text Preprocessor",
      "Hyper Text Markup Language",
      "Hyper Text Multiple Language",
      "Hyper Tool Multi Language"
    ]
  },
    {
    numb: 2,
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheet",
    options: [
      "Common Style Sheet",
      "Colorful Style Sheet",
      "Computer Style Sheet",
      "Cascading Style Sheet"
    ]
  },
    {
    numb: 3,
    question: "What does PHP stand for?",
    answer: "Hypertext Preprocessor",
    options: [
      "Hypertext Preprocessor",
      "Hypertext Programming",
      "Hypertext Preprogramming",
      "Hometext Preprocessor"
    ]
  },
    {
    numb: 4,
    question: "What does SQL stand for?",
    answer: "Structured Query Language",
    options: [
      "Stylish Question Language",
      "Stylesheet Query Language",
      "Statement Question Language",
      "Structured Query Language"
    ]
  },
    {
    numb: 5,
    question: "What does XML stand for?",
    answer: "eXtensible Markup Language",
    options: [
      "eXtensible Markup Language",
      "eXecutable Multiple Language",
      "eXTra Multi-Program Language",
      "eXamine Multiple Language"
    ]
  },
  {
    numb: 6,
    question: "What is the correct way to declare a JavaScript variable?",
    answer: "var x = 5",
    options: [
    "var x = 5",
    "variable x = 5",
     "x = 5",
    "int x = 5",
    "let x = 5"
    ]
  },
  {
    numb: 7,
    question: "What does the DOM stand for in JavaScript?hat is the correct way to declare a JavaScript variable?",
    answer: "Document Object Model",
    options: [
        "/This is a comment/",
        "// This is a comment",
        "/* This is a comment */",
        "<!-- This is a comment",
        "# This is a comment"
    ]
  },
  {
    numb: 8,
    question: "Which method is used to join two or more arrays in JavaScript?",
    answer: "concat()",
    options: [
        "merge()",
        "concatenate()",
   "joinArrays()",
   "concat()"
    ]
  },
  {
    numb: 9,
    question: "What is the purpose of the `typeof` operator in JavaScript?",
    answer: "To determine the data type of a variable",
    options: [
        "To check if a variable is defined",
   "To determine the data type of a variable",
   "To convert a variable to a string",
   "To check if a variable is null"
    ]
  },
  {
    numb: 10,
    question: "What is the output of console.log(2 + '2')?",
    answer: "22",
    options: [
        "4",
        "22",
        "22",
        "NaN"
    ]
  },
  {
    numb: 11,
    question: "How do you declare a constant variable in JavaScript?",
    answer: "const x = 10",
    options: [
        "const x = 10;",
        "let x = 10;",
        "var x = 10;",
        "constant x = 10;"
    ]
  },
  {
    numb: 12,
    question: "What does the `===` operator do in JavaScript?",
    answer: "Checks equality without type coercion",
    options: [
    "Assigns a value",
   "Checks equality without type coercion",
   "Checks equality with type coercion",
   "Compares two strings"
    ]
  },
  {
    numb: 13,
    question: "What is the purpose of the `setTimeout` function in JavaScript?",
    answer: "Delays the execution of a function",
    options: [
        "Pauses the execution of the script",
        "Delays the execution of a function",
        "Sets a timer to repeat a function",
        "Measures the time taken by a function"
    ]
  },
  {
    numb: 14,
    question: "Which method is used to remove the last element from an array in JavaScript?",
    answer: "pop()",
    options: [
        "pop()",
        "removeLast()",
        "deleteLast()",
        "splice()"
    ]
  },
  {
      numb: 15,
      question: "How do you declare a constant variable in JavaScript?",
      answer: "const x = 10",
      options: [
          "const x = 10;",
          "let x = 10;",
          "var x = 10;",
          "constant x = 10;"
      ]
  },
  {
      numb: 16,
      question: "What is the purpose of the 'map()' method in JavaScript?",
      answer: "Creates a new array by manipulating each element in the original array",
      options: [
          "Filters elements in an array based on a condition",
          "Modifies the original array",
          "Sorts the elements of an array",
          "Creates a new array by manipulating each element in the original array"
      ]
  },
  {
      numb: 17,
      question: "How do you declare a variable in JavaScript?",
      answer: "var x = 10;",
      options: [
          "const x = 10;",
          "let x = 10;",
          "var x = 10;",
          "variable x = 10;"
      ]
  },
  {
      numb: 18,
      question: "What does the 'typeof' operator return in JavaScript?",
      answer: "The data type of its operand",
      options: [
          "The value of its operand",
          "The length of its operand",
          "The data type of its operand",
          "The index of its operand"
      ]
  },
  {
      numb: 19,
      question: "How do you add a comment in JavaScript?",
      answer: "// This is a comment",
      options: [
          "// This is a comment",
          "/* This is a comment */",
          "' This is a comment",
          "<!-- This is a comment -->"
      ]
  },
  {
      numb: 20,
      question: "What does the 'shift()' method do in JavaScript?",
      answer: "Removes the first element from an array and returns that removed element",
      options: [
          "Adds elements to the beginning of an array",
          "Removes elements from the beginning of an array",
          "Removes the first element from an array and returns that removed element",
          "Removes the last element from an array and returns that removed element"
      ]
  },
  {
      numb: 21,
      question: "What is the purpose of the 'forEach()' method in JavaScript?",
      answer: "Executes a provided function once for each array element",
      options: [
          "Executes a provided function once for each array element",
          "Modifies the original array",
          "Creates a new array by applying a function to each element",
          "Finds the first element in an array that satisfies a condition"
      ]
  },
  {
      numb: 22,
      question: "How do you access a property of an object in JavaScript?",
      answer: "object[property]",
      options: [
          "object.getProperty(property)",
          "object.get(property)",
          "object.property",
          "object[property]"
      ]
  },
  {
      numb: 23,
      question: "What does the 'pop()' method do in JavaScript?",
      answer: "Removes the last element from an array and returns that removed element",
      options: [
          "Adds elements to the end of an array",
          "Removes elements from the beginning of an array",
          "Removes the first element from an array and returns that removed element",
          "Removes the last element from an array and returns that removed element"
      ]
  },
  {
      numb: 24,
      question: "How do you convert a string to lowercase in JavaScript?",
      answer: "string.toLowerCase()",
      options: [
          "toLowerCase()",
          "string.lowerCase()",
          "convertToLowerCase()",
          "strToLower()"
      ]
  },
  {
      numb: 25,
      question: "What does the 'find()' method do in JavaScript?",
      answer: "Finds the first element in an array that satisfies a condition",
      options: [
          "Finds the index of an element in an array",
          "Finds the maximum value in an array",
          "Finds the minimum value in an array",
          "Finds the first element in an array that satisfies a condition"
      ]
  },
  {
      numb: 26,
      question: "How do you declare a function in JavaScript?",
      answer: "function myFunction() {}",
      options: [
          "myFunction = function() {}",
          "function: myFunction() {}",
          "func myFunction() {}",
          "function myFunction() {}"
      ]
  },
  {
      numb: 27,
      question: "What does the 'shift()' method do in JavaScript?",
      answer: "Removes the first element from an array",
      options: [
          "Adds elements to the beginning of an array",
          "Removes elements from the beginning of an array",
          "Removes the first element from an array",
          "Removes the last element from an array"
      ]
  },
  {
      numb: 28,
      question: "What is the purpose of the 'filter()' method in JavaScript?",
      answer: "Creates a new array by filtering out elements based on a condition",
      options: [
          "Modifies the original array",
          "Creates a new array by filtering out elements based on a condition",
          "Adds elements to an array",
          "Sorts the elements of an array"
      ]
  },
  {
      numb: 29,
      question: "Which method is used to convert a string to an array in JavaScript?",
      answer: "split()",
      options: [
          "toArray()",
          "split()",
          "stringToArray()",
          "join()",
          "array()"
      ]
  },
  {
      numb: 30,
      question: "What does the 'reduce()' method do in JavaScript?",
      answer: "Combines all elements in an array into a single value",
      options: [
          "Sums up all elements in an array",
          "Multiplies all elements in an array",
          "Applies a function to each element in the array",
          "Combines all elements in an array into a single value"
      ]
  },
  {
      numb: 31,
      question: "How do you convert a string to a number in JavaScript?",
      answer: "parseInt()",
      options: [
          "parseInt()",
          "convertToNumber()",
          "toNumber()",
          "numberFromString()",
          "castToNumber()"
      ]
  },
  {
      numb: 32,
      question: "What is the purpose of the 'reverse()' method in JavaScript?",
      answer: "Modifies the original array to reverse its elements",
      options: [
          "Creates a new array with reversed elements",
          "Sorts the elements of an array",
          "Modifies the original array to reverse its elements",
          "Removes elements from an array"
      ]
  },
  {
      numb: 33,
      question: "How do you access the length of an array in JavaScript?",
      answer: "array.length",
      options: [
          "array.len()",
          "array.size()",
          "array.length()",
          "array.length",
          "array.length"
      ]
  },
  {
      numb: 34,
      question: "What is the purpose of the 'Object.keys()method in JavaScript?",
      answer: "Returns an array of a given object's own enumerable property names",
      options: [
          "Adds keys to an object",
          "Removes keys from an object",
          "Returns an array of a given object's own enumerable property names",
          "Returns an array of values from an object"
      ]
  },
  {
      numb: 35,
      question: "What does the 'includes()' method do in JavaScript?",
      answer: "Checks if an array includes a certain element",
      options: [
          "Adds elements to an array",
          "Removes elements from an array",
          "Sorts the elements of an array",
          "Checks if an array includes a certain element"
      ]
  },
  {
      numb: 36,
      question: "How do you convert a number to a string in JavaScript?",
      answer: "toString()",
      options: [
          "convertToString()",
          "toString()",
          "toStr()",
          "stringify()",
          "numberToString()"
      ]
  },
  {
      numb: 37,
      question: "What does the 'slice()' method do in JavaScript?",
      answer: "Extracts a section of an array and returns a new array",
      options: [
          "Adds elements to an array",
          "Removes elements from an array",
          "Joins two or more arrays",
          "Extracts a section of an array and returns a new array"
      ]
  },
  {
      numb: 38,
      question: "What does the 'splice()' method do in JavaScript?",
      answer: "Removes elements from an array and/or adds new elements",
      options: [
          "Adds elements to an array",
          "Removes elements from an array and/or adds new elements",
          "Slices a portion of an array into a new array",
          "Sorts the elements of an array"
      ]
  },
  {
      numb: 39,
      question: "What does the 'sort()' method do in JavaScript?",
      answer: "Sorts the elements of an array",
      options: [
          "Adds elements to an array",
          "Removes elements from an array",
          "Sorts the elements of an array",
          "Reverses the order of elements in an array"
      ]
  },
  {
      numb: 40,
      question: "What is the purpose of the 'join()' method in JavaScript?",
      answer: "Joins elements of an array into a string",
      options: [
          "Splits a string into an array of substrings",
          "Joins elements of an array into a string",
          "Slices a portion of an array into a new array",
          "Sorts the elements of an array"
      ]
  },
  {
      numb: 41,
      question: "What is the purpose of the 'concat()' method in JavaScript?",
      answer: "Joins two or more arrays",
      options: [
          "Splits a string into an array of substrings",
          "Joins two or more arrays",
          "Joins elements of an array into a string",
          "Sorts the elements of an array"
      ]
  },
  {
      numb: 42,
      question: "How do you create a new object in JavaScript?",
      answer: "new Object()",
      options: [
          "{}",
          "objectInstance()",
          "newObject()",
          "objectInstance()",
          "new()"
      ]
  },
  {
      numb: 43,
      question: "What does the 'toFixed()' method do in JavaScript?",
      answer: "Rounds a number to a specified number of decimal places",
      options: [
          "Trims leading and trailing whitespace from a string",
          "Converts a number to a string",
          "Rounds a number to a specified number of decimal places",
          "Returns the length of a string"
      ]
  },
  {
      numb: 44,
      question: "What is the purpose of the 'substring()' method in JavaScript?",
      answer: "Extracts the characters from a string, between two specified indices",
      options: [
          "Splits a string into an array of substrings",
          "Joins two or more strings",
          "Extracts the characters from a string, between two specified indices",
          "Returns the character at a specified index in a string"
      ]
  },
  {
      numb: 45,
      question: "How do you convert a number to a string in JavaScript?",
      answer: "toString()",
      options: [
          "convertToString()",
          "toString()",
          "toStr()",
          "stringify()",
          "numberToString()"
      ]
  },
  {
      numb: 46,
      question: "What is the purpose of the 'splice()' method in JavaScript?",
      answer: "Removes elements from an array and/or adds new elements",
      options: [
          "Adds elements to an array",
          "Removes elements from an array and/or adds new elements",
          "Slices a portion of an array into a new array",
          "Sorts the elements of an array"
      ]
  },
  {
      numb: 47,
      question: "What is the purpose of the 'split()' method in JavaScript?",
      answer: "Converts a string to an array",
      options: [
          "Joins elements of an array into a string",
          "Slices a portion of an array into a new array",
          "Converts a string to an array",
          "Sorts the elements of an array"
      ]
  },
  {
      numb: 48,
      question: "What does the 'indexOf()' method return when the element is not found in an array?",
      answer: "-1",
      options: [
          "-1",
          "0",
          "null",
          "NaN",
          "undefined"
      ]
  },
  {
      numb: 49,
      question: "How do you create a JavaScript object?",
      answer: "{}",
      options: [
          "{}",
          "new Object()",
          "object()",
          "createObject()",
          "makeObject()"
      ]
  },
  {
      numb: 50,
      question: "What is the purpose of the 'push()' method in JavaScript?",
      answer: "Adds elements to the end of an array",
      options: [
          "Adds elements to the beginning of an array",
          "Adds elements to the end of an array",
          "Removes elements from the beginning of an array",
          "Removes elements from the end of an array"
      ]
  },
  {
      numb: 51,
      question: "How do you access the value of a property in an object in JavaScript?",
      answer: "object.property",
      options: [
          "object.getProperty(property)",
          "object.get(property)",
          "object.property",
          "object[property]"
      ]
  },
  {
      numb: 52,
      question: "What is the purpose of the 'forEach()' method in JavaScript?",
      answer: "Executes a provided function once for each array element",
      options: [
          "Executes a provided function once for each array element",
          "Modifies the original array",
          "Creates a new array by applying a function to each element",
          "Finds the first element in an array that satisfies a condition"
      ]
  },
  {
      numb: 53,
      question: "How do you convert a string to uppercasein JavaScript?",
      answer: "string.toUpperCase()",
      options: [
          "toUpperCase()",
          "string.upperCase()",
          "convertToUpperCase()",
          "strToUpper()"
      ]
  },
  {
      numb: 54,
      question: "What does the 'every()' method do in JavaScript?",
      answer: "Checks if all elements in an array pass a test",
      options: [
          "Checks if all elements in an array pass a test",
          "Checks if any element in an array passes a test",
          "Returns true if at least one element in an array passes a test",
          "Returns true if all elements in an array are equal"
      ]
  }
];


//selecting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");

// if startQuiz button clicked
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); //show info box
}

// if exitQuiz button clicked
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
}

// if continueQuiz button clicked
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); //show quiz box
    showQuetions(0); //calling showQestions function
    queCounter(1); //passing 1 parameter to queCounter
    startTimer(15); //calling startTimer function
    startTimerLine(0); //calling startTimerLine function
}

let timeValue =  15;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

// if restartQuiz button clicked
restart_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz"); //show quiz box
    result_box.classList.remove("activeResult"); //hide result box
    timeValue = 15; 
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetions(que_count); //calling showQestions function
    queCounter(que_numb); //passing que_numb value to queCounter
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    startTimer(timeValue); //calling startTimer function
    startTimerLine(widthValue); //calling startTimerLine function
    timeText.textContent = "Time Left"; //change the text of timeText to Time Left
    next_btn.classList.remove("show"); //hide the next button
}

// if quitQuiz button clicked
quit_quiz.onclick = ()=>{
    window.location.reload(); //reload the current window
}

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

// if Next Que button clicked
next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){ //if question count is less than total question length
        que_count++; //increment the que_count value
        que_numb++; //increment the que_numb value
        showQuetions(que_count); //calling showQestions function
        queCounter(que_numb); //passing que_numb value to queCounter
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        startTimer(timeValue); //calling startTimer function
        startTimerLine(widthValue); //calling startTimerLine function
        timeText.textContent = "Time Left"; //change the timeText to Time Left
        next_btn.classList.remove("show"); //hide the next button
    }else{
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        showResult(); //calling showResult function
    }
}

// getting questions and options from array
function showQuetions(index){
    const que_text = document.querySelector(".que_text");

    //creating a new span and div tag for question and option and passing the value using array index
    let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    que_text.innerHTML = que_tag; //adding new span tag inside que_tag
    option_list.innerHTML = option_tag; //adding new div tag inside option_tag
    
    const option = option_list.querySelectorAll(".option");

    // set onclick attribute to all available options
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}
// creating the new div tags which for icons
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

//if user clicked on option
function optionSelected(answer){
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    let userAns = answer.textContent; //getting user selected option
    let correcAns = questions[que_count].answer; //getting correct answer from array
    const allOptions = option_list.children.length; //getting all option items
    
    if(userAns == correcAns){ //if user selected option is equal to array's correct answer
        userScore += 1; //upgrading score value with 1
        answer.classList.add("correct"); //adding green color to correct selected option
        answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    }else{
        answer.classList.add("incorrect"); //adding red color to correct selected option
        answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
        console.log("Wrong Answer");

        for(i=0; i < allOptions; i++){
            if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer 
                option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                console.log("Auto selected correct answer.");
            }
        }
    }
    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
    }
    next_btn.classList.add("show"); //show the next button if user selected any option
}

function showResult(){
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
    result_box.classList.add("activeResult"); //show result box
    const scoreText = result_box.querySelector(".score_text");
    if (userScore > 3){ // if user scored more than 3
        //creating a new span tag and passing the user score number and total question number
        let scoreTag = '<span>and congrats! , You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
    }
    else if(userScore > 1){ // if user scored more than 1
        let scoreTag = '<span>and nice , You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{ // if user scored less than 1
        let scoreTag = '<span>and sorry , You got only <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}

function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time; //changing the value of timeCount with time value
        time--; //decrement the time value
        if(time < 9){ //if timer is less than 9
            let addZero = timeCount.textContent; 
            timeCount.textContent = "0" + addZero; //add a 0 before time value
        }
        if(time < 0){ //if timer is less than 0
            clearInterval(counter); //clear counter
            timeText.textContent = "Time Off"; //change the time text to time off
            const allOptions = option_list.children.length; //getting all option items
            let correcAns = questions[que_count].answer; //getting correct answer from array
            for(i=0; i < allOptions; i++){
                if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer
                    option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                    console.log("Time Off: Auto selected correct answer.");
                }
            }
            for(i=0; i < allOptions; i++){
                option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
            }
            next_btn.classList.add("show"); //show the next button if user selected any option
        }
    }
}

function startTimerLine(time){
    counterLine = setInterval(timer, 29);
    function timer(){
        time += 1; //upgrading time value with 1
        time_line.style.width = time + "px"; //increasing width of time_line with px by time value
        if(time > 549){ //if time value is greater than 549
            clearInterval(counterLine); //clear counterLine
        }
    }
}

function queCounter(index){
    //creating a new span tag and passing the question number and total question
    let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ questions.length +'</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  //adding new span tag inside bottom_ques_counter
}