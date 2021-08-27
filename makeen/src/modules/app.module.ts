// npm
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// services
import { configService } from '../config/config.service';

// modules
import { ItemModule } from './item.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getDbConfig()),
    ItemModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
