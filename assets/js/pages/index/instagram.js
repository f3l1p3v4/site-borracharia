document.addEventListener('DOMContentLoaded', function () {
  const locationButtons = document.querySelectorAll('.sendLocationBtn');

  locationButtons.forEach(button => {
    button.addEventListener('click', function() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          const whatsappNumber = '18996453979'; // Substitua pelo número correto
          const message = `Olá, preciso de socorro. Minha localização: https://www.google.com/maps?q=${latitude},${longitude}`;

          // Diferenciar entre iOS e Android
          const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
          const whatsappUrl = isIOS 
            ? `whatsapp://send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}` 
            : `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;

          // Redireciona o usuário
          window.location.href = whatsappUrl;

        }, function(error) {
          alert('Não foi possível obter sua localização. Verifique se as permissões estão ativadas.');
        });
      } else {
        alert('Geolocalização não é suportada pelo seu navegador.');
      }
    });
  });
});