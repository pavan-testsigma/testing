const btn = document.getElementById('clickable');
const msg = document.getElementById('message');

btn.addEventListener('click', () => {
  msg.textContent = 'Hello';
});
