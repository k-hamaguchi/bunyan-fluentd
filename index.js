const bunyan = require('bunyan');

const sender = require('fluent-logger').createFluentSender('bunyan-fluentd', {
  host: 'fluentd',
  timeout: 3.0,
  reconnectInterval: 600000
});

const pkginfo = require('./package.json');
const logger = bunyan.createLogger({
  name: pkginfo.name,
  stream: sender.toStream('stdout')
})

setInterval(
  () => logger.info("Hello World")
  , 1000
);
