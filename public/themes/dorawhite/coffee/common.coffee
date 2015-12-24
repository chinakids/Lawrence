$ () ->

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
