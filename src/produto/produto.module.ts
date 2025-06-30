import { Module } from '@nestjs/common';
import { ProdutoService } from './service/produto.service';
import { ProdutoController } from './controller/produto.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produto } from './entity/produto.entity';
import { Usuario } from '../usuarios/entities/usuario.entity';
import { Categoria } from '../Categoria/entities/categoria.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Produto, Usuario, Categoria])],
  controllers: [ProdutoController],
  providers: [ProdutoService],
})
export class ProdutoModule {}
