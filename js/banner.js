const heroBannerContainer = document.querySelector(".hero-banner-container");
const dotContainer = document.querySelector(".dot-section");

let currentImageIndex = 0;

const heroBannerArray = [
  "./assets/opod-bg1.jpg",
  "./assets/opod-bg2.jpg"
];

function hideHeroBanners() {
  const heroBanners = document.querySelectorAll(".hero-banner");
  heroBanners.forEach((banner, index) => {
    
    if (index !== 0) {
      banner.style.display = "none";
    }
  });
}

function heroBannerSlide() {
  const heroBanners = document.querySelectorAll(".hero-banner");
  heroBanners.forEach((banner, index) => {
    if (index === currentImageIndex) {
      banner.style.display = "block";
    } else {
      banner.style.display = "none";
    }
  });
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    if (index === currentImageIndex) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
  currentImageIndex = (currentImageIndex + 1) % heroBannerArray.length;
}

setInterval(heroBannerSlide, 2000); // change image every 3 seconds

function createHeroBanner() {
  const heroBanner = document.createElement("img");
  heroBanner.className = "hero-banner";
  heroBanner.setAttribute("src", heroBannerArray[currentImageIndex]);
  heroBannerContainer.appendChild(heroBanner);
  currentImageIndex = (currentImageIndex + 1) % heroBannerArray.length;
}

function createDot() {
  const dot = document.createElement("div");
  dot.className = "dot";
  dotContainer.appendChild(dot);
  dot.addEventListener("click", () => {
    currentImageIndex = Array.from(dotContainer.children).indexOf(dot);
    heroBannerSlide();
  });
}

for (let i = 0; i < heroBannerArray.length; i++) {
  createHeroBanner();
  createDot();
}

hideHeroBanners();


