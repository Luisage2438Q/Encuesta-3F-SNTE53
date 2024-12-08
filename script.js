(function() {
  emailjs.init("SdrJASKpiRyGX1hq5");  // Reemplaza con tu User ID (Public Key)
})();

document.getElementById('submit').addEventListener('click', function() {
  const formData = new FormData(document.getElementById('survey-form'));
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });

  console.log(data); // Verifica qué datos se están enviando

  // Reemplaza con tu Service ID y Template ID
  emailjs.send("service_Luiscastañeda", "template_Inclusion", data)
    .then(() => {
      alert("Formulario enviado correctamente");
    })
    .catch((err) => {
      console.error("Error de EmailJS:", err);  // Detalle del error en la consola
      alert("Hubo un error al enviar el formulario: " + JSON.stringify(err));  // Detalle del error en el alert
    });
});

