import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Produto } from '../entity/produto.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProdutoService {
  constructor(
    @InjectRepository(Produto)
    private readonly produtoRepository: Repository<Produto>,
  ) {}

  async findAll(): Promise<Produto[]> {
    return await this.produtoRepository.find();
  }

  async findById(id: number): Promise<Produto> {
    const produto = await this.produtoRepository.findOne({ where: { id } });
    if (!produto) {
      throw new NotFoundException('produto não encontrado!');
    }
    return produto;
  }

  async save(produto: Produto): Promise<Produto> {
    return await this.produtoRepository.save(produto);
  }

  async update(id: number, produto: Produto): Promise<Produto> {
    const produtoAntigo = await this.findById(id);
    const produtoAtualizado = this.produtoRepository.create({
      ...produtoAntigo,
      nome: produto.nome,
      preco: produto.preco,
      qtd_disp: produto.qtd_disp,
      descricao: produto.descricao,
    });
    return await this.produtoRepository.save(produtoAtualizado);
  }

  async delete(id: number): Promise<void> {
    await this.findById(id);
    await this.produtoRepository.delete(id);
  }
}
