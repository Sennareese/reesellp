// Mobile nav toggle
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('main-nav');
hamburger.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('#main-nav a').forEach(a => {
  a.addEventListener('click', () => nav.classList.remove('open'));
});

// Case filter tabs
const tabs = document.querySelectorAll('.filter-tab');
const cards = document.querySelectorAll('.case-card');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const filter = tab.dataset.filter;
    cards.forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

// Toast notification
function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 4000);
}

// Form submission handlers
document.getElementById('intake-form').addEventListener('submit', e => {
  e.preventDefault();
  showToast('Thank you for your submission. Our intake team will review your information shortly.');
  e.target.reset();
});

document.getElementById('report-form').addEventListener('submit', e => {
  e.preventDefault();
  showToast('Your case report has been submitted. All submissions are reviewed confidentially.');
  e.target.reset();
});

// Sticky header shadow
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  header.style.boxShadow = window.scrollY > 10 ? '0 2px 20px rgba(0,0,0,0.25)' : 'none';
});
