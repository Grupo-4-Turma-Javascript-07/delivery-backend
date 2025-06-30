import { IsNotEmpty } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Produto } from '../../produto/entity/produto.entity';

@Entity({ name: 'tb_categoria' })
export class Categoria {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty({ message: 'O nome da categoria é obrigatório' })
  @Column({ length: 100, nullable: false })
  categoria: string;

  @IsNotEmpty({ message: 'A descrição da categoria é obrigatória' })
  @Column({ length: 200, nullable: false })
  descricao: string;

  @OneToMany(() => Produto, (produto) => produto.categoria)
  produto: Produto[];
}
