import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categoria } from '../entities/categoria.entity';

@Injectable()
export class CategoriaService {
  constructor(
    @InjectRepository(Categoria)
    private categoriaRepository: Repository<Categoria>,
  ) {}

  async findAll(): Promise<Categoria[]> {
    return await this.categoriaRepository.find();
  }

  async save(categoria: Categoria): Promise<Categoria> {
    return await this.categoriaRepository.save(categoria);
  }

  async findById(id: number): Promise<Categoria> {
    const categoria = await this.categoriaRepository.findOne({ where: { id } });

    if (!categoria) {
      throw new NotFoundException('categoria não encontrada');
    }
    return categoria;
  }

  async update(id: number, categoria: Categoria): Promise<Categoria> {
    const oldCategoria = await this.findById(id);

    const newCategoria = this.categoriaRepository.create({
      ...oldCategoria,
      categoria: categoria.categoria,
      descricao: categoria.descricao,
    });
    return await this.categoriaRepository.save(newCategoria);
  }

  async delete(id: number): Promise<void> {
    await this.findById(id);
    await this.categoriaRepository.delete(id);
  }
}
