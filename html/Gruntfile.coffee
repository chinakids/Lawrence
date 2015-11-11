module.exports = (grunt) ->

  require('load-grunt-tasks')(grunt)
  require('time-grunt')(grunt)
  #这里有些配置 win&linux 下没测试过，建议运行在 mac 下
  grunt.initConfig
    #项目参数
    pkg: grunt.file.readJSON('./../package.json')
    watch:
      less:
        files: [
          './resource/less/**/*.less'
        ]
        tasks: ['less']
      coffee:
        files:[
          './resource/coffee/**/*.coffee'
        ]
        tasks: ['coffee','uglify']
      bower:
        files:[
          './bower.json'
        ]
        task:['wiredep:app']
    less:
      options:
        compress: true
        yuicompress: false
        sourceMap:true
      style:
        files: [{
          expand: true
          cwd: './resource/less'
          src: ['*.less']
          dest: './resource/css'
          ext: '.min.css'
        }]
    coffee:
      resource:
        expand: true,
        flatten: true,
        cwd: './resource/coffee',
        src: ['**/*.coffee'],
        dest: './resource/.cache/js',
        ext: '.js'
    uglify:
      options:
        sourceMap:true,
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */'
      resource:
        files: [{
            expand: true,
            cwd: './resource/.cache/js',
            src: '**/*.js',
            dest: './resource/js'
        }]
    wiredep:
      app:
        src: ['*.html','./**/*.html']



  #注冊任务
  grunt.registerTask 'default', [
    'wiredep',
    'watch'
  ]

  grunt.event.on 'watch', (action, filepath, target) ->
    grunt.log.writeln target + ': ' + filepath + ' has ' + action
    return
