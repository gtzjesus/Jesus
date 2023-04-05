/**
 * 'LETS CONNECT SECTION' FUNCTION GRABS USER'S INPUT FROM INPUT AREAS (INTO OBJECT)
 * USING 'emailjs' WE CAN '.send' THE INFORMATION GRABBED FROM OUR 'params object
 * INTO OUR SERVICE PROVIDER TO DISPLAY EMAIL TEMPLATE. **INSTALL NPM EMAILJS PACKAGE**
 * @returns MESSAGE (CONFIRMATION OF DELIVERY)
 */
function sendMail() {
  event.preventDefault();
  //// OBJECT CREATED TO GRAB VALUE OF USER'S INPUT IN FORM
  const params = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
  };

  //// emailjs CREDENTIALS FOR ACCESSING SERVICE AND TEMPLATE ID's
  const serviceID = 'service_0eyhwvq';
  const templateID = 'template_1dv3qcr';
  //// BUILT-IN emailjs FUNCTION TO SEND DATA
  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      (document.getElementById('name').value = ' '),
        (document.getElementById('email').value = ' '),
        (document.getElementById('message').value = ' ');
      return alert('Message Success');
    })
    .catch((error) => console.log(error));
}
