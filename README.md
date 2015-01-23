# README #

**Meteor Bootstrap Folder**


```
#!javascript

client/                   // client application code
lib/                      // any common code for client/server.
packages/                 // place for all your atmosphere packages
private/                  // static files that only the server knows about
public/                   // static files that are available to the client
server/                   // server code
```

**Meteor Bootstrap MVC**


```
#!javascript

client/main.js            // the main application javascript
client/main.html          // the main application html

client/templates/         // html files (document object model)
client/stylesheets/       // css/less/style files (view)

server/publications.js    // Meteor.publish definitions

lib/                      // any common code for client/server.
lib/collections.js        // collection definitions and allow/deny rules

packages/                 // place for all your atmosphere packages

public/                   // static files that are served directly.
public/images             // will serve images
public/fonts            // will serve fonts
```