const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges:false,

    e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env:{
      Email:'arpita@stockholmitacademy.org',
      Password:'Arpita@2014' 
    }
  },
});
