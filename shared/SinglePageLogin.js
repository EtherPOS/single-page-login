//var SinglePageLogin;

Meteor.startup(function () {
  // console.log('added login, signup, forgot-password routes');
  
  Router.route('/login', 'singlePageLogin');
    
  Router.route('/signup', 'singlePageSignUp');
    
  Router.route('/forgot-password', 'singlePageForgotPassword');
  
});

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

    if(this.settings.forceLogin){
      this.settings.exceptRoutes.push('singlePageLogin','singlePageSignUp','singlePageForgotPassword');
      Router.onRun(function(){
        // above was onBeforeAction
        // console.log('Single Page Login onRun')
        if ( !Meteor.user() ) {
          //this.render('singlePageLogin');
          Router.go('/login');
          this.next();
        } else {
          this.next();
        }
      }, {except: this.settings.exceptRoutes});
      Router.onRerun(function(){
        // above was onBeforeAction
        // console.log('Single Page Login onRerun')
        if ( !Meteor.user() ) {
          //this.render('singlePageLogin');
          Router.go('/login');
          this.next();
        } else {
          this.next();
        }
      }, {except: this.settings.exceptRoutes});
    }
    
  }
};

  this.SinglePageLogin = SinglePageLogin;

