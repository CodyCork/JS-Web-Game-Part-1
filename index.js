//background image for loop
const tile = (imgSrc, leftPosition, bottomPosition, imgWidth, imgHeight) => {
    for (let w = 0; w < imgWidth; w++) {
        for (let h = 0; h < imgHeight; h++) {
            newImage(imgSrc, leftPosition + w*100, bottomPosition + h*100)
        }
    }
}

//function that allows you to add images in to HTML page
const newImage = (imgSrc, leftPosition, bottomPosition) => {
    let addNewImg = document.createElement('img') 
    addNewImg.src = imgSrc 
    addNewImg.style.position = 'absolute' 
    addNewImg.style.left = leftPosition + 'px'
    addNewImg.style.bottom = bottomPosition + 'px'
    document.body.append(addNewImg) 
    return addNewImg
}

//remove function for player loot
const newItem = (imgSrc, leftPosition, bottomPosition) => {
    let pickedUpItem = newImage(imgSrc, leftPosition, bottomPosition) 
    
    pickedUpItem.addEventListener('dblclick', () => {
        pickedUpItem.remove() 
    }) 
} 



//DID NOT CODE THIS
let horizon = window.innerHeight / 1.75
let heightOfSky = window.innerHeight-horizon
let heightOfGrass = horizon
//OR THIS
tile('assets/sky.png', 0, horizon, window.innerWidth/100, heightOfSky/100)
tile('assets/grass.png', 0, 0, window.innerWidth/100, heightOfGrass/100)



//adding images with functions
newImage('assets/green-character.gif', 100, 100) 
newImage('assets/pine-tree.png', 450, 200) 
newImage('assets/tree.png', 200, 300) 
newImage('assets/pillar.png', 350, 100) 
newImage('assets/crate.png', 150, 200) 
newImage('assets/well.png', 500, 425) 

//item's (loot) to be picked up by player
newItem('assets/sword.png', 500, 405)
newItem('assets/shield.png', 165, 185)
newItem('assets/staff.png', 600 , 100)



