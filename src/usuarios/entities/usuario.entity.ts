import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tb_usuarios' })
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  nome: string;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false, unique: true })
  email: string;

  @IsNotEmpty()
  @Column({ length: 255, nullable: true })
  foto: string;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  senha: string;
}
