//var SinglePageLogin;

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
    Router.route('/login', {
      name: 'singlePageLogin',
      path: '/login',
      template: 'singlePageLogin',
      where: 'client'
    });
      
    Router.route('/signup', {
      name: 'singlePageSignUp',
      path: '/signup',
      template: 'singlePageSignUp',
      where: 'client'
    });
    
    Router.route('/forgot-password', {
      name: 'singlePageForgotPassword',
      path: '/forgot-password',
      template:  'singlePageForgotPassword',
      where: 'client'
    });
    
    if(this.settings.forceLogin){
      this.settings.exceptRoutes.push('singlePageLogin','singlePageSignUp','singlePageForgotPassword');
      Router.onBeforeAction(function(){
        if (!Meteor.userId()) {
          this.render('singlePageLogin');
        } else {
          this.next();
        }
      }, {except: this.settings.exceptRoutes});
    }
    
  }
};

this.SinglePageLogin = SinglePageLogin;