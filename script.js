const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', open);
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

// Smooth placeholder labels disappear when a real image file is present.
document.querySelectorAll('.photo-placeholder').forEach(el => {
  const filename = el.dataset.photo;
  if (!filename) return;
  const img = new Image();
  img.onload = () => {
    el.style.backgroundImage = `url("assets/${filename}")`;
    const hint = el.querySelector('.photo-hint');
    if (hint) hint.style.display = 'none';
  };
  img.src = `assets/${filename}`;
});
