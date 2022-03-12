
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
const sections = document.querySelectorAll('section');
const navMenu = document.getElementById('navbar__list');
const fragment = document.createDocumentFragment();
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/** a for each loop to create the navbar list */
sections.forEach (section=>{
    let sectionId = section.getAttribute("id");
    let sectionTitle = section.getAttribute("data-nav");
    let ul = document.createElement("li");
    let sectionLink = document.createElement("a");
    sectionLink.classList.add("menu__link");
    sectionLink.href = `#${sectionId}`;
    sectionLink.textContent = sectionTitle;
    
/**adding event listener to the navbar */

    sectionLink.addEventListener("click", event =>{
    event.preventDefault();
    section.scrollIntoView({behavior: "smooth"});
    });


/* appending the links for each section to the navbar*/

    ul.appendChild(sectionLink);
    fragment.appendChild(ul);
    });

// build the nav

    navMenu.appendChild(fragment);

// Add class 'active' to section when near top of viewport

function activeSection() {

    let sections = document.querySelectorAll('section');
    
    for (const section of sections) {
    
        if (section.getBoundingClientRect().top >= -200 && section.getBoundingClientRect().top <= 300) {
            section.classList.add('your-active-class');
            document.querySelector(`a[href='#${section.id}']`).classList.add('active');

        }
        else {
            section.classList.remove('your-active-class');
            document.querySelector(`a[href='#${section.id}']`).classList.remove('active');
        }
    }
    }


/**
 * End Main Functions
 * Begin Events
 * 
*/

document.addEventListener('scroll', activeSection);