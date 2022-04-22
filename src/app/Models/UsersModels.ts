import { Column, Entity, PrimaryColumn } from "typeorm";


@Entity()
class Users {
    @PrimaryColumn({generated: "uuid"})
    id: String;

    @Column()
    firstName: String;
    
    @Column()
    lastName: String;
    
    @Column()
    birthday: Date;
    
    @Column({
        enum: ["M", "F"],

    })
    gender: "M" | "F";
    
    @Column()
    email: String;
    
    @Column()
    passwordHash: String;
    
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