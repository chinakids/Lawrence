module.exports = (grunt) ->

  require('load-grunt-tasks')(grunt)
  require('time-grunt')(grunt)
  #网站相关配置参数
  conf = require './App/Conf/config.js'
  #这里有些配置 win&linux 下没测试过，建议运行在 mac 下
  grunt.initConfig
    #启动node服务
    parallel:
      stream:
        options:
          stream: true
        tasks: [
          { grunt: true, args:['watch'] }
          { cmd: 'node', args: ['www/index.js']}
          { cmd: 'open', args: ['http://127.0.0.1:'+conf.port]}
        ]
    watch:
      less:
        files: [
          #'public/less/**/*.less'
        ]
        tasks: ['']
    # less:
    #   options:
    #     compress: true
    #     yuicompress: false
    #     sourceMap:true
    #   style:
    #     files: [{
    #       expand: true
    #       cwd: 'public/less'
    #       src: ['**/*.less']
    #       dest: 'public/stylesheets'
    #       ext: '.min.css'
    #     }]


  #注冊任务
  grunt.registerTask 'default', [
    'parallel'
  ]

  grunt.event.on 'watch', (action, filepath, target) ->
    grunt.log.writeln target + ': ' + filepath + ' has ' + action
    return
