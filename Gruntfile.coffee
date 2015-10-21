module.exports = (grunt) ->

  require('load-grunt-tasks')(grunt)
  require('time-grunt')(grunt)
  #网站相关配置参数
  conf = require './App/Conf/config.js'
  #这里有些配置 win&linux 下没测试过，建议运行在 mac 下
  grunt.initConfig
    #项目参数
    pkg: grunt.file.readJSON('package.json')
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
          './www/resource/less/**/*.less'
        ]
        tasks: ['less']
      coffee:
        files:[
          './www/resource/coffee/**/*.coffee'
        ]
        tasks: ['coffee','uglify']
    less:
      options:
        compress: true
        yuicompress: false
        sourceMap:true
      style:
        files: [{
          expand: true
          cwd: './www/resource/less'
          src: ['**/*.less']
          dest: './www/resource/css'
          ext: '.min.css'
        }]
    coffee:
      resource:
        expand: true,
        flatten: true,
        cwd: './www/resource/coffee',
        src: ['**/*.coffee'],
        dest: './www/resource/.cache/js',
        ext: '.js'
    uglify:
      options:
        sourceMap:true,
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */'
      resource:
        files: [{
            expand: true,
            cwd: './www/resource/.cache/js',
            src: '**/*.js',
            dest: './www/resource/js'
        }]



  #注冊任务
  grunt.registerTask 'default', [
    'parallel'
  ]

  grunt.event.on 'watch', (action, filepath, target) ->
    grunt.log.writeln target + ': ' + filepath + ' has ' + action
    return
