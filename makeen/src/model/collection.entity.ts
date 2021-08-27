// npm
import { Entity, Column, OneToMany, OneToOne, JoinColumn } from 'typeorm';

// models
import { BaseEntity } from './base.entity';
import { Item } from './item.entity';
import { Group } from './group.entity';

@Entity({ name: 'collection' })
export class Collection extends BaseEntity {

  @Column({ type: 'varchar', length: 300 })
  name: string;

  @OneToOne(() => Group)
  @JoinColumn()
  group: Group;

  @OneToMany(type => Item, item => item.collection)
  items: Item[];
}
