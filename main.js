const btnToggle = document.querySelector(".toggle-btn .tog");
const links = document.querySelector(".landing .links");
const swipperContainer = document.querySelector(".mySwiper");

btnToggle.addEventListener("click", () => {
  links.classList.toggle("opened");
  btnToggle.classList.toggle("clicked");

  if (btnToggle.classList.contains("clicked")) {
    btnToggle.src = "./images/icon-close.svg";
  } else {
    btnToggle.src = "./images/icon-hamburger.svg";
  }
});

// ==========================================

function handleSlider() {
  if (window.innerWidth < 860) {
    swipperContainer.setAttribute("slides-per-view", "1");
  } else {
    swipperContainer.setAttribute("slides-per-view", "3");
  }
}
handleSlider();

window.onresize = handleSlider;

// ==========================================

const emailInput = document.getElementById("email");
const emailBtn = document.querySelector(".email-btn");

function checkEmail() {
  const val = emailInput.value;
  const regex = /^\w+@\w+(.\w+)?/gi;
  const para = document.createElement("p");
  const text = document.createTextNode("please insert a valid email");

  if (val == "" || !regex.test(val)) {
    if (!emailBtn.nextElementSibling) {
      para.classList.add("warning");
      para.append(text);
      emailBtn.after(para);
      emailInput.classList.add("warning");
    }
  } else if (emailBtn.nextElementSibling) {
    emailBtn.nextElementSibling.remove();
    emailInput.classList.remove("warning");
  }
}

emailBtn.addEventListener("click", checkEmail);
