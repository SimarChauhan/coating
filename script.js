const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const navLinks = mainNav ? mainNav.querySelectorAll("a") : [];
const quoteForm = document.getElementById("quoteForm");
const careerForm = document.getElementById("careerForm");
const formNote = document.getElementById("formNote");
const careerNote = document.getElementById("careerNote");
const yearEl = document.getElementById("year");

if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    mainNav.classList.toggle("is-open", !isExpanded);
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 760 && menuToggle && mainNav) {
      menuToggle.setAttribute("aria-expanded", "false");
      mainNav.classList.remove("is-open");
    }
  });
});

const pageKey = document.body.dataset.page;
if (pageKey && mainNav) {
  const activeLink = mainNav.querySelector(`[data-nav="${pageKey}"]`);
  if (activeLink) {
    activeLink.classList.add("is-active");
  }
}

if (quoteForm && formNote) {
  quoteForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formNote.textContent = "Thanks. Your request was received. We will reach out within one business day.";
    quoteForm.reset();
  });
}

if (careerForm && careerNote) {
  careerForm.addEventListener("submit", (event) => {
    event.preventDefault();
    careerNote.textContent = "Thanks for applying. Our hiring team will review your application soon.";
    careerForm.reset();
  });
}

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.16,
    }
  );

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });
} else {
  revealElements.forEach((element) => {
    element.classList.add("is-visible");
  });
}
