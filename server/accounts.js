// ServiceConfiguration.configurations.remove({
//     service: 'facebook'
// });

// ServiceConfiguration.configurations.insert({
//     service: 'facebook',
//     appId: '1019475034747927',
//     secret: '975090ef43a8bdcf53487a8f4b8bf583'
// });

// Accounts.onCreateUser(function (options, user) {
//   // if (options && options.profile) {
//   //   user.profile = options.profile;
//   // }

//   if (user.services) {
//       var service = _.pairs(user.services)[0];
//       var serviceName = service[0];
//       var serviceData = service[1];

//       if (serviceName == "facebook") {

//         user.services.facebook.user_image = "http://graph.facebook.com/" + user.services.facebook.id + "/picture/?type=large";
//         user.services.facebook.avatar = "http://graph.facebook.com/" + user.services.facebook.id + "/picture/";
//       }
//   }

//   return user;
// });