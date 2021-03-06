exports.config = {
  hot: true,

  //use inner server
  server: {
    port: 8000,
    stripSlashes: true,
    hostname:  '0.0.0.0'
  },


  files: {
    javascripts: { joinTo: 'zarur.js'  },
    stylesheets: { joinTo: 'zarur.css' }
  },

  plugins: {
    babel: {
      presets: ['es2015', 'react'],
      plugins: ['transform-object-rest-spread']
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
      sourceMaps: false
    },
    local: {
      server: {
        command: 'php -S localhost:8000 -t public', //use php with rest
        stripSlashes: true
      },
    },
    proxy:{
      server: {
        path: 'server.js', //use server with rest-proxy
        config: {
          context: process.env.PROXY_CONTEXT || '/api',
          options: {
            target: process.env.PROXY_TARGET || 'http://localhost:8888',
            changeOrigin: true,
          }
        }
      },

    }
  }




};
