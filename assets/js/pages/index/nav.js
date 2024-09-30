(function (){

  // Variáveis

  const body = document.querySelector('body');
  const nav = document.querySelector('nav');
  const abrirMenuMobile = nav.querySelector('button[name="abrirMenuMobile"]');
  const menuMobile = nav.querySelector('div[name="menuMobile"]');
  const linksMenuMobile = menuMobile.querySelectorAll('a'); // Selecionar todos os links do menu mobile

  // ADICIONAR CLASSE AO SCROLLAR
  function adicionarClasse () {
    window.addEventListener('scroll', () => {
      const alturaPagina = window.scrollY;
      if (alturaPagina < 10) nav.classList.remove('scroll');
      else nav.classList.add('scroll');
    });
  }

  // ABRIR MENU
  function abrirFecharMenuMobile () {
    abrirMenuMobile.addEventListener('click', () => {
      body.classList.toggle('bloqueado');
      abrirMenuMobile.classList.toggle('ativo');
      menuMobile.classList.toggle('mostrar');
    });
  }

  // FECHAR MENU AO CLICAR EM UM LINK
  function fecharMenuAoClicar() {
    linksMenuMobile.forEach(link => {
      link.addEventListener('click', () => {
        body.classList.remove('bloqueado');
        abrirMenuMobile.classList.remove('ativo');
        menuMobile.classList.remove('mostrar');
      });
    });
  }

  // Iniciar
  adicionarClasse();
  abrirFecharMenuMobile();
  fecharMenuAoClicar();

}());