module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options:{
        manage: false
      },
      build: {
        src: ['client/app/**/*.js', 'server/**/*.js'],
        dest: 'build/js/main.min.js'
      }
    }

    // cssmin: {
    //   my_target: {
    //     files: [{
    //       expend: true,
    //       cwd: 'client/assets/',
    //       src: ['*.css', '!*.min.css'],
    //       dest: 'build/css/',
    //       ext: '.min.css'
    //     }]
    //   }
    // },
    // watch: {
    //   scripts: {
    //     files: '**/*.js',
    //     tasks: ['jshint']
    //   },
    // },
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  // grunt.loadNpmTasks('grunt-contrib-cssmin');
  // grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['uglify'])
};

//concatenate the API Key?
//does order of task load matter?