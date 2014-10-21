var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'test10'
    },
    port: 3000,
    db: 'mongodb://localhost/test10-development'
    
  },

  test: {
    root: rootPath,
    app: {
      name: 'test10'
    },
    port: 3000,
    db: 'mongodb://localhost/test10-test'
    
  },

  production: {
    root: rootPath,
    app: {
      name: 'test10'
    },
    port: 3000,
    db: 'mongodb://localhost/test10-production'
    
  }
};

module.exports = config[env];
