/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'code-cloud',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    firebase: {
      apiKey: "AIzaSyDDXbSb7csgtqCW9roxCcecGJe3QA85M7E",
      authDomain: "code-cloud-7573f.firebaseapp.com",
      databaseURL: "https://code-cloud-7573f.firebaseio.com",
      storageBucket: "code-cloud-7573f.appspot.com",
      messagingSenderId: "642153252567"
    },
    torii: {
      sessionServiceName: 'session'
    },

    // if using ember-cli-content-security-policy
    // contentSecurityPolicy: {
    //   'script-src': "'self' 'unsafe-eval' apis.google.com",
    //   'frame-src': "'self' https://*.firebaseapp.com",
    //   'connect-src': "'self' wss://*.firebaseio.com https://*.googleapis.com"
    // },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },
    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    ENV.APP.LOG_TRANSITIONS = true;
    ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
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
