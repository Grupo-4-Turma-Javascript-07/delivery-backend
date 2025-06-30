import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ProdutoService } from '../service/produto.service';
import { Produto } from '../entity/produto.entity';

@Controller('/produtos')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Produto[]> {
    return this.produtoService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Produto> {
    return this.produtoService.findById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  save(@Body() produto: Produto): Promise<Produto> {
    return this.produtoService.save(produto);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() produto: Produto,
  ): Promise<Produto> {
    return this.produtoService.update(id, produto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.produtoService.delete(id);
  }

  @Get('recomendados/:id')
  @HttpCode(HttpStatus.OK)
  recomendarProduto(@Param('id', ParseIntPipe) id: number): Promise<Produto[]> {
    return this.produtoService.recomendarProduto(id);
  }
}
