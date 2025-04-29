// Simulate a dynamic rating and number of happy customers
const ratings = 4.5; // dynamic rating value
const happyCustomers = 6578; // dynamic number of happy customers

// Update the rating in the first card
document.getElementById('rating').textContent = ratings.toFixed(1);

// Update the happy customers in the second card
document.getElementById('happy-customers').textContent = happyCustomers.toLocaleString();
const text = "Explore the World!";
const typingSpeed = 100; // milliseconds between each letter
const erasingSpeed = 50;
const delayBetweenWords = 10000; // wait after typing complete
const typedTextElement = document.getElementById("typed-text");

let charIndex = 0;
let isDeleting = false;

function type() {
    if (!isDeleting && charIndex <= text.length) {
        typedTextElement.textContent = text.substring(0, charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
    } else if (isDeleting && charIndex >= 0) {
        typedTextElement.textContent = text.substring(0, charIndex);
        charIndex--;
        setTimeout(type, erasingSpeed);
    } else {
        isDeleting = !isDeleting;
        setTimeout(type, delayBetweenWords);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(type, 500);
});
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});
const places = [
    {
        title: "Santorini, Greece",
        description: "A beautiful island with stunning blue and white architecture.",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
    },
    {
        title: "Kyoto, Japan",
        description: "Historic temples and vibrant cherry blossoms.",
        image: "https://images.unsplash.com/photo-1549693578-d683be217e58"
    },
    {
        title: "Maui, Hawaii",
        description: "Golden beaches and amazing sunsets.",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
    },
    {
        title: "Paris, France",
        description: "The city of love with the iconic Eiffel Tower.",
        image: "assests/bg5.jpg"
    },
    {
        title: "New York, USA",
        description: "The bustling city that never sleeps.",
        image: "assests/bg3.jpg"
    }
    
];

let currentIndex = 0;

function showSlide(index) {
    const slider = document.getElementById('slider');
    const placeTitle = document.getElementById('placeTitle');
    const placeDescription = document.getElementById('placeDescription');
    const pageIndicator = document.getElementById('pageIndicator');

    slider.style.backgroundImage = `url('${places[index].image}')`;
    placeTitle.textContent = places[index].title;
    placeDescription.textContent = places[index].description;
    pageIndicator.textContent = `${index + 1}/${places.length}`;

    // Bounce animation
    const textContent = document.getElementById('textContent');
    textContent.classList.remove('animate-bounce');
    void textContent.offsetWidth; // Trick to restart animation
    textContent.classList.add('animate-bounce');
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % places.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + places.length) % places.length;
    showSlide(currentIndex);
}

// Initialize
showSlide(currentIndex);
// Get elements
const loginModal = document.getElementById('loginModal');
const signInButton = document.querySelector('.bg-green-500'); // Sign In button
const closeModalButton = document.getElementById('closeModal');

// Open modal when Sign In button is clicked
signInButton.addEventListener('click', () => {
    loginModal.classList.remove('hidden');
});

// Close modal when Close button is clicked
closeModalButton.addEventListener('click', () => {
    loginModal.classList.add('hidden');
});