# FIREBASE -- BUILD A MOBILE APP

Module 3, final section -- Started 11/28/2023

## Connecting Firebase DB to JS file

Under imports, add this line of code (in .js file)

```
const appSettings = {
    databaseURL: "https://playground-c5b18-default-rtdb.europe-west1.firebasedatabase.app"
}
```

The databaseURL is located in Firebase on the project.

## Using JS Functions from other files

Let's say we have our main file, index.js, with the following:

```
const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")

addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value

    console.log(`${inputValue} added to database`)
})
```

And we want to use a function from another file. To do so, we have to import it.

Here is our other file, functions.js:

```
export function add(a,b) {
    return a + b
}
```

In our main file, we will add the following line of code at the top:

```
import { add } from "../functions.js"
```

Plain English: Import the add function from the function.js file.

### But there's more. Now, we need to edit our HTML.

We need to add the functions.js file to the bottom of our body, as well as assign type="module" to both.

### You need to add type="module" whenever using import/export

```
<script src="functions.js" type="module"></script>
<script src="index.js" type="module"></script>
```

Now, we can use the add function.

### We still haven't connected our database to our application. Let's do that.

Instead of importing the add function, let's import this

```
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
```

We we also initialize a const variable called app that uses the function we just imported, taking our appSettings as an argument. Also log it out.

```
const app = initializeApp(appSettings)
console.log(app)
```

We get this message which returns our database URL.
![Alt text](notes-images/fireBase.png)

### Almost done...

We will import another function called getDatabase

```
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
```

And create a new variable called database, which calls this function and uses the app variable as an argument:

```
const database = getDatabase(app)
```

### We need to create a reference to the database. Basically, a location in the database to look for information. Since our DB is empty, we nee

We will make a new variable, and, of course, import another function.

```
import { getDatabase, ref } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const moviesInDB = ref(database, "movies")
```

<b> ref() takes two arguments, which database we are working with, and what the reference should be called. </b>

### Here is our code so far:

```
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://playground-c5b18-default-rtdb.europe-west1.firebasedatabase.app"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const moviesInDB = ref(database, "movies")

console.log(app)

const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")

addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value

    console.log(`${inputValue} added to database`)
})
```

### This is great, but we don't have any code that pushes our input to the database. Let's do that. We need to import another function. Simply add it alongside getDatabase and ref.

```
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
```

### Alright, let's push a value.

### Push takes two arguments, the reference, and our value...

### And it works!

Heres a summary with the code:

```
<!-- IMPORTS  -->
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

<!-- FIREBASE URL TO CONNECT -->
const appSettings = {
    databaseURL: "https://playground-85302-default-rtdb.firebaseio.com/"
}


const app = initializeApp(appSettings)
<!-- app contains our database URL -->
const database = getDatabase(app)

<!-- ref(database, what to call location/reference) -->
const moviesInDB = ref(database, "movies")

const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")

addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value

    <!-- push(reference, value) -->
    push(moviesInDB, inputValue)

    console.log(`${inputValue} added to database`)
})
```

### Turn Object into Array

Using the Object keyword allows us to manipulate it.

```
let scrimbaUsers = {
    "00": "sindre@scrimba.com",
    "01": "per@scrimba.com",
    "02": "frode@scrimba.com"
}
```

Convert object to array based on values

```
Object.values(scrimbaUsers)
// ["sindre@scrimba.com", "per@scrimba.com", "frode@scrimba.com"]
```

Convert object to array based on keys

```
Object.keys(scrimbaUsers)
// ["sindre@scrimba.com", "per@scrimba.com", "frode@scrimba.com"]
```

Convert object to array based on entries. Creates an array of arrays

```
Object.entries(scrimbaUsers)
// [["00", "sindre@scrimba.com"], ["01", "per@scrimba.com"], ["02", "frode@scrimba.com"]]
```

### Fetching data from Firebase using onValue

Import onValue

```
onValue(reference, function(snapshot)){
    let array = Object.values(snapshot.val())
    console.log(array)
}
```
