exports.config = {
  hot: true,

  paths: {
    public: '../public/r'
  },

  //use inner server
  server: {
    port: 9000,
    //path: 'rest-proxy.js', //use server with rest-proxy
    command: 'php -S localhost:9000 -t ../public/r', //use php with rest
    stripSlashes: true
  },


  files: {
    javascripts: { joinTo: 'zarur.js'  },
    stylesheets: { joinTo: 'zarur.css' }
  },

  plugins: {
    babel: {
      presets: ['es2015', 'react'] ,
      plugins: ['transform-runtime']
    },
    eslint: {
      pattern: /^app\/.*\.js?$/,
      warnOnly: true
    },
    sass: {
      modules: true
    }
  },

  overrides: {
    production: {
      sourceMaps: true
    }
  }


};
