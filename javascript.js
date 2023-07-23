document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const popup = document.getElementById('popup');
    const overlay = document.querySelector('.overlay');

    form.addEventListener('submit', function(event) {
      event.preventDefault();

      const fname = document.getElementById('fname').value;
      const lname = document.getElementById('lname').value;
      const email = document.getElementById('Email').value;
      const phone = document.getElementById('phone').value;
      const skills = document.getElementById('skills').value;

      document.getElementById('popupfName').textContent = fname;
      document.getElementById('popuplName').textContent = lname;
      document.getElementById('popupEmail').textContent = email;
      document.getElementById('popupPhone').textContent = phone;
      document.getElementById('popupSkill').textContent = skills;

      popup.style.display = 'block';
      overlay.style.display = 'block';

    //   setTimeout(function() {
    //     popup.style.display = 'none';
    //     overlay.style.display = 'none';
    //   }, 5000);
    });

    const closeButton = document.querySelector('.close');
    closeButton.addEventListener('click', function() {
      popup.style.display = 'none';
      overlay.style.display = 'none';
    });
  });
