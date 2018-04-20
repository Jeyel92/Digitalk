module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    copy: {
      public: {
        expand: true,
        cwd: 'public',
        src: '**',
        dest:'dist'
      }
    },

    clean:{
        dist: {
            src: 'dist'
        }

    },
    uglify: {
      options: {
        banner:
          '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      browserSync: {
        bsFiles: {
          src: "assets/css/*.css"
        },
        options: {
          server: {
            baseDir: "./"
          }
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-browser-sync");

  // Default task(s).
  grunt.registerTask("dist", ["clean","copy"]);
  grunt.registerTask("default", ["uglify","dist"]);
};
