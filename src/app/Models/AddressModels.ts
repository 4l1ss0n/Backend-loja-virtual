import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import Users from "./UsersModels";


@Entity()
class Address {
    @PrimaryColumn()
    id: string;
    
    @ManyToOne(() => Users, users => users.address)
    userId: Users;
    
    @Column()
    addr: string;
    
    @Column()
    number: Number;

    @Column()
    postalCode: Number;
    
    @Column()
    complements: string;
  
    @CreateDateColumn({
        default: new Date(Date.now())
    })
    createdAt: Date;
    
    @UpdateDateColumn({
        default: new Date(Date.now()),
        onUpdate: "CASCADE"
    })
    updatedAt: Date;
}

export default Address;