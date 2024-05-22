/*******************************************Burger Nav BAr********************************************************** */
const burger=document.querySelector('.burger')
const navbarItem=document.querySelector('.navbar')
const nav=document.querySelector('.items')

burger.addEventListener('click',()=>{
    navbarItem.classList.toggle('h-class')
    nav.classList.toggle('v-class')
})




/************************************************DARKMODE************************************************************/

const darkModeButton = document.querySelector('.dark-mode');
const moonIcon = document.querySelector('.fa-moon');

const darkTheme = 'dark-theme';

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';

darkModeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    const currentTheme = getCurrentTheme();
    
    if (currentTheme === 'dark') {
        moonIcon.classList.remove('fa-moon');
        moonIcon.classList.add('fa-sun');
    } else {
        moonIcon.classList.remove('fa-sun');
        moonIcon.classList.add('fa-moon');
    }

    localStorage.setItem('selected-theme', currentTheme);
});




/***********************************************SCROLL TO TOP***********************************************************/
window.addEventListener('scroll', function() {
    var scrollPos = window.scrollY;
    var scrollUpBtn = document.getElementById('scrollUpBtn');
    
    // Show scroll-up button when scrolling down
    if (scrollPos > 300) {
        scrollUpBtn.style.display = 'block';
    } else {
        scrollUpBtn.style.display = 'none';
    }
});

document.getElementById('scrollUpBtn').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


/***************************************************CONTACT ME***************************************************************/
document.getElementById('contact-btn').addEventListener('click', function() {
    var contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }
});





/****************************************************Contact (SENDING THROUGH GMAIL)*****************************************************/

