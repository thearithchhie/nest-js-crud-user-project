import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class GenericEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @Column()
  createdBy: number;

  @Column()
  updatedBy: number;

  @Column()
  state: number;

}
