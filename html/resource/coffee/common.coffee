$ () ->
  # .js-pubu 为包含所有图片的容器
  waterfall = $('.js-pubu')
  waterfall.masonry
    itemSelector : '.js-pubu li'

  #鼠标移入瀑布流效果
  $('.js-pubu li').hover () ->
    $(@).addClass 'cur'
  ,() ->
    $(@).removeClass 'cur'

  $(window).scroll () ->
    if $(document).scrollTop() >= 280
      $('.top-box').removeClass('blur')
    else
      $('.top-box').addClass('blur')
