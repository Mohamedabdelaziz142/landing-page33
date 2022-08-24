/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
//global variables
let navigation = document.getElementById('navbar__list');

let sections  = document.querySelectorAll('section');
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav



//navigation function
const builNav = function() {

    sections.forEach(section => {

let list = document.createElement('li');
let anchor = document.createElement('a');
let sectionName = section.getAttribute('data-nav');
let sectionNameAttribute = sectionName.replace(/\s/g, '').toLowerCase();
anchor.innerText = sectionName;
anchor.setAttribute('href', `#${sectionNameAttribute}`);
list.append(anchor);
navigation.appendChild(list);

    })
    
}
builNav();

  
  var offset = (section) => {
    return Math.floor(section.getBoundingClientRect().top);
};

// removeactive class
var  removeActive = (section) => {
    section.classList.remove('your-active-class');
};
// add active class
var addActive = (conditional, section) => {
    if(conditional){
        section.classList.add('your-active-class');
        
    };
};
// function
var sectionActivation = () => {
    sections.forEach(section => {
        let Offsetelement = offset(section);

        inviewport = () => Offsetelement < 145 && Offsetelement >= -160;

        removeActive(section);
        addActive(inviewport(),section);
    });
};

window.addEventListener('scroll' ,sectionActivation);

// Scroll to anchor ID using scrollTO event

const scroll = () => {

    var links = document.querySelectorAll('.navbar__menu a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            for(i = 0 ; i<sections ; i++){
                sections[i].addEventListener("click",sectionScroll(link));
            }
        });
    });

};
scroll();

  


