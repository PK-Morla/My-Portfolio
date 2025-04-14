/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction() {
    const menuBtn = document.getElementById("myNavMenu");
    menuBtn.classList.toggle("responsive");
  }
  
  /* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
  window.onscroll = function () {
    headerShadow();
    scrollActive();
  };
  
  function headerShadow() {
    const navHeader = document.getElementById("header");
    if (window.scrollY > 50) {
      navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";
    } else {
      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
      navHeader.style.lineHeight = "90px";
    }
  }
  
  /* ----- TYPING EFFECT ----- */
  const typingEffect = new Typed(".typedText", {
    strings: [".Net Developer", "Full Stack Developer", "Software Developer", "Web Developer"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000
  });
  
  /* ----- SCROLL REVEAL ANIMATION ----- */
  const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
  });
  
  // Reveal Sections
  sr.reveal('.featured-text-card', {});
  sr.reveal('.featured-name', { delay: 100 });
  sr.reveal('.featured-text-info', { delay: 200 });
  sr.reveal('.featured-text-btn', { delay: 200 });
  sr.reveal('.social_icons', { delay: 200 });
  sr.reveal('.featured-image', { delay: 300 });
  sr.reveal('.project-box', { interval: 200 });
  sr.reveal('.top-header', {});
  
  // Left Reveal
  ScrollReveal().reveal('.about-info, .contact-info', {
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true,
    delay: 100
  });
  
  // Right Reveal
  ScrollReveal().reveal('.skills-box, .form-control', {
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true,
    delay: 100
  });
  
  /* ----- CHANGE ACTIVE LINK ON SCROLL ----- */
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-menu a");
  
  function scrollActive() {
    const scrollY = window.pageYOffset;
  
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 70;
      const sectionId = current.getAttribute("id");
  
      const navLink = document.querySelector(`.nav-menu a[href*=${sectionId}]`);
      if (!navLink) return;
  
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLink.classList.add("active-link");
      } else {
        navLink.classList.remove("active-link");
      }
    });
  }
  