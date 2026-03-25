
const loader = document.getElementById('siteLoader');
window.addEventListener('load', () => {
  setTimeout(() => loader.classList.add('hidden'), 1750);
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('is-visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const starfield = document.getElementById('starfield');
for (let i = 0; i < 90; i++) {
  const s = document.createElement('span');
  const size = Math.random() * 2.8 + 1;
  s.style.position = 'absolute';
  s.style.width = `${size}px`;
  s.style.height = `${size}px`;
  s.style.left = `${Math.random() * 100}%`;
  s.style.top = `${Math.random() * 100}%`;
  s.style.borderRadius = '50%';
  s.style.background = 'rgba(255,255,255,.95)';
  s.style.opacity = `${Math.random() * .55 + .1}`;
  s.style.boxShadow = '0 0 12px rgba(255,255,255,.45)';
  s.style.animation = `twinkle ${Math.random() * 4 + 3}s ease-in-out ${Math.random() * 3}s infinite, drift ${Math.random() * 40 + 40}s linear infinite`;
  starfield.appendChild(s);
}

const style = document.createElement('style');
style.textContent = `
@keyframes twinkle {
  0%,100% { opacity:.18; transform:scale(1); }
  50% { opacity:.9; transform:scale(1.8); }
}`;
document.head.appendChild(style);
