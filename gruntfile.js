module.exports = function(grunt) {
  'use strict';
  var pkg = grunt.file.readJSON('package.json');

  grunt.initConfig({
    sampleDir: "samples",
    srcDir: "src",
    testDir: "test",
    docDir: "doc",

    watch: {
      sample: {
        files: ['<%= sampleDir %>/*.jsx', '<%= srcDir %>/*.jsx'],
        tasks: ['jsx:build']
      },
      test: {
        files: ['<%= testDir %>/*.jsx', '<%= srcDir %>'],
        tasks: ['jsx:test']
      }
    },

    jsx: {
      build: {
        src: ['<%= sampleDir %>/*.jsx'],
        add_search_path: ["<%= srcDir %>"],
        dest: '<%= sampleDir %>/',
        executable: 'node'
      },

      test: {
        src: ['<%= testDir %>/*.jsx'],
        add_search_path: ["<%= srcDir %>"],
        test: true
      },

      doc: {
        src: ['<%= srcDir %>/*.jsx'],
        add_search_path: ["<%= srcDir %>"],
        dest: '<%= docDir %>',
        mode: 'doc'
      }
    },

    exec: {
      typescriptparser: {
        cmd: ["sed 's/\\\\/\\\\\\\\/g' node_modules/typescript/bin/typescript.js > tmp_ts.js",
              "cat src/typescript-parser-tmpl-begin.jsx tmp_ts.js src/typescript-parser-tmpl-end.jsx | nkf -Lu > src/typescript-parser.jsx",
              "rm tmp_ts.js"].join(';')
      }
    }
  });

  for (var key in pkg.devDependencies) {
    if (/grunt-/.test(key)) {
      grunt.loadNpmTasks(key);
    }
  }

  grunt.registerTask('default', ['jsx:test']);
  grunt.registerTask('build', ['jsx:build']);
  grunt.registerTask('test', ['jsx:test']);
  grunt.registerTask('doc', ['jsx:doc']);
  grunt.registerTask('pre-build', ['exec:typescriptparser']);
};
// vim: set expandtab tabstop=2 shiftwidth=2:
