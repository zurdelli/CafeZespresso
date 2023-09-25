$(document).ready(function() {

  //efecto cascada menu
  $('.menu a').each(function(index, el) {
    $(this).css({
      'top': '-200px'
    });
    // index[] seria un array, para agregar tiempo y que vayan cayendo de 1 en 1
    $(this).animate({
      top: '0'
    }, 2000 + (index * 500));
  });

  //------------------------------------------------------------------
  //efecto header

  //se ejecutara solo si la pantalla es mas grande de 800px
  if ($(window).width() > 800) {
    $('header .texto').css({
      opacity: 0,
      marginTop: 0
    });

    $('header .texto').animate({
      opacity: 1,
      marginTop: '-52px'
    }, 1500)
  }
  //------------------------------------------------------------------
  //efecto anclas (ir a una parte de la pagina)

  //offset.top devuelve su posicion en la pagina
  var acercaDe = $('#acerca-de').offset().top,
    menu = $('#platillos').offset().top,
    galeria = $('#galeria').offset().top,
    ubicacion = $('#ubicacion').offset().top;

  $('#btn-acerca-de').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: acercaDe
    }, 500)
  });

  $('#btn-menu').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: menu
    }, 500)
  });

  $('#btn-galeria').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: galeria
    }, 500)
  });

  $('#btn-ubicacion').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: ubicacion
    }, 500)
  });

  //------------------------------------------------------------
  //efecto parallax
  //consiste en calcular el scroll del sitio, y jugar con este
  $(window).scroll(function() {
    var windowWidth = $(window).width();

    if (windowWidth > 800) {
      //scrollTop devuelve la posicion actual del scroll
      var scroll = $(window).scrollTop();

      $('header .texto').css({
        // translate (ancho , alto)
        // el ancho es estatico (0px), pero el alto va cambiando segun el scroll
        'transform': 'translate(0px, ' + scroll / 3 + '%)'
      });

      $('.acerca-de article').css({
        // translate (ancho , alto)
        // el ancho es estatico (0px), pero el alto va cambiando segun el scroll
        'transform': 'translate(0px, -' + scroll / 4 + '%)'
      });
    }

  });

  //para que en dispositivos moviles no hayan problemas cuando se rota la pantalla
  //cuando el tamanio de la pantalla cambie, ejecutara esta fn
  $(window).resize(function() {
    var windowWidth = $(window).width();
    if (windowWidth < 800) {
      $('.acerca-de article').css({
        'transform': 'translate(0px, 0px)'
      });
    }
  });


  //popup
  $('.foto').click(function(e) {
    e.preventDefault();
    $('#popup').fadeIn('slow');
    $('.popup-overlay').fadeIn('slow');
    $('.popup-overlay').height($('body').height());
    $('.content-popup').css({
      'marginTop': $(window).scrollTop() + 120 + 'px',
      color: 'white'
    });

    $('.imagen').html($(this).html());
    foto = $(this);

    if(foto.prev().length != 1){
      $('#prev').css('visibility', 'hidden');
    } else {
      $('#prev').css('visibility', 'visible');
    }

    if(foto.next().length != 1){
      $('#next').css('visibility', 'hidden');
    } else {
      $('#next').css('visibility', 'visible');
    }

    // //para disable el scroll
    // $('html, body').css({
    //   overflow: 'hidden',
    //   height: '100%'
    // });
    return false;
  });

  $('#prev').click(function(e) {
    e.preventDefault();
    $('.imagen').html($(foto).prev().html());
    foto = $(foto).prev();

    if(foto.prev().length == 0){
      $('#prev').css('visibility', 'hidden');
    } else {
      $('#prev').css('visibility', 'visible');
    }

    if(foto.next().length == 0){
      $('#next').css('visibility', 'hidden');
    } else {
      $('#next').css('visibility', 'visible');
    }
  });

  $('#next').click(function(e) {
    e.preventDefault();
    $('.imagen').html($(foto).next().html());
    foto = $(foto).next();

    if(foto.prev().length == 0 || foto.next().length == 0){
      $('#prev').css('visibility', 'hidden');
    } else {
      $('#prev').css('visibility', 'visible');
    }
  });

  $('#close').click(function(e) {
    e.preventDefault();
    $('#popup').fadeOut('slow');
    $('.popup-overlay').fadeOut('slow');

    // //para reenable el scroll
    // $('html, body').css({
    //   overflow: 'auto',
    //   height: 'auto'
    // });

    return false;
  });

});
