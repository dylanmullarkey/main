# Mini Projects Mod5. Sec4

Started 

Finished

## Overview

![Alt text](image.png)

## Object Destructuring

Enables us to extract properties form objects into distinct variables
Data:
```
const favouriteFilm = {
    title: "Top Gun",
    year: "1986",
    genre: "action",
    star: "Tom Cruise",
    director: "Tony Scott"
} 
```
Instead of doing this:
```
 const title = favouriteFilm.title
 const year = favouriteFilm.year
 const genre = favouriteFilm.genre
 const star = favouriteFilm.star
 const director = favouriteFilm.director

 console.log(`My favourite film is ${title} starring ${star}. It's an ${genre} film that was directed by ${director} and released in ${year}.`)

```

We can do this:
```
const {title, year, genre, star, director} = favouriteFilm

console.log(`My favourite film is ${title} starring ${star}. It's an ${genre} film that was directed by ${director} and released in ${year}.`)
```

## .map() Method
Iterating over arrays

map() is the exact same as forEach(), however, it creates a new array with the applied function.

Syntax:
```
const distanceWalkedMilesArr = [140, 153, 161, 153, 128, 148]

const conversionFactorMilesToKm = 1.6

const distanceWalkedKmArr = distanceWalkedMilesArr.map(function(distanceMiles){
    console.log(distanceMiles)
})
```

We don't have to store this array in a const. Another example:
```
function convertMilesToKms() {
    return distanceWalkedMilesArr.map(function (distanceMiles, index) {
        return `Month ${index}: ${distanceMiles * conversionFactorMilesToKm}KM`
    })
}
```

## .join() Method
- Concatenates elements of array into a string
- Choose how elements are separated
- Returns the new stirng

```
const guestsArr = ['Amy', 'Clare', 'Keith', 'Dan'] 

console.log(guestsArr.join())
console.log(typeof guestsArr.join())

›Amy,Clare,Keith,Dan
›string
```

Used inverted commas to add a seperator between items. This adds a space.
```
console.log(guestsArr.join(' '))
```

Usually, we don't want any seperator. Provide an empty stirng.
```
console.log(guestsArr.join(''))
```

## .map() VS .forEach()

- forEach() returns undefinied. Can't chain methods on forEach since it returns undefinied.