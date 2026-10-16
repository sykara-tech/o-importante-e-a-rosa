// Menu mobile
const menuBtn = document.querySelector("#menuBtn");
const nav = document.querySelector("#nav");
menuBtn.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach(a =>
  a.addEventListener("click", () => {
    nav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  })
);

// Lightbox
const box = document.querySelector("#lightbox");
const big = document.querySelector("#bigPhoto");

document.querySelectorAll(".photo").forEach(p =>
  p.addEventListener("click", () => {
    big.src = p.querySelector("img").src;
    big.alt = p.querySelector("img").alt;
    box.classList.add("open");
    box.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  })
);

function closeBox() {
  box.classList.remove("open");
  box.setAttribute("aria-hidden", "true");
  big.src = "";
  document.body.style.overflow = "";
}
document.querySelector("#closeLightbox").addEventListener("click", closeBox);
box.addEventListener("click", e => { if (e.target === box) closeBox(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeBox(); });


// Revela os blocos com efeito de descida conforme entram na tela.
const revealTargets = document.querySelectorAll(
  '.section, .rose-section, .gallery-section, .photo, .faith-intro, .marian-devotion, .music-card, .closing, .cantinho-frase-apoio'
);

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });

  revealTargets.forEach((element, index) => {
    element.classList.add('js-reveal');
    element.style.animationDelay = `${Math.min(index % 4, 3) * 90}ms`;
    revealObserver.observe(element);
  });
} else {
  revealTargets.forEach(element => element.classList.add('is-visible'));
}
