// npm
import { Entity, Column, OneToMany } from 'typeorm';

// models
import { BaseEntity } from './base.entity';
import { Role } from './role.entity';

@Entity({ name: 'user' })
export class User extends BaseEntity {

  @Column({ type: 'varchar', length: 300 })
  email: string;

  @OneToMany(() => Role, role => role.id)
  photos: Role[];
}
