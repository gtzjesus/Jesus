/**
 * 'LETS CONNECT SECTION' FUNCTION GRABS USER'S INPUT FROM INPUT AREAS (INTO OBJECT)
 * USING 'emailjs' WE CAN '.send' THE INFORMATION GRABBED FROM OUR 'params object
 * INTO OUR SERVICE PROVIDER TO DISPLAY EMAIL TEMPLATE.
 * @returns MESSAGE (CONFIRMATION OF DELIVERY)
 */
function sendMail() {
  event.preventDefault();
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
      (document.getElementById('name').value = ' '),
        (document.getElementById('email').value = ' '),
        (document.getElementById('message').value = ' ');

      console.log(res);
      return alert('Message Success');
    })
    .catch((error) => console.log(error));
}
