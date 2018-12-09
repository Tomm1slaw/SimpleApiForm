var form = document.querySelector('#form');
var nameInput = document.querySelector('#name');
var emailInput = document.querySelector('#email');

function loginUser(name, email) {
   return axios
      .post('https://jsonplaceholder.typicode.com/posts', {
         name,
         email
      })
      .then(response => response.data)
      .then(data => {
         console.log(data);
      })
      .catch(err => {
         console.log(err);
      });
}

form.addEventListener('submit', function(e) {
   e.preventDefault();

   var nameValue = nameInput.value;
   var emailValue = emailInput.value;

   loginUser(nameValue, emailValue);
});
