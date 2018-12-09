var form = document.querySelector('#form');
var nameInput = document.querySelector('#name');
var emailInput = document.querySelector('#email');
var button = document.querySelector('button');

function loginUser(name, email) {
   return axios
      .post('https://jsonplaceholder.typicode.com/posts', {
         name,
         email
      })
      .then(response => response.data)
      .then(data => {
         console.log(data);

         var html = '<p>You have logged successfully!</p>';
         form.insertAdjacentHTML('beforeend', html);
         button.disabled = true;
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
