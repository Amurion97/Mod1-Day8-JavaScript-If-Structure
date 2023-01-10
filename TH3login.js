

let next = document.getElementById("next");

function printNotification(Notification) {
    document.getElementById("notification").innerHTML = Notification;
    return 1;
}


function checkPassword (){
    let password = document.getElementById("password").value;
    if (password == "TheMaster"){
        return "Welcome";
    }
    else if (password == ""){
        return "Canceled";
    }
    else {
        return "Wrong Password";
    }
}
next.addEventListener("click", function (){
    let id = document.getElementById("id").value;
    if (! id.localeCompare("Admin")){
        console.log(id);
        console.log(id.localeCompare("Admin"));
        document.getElementById("passwordBox").removeAttribute("hidden");
        document.getElementById("finish").addEventListener("click", function (){
            printNotification(checkPassword());
        });
    }
    else if (id == ""){
        document.getElementById("passwordBox").setAttribute("hidden", "");
        printNotification("Canceled");
    }
    else {
        document.getElementById("passwordBox").setAttribute("hidden", "");
        printNotification("I don't know you!");
    }
})