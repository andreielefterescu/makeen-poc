// npm
import { Entity, Column, OneToOne, JoinColumn } from 'typeorm';

// models
import { BaseEntity } from './base.entity';
import { Collection } from './collection.entity';

@Entity({ name: 'item' })
export class Item extends BaseEntity {

  @Column({ type: 'varchar', length: 300 })
  name: string;

  @Column('uuid')
  collectionId: string;

  @OneToOne(() => Collection)
  @JoinColumn()
  collection: Collection;
}
