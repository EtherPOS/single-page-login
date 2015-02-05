# single-page-login

A meteor package for a Bootstrap 3 Googlesque login, sign up and password reminder form and functionality.

# Meteor Dependencies

* accounts-password
* accounts-ui

# Dependencies
* [iron-router](https://atmospherejs.com/iron/router "iron-router")
* [bootstrap-3](https://atmospherejs.com/mizzao/bootstrap-3 "bootstrap-3")

# Installation

    meteor add steeve:single-page-login

# Configuration - put in client/server shared folder

* loginTitle: Sets the title on the login page.
* signupTitle: Sets the title on the sign up page.
* forgotPasswordTitle: Sets the title on the retrieve password page.
* canRetrievePassword: Boolean. Turns on/off password retrieval page and functionality.
* passwordSignupFields: Sets the Meteor Accounts.ui.config passwordSignupFields to USERNAME_AND_EMAIL, USERNAME_AND_OPTIONAL_EMAIL, USERNAME_ONLY, EMAIL_ONLY.
* forbidClientAccountCreation: Boolean. Sets the Accounts.config forbidClientAccountCreation fieild.
* routeAfterLogin: Iron Router route after login.
* routeAfterSignUp: Iron Router route after sign up.
* routeAfterLogout: Iron Router route after logout else singlePageLogin is rendered.
* forceLogin: Boolean.  Forces single page login except for signup and forgot-password routes.
* exceptRoutes: Array. Add an array of routes that are ignored by foreLogin i.e ['home','about']


```
  SinglePageLogin.config({
      loginTitle: 'Single page login',
      signupTitle: 'Single page sign up',
      forgotPasswordTitle: 'Retrieve password',
      canRetrievePassword: true,
      passwordSignupFields: 'EMAIL_ONLY',
      forbidClientAccountCreation: false,
      routeAfterLogin: '/dashboard',
      routeAfterSignUp: '/dashboard',
      forceLogin: true,
      routeAfterLogout: '/',
      exceptRoutes: ['home']
  });
```

# Out of the Box Iron Router Routes
* /signup
* /login
* /forgot-password
* /logout

# License
Copyright (c) 2013 [EtherPOS](http://www.etherpos.com/ "EtherPOS, LLC"). Released under an MIT license.
