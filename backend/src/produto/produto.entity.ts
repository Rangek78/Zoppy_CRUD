import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'produto' })
export class ProdutoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 30, nullable: false, unique: true })
  nome: string;

  @Column({ type: 'float', nullable: false })
  valor: number;
}
