Template.singlePageLogin.helpers({
  'formFields': function() {
    if(!Accounts._options['forbidClientAccountCreation'])
      var placeholder, html
      switch(Accounts.ui._options.passwordSignupFields)
      {
      case 'USERNAME_AND_EMAIL':
        placeholder = 'Username or email';
        break;
      case 'USERNAME_AND_OPTIONAL_EMAIL':
        placeholder = 'Username or email';
        break;
      case 'USERNAME_ONLY':
        placeholder = 'Username';
        break;
      default:
        // 'EMAIL_ONLY'
        placeholder = 'Email';
      }
      html ='<input name="username" id="username" type="text" class="form-control" placeholder="'+placeholder+'" required autofocus>';
      return new Handlebars.SafeString(html);
  }
});


Template.singlePageLogin.events({
  'submit form': function(e,t) {
    e.preventDefault();
    try{
      Meteor.loginWithPassword(t.find('#username').value, t.find('#password').value, function(error){
        if(error){
          Alert.add(error, t);
        } else {
          Router.go(SinglePageLogin.settings.routeAfterLogin);
        }
      });
    } catch(error) {
      Alert.add(error, t);
    }
  },
  'click #new-account': function(e,t){
    Router.go('singlePageSignUp');
  },
  'click #forgot-password': function(e,t){
    Router.go('singlePageForgotPassword');
  }
});

Template.singlePageSignUp.events({
  'submit form': function(e,t) {
    e.preventDefault();
    var options = {
      password: t.find('#password').value
    };
    switch(Accounts.ui._options.passwordSignupFields)
    {
    case 'USERNAME_AND_EMAIL':
      options.username = t.find('#username').value;
      options.email = t.find('#email').value
      break;
    case 'USERNAME_AND_OPTIONAL_EMAIL':
      options.username = t.find('#username').value;
      if(t.find('#email').value)
        options.email = t.find('#email').value
      break;
    case 'USERNAME_ONLY':
      options.username = t.find('#username').value;
      break;
    default:
      // 'EMAIL_ONLY'
      options.email = t.find('#email').value
    }
    try{
      Accounts.createUser(options, function(error){
        if(error){
          Alert.add(error, t);
        }else{
          Router.go(SinglePageLogin.settings.routeAfterSignUp);
        }
      });
    } catch(error) {
      Alert.add(error, t);
    }
  },
  'click #cancel': function(e,t){
    e.preventDefault();
    Router.go('singlePageLogin');
  }
});

Template.singlePageSignUp.helpers({
  'formFields': function() {
    if(!Accounts._options['forbidClientAccountCreation'])
      var placeholder, html, html2;
      switch(Accounts.ui._options.passwordSignupFields)
      {
      case 'USERNAME_AND_EMAIL':
        html = '<input name="username" id="username" type="text" class="form-control" placeholder="Username" required autofocus>';
        html += '<input name="email" id="email" type="text" class="form-control" placeholder="Email" required>';
        break;
      case 'USERNAME_AND_OPTIONAL_EMAIL':
        html = '<input name="username" id="username" type="text" class="form-control" placeholder="Username" required autofocus>';
        html += '<input name="email" id="email" type="text" class="form-control" placeholder="Optional Email">';
        break;
      case 'USERNAME_ONLY':
        html = '<input name="username" id="username" type="text" class="form-control" placeholder="Username" required autofocus>';
        break;
      default:
        // 'EMAIL_ONLY'
        html = '<input name="email" id="email" type="text" class="form-control" placeholder="Email" required autofocus>';
      }
      
      return new Handlebars.SafeString(html);
  }
});

Template.singlePageForgotPassword.events({
  'submit form': function(e,t) {
    e.preventDefault();
    try{
      Accounts.forgotPassword({email: t.find('#email').value}, function(error){
        if(error){
          Alert.add(error, t);
        }else{
          Router.go('singlePageLogin');
        }
      });
    } catch(error) {
      Alert.add(error, t);
    }
  },
  'click #cancel': function(e,t){
    e.preventDefault();
    Router.go('singlePageLogin');
  }
});
var Alert = {
  add: function (msg, t) {
    t.find('#single-page-login-alert').innerHTML = '<div class="alert alert-danger alert-dismissable" id="single-page-login-alert-msg">' + msg +' <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button></div>';
  },
};
