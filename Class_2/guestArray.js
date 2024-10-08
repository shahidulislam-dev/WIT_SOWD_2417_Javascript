//Problem--2

let guest = ["Alice", "Bob"];

// Add three guest to the list
guest.push("John Doe", "Herry", "Rock");
console.log("Afer adding three new guest", guest);

//Remove the first guest
guest.shift();
console.log("After removing the first guest: ", guest);

//Add new guest at the beginning
guest.unshift("Jack")
console.log("After adding a new guest as first", guest);

//Finding Index of John Doe
let indexOfJohn = guest.indexOf("John Doe");
console.log("The index of John Doe is ", indexOfJohn);

//Length of guest list
let totalGuest = guest.length;
console.log("The total number of guest: ", totalGuest);


