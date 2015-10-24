class v
  constructor: (type,str) ->
    dataType =
      "*":/[\w\W]+/, #不为空
      "*6-16":/^[\w\W]{6,16}$/, #6-16位任意字符
      "n":/^\d+$/,  #数字
      "n6-16":/^\d{6,16}$/,  #6-16位数字
      "s":/^[\u4E00-\u9FA5\uf900-\ufa2d\w\.\s]+$/,  #不允许特殊字符
      "s3-16":/^[\u4E00-\u9FA5\uf900-\ufa2d\w\.\s]{3,16}$/, #不包含特殊字符的1-10位任意
      "p":/^[0-9]{6}$/,  #邮政编码
      "m":/^13[0-9]{9}$|14[0-9]{9}|15[0-9]{9}$|18[0-9]{9}$/,  #手机号码
      "e":/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,  #邮箱
      "url":/^(\w+:\/\/)?\w+(\.\w+)+.*$/  #网站
    if type isnt undefined and str isnt undefined
      str = str
      regText = dataType[type]
      if regText is undefined
        status = str.match(eval(type))
        if status
          return str
        else
          return false
      else
        status = str.match(regText)
        if status
          return str
        else
          return false
    else
      throw new Error('V方法需要传入两个参数')


window.v = v
