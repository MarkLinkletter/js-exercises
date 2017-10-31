var x = 300;
var y = 700;

console.log (x+y);

var a = "hello";
var b = " world";


console.log (a+b);

var me = ["mark","linkletter","march 23rd",]
var interests = ["art","music","sports"]

var stuff = [me, interests];
console.log(stuff[0][0]);
console.log(stuff[0][1]);
console.log(stuff[0][2]);
console.log(stuff[1][0]);
console.log(stuff[1][1]);
console.log(stuff[1][2]);
console.log(stuff[1][1]);

var number = 10;

if(number < 100) {
  alert("your number is less than 10");
} else if (number === 100) {
  alert("your number is equal to 10");
} else if (number > 100) {
  alert("your number is greater than 10");
} else {
  alert("invalid input");
}


var name = "mark";

if (name === "mark") {
  console.log(name + " is mark");
} else {
  console.log(name + " is not mark");
}

function openDoor(doorNumber) {
  if (doorNumber === 1) {
    return alert("Prize1");
  } else if (doorNumber === 2) {
    return alert("prize2");
  } else if (doorNumber === 3) {
    return alert("prize3");
  } else {
    return alert("that's not a valid door");
  }
}
openDoor(1);
openDoor(2);
openDoor(3);
