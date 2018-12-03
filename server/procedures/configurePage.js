//
const fs = require('fs').promises;
const logger = require('../modules/logger.js').logger;

exports.configurePage = async function() {
  let launch_profiles = {};

  try {
    const response = await fs.readFile('./server/data/launch_profiles.json');
    launch_profiles = JSON.parse(response.toString());
  } catch (e) {
    logger.error('Problem parsing response from launch_profiles.json');
    logger.error(e);
  }

  let image_list = {};

  try {
    const response = await fs.readFile('./server/data/image_list.json');
    image_list = JSON.parse(response.toString());
  } catch (e) {
    logger.error('Problem parsing response from image_list.json');
    logger.error(e);
  }

  return { data: [launch_profiles, image_list] };
};
