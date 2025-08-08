import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Usuario } from '../../usuarios/entities/usuario.entity';
import { Categoria } from '../../Categoria/entities/categoria.entity';

@Entity({ name: 'tb_produtos' })
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255, nullable: false })
  nome: string;

  @Column({ nullable: false })
  preco: number;

  @Column({ type: 'int', default: 10 })
  qtd_disp: number;

  @Column({ length: 255, nullable: false })
  descricao: string;

  @Column({ length: 255, nullable: true })
  foto: string;

  @ManyToOne(() => Usuario, (usuario) => usuario.produto, { eager: true })
  @JoinColumn({ name: 'usuarioId' })
  usuario: Usuario;

  @ManyToOne(() => Categoria, (categoria) => categoria.produto, { eager: true })
  @JoinColumn({ name: 'categoriaId' })
  categoria: Categoria;
}
