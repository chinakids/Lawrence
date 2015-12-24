$ () ->
  #头部效果
  $(window).scroll () ->
    if $(document).scrollTop() >= 280
      $('.top-box').removeClass('blur')
    else
      $('.top-box').addClass('blur')

  # .js-pubu 为包含所有图片的容器
  $.get '/api/getTotalCount',(data) ->
    $('.js-pubu').waterfall
      debug: false
      itemCls: 'waterfall-item'
      gutterWidth:20
      gutterHeight:20
      colWidth: 212
      maxPage:data.result
      loadingMsg:'<div class="t-center pubu-tips">加载更多...</div>'
      path: (page) ->
        return '/api/pagination?page='+page
      callbacks:
        loadingFinished: ($loading, isBeyondMaxPage) ->
          console.log(isBeyondMaxPage)
          unless isBeyondMaxPage
            $loading.fadeOut()
          else
            $loading.hide()
            $('.pubu-tips').show()
