window.addEventListener('load', () => {
  const intro = document.getElementById('intro');
  setTimeout(() => intro.classList.add('hidden'), 1300);
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

for (const el of document.querySelectorAll('.reveal')) {
  observer.observe(el);
}
