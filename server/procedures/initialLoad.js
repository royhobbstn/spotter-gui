//
const fs = require('fs').promises;
const logger = require('../modules/logger.js').logger;

exports.loadInitialData = async function() {
  // config.json
  const credential_profiles_response = await fs.readFile('./server/data/config.json');
  const credential_profiles = JSON.parse(credential_profiles_response.toString());

  // image_list.json
  const image_list_response = await fs.readFile('./server/data/image_list.json');
  const image_list = JSON.parse(image_list_response.toString());

  // saved_profiles.json
  const saved_profiles_response = await fs.readFile('./server/data/saved_profiles.json');
  const saved_profiles = JSON.parse(saved_profiles_response.toString());

  // selected profiles.json  // TODO rename selected credentials
  const selected_profiles_response = await fs.readFile('./server/data/selected_profiles.json');
  const selected_profiles = JSON.parse(selected_profiles_response.toString());

  return { credential_profiles, image_list, saved_profiles, selected_profiles };
};
