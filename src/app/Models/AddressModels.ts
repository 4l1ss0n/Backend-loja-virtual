import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
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
  
    @Column({
        default: new Date(Date.now())
    })
    createdAt: Date;
    
    @Column({
        default: new Date(Date.now()),
        onUpdate: "CASCADE"
    })
    updatedAt: Date;
}

export default Address;