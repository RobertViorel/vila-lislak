const images = document.querySelectorAll('.image');

// Popup elements
const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.close-btn');
const imageName = document.querySelector('.image-name');
const largeImage = document.querySelector('.large-image');
const imageIndex = document.querySelector('.index');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let index = 0; // Track current image

// Event listeners for images
images.forEach((item, i) => {
    item.addEventListener('click', () => {
        updateImage(i);
        popup.classList.add('active');
    });
});

// Function to update image in popup
const updateImage = (i) => {
    const image = images[i];
    const path = image.src;
    largeImage.src = path;
    imageName.innerText = image.alt; // Display alt text instead of URL
    imageIndex.innerText = `0${i + 1}`;
    index = i;
}


// Close popup
closeBtn.addEventListener('click', () => {
    popup.classList.remove('active');
});

// Navigate left
leftArrow.addEventListener('click', () => {
    if (index > 0) {
        updateImage(index - 1);
    }
});

// Navigate right
rightArrow.addEventListener('click', () => {
    if (index < images.length - 1) {
        updateImage(index + 1);
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.setAttribute('loading', 'lazy');
    });
});



