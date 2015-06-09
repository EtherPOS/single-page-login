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
    routeAfterLogout: '/login',
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


    Router.route('/login', 'singlePageLogin');

    Router.route('/signup', 'singlePageSignUp');

    Router.route('/forgot-password', 'singlePageForgotPassword');

    Router.route('/logout', {
      name:'logout',
      path: '/logout',
      action: function(){
        if(SinglePageLogin.settings.routeAfterLogout){
          Router.go(SinglePageLogin.settings.routeAfterLogout);
        } else {
          this.render('singlePageLogin');
        }
        Meteor.logout();
      }
    });

    if(Meteor.isClient && this.settings.forceLogin){
      this.settings.exceptRoutes.push('login','signup','forgot-password', 'logout');
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
