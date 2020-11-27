const pino = require("pino");

class DefaultLogger {
  levels = ["trace", "debug", "info", "warn", "error", "fatal"];
  constructor(logger) {
    this.logger = logger;
    this.init();
  }

  init() {
    this.levels.forEach((level) => {
        console.log(level)
      Object.assign(DefaultLogger.prototype, level);
    });
  }

  logHandler(level) {
    this.logger[level];
  }
}

const getLogger = () => {
  return new DefaultLogger(pino());
};

const logger = getLogger();

console.log(Object.getOwnPropertyNames(DefaultLogger.prototype));

/* logger.info("trililili"); */
