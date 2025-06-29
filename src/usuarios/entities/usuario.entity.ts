import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tb_usuarios' })
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty({ message: 'Nome é obrigatório' })
  @IsString({ message: 'Nome deve conter apenas texto' })
  @Matches(/\S/, { message: 'Nome não pode conter apenas espaços' })
  @Matches(/^[A-Za-zÀ-ÖØ-öø-ÿ\s']+$/, {
    message: 'Nome deve conter apenas letras e espaços',
  })
  @MinLength(2, { message: 'Nome deve ter pelo menos 2 caracteres' })
  @MaxLength(255, { message: 'Nome excede o limite permitido' })
  @Column({ length: 255, nullable: false })
  nome: string;

  @IsNotEmpty({ message: 'Email é obrigatório' })
  @IsEmail({}, { message: 'Email inválido' })
  @Column({ length: 255, nullable: false, unique: true })
  email: string;

  @MaxLength(255, { message: 'O link da foto excede o tamanho permitido' })
  @Column({ length: 255, nullable: true })
  foto?: string;

  @IsNotEmpty({ message: 'Senha é obrigatória' })
  @IsString({
    message:
      'Senha inválida: use somente letras, números e símbolos permitidos',
  })
  @MinLength(8, { message: 'Senha deve ter pelo menos 8 caracteres' })
  @Matches(/(?=.*[a-z])/, {
    message: 'Senha deve conter pelo menos uma letra minúscula',
  })
  @Matches(/(?=.*[A-Z])/, {
    message: 'Senha deve conter pelo menos uma letra maiúscula',
  })
  @Matches(/(?=.*\d)/, { message: 'Senha deve conter pelo menos um número' })
  @Matches(/(?=.*[@$!%*?&])/, {
    message: 'Senha deve conter pelo menos um caractere especial (@$!%*?&)',
  })
  @Column({ length: 255, nullable: false })
  senha: string;
}
