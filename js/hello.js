const liCollection = document.getElementsByTagName('li'); 
console.log(liCollection); 

for (const li of liCollection) {
    console.log(li.innerText);
}

const allHeading = document.getElementsByTagName('h1'); 

for (const h1 of allHeading) {
    console.log(h1.innerText); 
}


const foodTitle = document.getElementById('food-title'); 
console.log(foodTitle.innerText)
foodTitle.innerText = "Foods I Love to eat."


const bandElement = document.getElementById('band'); 
bandElement.innerText = 'Jalali'; 

const foreignElement = document.getElementsByClassName('foreign'); 
console.log(foreignElement); 

for (const element of foreignElement) {
    console.log(element.innerText); 
}

// query selector all 
const spanElements = document.querySelectorAll('#old-dhaka p span'); 

for (const span of spanElements) {
    console.log(span.innerText); 
}

// create element and set innerText or innerHTML 
const newChild = document.createElement('li'); 
newChild.innerText = 'New born footballer here'; 

// find the parent where you will add the child 
const playerList = document.getElementById('player-list'); 
playerList.appendChild(newChild); 