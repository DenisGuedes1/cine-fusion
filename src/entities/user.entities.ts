import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
} from "typeorm";
@Entity()
export class Users {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    isAdmin: Boolean;

    @Column({
        type: "text",
        nullable: true,
    })
    reset_token: string | null;
    
    @Column()
    activate: Boolean;
    
    @Column("simple-array", { nullable: true })
    watchLater: string[];

}
