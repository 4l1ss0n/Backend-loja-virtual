import { Column, CreateDateColumn, Double, Entity, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import Users from "./UsersModels";


@Entity()
class CreditCard {
    
    @PrimaryColumn()
    id: string;
    
    @Column()
    fullName: string;
    
    @Column({
        length: 16
    })
    cardNumber: string;
    
    @Column({
        length: 11
    })
    cpf: string;
    
    @Column()
    ccv: number;
    
    @ManyToOne(() => Users, users => users.creditCard)
    userId: Users;
    
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

export default CreditCard;