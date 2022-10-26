let fruit = document.querySelector(".fruit");
let flower = document.querySelector(".flower");

//Code Along

// task 1: create an array called fruitList. Make sure it has
//    at least 4 elements.
let fruitList = [
  "cherries",
  "grapes",
  "apple",
  "bananas",
  "watermelon",
  "kiwi"
];

// task 2: create a variable called favFruit. Assign the value
//    equal to the array element of your favorite fruit in the
//    fruitList array.
let favFruit = fruitList[0];

// task 3: Uncomment the innerHTML of the fruit selector
//    to see if the favFruit variable variable displays.
fruit.innerHTML = favFruit;

let flowerList = ["cherry blossom", "sunflower", "hibiscus", "rose"];

// task 4: remove the last element in the flowerList arrray.
flowerList.pop();

// task 5: add a new element to the flowerList arrray - pick
//    a new flower not listed.
flowerList.push("lycoris");

// task 6: Uncomment the innerHTML of the flower selector
//    to see if your array looks correct.
flower.innerHTML = flowerList.join(", ");
