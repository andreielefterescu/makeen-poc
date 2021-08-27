// npm
import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';

// services
import { ItemService } from '../services/item.service';
import { Item } from '../model/item.entity';
import { ItemDto } from '../dto/item.dto';

@Controller('items')
export class ItemController {
  constructor(private serv: ItemService) { }

  @Get()
  public async getAll(): Promise<Item[]> {
    return await this.serv.getAll();
  }

  @Get(':id')
  public async getOne(@Param('id') id: string): Promise<Item> {
    return await this.serv.getOne(id);
  }

  @Post()
  public async create(@Body() itemDto: ItemDto): Promise<Item> {
    return await this.serv.create(itemDto);
  }

  @Put(':id')
  public async update(@Param('id') id: string, @Body() itemDto: ItemDto): Promise<Item> {
    return await this.serv.update(id, itemDto);
  }

  @Delete(':id')
  public async remove(@Param('id') id: string): Promise<Item> {
    return await this.serv.delete(id);
  }
}
