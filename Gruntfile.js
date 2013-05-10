

/** @param {Object} grunt Grunt. */
module.exports = function(grunt) {

  grunt.initConfig({
    'gh-pages': {
      repo: 'git@github.com:tschaub/say-hello-to-ol3.git',
      src: ['index.html', 'components/**/*']
    }
  });

  grunt.loadNpmTasks('grunt-gh-pages');

  grunt.registerTask('deploy', ['gh-pages']);

  grunt.registerTask('default', 'deploy');

};

