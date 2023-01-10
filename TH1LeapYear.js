let year = parseInt(prompt("Input a year: "));
let notiYes = "That's a Leap Year!";
let notiNo = "That's not a Leap Year!";

if (year % 4 != 0){
    alert(notiNo);
}
else if ((year % 100 != 0) || (year % 400 == 0)) {
    alert(notiYes);
}
else {
    alert(notiNo);
}