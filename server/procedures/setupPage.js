//
const AWS = require('aws-sdk');

exports.setupPage = async function() {
  const credentials = new AWS.SharedIniFileCredentials(/*{profile: 'myprofile'}*/);
  return { credentials };
};
