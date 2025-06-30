import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tb_produtos' })
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255, nullable: false })
  nome: string;

  @Column({ nullable: false })
  preco: number;

  @Column()
  qtd_disp: number[];

  @Column({ length: 255, nullable: false })
  descricao: string;
}
