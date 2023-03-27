function sendMail() {
  const params = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
  };

  const serviceID = 'service_0eyhwvq';
  const templateID = 'template_1dv3qcr';

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      (document.getElementById('name').value = ''),
        (document.getElementById('email').value = ''),
        (document.getElementById('message').value = '');

      console.log(res);
      alert('Message sent successfully' + res.status);
    })
    .catch((error) => console.log(error));
}
