const liCollection = document.getElementsByTagName('li'); 
console.log(liCollection); 

for (const li of liCollection) {
    console.log(li.innerText);
}

const allHeading = document.getElementsByTagName('h1'); 

for (const h1 of allHeading) {
    console.log(h1.innerText); 
}
