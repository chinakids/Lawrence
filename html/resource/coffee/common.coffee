$ () ->
  WH = $(window).height()
  #设置侧边栏的高度
  $('.nav').height(WH);
  #初始化瀑布流
  waterfall = new Waterfall
    test : false
    between : 25
    boxDom : '.waterfall-card'

  #滚动判断
  $(window).scroll () ->
    if $(document).scrollTop() >= 30
      $('.header,.nav,.content').addClass('mini')
    else
      $('.header,.nav,.content').removeClass('mini')
