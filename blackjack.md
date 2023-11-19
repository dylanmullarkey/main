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
let sumEl = document.querySelector("CSS Selector")

Examples:
let sumEl = document.querySelector("body") // selects body element
let sumEl = document.querySelector(".sum-el") // selects element with class sum-el
let sumEl = document.querySelector("#sum-el") // selects element with id sum-el
```

# Array
```
let array = [] //initialize

array.push(1) //append to array

console.log(array) // 1

array.pop() //removes last value

console.log(array) // []
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