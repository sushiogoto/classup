Router.configure({
  layoutTemplate: 'layout',
});

Router.route('/', {
  name: 'main'
});

var requireLogin = function() {
  if (! Meteor.user()) {
    if (Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
      IonLoading.show();
    } else {
      IonLoading.hide();
      this.render('loginIndex');
    }
  } else {
    IonLoading.hide();
    this.next();
  }
};

Router.onBeforeAction(requireLogin);