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

  $('.js-qrcode').hover () ->
    $(@).find('img').fadeIn(200)
  ,() ->
    $(@).find('img').fadeOut(200)

  $(window).scroll () ->
    if $(document).scrollTop() >= 480
      $('.js-gotop').fadeIn(200)
    else
      $('.js-gotop').fadeOut(200)

  $('.js-gotop').click () ->
    $('body,html').animate
      scrollTop:0
    ,500

  $('.js-like').click () ->
    thisDom = $(@)
    likeNum = parseInt($(@).attr('data-like'))
    $.post window.location.href.replace('details','updatalike'),
      (data) ->
        if data.result is 'success'
          thisDom.html('<span class="ar ar-heart"></span> 喜欢('+(likeNum+1)+')')
          thisDom.unbind('click')
