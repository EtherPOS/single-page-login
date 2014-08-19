var SinglePageLogin;

SinglePageLogin = {
  settings: {
    loginTitle: 'Single page login',
    signupTitle: 'Single page sign up',
    forgotPasswordTitle: 'Retrieve password',
    canRetrievePassword: true,
    passwordSignupFields: 'EMAIL_ONLY',
    forbidClientAccountCreation: false,
    routeAfterLogin: '/dashboard',
    routeAfterSignUp: '/dashboard',
    forceLogin: false,
    exceptRoutes: [],
  },
  config: function(appConfig) {
    this.settings = _.extend(this.settings, appConfig);
    if (Meteor.isClient) {
      Accounts.ui.config({
        //USERNAME_AND_EMAIL, USERNAME_AND_OPTIONAL_EMAIL, USERNAME_ONLY, EMAIL_ONLY
        passwordSignupFields: this.settings.passwordSignupFields
      });
    }
    Accounts.config({
      forbidClientAccountCreation: this.settings.forbidClientAccountCreation
    });

    // Router.routes = _.reject(Router.routes, function(e, i) {
    //   return e.name === 'entrySignUp';
    // });
    Router.map(function() {
      this.route('singlePageLogin', {
        path: '/login'
      });
      this.route('singlePageSignUp', {
        path: '/signup',
      });
      this.route('singlePageForgotPassword', {
        path: '/forgot-password',
      });

    });
    var requireLogin = function(pause) {
      if (!Meteor.user()) {
        this.render('singlePageLogin');
        pause();
      }
    }
    
    if(this.settings.forceLogin){
      this.settings.exceptRoutes.push('singlePageLogin','singlePageSignUp','singlePageForgotPassword');
      Router.onBeforeAction(requireLogin, {except: this.settings.exceptRoutes});
    }
    
  }
};

this.SinglePageLogin = SinglePageLogin;