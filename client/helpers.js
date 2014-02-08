
Handlebars.registerHelper('loginTitle', function() {
  return new Handlebars.SafeString(SinglePageLogin.settings.loginTitle);
});

Handlebars.registerHelper('signupTitle', function() {
  return new Handlebars.SafeString(SinglePageLogin.settings.signupTitle);
});

Handlebars.registerHelper('forgotPasswordTitle', function() {
  return new Handlebars.SafeString(SinglePageLogin.settings.forgotPasswordTitle);
});

Handlebars.registerHelper('canSignUp', function() {
  if (!Accounts._options['forbidClientAccountCreation'])
    return true;
});

Handlebars.registerHelper('canRetrievePassword', function() {
  return SinglePageLogin.settings.canRetrievePassword;
});
