// Template.layout.rendered = function () {
//   Session.set('currentTab', 'goals');
// };

// Template.layout.events({
//   'click [data-button-bar]': function (target, event) {
//     if (Session.get('currentTab') !== target.currentTarget.getAttribute('data-button-bar')) {
//       Session.set('currentTab', target.currentTarget.getAttribute('data-button-bar'));
//     }
//   }
// });

Template.layout.helpers({
  isSignedIn: function () {
    return !!Meteor.user();
  }
});