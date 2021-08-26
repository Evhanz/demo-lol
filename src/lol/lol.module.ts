import { Module } from '@nestjs/common';
import { LolController } from './controllers/lol.controller';
import { LolService } from './services/lol.service';

@Module({
  controllers: [LolController],
  providers: [LolService],
})
export class LolModule {}
