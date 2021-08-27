// npm
import { Entity, Column, OneToMany } from 'typeorm';

// models
import { BaseEntity } from './base.entity';
import { Collection } from './collection.entity';

@Entity({ name: 'group' })
export class Group extends BaseEntity {

  @Column({ type: 'varchar', length: 300 })
  name: string;

  @OneToMany(() => Collection, collection => collection.id)
  collections: Collection[];
}
