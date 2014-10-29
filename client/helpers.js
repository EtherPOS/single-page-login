Template.registerHelper('canSignUp', function() {
  if (!Accounts._options['forbidClientAccountCreation'])
    return true;
});

Template.registerHelper('canRetrievePassword', function() {
  return SinglePageLogin.settings.canRetrievePassword;
});
