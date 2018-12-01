//
const fs = require('fs').promises;
const logger = require('../modules/logger.js').logger;

const AWS = require('aws-sdk');

const { setupPage } = require('./setupPage');

exports.loadInstanceData = async function() {
  const [config, selected] = await setupPage();

  const config_file = await fs.readFile('./server/data/config.json');
  const parsed_config_file = JSON.parse(config_file.toString());

  const selected_config = parsed_config_file.aws.find(d => {
    return d.profileName === selected.aws;
  });

  AWS.config.update({
    accessKeyId: selected_config.accessKeyId,
    secretAccessKey: selected_config.secretAccessKey,
    region: 'us-west-2'
  });

  const ec2 = new AWS.EC2({ apiVersion: '2016-11-15' });

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
