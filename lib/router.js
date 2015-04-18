Router.configure({
  layoutTemplate: 'layout',
});

// Router.route( '/', {
//   name: 'main'
// })

// Router.route( '/classes', {
//   name: 'classes'
// })

// Router.route( '/classes/:_id', {
//   name: 'classesShow',
//   data: function() {
//     console.log(this.params._id);
//     Session.set('_id', this.params._id);
//     return {classDetail: ClassesList.findOne(this.params._id)}
//   }
// })

Router.map(function() {
  this.route('main', {
    path: '/'
  });

  this.route('classes', {
    path: '/classes'
  });

  this.route('classesShow', {
    path: '/classes/:_id',
    data: function () {
      console.log(ClassesList.findOne(this.params._id));
      return ClassesList.findOne(this.params._id);
    }
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
