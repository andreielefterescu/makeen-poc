import { TypeOrmModuleOptions } from '@nestjs/typeorm';

class ConfigService {

  constructor() { }

  static getMigrationDirectory() {
    const directory = process.env.NODE_ENV === 'migration' ? 'src' : `${__dirname}`;
    return `${directory}/migration/**/*{.ts,.js}`;
  }


  public getDbConfig(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'postgres',
      password: 'test',
      database: 'test',
      entities: [`${__dirname}/../**/*.entity.{ts,js}`],
      migrationsTableName: 'migration',
      migrations: [ConfigService.getMigrationDirectory()],
      cli: {
        migrationsDir: 'src/migration',
      },
      ssl: false,
    };
  }

}

const configService = new ConfigService();

export { configService };
