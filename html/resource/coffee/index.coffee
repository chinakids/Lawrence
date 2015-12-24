$ () ->
  #头部效果
  $(window).scroll () ->
    if $(document).scrollTop() >= 280
      $('.top-box').removeClass('blur')
    else
      $('.top-box').addClass('blur')
