Package.describe({
  summary: "A meteorite package for a Bootstrap 3 Googlesque login, sign up and password reminder form and functionality."
});

Package.on_use(function (api, where) {
  api.use([
    'templating',
    'accounts-base',
    'accounts-password', 
    'accounts-ui',
    'handlebars',
    ], 'client');

  api.add_files([
    'client/single_page_login.css', 
    'client/single_page_login.html', 
    'client/single_page_login.js',
    'client/helpers.js',
    ], 
  'client');

  api.add_files('shared/SinglePageLogin.js', ['client', 'server']);

  api.use('iron-router', ['client']);
  api.use('bootstrap-3', ['client']);
});