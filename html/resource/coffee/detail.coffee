$ () ->
  #图片全屏预览
  $("a[rel=group]").fancybox
    'padding'	:'0'
    'titleShow' : false
    'cyclic'    : true
    'overlayOpacity':'0.8'
    'overlayColor':'#000'
    'centerOnScroll':'true'


  #回复列表控制按钮
  $(".jq-action-btn").mouseover () ->
    $(this).find(".action-buttons").css
      "visibility":"visible"

  $(".jq-action-btn").mouseout () ->
    $(this).find(".action-buttons").css
      "visibility":"hidden"

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
