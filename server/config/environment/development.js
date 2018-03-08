'use strict';
/*eslint no-process-env:0*/

// Development specific configuration
// ==================================
module.exports = {

  // MongoDB connection options
  mongo: {
    uri: 'mongodb://40.84.149.249:27017/ssproject-dev'
  },

  // Seed database on startup
  seedDB: true

};
