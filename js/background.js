const images = ["0.jpeg", "1.jpeg", "2.jpeg"]
const container = document.querySelector(".container");

const ranNumImg = Math.floor(Math.random()*images.length);
const chosenImage = images[ranNumImg];

// create image tag in HTML from javascript.
// const bgImage = document.createElement("img");
// bgImage.src = `img/${chosenImage}`;

// add image to the body.
// document.body.appendChild(bgImage);

// set background image.
document.body.style.backgroundImage = `url(img/${chosenImage})`;
