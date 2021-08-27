// npm
import * as fs from 'fs';

// services
import { configService } from '../config/config.service';

fs.writeFileSync('ormconfig.json', JSON.stringify(configService.getDbConfig(), null, 2));
