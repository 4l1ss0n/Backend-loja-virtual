import { Column, Entity, PrimaryColumn } from "typeorm";


@Entity()
class Users {
    @PrimaryColumn({generated: "uuid"})
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
    
    @Column({
        default: new Date(Date.now())
    })
    createdAt: Date;
    
    @Column({
        default: new Date(Date.now())
    })
    updatedAt: Date;

}

export default Users;