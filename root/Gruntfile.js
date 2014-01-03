'use strict';
module.exports = function(grunt) {
  grunt.initConfig({
    watch: {
      livereload: {
        options: {
          livereload: true
        },
        files: ['view/**/*'],
      },
      html: {
        files: ['source/**/*.html'],
        tasks: ['copy:html'],
      },
      js: {
        files: ['source/js/**/*.js'],
        tasks: ['copy:js'],
      },
      css: {
        files: ['source/css/**/*.css'],
        tasks: ['copy:css','autoprefixer'],
      },
      images: {
        files: ['source/i/**/*.{png,jpg,jpeg,gif}'],
        tasks: ['imagemin'],
      }
    },
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'source/i/',
          src: ['**/*.{png,jpg,jpeg,gif}'],
          dest: 'view/i/',
        }]
      }
    },
    connect: {
      server: {
        options: {
          port: 3000,
          base: 'view',
        }
      }
    },
    copy: {
      css: {
        files: [{
          cwd: 'source/css/',
          src: ['**/*.css'],
          dest: 'view/css/',
          expand: true,
        }]
      },
      js: {
        files: [{
          cwd: 'source/js/',
          src: ['**/*.js'],
          dest: 'view/js/',
          expand: true,
        }]
      },
      html: {
        files: [{
          cwd: 'source',
          src: ['**/*.html'],
          dest: 'view',
          expand: true,
        }]
      },
      images: {
        files: [{
          cwd: 'source/i/',
          src: ['**/*.{png,jpg,jpeg,gif}'],
          dest: 'view/i/',
          expand: true,
        }]
      },
    },
    autoprefixer: {
      options: {},
      multiple_files: {
        expand: true,
        flatten: true,
        src: 'source/css/*.css',
        dest: 'view/css/'
      }
    }
  });

  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  grunt.registerTask('default', ['connect', 'copy', 'watch', 'imagemin', 'autoprefixer']);
}