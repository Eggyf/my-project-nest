import { CreateDateColumn, Entity, UpdateDateColumn } from "typeorm";
import { Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()

    id: number;

    @Column({ type: 'varchar', length: 30 })
    name: string;
    @Column({ type: 'int' })

    edad: number;
    @Column({ type: 'varchar', length: 30 })

    email: string;

    @CreateDateColumn({
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP'
    })
    createAt: Date;

    @UpdateDateColumn({
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP'
    })
    updateAt: Date;

}