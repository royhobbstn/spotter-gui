const winston = require('winston');
const MESSAGE = Symbol.for('message');

const jsonFormatter = logEntry => {
  const base = { timestamp: new Date().toLocaleString() };
  const json = Object.assign(base, logEntry);
  logEntry[MESSAGE] = JSON.stringify(json);
  return logEntry;
};

const logger = winston.createLogger({
  format: winston.format(jsonFormatter)(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'logfile.log' })
  ]
});

exports.logger = logger;
