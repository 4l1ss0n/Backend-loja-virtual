import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import Address from "./AddressModels";


@Entity()
class Users {
    @PrimaryColumn()
    id: string;

    @Column()
    firstName: string;
    
    @Column()
    lastName: string;
    
    @Column({
        length: 10
    })
    birthday: String;
    
    @Column({
        enum: ["M", "F"],

    })
    gender: "M" | "F";
    
    @Column()
    email: string;
    
    @Column()
    passwordHash: string;

    @OneToMany(() => Address, address => address.userId)
    address: Address[];
    
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

export default Users;