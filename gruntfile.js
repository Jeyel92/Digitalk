module.exports = function(grunt) {
  grunt.initConfig({
       copy: {
             public: {
                  cwd: 'public', 
                  src: '**', 
                  dest: 'dist', 
                  expand: true
             }
        }, 
        clean: {
             dist: {
                 src: 'dist'
             }
        },
        uglify: {
            options: {
              mangle: false
            },
            my_target: {
              files: {
                'public/js/requestAnimationFrame.min.js': ['public/js/requestAnimationFrame.js'],
                'public/js/scripts.min.js': ['public/js/scripts.js'],
                'public/js/maps.min.js': ['public/js/maps.js']
              }
            }
          }
 });

 grunt.registerTask('dist', ['uglify','clean', 'copy']);
 grunt.registerTask('default', ['dist']);

 grunt.loadNpmTasks('grunt-contrib-copy');
 grunt.loadNpmTasks('grunt-contrib-clean');
 grunt.loadNpmTasks('grunt-contrib-uglify');
};