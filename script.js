const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {

  event.preventDefault();

  const name =
    document.getElementById("name").value.trim();

  const phone =
    document.getElementById("phone").value.trim();

  const location =
    document.getElementById("location").value.trim();

  const service =
    document.getElementById("service").value;

  const cameras =
    document.getElementById("cameras").value;

  const message =
    document.getElementById("message").value.trim();


  const whatsappNumber =
    "918019377107";


  const whatsappMessage =

`NEW CCTV ENQUIRY

Name: ${name}

Phone: ${phone}

Location: ${location}

Service: ${service}

Cameras: ${cameras}

Requirement:
${message}

--------------------------------
SAAHO CCTV
CCTV & Security Solutions`;

  const whatsappURL =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;


  window.open(whatsappURL, "_blank");

});