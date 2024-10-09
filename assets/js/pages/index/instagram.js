const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

locationButtons.forEach(button => {
  button.addEventListener('click', function() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const whatsappNumber = '18996453979'; // Substitua pelo número correto
        const message = `Olá, preciso de socorro. Minha localização: https://www.google.com/maps?q=${latitude},${longitude}`;
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;

        // Diferenciar comportamento para iOS e Android
        if (isIOS) {
          window.location.href = whatsappUrl; // Redireciona diretamente no iOS
        } else {
          window.open(whatsappUrl, '_blank'); // Abre nova aba no Android
        }

      }, function(error) {
        alert('Não foi possível obter sua localização. Verifique se as permissões estão ativadas.');
      });
    } else {
      alert('Geolocalização não é suportada pelo seu navegador.');
    }
  });
});