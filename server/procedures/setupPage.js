//
const fs = require('fs').promises;
const logger = require('../modules/logger.js').logger;
// const AWS = require('aws-sdk');
// AWS.config.loadFromPath('./server/data/config.json');

exports.setupPage = async function() {
  let config = {};
  let selected = { aws: 'None', microsoft: 'None', google: 'None' };

  try {
    const response = await fs.readFile('./server/data/config.json');
    const parsed = JSON.parse(response.toString());

    Object.keys(parsed).forEach(key => {
      config[key] = [];
      parsed[key].forEach(profile => {
        console.log(profile);
        config[key].push(profile.profileName);
      });
    });
  } catch (e) {
    logger.info('Could not load/parse data/config.json file.  Might not exist.');
    console.log(e);
  }

  try {
    const response = await fs.readFile('./server/data/selected_profiles.json');
    const parsed = JSON.parse(response.toString());

    // check to make sure selected aws profile exists
    const aws_exists = config.aws.includes(parsed.aws);
    const google_exists = config.google.includes(parsed.google);
    const microsoft_exists = config.microsoft.includes(parsed.microsoft);

    selected = {
      aws: aws_exists ? parsed.aws : 'None',
      google: google_exists ? parsed.google : 'None',
      microsoft: microsoft_exists ? parsed.microsoft : 'None'
    };
  } catch (e) {
    logger.info('Could not load/parse data/selected_profiles.json.  Might not exist.');
    console.log(e);
  }

  return [config, selected];
};
