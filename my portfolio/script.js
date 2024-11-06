var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-contents');
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove('active-link');
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab');
}
var sidemeu = document.getElementById('sidemenu');
function openmenu(){
    sidemenu.style.right = '0';
}
function closemenu(){
    sidemenu.style.right = '-500px';
}
const scriptURL = 'https://script.google.com/macros/s/AKfycbygjAgVxGUhcearoYx-RCoEjnJkXebuB0jidWvLZwSHmYhKATd0SOlcOM7xN1XlbB4/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById('msg');

form.addEventListener('submit', e => {
    
  e.preventDefault();
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json(); // or response.text() if your script returns plain text
    })
    .then(data => {
      msg.innerHTML = 'Message sent successfully!';
      setTimeout(() => {
        msg.innerHTML = '';
      }, 5000);
      form.reset();
    })
    .catch(error => {
      msg.innerHTML = 'Error sending message. Please try again.';
      console.error('Error!', error.message);
    });

});
