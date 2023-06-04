$(document).ready(function () {

  $('.fa-bars').click(function () {
    $(this).toggleClass('fa-times');
    $('.nav').toggleClass('nav-toggle');
  });

  $(window).on('load scroll', function () {

    $('.fa-bars').removeClass('fa-times');
    $('.nav').removeClass('nav-toggle');

    if ($(window).scrollTop() > 10) {
      $('header').addClass('header-active');
    } else {
      $('header').removeClass('header-active');
    }

  });

  $('.facility').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
      enabled: true
    }
  });

  const time = () => {

    const activerow = document.querySelector('#activerow');

    const monday = document.querySelector('.monday');
    const tuesday = document.querySelector('.tuesday');
    const wednesday = document.querySelector('.wednesday');
    const thursday = document.querySelector('.thursday');
    const friday = document.querySelector('.friday');
    const saturday = document.querySelector('.saturday');
    const sunday = document.querySelector('.sunday');


    switch (new Date().getDay()) {

      case 1:
        monday.setAttribute("id", "activerow");
        break;
      case 2:
        tuesday.setAttribute("id", "activerow");
        break;
      case 3:
        wednesday.setAttribute("id", "activerow");
        break;
      case 4:
        thursday.setAttribute("id", "activerow");
        break;
      case 5:
        friday.setAttribute("id", "activerow");
        break;
      case 6:
        saturday.setAttribute("id", "activerow");
        break;
      case 0:
        sunday.setAttribute("id", "activerow");
        break;
    }

  }
  time();

  const items = document.querySelectorAll(".accordion button");

  function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');

    for (i = 0; i < items.length; i++) {
      items[i].setAttribute('aria-expanded', 'false');
    }

    if (itemToggle == 'false') {
      this.setAttribute('aria-expanded', 'true');
    }
  }

  items.forEach(item => item.addEventListener('click', toggleAccordion));

});


$(document).ready(function () {
  $('form').submit(function (event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

    // Obtén los valores de los campos de entrada
    var email = $('#email').val();
    var nombre = $('#nombre').val();
    var consulta = $('#consulta').val();

    // Realiza la validación de los campos si es necesario
    // ...

    // Crea el mensaje de éxito
    var mensajeExitoso = 'El correo electrónico fue enviado correctamente.\n\n' +
      'Email: ' + email + '\n' +
      'Nombre: ' + nombre + '\n' +
      'Consulta: ' + consulta;

    // Muestra el mensaje de éxito
    alert(mensajeExitoso);

    // Limpia los campos de texto
    email, nombre, consulta = '';
    $('#email').val('');
    $('#nombre').val('');
    $('#consulta').val('');
  });
});

$(document).ready(function () {
  function toggleVideoVisibility() {
    var videoSection = $("#home");
    var video = $("#video-background");

    if (videoSection.length && video.length) {
      var scrollTop = $(window).scrollTop();
      var sectionTop = videoSection.offset().top;
      var sectionHeight = videoSection.height();

      if (scrollTop > sectionTop + sectionHeight || scrollTop < sectionTop) {
        video.hide();
      } else {
        video.show();
      }
    }
  }

  // Ejecutar la función al cargar la página y al hacer scroll
  toggleVideoVisibility();
  $(window).scroll(toggleVideoVisibility);

  
});