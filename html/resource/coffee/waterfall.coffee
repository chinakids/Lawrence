class Waterfall
  #构造函数
  constructor:(option) ->
    @opt =
      test : true
      mainDom : '.waterfall'
      boxDom : '.waterfall-list'
      row  : 4
      between : 10
    #参数初始化
    if typeof option isnt 'object'
      console.error 'option传入参数不可为Object以外类型'
      return false
    extend = (oldObj,newObj) ->
      for key of newObj
        console.log key
        if typeof oldObj[key] isnt 'object'
          oldObj[key] = newObj[key]
        else
          extend oldObj[key],newObj[key]

    extend @opt,option

    unless @opt.test
      @delay()

  #初始化
  delay:() ->
    array = []
    i = 0
    while i < @opt.row
      array.push 0
      i++
    #缓存数据
    @cache =
      mainDomW : $('.waterfall').width()
      list : array

    @cache.boxDomW = parseInt((@cache.mainDomW - @opt.between * (@opt.row - 1))/ @opt.row)
    @initCss();
    @initDom();

  #初始化css
  initCss:()->
    #父节点
    $(@opt.mainDom).css
      'position': 'relative'

    $(@opt.boxDom).css
      'position': 'absolute',
      'float' : 'none',
      'width' : @cache.boxDomW

  #遍历子节点
  initDom:() ->
    index = 0
    element = $(@opt.mainDom).find(@opt.boxDom)
    self = @
    i = 0
    while i < element.size()
      @findMin element.eq(i),(ele,data) ->
        ele.css
          'top': self.cache.list[data],
          'left' : self.cache.boxDomW * data + ( if data is 0 then 0 else self.opt.between)*data
        self.cache.list[data] = self.cache.list[data] + ele.height() + self.opt.between
      i++
    #设置高度
    @findMax (data) ->
      $(self.opt.mainDom).height(self.cache.list[data])


  #寻找最小值
  findMin:(ele,callback) ->
    cb = callback or () ->
    index = 0;
    min = Math.min.apply @,@cache.list
    i = 0;
    while i < @opt.row
      if @cache.list[i] is min
        index = i
        break
      i++
    cb.call @,ele,index

  #寻找最大值
  findMax:(callback) ->
    cb = callback or () ->
    index = 0;
    max = Math.max.apply @,@cache.list
    i = 0;
    while i < @opt.row
      if @cache.list[i] is max
        index = i
        break
      i++
    cb.call @,index

window.Waterfall = Waterfall
