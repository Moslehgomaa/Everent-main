
// JavaScript
function sendData() {
  var dataToSend = document.getElementById('dataInput').value;
  fetch('https://eve-rent-online-booking-99sch2oph-basants-projects.vercel.app/', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ data: dataToSend }),
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch((error) => console.error('Error:', error));
}