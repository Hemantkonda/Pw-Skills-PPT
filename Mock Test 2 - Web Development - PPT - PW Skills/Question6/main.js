var openModalBtn = document.getElementById('openModalBtn');
var modal = document.getElementById('myModal');
var closeBtn = document.getElementsByClassName('close')[0];

// Open modal
openModalBtn.addEventListener('click', function() {
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden'; // Prevent scrolling
});

// Close modal when clicking outside or on close button
window.addEventListener('click', function(event) {
  if (event.target == modal || event.target == closeBtn) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Enable scrolling
  }
});
