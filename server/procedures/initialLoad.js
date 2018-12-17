//

const parsed_credentials = require('../data/credentials.json');
const image_list = require('../data/image_list.json');
const launch_profiles = require('../data/launch_profiles.json');
const supported_providers = require('../data/supported_cloud_providers.json');

exports.loadInitialData = async function() {
  // remove key information before sending back to the client
  const credentials = parsed_credentials.credentials.map(c => {
    // delete AWS keys
    if (c.service === 'aws') {
      delete c.details.accessKeyId;
      delete c.details.secretAccessKey;
    }
    // TODO delete other provider keys
    return c;
  });

  return { credentials, image_list, launch_profiles, supported_providers };
};
