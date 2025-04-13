// Text Area - Dropdown 
function toggleDropdown(id) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
        var dropdown = dropdowns[i];
        if (dropdown.id !== id && dropdown.classList.contains("show")) {
            dropdown.classList.remove("show");
        }
    }
    document.getElementById(id).classList.toggle("show");
}

// Navigation bar show
document.addEventListener("DOMContentLoaded", function() {
    var sideIcon = document.getElementById("sideIcon");
    var navbar = document.getElementById("navbar");
    
    sideIcon.addEventListener("click", function() {
        navbar.classList.toggle("show");
    });
});

// text area blur
document.addEventListener('DOMContentLoaded', function() {
    var tempBoxes = document.querySelectorAll('.tempbox');

    tempBoxes.forEach(function(box) {
        box.addEventListener('click', function() {
            tempBoxes.forEach(function(otherBox) {
                if (otherBox !== box) {
                    otherBox.classList.add('blur');
                } else {
                    box.classList.remove("active");
                    otherBox.classList.remove('blur');
                }
            });
        });
    });

    window.addEventListener('click', function(event) {
        if (!event.target.closest('.tempbox')) {
            tempBoxes.forEach(function(box) {
                box.classList.remove('blur');
            });
        }
    });
});

// Get the header element
var header = document.querySelector('header');

// Function to handle scrolling
function handleScroll() {
    // Check if the scroll position is greater than or equal to the top position of the header
    if (window.pageYOffset >= header.offsetTop) {
        // If so, add a class to the header to make it fixed
        header.classList.add('fixed-header');
    } else {
        // Otherwise, remove the class to make it static
        header.classList.remove('fixed-header');
    }
}

// Add event listener for scroll event
window.addEventListener('scroll', handleScroll);



document.addEventListener('DOMContentLoaded', function () {
    const footer = document.getElementById('footer');
    const spans = footer.querySelectorAll('.pos span');
  
    const toggleDisplay = (element) => {
      const nextElement = element.nextElementSibling;
      nextElement.style.display = nextElement.style.display === 'none' ? 'block' : 'none';
    };
  
    for (const span of spans) {
      span.addEventListener('click', function () {
        toggleDisplay(span);
      });
    }
});




const slider = document.querySelector('.slider');
const slides = document.querySelector('.slides');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let slideIndex = 0;

// hide all slides
function showSlide(index) {
  for (let i = 0; i < slides.children.length; i++) {
    slides.children[i].style.display = 'none';
  }

  // show the selected slide
  const slide = slides.children[index];
  slide.style.display = 'block';
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.children.length) % slides.children.length;
  showSlide(slideIndex);
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.children.length;
  showSlide(slideIndex);
}

showSlide(slideIndex); // show the first slide initially

if (prev && next) {
  prev.addEventListener('click', prevSlide);
  next.addEventListener('click', nextSlide);

  const slideshow = () => {
    nextSlide();
    setTimeout(() => {
      slideshow();
    }, 3000);
  };

  slideshow();
}