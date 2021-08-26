import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { LolModule } from './lol/lol.module';

@Module({
  imports: [UsersModule, ProductsModule, LolModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
