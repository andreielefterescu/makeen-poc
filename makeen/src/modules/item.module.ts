// npm
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// services
import { ItemService } from '../services/item.service';

// controllers
import { ItemController } from '../controllers/item.controller';

// models
import { Item } from '../model/item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Item])],
  providers: [ItemService],
  controllers: [ItemController],
  exports: []
})
export class ItemModule { }
