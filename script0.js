adjustWidthToHeight();

window.addEventListener("resize", adjustWidthToHeight);

function adjustWidthToHeight() {
  const cube = document.getElementById("cube-container");

  const windowHeight = window.innerHeight + window.innerHeight / 3;
  console.log(window.innerHeight, window.innerWidth);
  const menu = document.getElementById("menu"); // Corrected: Removed the dot before "menu"
  menu.style.width = `${windowHeight}px`;

  cube.style.height = window.innerHeight;
  cube.style.width = window.innerWidth;
}

// Call the function initially to set the width based on the initial window height

function getInitialCubeScaleBasedOnWindowSize() {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const minSize = Math.min(windowWidth, windowHeight);

  console.log(windowHeight);

  let initialScale;

  const face = document.querySelectorAll("face");

  if (windowWidth > 768) initialScale = minSize / 1350;
  else if (windowHeight < 900) initialScale = windowHeight / 5000;
  else initialScale = 900 / 3500;

  return initialScale;
}

const options = document.querySelectorAll(".option");

const cube = document.getElementById("cube");
const cubeContainer = document.getElementById("cube-container");
const sliderTrack = document.querySelector(".slider-track");
const slide = document.querySelector(".slide");

// Define keyframe constants for each face
let rotateToFace1Keyframes = [
  { transform: "rotateX(0deg) rotateY(0deg) rotateZ(0deg)" },
  { transform: "rotateX(0deg) rotateY(0deg) rotateZ(0deg)" },
];

let rotateToFace2Keyframes = [
  { transform: "rotateX(0deg) rotateY(0deg) rotateZ(0deg)" },
  { transform: "rotateX(0deg) rotateY(-90deg) rotateZ(0deg)" },
];

let rotateToFace3Keyframes = [
  { transform: "rotateX(0deg) rotateY(0deg) rotateZ(0deg)" },
  { transform: "rotateX(0deg) rotateY(-180deg) rotateZ(0deg)" },
];

let rotateToFace4Keyframes = [
  { transform: "rotateX(0deg) rotateY(0deg) rotateZ(0deg)" },
  { transform: "rotateX(0deg) rotateY(-270deg) rotateZ(0deg)" },
];

let rotateToFace5Keyframes = [
  { transform: "rotateX(0deg) rotateY(0deg) rotateZ(0deg)" },
  { transform: "rotateX(-90deg) rotateY(0deg) rotateZ(0deg)" },
];

let rotateToFace6Keyframes = [
  { transform: "rotateX(0deg) rotateY(0deg) rotateZ(0deg)" },
  { transform: "rotateX(90deg) rotateY(0deg) rotateZ(0deg)" },
];

const optionz = {
  duration: 2000, // Animation duration in milliseconds
  iterations: 1, // Repeat indefinitely
  easing: "linear", // Linear animation
  delay: 0,
  fill: "forwards", // Make cube stay at end of animation
};

//for development
cube.style.transform = rotateToFace1Keyframes[1].transform;
//

function setKeyframesScale() {
  const initialScale = getInitialCubeScaleBasedOnWindowSize();

  rotateToFace1Keyframes[1].transform = `scale(${initialScale})`;
  rotateToFace2Keyframes[1].transform = `scale(${initialScale})`;
  rotateToFace3Keyframes[1].transform = `scale(${initialScale})`;
  rotateToFace4Keyframes[1].transform = `scale(${initialScale})`;
  rotateToFace5Keyframes[1].transform = `scale(${initialScale})`;
  rotateToFace6Keyframes[1].transform = `scale(${initialScale})`;
}

function setInitialKeyframes(rotation) {
  rotateToFace1Keyframes[0].transform = `rotateX(0deg) rotateY(${rotation}deg) rotateZ(0deg)`;
  rotateToFace2Keyframes[0].transform = `rotateX(0deg) rotateY(${rotation}deg) rotateZ(0deg)`;
  rotateToFace3Keyframes[0].transform = `rotateX(0deg) rotateY(${rotation}deg) rotateZ(0deg)`;
  rotateToFace4Keyframes[0].transform = `rotateX(0deg) rotateY(${rotation}deg) rotateZ(0deg)`;
  rotateToFace5Keyframes[0].transform = `rotateX(0deg) rotateY(${rotation}deg) rotateZ(0deg)`;
  rotateToFace6Keyframes[0].transform = `rotateX(0deg) rotateY(${rotation}deg) rotateZ(0deg)`;
}

function setKeyframes(keyframe) {
  rotateToFace1Keyframes[0].transform = keyframe[1].transform;
  rotateToFace2Keyframes[0].transform = keyframe[1].transform;
  rotateToFace3Keyframes[0].transform = keyframe[1].transform;
  rotateToFace4Keyframes[0].transform = keyframe[1].transform;
  rotateToFace5Keyframes[0].transform = keyframe[1].transform;
  rotateToFace6Keyframes[0].transform = keyframe[1].transform;
}

let isAnimating = false;

function handleItemClick(itemId) {
  if (isAnimating) {
    // Don't start a new animation if one is already running
    return;
  }

  isAnimating = true;

  switch (itemId) {
    case "item-1":
      animation = cube.animate(rotateToFace1Keyframes, optionz);
      setKeyframes(rotateToFace1Keyframes);
      break;
    case "item-2":
      animation = cube.animate(rotateToFace2Keyframes, optionz);
      setKeyframes(rotateToFace2Keyframes);
      break;
    case "item-3":
      animation = cube.animate(rotateToFace3Keyframes, optionz);
      setKeyframes(rotateToFace3Keyframes);
      break;
    case "item-4":
      animation = cube.animate(rotateToFace4Keyframes, optionz);
      setKeyframes(rotateToFace4Keyframes);
      break;
    case "item-5":
      animation = cube.animate(rotateToFace5Keyframes, optionz);
      setKeyframes(rotateToFace5Keyframes);
      setTimeout(() => {
        document.getElementById("mail").click();
      }, 2250);
      break;
    case "item-6":
      animation = cube.animate(rotateToFace6Keyframes, optionz);
      setKeyframes(rotateToFace6Keyframes);
      break;
    default:
      console.log("Unknown item clicked");
  }

  animation.addEventListener("finish", () => {
    cube.style.transform = animation.effect.getKeyframes()[1].transform;
    isAnimating = false;
  });
}

options.forEach((option) => {
  option.addEventListener("click", function () {
    options.forEach((opt) => opt.classList.remove("active"));
    this.classList.add("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  adjustWidthToHeight();
  setInitialCubeScale();

  // Initial animation to face 3
  let animation = cube.animate(rotateToFace1Keyframes, options);

  //animation pause on click function
  //
  //   cube.addEventListener('click', () => {
  //     if (animation.playState === 'running') {
  //       animation.pause();
  //     } else {
  //       animation.play();
  //     }
  //   });

  // Set up the animation loop for slider
  function loop(event) {
    const mouseX = event.clientX;
    const trackRect = sliderTrack.getBoundingClientRect();
    const relativeX = mouseX - trackRect.left;
    const slideX = Math.min(Math.max(relativeX, 0), trackRect.width);
    slide.style.transform = `translateX(${slideX}px)`;
    requestAnimationFrame(loop);
  }

  // Attach mousemove event listener to the document
  document.addEventListener("mousemove", loop);

  // Scale handling
  let scale = 1; // Initial scale value
  const scaleStep = 0.1; // Amount to change scale by
  const minScale = 0.1;

  function handleScroll(event) {
    const delta = event.deltaY || event.detail || event.wheelDelta;

    if (delta > 0) {
      scale -= scaleStep;
      if (scale < minScale) {
        scale = minScale;
      }
    } else {
      scale += scaleStep;
    }

    updateCubeScale();
    cubeContainer.style.perspective = "10000px";
    event.preventDefault();
  }

  function updateCubeScale() {
    cubeContainer.style.transform = `scale(${scale})`;
  }

  cubeContainer.addEventListener("wheel", handleScroll, { passive: false });

  // Menu item click handling
  const menuItems = document.querySelectorAll(".menu-item");

  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      const itemId = item.id;
      handleItemClick(itemId);
    });
  });

  function getRotation(cubeElement) {
    const transformStyle = window
      .getComputedStyle(cubeElement)
      .getPropertyValue("transform");
    const matrix = transformStyle.match(/^matrix3d\((.+)\)$/);

    if (matrix) {
      const values = matrix[1].split(", ");
      const a = parseFloat(values[0]);
      const b = parseFloat(values[1]);
      const rotationY = Math.atan2(b, a);
      return (rotationY * 180) / Math.PI;
    }

    return 0;
  }
});

const body = document.body;
const bgColorsBody = ["#ffb457", "#ff96bd", "#9999fb", "#ffe797", "#cffff1"];
const menu = body.querySelector(".menu");
const menuItems = menu.querySelectorAll(".menu__item");

let activeItem = menu.querySelector(".active");

function clickItem(item, index) {
  menu.style.removeProperty("--timeOut");

  if (activeItem == item) return;

  if (activeItem) {
    activeItem.classList.remove("active");
  }

  item.classList.add("active");
  body.style.backgroundColor = bgColorsBody[index];
  activeItem = item;
}

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    if (isAnimating) {
      // Don't start a new animation if one is already running
      return;
    }
    const itemId = item.id;
    clickItem(item, index);
    handleItemClick(itemId);
  });
});

const elts = {
  text1: document.getElementById("text1"),
  text2: document.getElementById("text2"),
};

const initialTexts = ["Hello", "I`m", "Marco", "I", "<3", "tech"];

let texts = initialTexts;

const morphTime = 1.25;
const cooldownTime = 0.2;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
  morph -= cooldown;
  cooldown = 0;

  let fraction = morph / morphTime;

  if (fraction > 1) {
    cooldown = cooldownTime;
    fraction = 1;
  }

  setMorph(fraction);
}

function setMorph(fraction) {
  elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
  elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

  fraction = 1 - fraction;
  elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
  elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

  elts.text1.textContent = texts[textIndex % texts.length];
  elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
  morph = 0;

  elts.text2.style.filter = "";
  elts.text2.style.opacity = "100%";

  elts.text1.style.filter = "";
  elts.text1.style.opacity = "0%";
}

function animate() {
  requestAnimationFrame(animate);

  let newTime = new Date();
  let shouldIncrementIndex = cooldown > 0;
  let dt = (newTime - time) / 1000;
  time = newTime;

  cooldown -= dt;

  if (cooldown <= 0) {
    if (shouldIncrementIndex) {
      textIndex++;
    }

    doMorph();
  } else {
    doCooldown();
  }
}

animate();

async function getGithubProjects() {
  try {
    const response = await fetch(
      "https://api.github.com/users/Lemon2311/repos"
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

async function createProjectCards() {
  const projectsContainer = document.getElementById("card-container");

  try {
    const projects = await getGithubProjects();
    projects.forEach((project, index) => {
      const card = document.createElement("div");
      card.classList.add("card");
      const cardClass = `card${index + 2}`;
      card.classList.add(cardClass);

      const projectLink = document.createElement("a"); // Create an anchor element
      projectLink.href = project.html_url; // Set the href to the project's HTML URL

      const cardContent = document.createElement("div"); // Create a container for card content
      cardContent.classList.add("card-content"); // Apply a class to the content container

      const text = document.createElement("h1");
      const projectName = project.name.replace(/-(.)/g, (_, match) =>
        match.toUpperCase()
      );
      text.textContent = projectName;

      cardContent.appendChild(text); // Add the text to the content container

      projectLink.appendChild(cardContent); // Add the content container to the anchor element
      card.appendChild(projectLink); // Add the anchor element to the card

      // Dynamically create and apply a <style> element for z-index
      const style = document.createElement("style");
      style.textContent = `
        .${cardClass} { z-index: ${projects.length - index - 1}; }
        .card { position: relative; }  /* Ensure positioning context */
        .card-content { position: absolute; top: 0; bottom: 0; left: 0; right: 0; }  /* Span entire card */
      `;

      // Add transform x of 100px to cards after nr 10
      if (index >= 18) {
        style.textContent += `
          .${cardClass} { left : 200px; top: -210px;}
        `;
      }

      document.head.appendChild(style);

      projectsContainer.appendChild(card);
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

createProjectCards();

var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.querySelectorAll(".thumbnail");

var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

function openModalWithImage(image) {
  if (modal) modal.style.display = "block";

  if (modalImg) {
    modalImg.src = image.src;
    modalImg.alt = image.alt;
    if (captionText) captionText.innerHTML = image.alt;
  }
}

for (var i = 0; i < img.length; i++) {
  if (img[i]) {
    img[i].onclick = function () {
      openModalWithImage(this);
    };
  }
}

var img01 = document.getElementById("img01");

// When the user clicks on <span> (x), close the modal
if (modal) {
  modal.onclick = function () {
    closeModal();
  };
}

// Close modal function
function closeModal() {
  if (img01) img01.className += " out";
  setTimeout(function () {
    if (modal) modal.style.display = "none";
    if (img01) img01.className = "modal-content";
  }, 400);
}

// Close modal when pressing the "Esc" key
window.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeModal();
  }
});

////////////////////

function setInitialCubeScale() {
  const initialScale = getInitialCubeScaleBasedOnWindowSize();
  cubeContainer.style.transform = `scale(${initialScale})`;
}

setInitialCubeScale();

window.addEventListener("resize", () => {
  setInitialCubeScale();
});

//////////////////////

function showModal(item) {
  const modal = item.querySelector(".hover-modal");
  modal.style.display = "block";
}

function hideModal(item) {
  const modal = item.querySelector(".hover-modal");
  modal.style.display = "none";
}

window.addEventListener("load", function () {
  var loadingScreen = document.getElementById("loadingScreen");
  if (loadingScreen) {
    loadingScreen.style.display = "none";
  }

  adjustWidthToHeight();
});
