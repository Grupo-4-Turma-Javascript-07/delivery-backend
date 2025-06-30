import { Module } from '@nestjs/common';
import { ProdutoService } from './service/produto.service';

@Module({
  imports: [],
  controllers: [],
  providers: [ProdutoService],
})
export class ProdutoModule {}
