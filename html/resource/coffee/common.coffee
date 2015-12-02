$ () ->
  WH = $(window).height()
  #设置侧边栏的高度
  $('.nav').height(WH);
  #初始化瀑布流
  waterfall = new Waterfall
    test : false
    between : 15
