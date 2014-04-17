UI.registerHelper('canSignUp', function() {
  if (!Accounts._options['forbidClientAccountCreation'])
    return true;
});

UI.registerHelper('canRetrievePassword', function() {
  return SinglePageLogin.settings.canRetrievePassword;
});
