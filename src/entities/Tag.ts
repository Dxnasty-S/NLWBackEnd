import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm"
import { v4 as uuid } from "uuid";

@Entity()
export class Tag {

  @PrimaryColumn({type: 'text'})
  readonly id: string;

  @Column({type: 'text'})
  name: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
  
  constructor(){
    if(this.id){
      this.id = uuid();
    }
  }
  
}
