const form = document.getElementById('contact-form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();
  let valid = true;

  if (!name) {
    alert('Name is required');
    valid = false;
  }
  if (!email || !email.includes('@')) {
    alert('Valid email is required');
    valid = false;
  }
  if (!message) {
    alert('Message cannot be empty');
    valid = false;
  }

  if (valid) {
    alert('Thank you for your message!');
    form.reset();
  }
});