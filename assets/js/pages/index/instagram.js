const locationButtons = document.querySelectorAll('.sendLocationBtn');

locationButtons.forEach(button => {
  button.addEventListener('click', function() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const whatsappNumber = '18997262121'; // Substitua pelo número correto
        const message = `Olá, preciso de socorro. Minha localização: https://www.google.com/maps?q=${latitude},${longitude}`;
        
        // Abrir o WhatsApp com a mensagem e localização
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
      }, function(error) {
        alert('Não foi possível obter sua localização. Verifique se as permissões estão ativadas.');
      });
    } else {
      alert('Geolocalização não é suportada pelo seu navegador.');
    }
  });
});