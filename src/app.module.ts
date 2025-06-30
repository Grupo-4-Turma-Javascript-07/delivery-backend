import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './usuarios/entities/usuario.entity';
import { UsuarioModule } from './usuarios/usuario.module';
import { Categoria } from './Categoria/entities/categoria.entity';
import { Produto } from './produto/entity/produto.entity';
import { ProdutoModule } from './produto/produto.module';
import { CategoriaModule } from './Categoria/categoria.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_delivery',
      entities: [Usuario, Categoria, Produto],
      synchronize: true,
    }),
    UsuarioModule,
    ProdutoModule,
    CategoriaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
