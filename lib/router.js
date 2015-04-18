Router.configure({
  layoutTemplate: 'layout',
});

Router.map(function() {
  this.route('main', {
    path: '/'
  });

  this.route('classes', {
    path: '/classes'
  });

  this.route('classes.show', {
    path: '/classes/show'
  })
});

// var requireLogin = function() {
//   if (! Meteor.user()) {
//     if (Meteor.loggingIn()) {
//       this.render(this.loadingTemplate);
//       IonLoading.show();
//     } else {
//       IonLoading.hide();
//       this.render('loginIndex');
//     }
//   } else {
//     IonLoading.hide();
//     this.next();
//   }
// };

// Router.onBeforeAction(requireLogin);
