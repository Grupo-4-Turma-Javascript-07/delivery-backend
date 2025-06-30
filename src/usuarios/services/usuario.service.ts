import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Usuario } from '../entities/usuario.entity';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
  ) {}

  async findAll(): Promise<Usuario[]> {
    return await this.usuarioRepository.find();
  }

  async findById(id: number): Promise<Usuario> {
    const usuario = await this.usuarioRepository.findOne({
      where: {
        id,
      },
    });

    if (!usuario) {
      throw new NotFoundException('Id não encontrado!');
    }

    return usuario;
  }

  async findByEmail(email: string): Promise<Usuario> {
    const usuario = await this.usuarioRepository.findOneBy({ email });

    if (!usuario) {
      throw new NotFoundException('Usuário não encontrado!');
    }

    return usuario;
  }

  async create(usuario: Usuario): Promise<Usuario> {
    await this.verificarEmailDuplicado(usuario.email);
    return await this.usuarioRepository.save(usuario);
  }

  async update(usuario: Usuario): Promise<Usuario> {
    const usuarioExistente = await this.findById(usuario.id);

    if (!usuario.id) {
      throw new ConflictException('O campo ID está vazio.');
    }

    if (usuario.email !== usuarioExistente.email) {
      await this.verificarEmailDuplicado(usuario.email, usuario.id);
    }

    if (!usuario.senha) {
      usuario.senha = usuarioExistente.senha;
    }

    return await this.usuarioRepository.save(usuario);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findById(id);

    return await this.usuarioRepository.delete(id);
  }

  async login(email: string, senha: string): Promise<Usuario> {
    if (!/\S+@\S+\.\S+/.test(email)) {
      throw new BadRequestException('Formato de e-mail inválido');
    }

    const usuario = await this.findByEmail(email);

    if (usuario.senha !== senha) {
      throw new UnauthorizedException('Senha incorreta');
    }

    return usuario;
  }

  private async verificarEmailDuplicado(
    email: string,
    id?: number,
  ): Promise<void> {
    const emailExistente = await this.usuarioRepository.findOneBy({ email });
    const emailEmUso = emailExistente && emailExistente.id !== id;

    if (emailEmUso) {
      throw new ConflictException('E-mail já está em uso por outro usuário.');
    }
  }
}
