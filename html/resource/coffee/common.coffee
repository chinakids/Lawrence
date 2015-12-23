$ () ->
  # .js-pubu 为包含所有图片的容器

  $('.js-pubu').waterfall
    debug: false
    itemCls: 'waterfall-item'
    colWidth: 212
    loadingMsg:'<div class="t-center pubu-tips">加载更多...</div>'
    path: (page) ->
      return '/api/pagination?page='+page
    classback:
       renderData: (data, dataType) ->
         if dataType is 'json' or dataType is 'jsonp'
            html = '<li><div class="pubu-img-box">'
            html += '<a href="#" class="pubu-img"><img src="resource/images/eq/pubu2.png"/></a>'
            html += '<p class="pubu-num">'
            html += '<a href="javascript:;" class="watch-num"><i class="ar ar-preview"></i>18</a>'
            html += '<a href="javascript:;" class="like-num"><i class="ar ar-heart"></i>30</a>'
            html += '</p></div><div>'
            html += '<a href="#" class="pubu-img-name">激情畅想“青春派“威丝曼</a>'
            html += '<p class="pubu-sort"><i class="ar ar-location"></i>KU劳伦斯校区</p>'
            html += '<a href="#" class="pubu-method clearfix"><span style="background-image:url(resource/images/eq/bg-small-head.png);"></span><b>莫小夕</b></a></div></li>'
            return html;
        else
            return data;


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
