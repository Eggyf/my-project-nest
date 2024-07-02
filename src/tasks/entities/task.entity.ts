import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ type: 'varchar', length: 30 })
    name: string;
    @Column({ type: 'varchar' })
    description: string;

}
