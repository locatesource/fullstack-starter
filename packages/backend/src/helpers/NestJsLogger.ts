import { createEverLogger } from '@bcdapps/common-backend';
import { LoggerService } from '@nestjs/common/services/logger.service';

const log = createEverLogger({ name: 'nestjs' });

export class EverbieNestJSLogger implements LoggerService {
  log(message: string) {
    log.info(message);
  }

  error(message: string, trace: string) {
    log.error(`Message: ${message}. Trace: ${trace}`);
  }

  warn(message: string) {
    log.warn(message);
  }
}
