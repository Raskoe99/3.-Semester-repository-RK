// --------------------------------------
// Arrays, for loops
// --------------------------------------
// Exercise 1 - Array Positioning

const letters = ["a","b","c"];
// show b in the console 

console.log(letters[1])

// --------------------------------------
// Exercise 2 - Array Positioning

const friends = [];

// What a lonely array. Add at least 3 friend objects to it.  

const friendOne = {friendOne : "kind"}
const friendTwo = {friendTwo : "loyal"}
const friendThree = {friendThree : "funny"}

friends.push(friendOne, friendTwo, friendThree)

console.log(friends)

// --------------------------------------
// Exercise 3 - Get the index of first occurrence of that value. 

const significantMathNumbers = [0, 2.718, 3.14159, 1729];

// You want to programmatically find where the number 1729 is in the array.
// programmatically means that no finger counting allowed. There is a method for this (finding index based of value). 

function findNumber(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == 1729) {
            console.log("Index " + i + " is " + arr[i])
        }
    }
}
findNumber(significantMathNumbers)

// --------------------------------------
// Exercise 4 - Inserting elements

const diet = ["tomato", "cucumber", "rocket"];

// You are a programmer. In one line (one statement) insert hamburger, soda and pizza between the 
// elements cucumber and rocket

diet.splice(2,0,"hamburger","soda","pizza")
console.log(diet)

// --------------------------------------
// Exercise 5 - Remove element

// Remove the LAST element of the array.
// Don't remove by index. You know in advance that it's the last in the array because you are too full already. 

diet.pop()
console.log(diet)

// --------------------------------------
// Exercise 6 - Copy array

// You really like your daily diet from last exercise. Copy it to a new array called dinnerTray so you can give it to a friend.  

//This can be dangerous, because if I dinnerTray.pop, diet also loses its last value
//const dinnerTray = diet
//console.log(dinnerTray)

//const dinnerTray = diet.slice()
//or
const dinnerTray = [...diet]

console.log(dinnerTray)

// --------------------------------------
// Exercise 7 - For loop

const lettersExpanded = ["a","b","c", "d", "e", "f", "g", "h"];

// log every second char in the array starting from b

for (let i = 1; i < numbers.length; i+=2) {
    console.log(numbers[i])
}

// --------------------------------------
// Exercise 8 - For loop and if statement

const numbers  = [5, 3, 2, 7, 11, 12, 0, -20, 6];

const discardedNumbers = [];

// log the element if the number is above 6 or below 0
// else push them to the array discardedNumbers

function loopForIf(arr) {
    let j = 0
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < 0 || arr[i] > 6) {
            console.log(arr[i])
        } else {
            discardedNumbers[j] = arr[i]
            j++
        }
    }
    console.log(discardedNumbers)
}
loopForIf(numbers)