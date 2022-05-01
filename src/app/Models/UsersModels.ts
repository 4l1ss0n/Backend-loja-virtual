import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";
import Address from "./AddressModels";
import CreditCard from "./CreditCardModels";


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

    @OneToMany(() => CreditCard, creditCard => creditCard.userId)
    creditCard: CreditCard[];
    
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

export default Users;