exports.config = {
  hot: true,


  paths: {
    public: '../public/r'
  },

  //use php with rest
  server0: {
    command: 'php -S localhost:9000 -t ../public/r'
  },

  //use inner server
  server: {
    port: 9000,
    stripSlashes: true
  },

  //use proxy server
  server2: {
    path: 'server.js',
    run: true
  },

  files: {
    javascripts: { joinTo: 'zarur.js'  },
    stylesheets: { joinTo: 'zarur.css' }
  },

  plugins: {
    babel: { presets: ['es2015', 'react'] },
    eslint: {
      pattern: /^app\/.*\.js?$/,
      warnOnly: true,
      config: {rules: {'array-callback-return': 'warn'}}
    },
    sass: {
      modules: true
    }
  },

  overrides: {
    production: {
      sourceMaps: true
    }
  },


};
