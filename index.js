const pino = require('pino');

class DefaultLogger {
  levels = ['trace', 'debug', 'info', 'warn', 'error', 'fatal'];
  constructor(logger) {
    this.logger = logger;
    this.init();
  }

  init() {
    this.levels.forEach((level) => {
      DefaultLogger.prototype[level] = (attributes) => {
        return this.logger[level](attributes);
      };
    });
  }
}

const getLogger = () => {
  return new DefaultLogger(pino());
};

const logger = getLogger();

console.log(Object.getOwnPropertyNames(DefaultLogger.prototype));
