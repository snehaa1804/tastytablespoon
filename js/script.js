
// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// Smooth scrolling animation
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

// Sticky navigation

const heroSectionEl = document.querySelector(".hero-section");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(heroSectionEl);

//Form Validation

function valid() {
  const email = document.getElementById('email').value;
  const fullName = document.getElementById('full-name').value;
  const contactNumber = document.getElementById('phn').value;
  const email2 = document.getElementById('email');
  const fullName2 = document.getElementById('full-name');
  const contactNumber2 = document.getElementById('phn');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const fullNameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  const contactNumberRegex = /^[0-9]{10}$/;

  const isEmailValid = emailRegex.test(email);
  const isFullNameValid = fullNameRegex.test(fullName);
  const isContactNumberValid = contactNumberRegex.test(contactNumber);

  if (isEmailValid){}
  else{
    email2.style.border = "red solid 3px";
  }
  if(isFullNameValid){}
  else{
    fullName2.style.border = "red solid 3px";
  }
  if(isContactNumberValid){}       
  else {
    contactNumber2.style.border = "red solid 3px";
    return false;
  }
}
// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js
