

/** @param {Object} grunt Grunt. */
module.exports = function(grunt) {

  grunt.initConfig({
    'gh-pages': {
      src: [
        'index.html',
        'theme/**/*.*',
        'components/**/*.css',
        'components/**/*.js',
      ]
    }
  });

  grunt.loadNpmTasks('grunt-gh-pages');

  grunt.registerTask('deploy', ['gh-pages']);

  grunt.registerTask('default', 'deploy');

};

