let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');



window.onscroll = () => {
    console.log(navLinks)
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
                ('active')
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

//Sharki Generator
// Get all the images
function get_random_image() {
    // Generate a random number between 1 and 9887
    let random_index = Math.floor(Math.random() * 9887) + 1;

    // Construct the filename
    let selected_image = `${random_index}.jpeg`;

    // Display the image
    document.getElementById('image-container').src = `./images/pfps/${selected_image}`;
}