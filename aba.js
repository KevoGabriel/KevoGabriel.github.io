
window.addEventListener('scroll', function() {
  var sections = document.querySelectorAll('section');
  var navLinks = document.querySelectorAll('nav ul li a');

  sections.forEach(function(section) {
    var sectionTop = section.offsetTop;
    var sectionHeight = section.clientHeight;
    if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
      var id = section.getAttribute('id');
      navLinks.forEach(function(navLink) {
        navLink.classList.remove('selected');
        if (navLink.getAttribute('href') === '#' + id) {
          navLink.classList.add('selected');
        }
      });
    }
  });
});

/* Função acima faz com que, no decorrer que o usuario
desça/seleciona um link interno, uma barra inferior e superior
"acende" nos links de navegação para indicar onde o usuario 
está localizado */


function insta() {
  window.open("https://www.instagram.com/kevingabriel_sehnem/", "_blank");
}

function face() {
  window.open("https://www.facebook.com/kevingabriel.ii.7");
}

function linkedin() {
  window.open("https://linkedin.com/in/kevin-gabriel-sehnem-068630237/");
}

function git() {
  window.open("https://github.com/KevoGabriel");
}
/* Funções simples acima simplesmente construidas para que, nos botões que estão chamando a
respectiva função seja então aberto o respectivo link da rede social desejada */