//
const fs = require('fs').promises;
const logger = require('../modules/logger.js').logger;
const AWS = require('aws-sdk');
AWS.config.loadFromPath('./server/data/config.json');

// TODO without region (throws an error though!)
const ec2 = new AWS.EC2({ apiVersion: '2016-11-15', region: 'us-west-2' });

exports.loadInstanceData = async function() {
  const data = await fs.readFile('./server/data/instance_list.json');

  let instance_list = [];
  try {
    instance_list = JSON.parse(data).instances;
  } catch (e) {
    logger.error('Problem parsing response from instance_list.json');
    console.log(data);
    console.log(e);
    return {};
  }

  console.log(instance_list);

  // TODO temporary

  // if (instance_list.length === 0) {
  //   logger.info('No instances found.');
  //   return {};
  // }

  instance_list = ['i-01379fd481f536116'];

  // now use AwS
  const params = { InstanceIds: instance_list };

  let instance_data;
  try {
    instance_data = await describeInstances(params);
  } catch (e) {
    console.log(e);
    return {};
  }

  return instance_data;
};

async function describeInstances(params) {
  return new Promise((resolve, reject) => {
    ec2.describeInstances(params, function(err, data) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(data);
        resolve(data);
      }
    });
  });
}
