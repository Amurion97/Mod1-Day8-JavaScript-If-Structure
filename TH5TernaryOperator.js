let message = prompt();
let output = (message == "Employee") ?
    "Hello" :
    (message == "Director") ?
        "Greetings" :
        (message == "") ?
            "No login":
            "";

alert(output);
console.log(message.length);
