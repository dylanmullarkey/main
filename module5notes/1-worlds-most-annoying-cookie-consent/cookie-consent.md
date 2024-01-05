# Cookie Consent Mod5. Sec1

Started 01/04/2024

Finished 01/05/2024

## Overview

![Alt text](images/image-5.png)

## setTimeout Method

Allows blocks of code execute later in the flow.

```
// delay is in ms

setTimeout(function(){
    console.log("Lima")
}, delay)
```

## element.style

Target an elements style with Javascript

<b> Syntax:

targetElement.style.property = 'property value' </b>

```
const revealBtn = document.getElementById('reveal-btn')
const answer = document.getElementById('answer')
const question = document.getElementById('question')

revealBtn.addEventListener('click', function(){
    answer.style.display = 'block'
    question.style.backgroundColor = '#68e1fd'
    question.style.color = '#1434A4'
})
```

## Forms

Getting input from users

Syntax to create a form:

```
<form>
    <label for="astronautName">Astronaut Name</label>
    <input type="text" id="astronautName" name="astronautName" placeholder="Neil Armstrong">
</form>
```

![Alt text](images/image-2.png)

The for property allows you to click the label and highlight the input.

Input types reference: https://www.w3schools.com/html/html_form_input_types.asp

### Submitting Forms

There are two ways to create a submit in a form.

Simply adding a button will automatically register as a submit button. (Adding a type="submit" on the button will help make it readable.)

```
<button type="submit">submit</button>
```

Another way is to use the submit type input.

```
<input type="submit">
```

### Required input

To make a field required, simply add the required property to the input.

```
<input
    type="text"
    id="astronautName"
    name="astronautName"
    placeholder="Neil Armstrong">
    required
    >
```

### Validation Attributes

For text input, you can set min/maxlength property to restrict input.

Minlength will provide a popup, shown below.

Maxlength will simply restrict further input after x characters.

```
<input
    required
    type="text"
    id="astronautName"
    name="astronautName"
    placeholder="Neil Armstrong"
    minlength="2"
    >
```

![Alt text](images/image-3.png)

For numbers, use the min/max properties. These both show popups when input is incorrect.

```
<input
    required
    type="number"
    id="astronautAge"
    name="astronautAge"
    placeholder="21"
    min="21"
    max="120"
    >
```

### Form pattern regex (regular expresssion)

Pattern property allows you to restrict input characters or length.

Resources for regex values:

<ul>
    <li><a>https://www.w3schools.com/tags/att_input_pattern.asp</a></li>
    <li><a>https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions </a></li>
</ul>

Ex. limiting input to capital/lowercase letters and required to be 3 characters long.

```
<input pattern="[a-zA-Z]{3}">
```

### preventDefault Method

Prevent default allows us to stop default form behavior. Normally, when submitting a form, the information is put into the url query and the page refreshes. We can stop this with preventDefault.

When the submit action is recorded, pass the event into the function and preventDefault(). e = event

THE EVENT IS WHAT TRIGGERED THE EVENT LISTENER

```
const loginForm = document.getElementById('login-form')

loginForm.addEventListener('submit', function(e){
    e.preventDefault()
})
```

The default behavior of the submit btn (event) was explained above. This code has prevented the default behavior.

### Buttons in forms

All buttons are seen as submit buttons by default. Add type button to change it to a normal button.

```
<button type="button" class="modal-btn">Decline</button>
```

## FormData Function

![Alt text](images/image-4.png)

```
const loginForm = document.getElementById('login-form')

loginForm.addEventListener('submit', function(e){
    e.preventDefault()

    const loginFormData = new FormData(loginForm)
    console.log(loginFormData)
})
```

When console logging, you return

```
FormData{}
```

Down below we will see how to read this object.

## FormData methods

To extract our data from FormData, we can use the get() method.

Here is a basic form.

```
<form id="login-form">
    <label for="astronautName">Astronaut Name 👩‍🚀</label>
    <input
        type="text"
        id="astronautName"
        name="astronautName"
        placeholder="Neil Armstrong"
        required
        >
```

To grab our data, supply the name of the input from the form.

```
name="astronautName"
```

The javascript:

```
const loginForm = document.getElementById('login-form')

loginForm.addEventListener('submit', function(){
    const loginFormData = new FormData(loginForm)

    const name = loginFormData.get('astronautName')
    console.log(name)
})
```

## Disabling elements

```
<button class="quantityBtn" id="decrement" disabled>-</button>
```

Using javascript, we can access the decrement boolean value.

```
decrement.disabled = false
```

### Eventlistener mouseenter

Triggered when user hovers over element

```
declineBtn.addEventListener('moustenter', function(){
    console.log("hovered")
})
```

### .classList / toggle

.classList allows us to edit elements classes in JS.

.toggle allows us to easily add/remove a class.

```
<div class="container" id="container">
    <div class="palette-section blue-1"></div>
    <div class="palette-section blue-2"></div>
    <div class="palette-section blue-3"></div>
    <div class="palette-section blue-4"></div>
    <div class="palette-section blue-5"></div>
</div>
```

```
.reverse{
    flex-direction: row-reverse;
}
```

```
sortBtn.addEventListener('click', function(){
    container.classList.toggle('reverse')
})
```

Whenever the Sort button is pressed, the reverse class is either added or removed.

## Accessibility

Labels are important for forms. Placeholders can provide the same value as labels, however users on screenreaders will struggle to fill out the form. If only using placeholders, make sure to include aria-labels on the input.

```
<input
    type="email"
    name="email"
    placeholder="Enter your email"
    aria-label="Email address"
    required/>
```
