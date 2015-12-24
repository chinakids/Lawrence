$ () ->
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

  #鼠标移入瀑布流效果
  $('.js-pubu .waterfall-item').hover () ->
    $(@).addClass 'cur'
  ,() ->
    $(@).removeClass 'cur'

  #搜索
  $(document).keyup (e)->
    if e.keyCode is 13
      $('.js-search').each ()->
        if $(@).is(':focus')
          window.location.href = '/content/searchResult/items?searchKey=' + $(@).val()
  $('.js-search').siblings('.btn').click () ->
    window.location.href = '/content/searchResult/items?searchKey=' + $(@).siblings('.js-search').val()
