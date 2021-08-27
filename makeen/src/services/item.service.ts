// npm
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

// models
import { Item } from '../model/item.entity';
import { ItemDto } from '../dto/item.dto';

@Injectable()
export class ItemService {
  constructor(@InjectRepository(Item) private readonly repo: Repository<Item>) { }

  public async getAll(): Promise<Item[]> {
    return await this.repo.find();
  }

  public async getOne(id: string): Promise<Item> {
    return await this.repo.findOne(id);
  }

  public async create(item: ItemDto): Promise<Item> {
    const itemEntity: Item = this.repo.create();
    const { name, collectionId } = item;
    itemEntity.name = name;
    itemEntity.collectionId = collectionId;
    await this.repo.save(itemEntity);
    return itemEntity;
  }

  public async update(id: string, values: ItemDto): Promise<Item> {
    const { name, collectionId } = values;
    const item = await this.repo.findOne(id);
    item.name = name;
    item.collectionId = collectionId;
    await this.repo.save(item);
    return item;
  }

  public async delete(id: string): Promise<Item> {
    const item = await this.repo.findOne(id);
    return await this.repo.remove(item);
  }
}
