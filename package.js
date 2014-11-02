Package.describe({
  summary: "A meteor package for a Bootstrap 3 Googlesque login, sign up and password reminder",
  // Version number.
  version: "0.3.8",
  // Optional.  Default is package directory name.
  name: "steeve:single-page-login",
  // Optional github URL to your source repository.
  git: "https://github.com/EtherPOS/single-page-login.git",
});

Package.onUse(function (api) {
  api.versionsFrom('0.9.0');
  api.use([
    'templating',
    'accounts-base',
    'accounts-password',
    'accounts-ui',
    'handlebars',
    ], 'client');

  api.addFiles([
    'client/single_page_login.css',
    'client/single_page_login.html',
    'client/single_page_login.js',
    'client/helpers.js',
    ],
  'client');

  api.addFiles('shared/SinglePageLogin.js');

  api.use('iron:router@1.0.0', 'client');
  api.use('mizzao:bootstrap-3@3.2.0', 'client');
  
  api.export('SinglePageLogin');
  
});