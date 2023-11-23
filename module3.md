# Random numbers

```
Math.floor(Math.random()* 10) + 1;
```

### Gives number between 1 to 10

# Conditionals

```
if(condition){

}
else if(condition){

}
else{

}
```

# QuerySelector

```
let newName = document.querySelector("CSS Selector")

Examples:
let newName = document.querySelector("body") // selects body element
let newName = document.querySelector(".sum-el") // selects element with class sum-el
let newName = document.querySelector("#sum-el") // selects element with id sum-el
```

# Array

```
let array = [] //initialize

array.push(1) //append to array

console.log(array) // 1

array.pop() //removes last value

console.log(array) // []
```

### Shift / Unshift

```
let array = ["Tuvalu","India","USA","Indonesia","Monaco"]

array.shift() // removes first value, Tuvalu
array.unshift("China") // appends China to front

array.pop() // removes last value, Monaco
array.push("Pakistan") // appends Pakistan to back

console.log(array) // ["China", "India", "USA", "Indonesia", "Pakistan"]
```

# For Loops

```
     START          FINISH      STEP SIZE
for (let count = 1; count < 11; count += 1 ){
    console.log(count)
}
```

# Conditions

```
let hasCompletedCourse = true
let givesCertificate = true

 <!-- && Means both conditions have to be true -->
if (hasCompletedCourse === true && givesCertificate === true) {
    generateCertificate()
}

<!-- || Means one OR the other condition has to be true -->
if (hasCompletedCourse === true || givesCertificate === true) {
    generateCertificate()
}

<!-- ! Means not, both conditions must be false for expression to be true -->
if (!(hasCompletedCourse && givesCertificate)) {
generateCertificate()
}
```

# Objects

Composite / complex data type

```
let player = {
    ///initilize

<!-- KEY   VALUE -->
    name: "Per",
    chips: 145
}
      <!-- dot-notation -->
console.log(player.name) // Per
console.log(player.chips) // 145

        <!-- bracket notation -->
console.log(player["name"]) // Per
```

# Width

Width adds on padding. Setting 100% width and 10px padding would break element from container

![Alt text](notes-images/width-breakout.png)

```
input {
    width: 100%; /* 100% + 10px + 10px */
    padding-left: 10px;
    padding-right: 10px;
}
```

### So, we use box-sizing property

```
input {
    width: 100%; /* 100% + 10px + 10px */
    padding-left: 10px;
    padding-right: 10px;
}
```

![Alt text](image.png)

# addEventListener()

Example of grabbing HTML element and adding event listener:

```
inputBtn.addEventListener("click", function() {
    <!-- function content -->
})
```

# Const vs. Let

Const - use when variable isn't meant to be reassigned. When possible, use this.

Let - when variable is meant to be reassigned

# Getting value from input

Basically, once you grab element use .value on it.

```
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
})
```
