// possible messages for the user to enter
const userMessages = [
    ["Hi", "Hello", "Hey"],
    ["Sure", "Yes", "No", "Maybe"],
    ["What is this chatbot for?", "What are you designed to do?", "What is this chatbot designed for?"],
    ["Where can you add tasks to the to-do-list?"],
    // this question is to generate assignments that the user currently has due
    ["What can I put in my schedule in for the week?"],
    ["What assignments do I have due?", "What assignment is due in the next two days?"]
    // direction questions
    ["Where are my tests and quizzes located?", "Where can I find my current day schedule?", "What is my current schedule for the week?"]
    ["How do I navigate the to-do-list?"],
];

const botReply = [
    ["Hello there!", "Hey", "Hello", "Hi!"],
    ["Okay", "Okay, what can I help you with?", "Okay, what would you like help with?"],
    ["Yes", "No", "Maybe", "Sure", "Not possible"],
    ["You can add tasks to the to-list by clicking this button here ->", "You can add tasks to the to-do-list by clicking the to-do-list tab and clicking the 'Add Task' button."],
    ["You can put in your assignments due in the current and following weeks such as ->"],
    ["You can view your current assignments due by clicking here ->", "Currently, you have [number] assignments due."],
    ["You can access your tests and quizzes by clicking here ->", "Your tests and quizzes can be accessed by clicking the tests and quizzes tab."],
    ["Your current day schedule can be found by clicking here ->"],
    ["To navigate the to-do-list, you must first..."]
];

const synth = window.speechSynthesis;

function voiceControl(control) {
    let u = new SpeechSynthesisUtterance(string);
    // type of text being inputted
    u.text = string;
    // language
    u.lang = "en-aus";
    u.volume = 1;
    u.rate = 1;
    u.pitch = 1;
    synth.speak(u);
}

function sendMessage() {
    const inputField = document.getElementById("input");
    let input = inputField.value.trim();
    input != "" && output(input);
    inputField.value = "";
}
document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("input");
    inputField.addEventListener("keydown", function(e) {
        if (e.code === "Enter") {
            let input = inputField.value.trim();
            input != "" && output(input);
            inputField.value = "";
        }
    });
});

function output(input) {
    let product;
    let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");

    text = text
        .replace(/[\W_]/g, " ")
        .replace(/ a /g, " ")
        .replace(/i feel /g, "")
        .replace(/whats/g, "what is")
        .replace(/please /g, "")
        .replace(/ please/g, "")
        .trim();

    let comparedText = compare(userMessages, botReply, text);

    product = comparedText
        ? comparedText
        : alternative[Math.floor(Math.random() * alternative.length)];
    addChat(input, product);
}

function compare(triggerArray, replyArray, string) {
    let item;
    for (let x = 0; x < triggerArray.length; x++) {
        for (let y = 0; y < replyArray.length; y++) {
            if (triggerArray[x][y] == string) {
                items = replyArray[x];
                item = items[Math.floor(Math.random() * items.length)];
            }
        }
    }

    if (item) return item;
    else return containMessageCheck(string);
}

function containMessageCheck(string) {
    let expectedReply = [
        [

        ]
    ];

    let expectedMessage = [
        [

        ]
    ];

    let item;
    for (let x = 0; x < expectedMessage.length; x++) {
        if (expectedMessage[x].includes(string)) {
            items = expectedReply[x];
            item = items[Math.floor(Math.random() * items.length)];
        }
    }
    return item;
}

function addChat(input, product) {
    const mainDiv = document.getElementById("message-section");
    let userDiv = document.createElement("div");
    userDiv.id = "user";
    userDiv.classList.add("message");
    userDiv.innerHTML = "<span id = 'user-response'>${input}</span>";
    mainDiv.appendChild(userDiv);

    let botDiv = document.createElement("div");
    botDiv.id = "bot";
    botDiv.classList.add("message");
    botDiv.innerHTML = "<span id = 'bot-response'>${product}</span>";
    mainDiv.appendChild(botDiv);

    var scroll = document.getElementById("message-section");
    scroll.scrollTop = scroll.scrollHeight;
    voiceControl(product);
}

