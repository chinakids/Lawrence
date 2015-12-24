$ () ->
  # .js-pubu 为包含所有图片的容器
  $('.js-pubu').waterfall
    debug: true
    itemCls: 'waterfall-item'
    gutterWidth:20
    gutterHeight:20
    colWidth: 212
    maxPage:1
    loadingMsg:'<div class="t-center pubu-tips">加载更多...</div>'
    path: (page) ->
      return '/api/pagination?page='+page
    callBack:
      renderData: (data, dataType) ->
        if dataType is 'json' or dataType is 'jsonp'
          tpl = $('#waterfall-tpl').html()
          template = Handlebars.compile(tpl)
          return template(data)
        else
          return data;



  #鼠标移入瀑布流效果
  $('.js-pubu .waterfall-item').hover () ->
    $(@).addClass 'cur'
  ,() ->
    $(@).removeClass 'cur'

  $(window).scroll () ->
    if $(document).scrollTop() >= 280
      $('.top-box').removeClass('blur')
    else
      $('.top-box').addClass('blur')
  #搜索
  $(document).keyup (e)->
    if e.keyCode is 13
      $('.js-search').each ()->
        if $(@).is(':focus')
          window.location.href = '/content/searchResult/items?searchKey=' + $(@).val()
  $('.js-search').siblings('.btn').click () ->
    window.location.href = '/content/searchResult/items?searchKey=' + $(@).siblings('.js-search').val()
