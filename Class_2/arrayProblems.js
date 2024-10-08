//Proble-1: Manage Todo List

let todoList = ["Do laundry", "Pay bills", "Walk the dog"];

//Add the task "Buy groceries" to the end of the list
todoList.push("Buy groceries");
console.log("After adding Buy groceries as the last index\n", todoList);

//Add the task "Clean room" to the beginning of the list
todoList.unshift("Clean room");
console.log("After adding 'clean room' as the first index\n", todoList);

//Remove the last task from the list and store it in a variable.
let removedItem = todoList.pop();
console.log("After removing last index\n", todoList);
console.log("Removed item of the todo list: ", removedItem);


//Find the index of "Clean room" and remove it from the list
let findIndex = todoList.indexOf("Clean room");
console.log("The index of Clean Room: ", findIndex);
todoList.shift();
console.log("After removing 'clean room' from the first index\n", todoList);

// Current length of list
let currentLength = todoList.length;
console.log("Current length of the list: ", currentLength);








