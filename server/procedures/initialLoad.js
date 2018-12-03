//
const fs = require('fs').promises;
const logger = require('../modules/logger.js').logger;

exports.loadInitialData = async function() {
  try {
    const credentials_response = await fs.readFile('./server/data/credentials.json');
    const credentials = JSON.parse(credentials_response.toString());

    const image_list_response = await fs.readFile('./server/data/image_list.json');
    const image_list = JSON.parse(image_list_response.toString());

    const launch_profiles_response = await fs.readFile('./server/data/launch_profiles.json');
    const launch_profiles = JSON.parse(launch_profiles_response.toString());

    return { credentials, image_list, launch_profiles };
  } catch (e) {
    console.log(e);
    return {};
  }
};
