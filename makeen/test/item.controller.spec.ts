import { Test, TestingModule } from '@nestjs/testing';
import { ItemService } from '../src/services/item.service';
import { ItemController } from '../src/controllers/item.controller';
import {ItemModule} from "../src/modules/item.module";
import {TypeOrmModule} from "@nestjs/typeorm";
import {configService} from "../src/config/config.service";
import {INestApplication} from "@nestjs/common";

describe('ItemController', () => {
  let itemController: ItemController;
  let app: INestApplication;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ItemModule,
        TypeOrmModule.forRoot(configService.getDbConfig()),
      ],
    }).compile();

    app = module.createNestApplication();
    await app.init();

    itemController = app.get<ItemController>(ItemController);
  });

  describe('root', () => {
    it('should return "Hello World!"', async () => {
      const a = await itemController.create({
        name: 'test',
      });
      console.log(a);
    });
  });
});
