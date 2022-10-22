import { Entity, Column, BeforeInsert, JoinColumn, OneToOne } from "typeorm";
import * as bcrypt from "bcrypt";
import { IsNotEmpty } from "class-validator";
import { GenericEntity } from "./generic.entity";

@Entity("User")
export class User extends GenericEntity {
  @IsNotEmpty()
  @Column()
  username: string;

  // Hidden Columns == select: false
  @IsNotEmpty()
  @Column({ select: false })
  password: string;

  @JoinColumn({
    name: "createdBy",
  })
  @OneToOne((type) => User)
  creator: User;

  // It`s Hash before password , when you insert data login in database
  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}
