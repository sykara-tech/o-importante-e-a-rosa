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
