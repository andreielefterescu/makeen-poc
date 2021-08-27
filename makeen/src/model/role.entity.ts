// npm
import { Entity, Column } from 'typeorm';

// models
import { BaseEntity } from './base.entity';

// enums
import { Roles } from '../enums/roles';

@Entity({ name: 'role' })
export class Role extends BaseEntity {

  @Column({ type: 'varchar', length: 15, enum: Roles })
  role: Roles;

  @Column({ type: 'varchar', length: 30, nullable: true })
  groupId: string;
}
