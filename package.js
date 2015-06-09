Package.describe({
  summary: "A meteor package for a Bootstrap 3 Googlesque login, sign up and password reminder",
  // Version number.
  version: "0.5.1",
  // Optional.  Default is package directory name.
  name: "steeve:single-page-login",
  // Optional github URL to your source repository.
  git: "https://github.com/EtherPOS/single-page-login.git",
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('0.9.0');
  api.use([
    'templating',
    'accounts-base',
    'accounts-password',
    'accounts-ui',
    'handlebars',
    'iron:router@1.0.1',
    'mizzao:bootstrap-3@3.3.0',
    'underscore'
    ]);

  api.addFiles([
    'client/single_page_login.css',
    'client/single_page_login.html',
    'client/single_page_login.js',
    'client/helpers.js',
    ],
  'client');

  api.addFiles('shared/SinglePageLogin.js');

  api.export('SinglePageLogin');
  
});
