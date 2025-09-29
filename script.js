
// Enhance contact form: if on contact page, intercept to show thank-you without full reload
(function(){
  const form = document.getElementById('contactForm');
  if(!form) return;

  form.addEventListener('submit', function(e){
    e.preventDefault();
    const name = (document.getElementById('name')||{}).value?.trim();
    const phone = (document.getElementById('phone')||{}).value?.trim();

    if(!name || !phone){
      alert('Please provide your name and phone number.');
      return;
    }

    // Simulate sending; in production, POST to your backend or a form service here.
    // Show an inline thank-you message without page refresh:
    const wrapper = document.createElement('div');
    wrapper.className = 'card';
    wrapper.innerHTML = `
      <h2>Thanks, ${name}!</h2>
      <p>We received your request. We’ll text or call you at <strong>${phone}</strong> to confirm.</p>
      <a class="btn" href="index.html">Back to Home</a>
    `;
    form.replaceWith(wrapper);
  });
})();
