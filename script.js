//Sign Up
document.getElementById('signup-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const Email = document.getElementById('email').value;
  const Password = document.getElementById('password').value;
  const FirstName = document.getElementById('first-name').value;
  const LastName = document.getElementById('last-name').value;
  const Day = document.getElementById('day').value;
  const Month = document.getElementById('month').value;
  const Year = document.getElementById('year').value;
  const Gender = document.querySelector('input[name="gender"]:checked').value;
  const Dob = Day + '/' + Month + '/' + Year;
  const FullName = FirstName + ' ' + LastName;

  let userCredits = {
    fullName: FullName,
    email: Email,
    password: Password,
    dob: Dob,
    gender: Gender
  };
  
  localStorage.setItem('userCredits', JSON.stringify(userCredits));
  window.location.href = 'login.html';
  alert("You have successfully signed up!");
});



