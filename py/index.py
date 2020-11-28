import logging
from functools import partial


class DefaultLogger:
    levels = 'debug', 'info', 'warning', 'error', 'critical'

    def __init__(self, logger):
        self.logger = logger
        self.init()

    def init(self):
        for level in self.levels:
            setattr(self, level, partial(self.log_handler, level))

    def log_handler(self, level, msg):
        log = getattr(self.logger, level)
        log(msg)


def getLogger():
    return DefaultLogger(logging)

logger = getLogger()

logger.warning('trilili')
