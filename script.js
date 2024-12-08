
(function() {
  // Inicializa EmailJS
  emailjs.init({
    publicKey: "SdrJASKpiRyGX1hq5" // Tu User ID
  });
})();

// Maneja el envío del formulario
document.getElementById('submit').addEventListener('click', function() {
  const data = {
    to_name: "Luis Angel", // Este es el destinatario del correo
    internetAccess: document.getElementById('internet-access').value,
    familyDevices: document.querySelector('input[name="familyDevices"]:checked').value,
    phoneServiceQuality: document.getElementById('phone-service-quality').value,
    internetQuality: document.getElementById('internet-quality').value,
    computers: document.querySelector('input[name="computers"]:checked').value,
    phoneCompany: document.getElementById('phone-company').value,
    internetCompany: document.getElementById('internet-company').value,
    comments: document.getElementById('comments').value
  };

  console.log("Datos enviados a EmailJS:", data); // Verifica que los datos se capturan correctamente

  emailjs.send("service_Luiscastañeda", "template_Inclusion", data)
    .then(() => {
      alert("Formulario enviado correctamente. ¡Gracias por tu respuesta!");
    })
    .catch((err) => {
      console.error("Error de EmailJS:", err); // Imprime cualquier error en la consola
      alert("Hubo un error al enviar el formulario. Verifica la consola para más detalles.");
    });
});

