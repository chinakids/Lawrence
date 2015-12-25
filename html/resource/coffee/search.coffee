$ () ->
  $('.js-pubu').waterfall
    debug: false
    itemCls: 'waterfall-item'
    gutterWidth:20
    gutterHeight:20
    colWidth: 212
    maxPage:1
    loadingMsg:''
    callbacks:
      loadingFinished: ($loading, isBeyondMaxPage) ->
        unless isBeyondMaxPage
          $loading.fadeOut()
        else
          $loading.hide()
      renderData : () ->
        return $('.js-pubu').html()
