// Your code goes here
// * [ ] Using your [index.js file](js/index.js), create 10 [unique event listeners](https://developer.mozilla.org/en-US/docs/Web/Events). using your creativity to make the Fun Bus site more interactive.  Here are some unique events you could try to use: 
// 	* [ ] `mouseover`
// 	* [ ] `keydown`
// 	* [ ] `wheel`
// 	* [ ] `drag / drop`
// 	* [ ] `load`
// 	* [ ] `focus`
// 	* [ ] `resize`
// 	* [ ] `scroll`
// 	* [ ] `select`
// 	* [ ] `dblclick`


// Using the 10 unique events, find ways to update the DOM in creative ways. For example you could change colors, animate objects, remove objects, etc.

function get(selector){
    return document.querySelector(selector)
}

const mainNav = get('.main-navigation')
const firstNavLink = get('.nav a:nth-child(1)')
const secondNavLink = get('.nav a:nth-child(2)')
const thirdNavLink = get('.nav a:nth-child(3)')
const fourthNavLink = get('.nav a:nth-child(4)')
const intro = get(".intro")
const contentSection = get(".content-section")
const contentDestination = get(".content-destination")

function makeRed(){
    if(mainNav.style.backgroundColor !== 'red'){
        mainNav.style.backgroundColor = 'red'
    } else {
        mainNav.style.backgroundColor = 'white'
    }
}

const textGreen = (event) => firstNavLink.style.color = 'green'
const textLilTilt = (event) => secondNavLink.style.transform = 'rotate(10deg)'
const textBiggerTilt = (event) => thirdNavLink.style.transform = 'rotate(30deg)'
const textBiggestTilt = (event) => fourthNavLink.style.transform = 'rotate(60deg)'

function makeBlue(event){
    intro.style.backgroundColor = 'blue'
}

function tform(event){
    contentSection.style.transform = 'rotate(180deg)'
}

function makeGreen(event){
    contentDestination.style.backgroundColor = "green"
}

function disappear(event){
    contentDestination.style.display = 'none'
}

function bringBack(event){
    if(contentDestination.style.display = 'none') {
        contentDestination.style.display = "initial"
    }
}

const anyKey = (event) => document.body.style.backgroundColor = 'black'

mainNav.addEventListener('dblclick', makeRed)
intro.addEventListener('mouseover', makeBlue)
contentSection.addEventListener('dblclick', tform)
contentDestination.addEventListener('mouseover', makeGreen)
contentDestination.addEventListener('dblclick', disappear)
mainNav.addEventListener('dblclick', bringBack)
firstNavLink.addEventListener('dblclick', textGreen)
secondNavLink.addEventListener('dblclick', textLilTilt)
thirdNavLink.addEventListener('dblclick', textBiggerTilt)
fourthNavLink.addEventListener('dblclick', textBiggestTilt)
document.addEventListener('keydown', anyKey)

// * [ ] Nest two similar events somewhere in the site and prevent the event propagation properly


firstNavLink.addEventListener('click', event => {
    console.log('I stopped the propagation!')
    event.stopPropagation()
})

mainNav.addEventListener('click', event => {
    console.log('If I had only stopped the propagation properly, this would not be here!')
})

// * [ ] Stop the navigation items from refreshing the page by using `preventDefault()`

get('.nav-link').addEventListener('click', event => {
    event.preventDefault();
    });