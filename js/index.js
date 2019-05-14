// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img1 = document.getElementById("img_1");
var img2 = document.getElementById("img_2");
var img3 = document.getElementById("img_3");
var img4 = document.getElementById("img_4");
var img5 = document.getElementById("img_5");
var img6 = document.getElementById("img_6");
var img7 = document.getElementById("img_7");
var img8 = document.getElementById("img_8");
var img9 = document.getElementById("img_9");

var modalImg = document.getElementById("myImg");
var captionText = document.getElementById("caption");
img1.onclick = function() {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};

img2.onclick = function() {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};

img3.onclick = function() {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};

img4.onclick = function() {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};

img5.onclick = function() {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};

img6.onclick = function() {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};

img7.onclick = function() {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};

img8.onclick = function() {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};

img9.onclick = function() {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

const skillsContent = document.querySelector("#skillsContent");

const htmlIcon = document.querySelector(".devicon-html5-plain");

htmlIcon.addEventListener("mouseover", () => {
  htmlIcon.classList.add("colored");
  skillsContent.textContent = "HTML 5";
});

htmlIcon.addEventListener("mouseout", () => {
  htmlIcon.classList.remove("colored");
  skillsContent.textContent = "";
});

const cssIcon = document.querySelector(".devicon-css3-plain");

cssIcon.addEventListener("mouseover", () => {
  cssIcon.classList.add("colored");
  skillsContent.textContent = "CSS 3";
});

cssIcon.addEventListener("mouseout", () => {
  cssIcon.classList.remove("colored");
  skillsContent.textContent = "";
});

const jsIcon = document.querySelector(".devicon-javascript-plain");

jsIcon.addEventListener("mouseover", () => {
  jsIcon.classList.add("colored");
  skillsContent.textContent = "JAVASCRIPT";
});

jsIcon.addEventListener("mouseout", () => {
  jsIcon.classList.remove("colored");
  skillsContent.textContent = "";
});

const reactIcon = document.querySelector(".devicon-react-original");

reactIcon.addEventListener("mouseover", () => {
  reactIcon.classList.add("colored");
  skillsContent.textContent = "REACT JS";
});

reactIcon.addEventListener("mouseout", () => {
  reactIcon.classList.remove("colored");
  skillsContent.textContent = "";
});

const mongoIcon = document.querySelector(".devicon-mongodb-plain");

mongoIcon.addEventListener("mouseover", () => {
  mongoIcon.classList.add("colored");
  skillsContent.textContent = "MONGO DB";
});

mongoIcon.addEventListener("mouseout", () => {
  mongoIcon.classList.remove("colored");
  skillsContent.textContent = "";
});

const gitHubIcon = document.querySelector(".devicon-github-plain");

gitHubIcon.addEventListener("mouseover", () => {
  gitHubIcon.classList.add("colored");
  skillsContent.textContent = "GITHUB";
});

gitHubIcon.addEventListener("mouseout", () => {
  gitHubIcon.classList.remove("colored");
  skillsContent.textContent = "";
});

const expressIcon = document.querySelector(".devicon-express-original");

expressIcon.addEventListener("mouseover", () => {
  expressIcon.classList.add("colored");
  skillsContent.textContent = "EXPRESS JS";
});

expressIcon.addEventListener("mouseout", () => {
  expressIcon.classList.remove("colored");
  skillsContent.textContent = "";
});

const nodeIcon = document.querySelector(".devicon-nodejs-plain");

nodeIcon.addEventListener("mouseover", () => {
  nodeIcon.classList.add("colored");
  skillsContent.textContent = "NODE JS";
});

nodeIcon.addEventListener("mouseout", () => {
  nodeIcon.classList.remove("colored");
  skillsContent.textContent = "";
});

const herokuIcon = document.querySelector(".devicon-heroku-plain");

herokuIcon.addEventListener("mouseover", () => {
  herokuIcon.classList.add("colored");
  skillsContent.textContent = "HEROKU";
});

herokuIcon.addEventListener("mouseout", () => {
  herokuIcon.classList.remove("colored");
  skillsContent.textContent = "";
});

const lessIcon = document.querySelector(".devicon-less-plain-wordmark");

lessIcon.addEventListener("mouseover", () => {
  skillsContent.textContent = "LESS";
});

lessIcon.addEventListener("mouseout", () => {
  skillsContent.textContent = "";
});

const muiIcon = document.querySelector(".material-ui-white");

muiIcon.addEventListener("mouseover", () => {
  skillsContent.textContent = "MATERIAL UI";
  muiIcon.src = "./img/materialUI-black.png";
});

muiIcon.addEventListener("mouseout", () => {
  skillsContent.textContent = "";
  muiIcon.src = "./img/materialUI.png";
});

const reduxWhiteIcon = document.querySelector(".redux-white");

reduxWhiteIcon.addEventListener("mouseover", () => {
  skillsContent.textContent = "REDUX";
  reduxWhiteIcon.src = "./img/redux-color.png";
});

reduxWhiteIcon.addEventListener("mouseout", () => {
  skillsContent.textContent = "";
  reduxWhiteIcon.src = "./img/redux-white.png";
});
