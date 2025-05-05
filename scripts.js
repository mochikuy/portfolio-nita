// Toggle Theme
const toggleBtn = document.querySelector('#toggle-theme');

if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
}
