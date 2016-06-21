/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'music',
    environment: environment,
    baseURL: '/',
    locationType: process.env.EMBER_CLI_ELECTRON ? 'hash' : 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
       contentSecurityPolicy: {
        'connect-src': "'self' http://localhost:* https://api.spotify.com",
        'font-src': "'self' data: cdn.auth0.com",
        'frame-src': "'self'",
        'img-src': "'self' https://*.gravatar.com",
        'object-src': "'self'",
        'script-src': "'self' 'unsafe-eval' 'unsafe-inline' https://api.spotify.com",
        'style-src': "'self' 'unsafe-inline'"
      },
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
  }

  return ENV;
};
