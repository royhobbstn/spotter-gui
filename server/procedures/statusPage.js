//
const fs = require('fs').promises;
const logger = require('../modules/logger.js').logger;

const AWS = require('aws-sdk');

exports.loadInstanceData = async function() {
  let credentials = {};

  try {
    const response = await fs.readFile('./server/data/credentials.json');
    credentials = JSON.parse(response.toString());
  } catch (e) {
    logger.info('Could not load/parse data/config.json file.  Might not exist.');
    console.log(e);
  }

  // TODO pick right credentials
  const selected_config = credentials.credentials.filter(d => {
    return d.service === 'aws';
  });

  AWS.config.update({
    accessKeyId: selected_config[0].details.accessKeyId,
    secretAccessKey: selected_config[0].details.secretAccessKey,
    region: 'us-west-2'
  });

  const ec2 = new AWS.EC2({ apiVersion: '2016-11-15' });

  // TODO (have an instance list?)
  const data = await fs.readFile('./server/data/instance_list.json');

  let instance_list = [];
  try {
    instance_list = JSON.parse(data).instances;
  } catch (e) {
    logger.error('Problem parsing response from instance_list.json');
    logger.error(e);
    return {};
  }

  if (instance_list.length === 0) {
    logger.info('No instances found.');
    return {};
  }

  // now use AwS
  const params = { InstanceIds: instance_list };

  let instance_data;
  try {
    instance_data = await describeInstances(params, ec2);
  } catch (e) {
    logger.error('Problem calling describeInstances');
    logger.error(e);
    return {};
  }

  return instance_data;
};

async function describeInstances(params, ec2) {
  return new Promise((resolve, reject) => {
    ec2.describeInstances(params, function(err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}
