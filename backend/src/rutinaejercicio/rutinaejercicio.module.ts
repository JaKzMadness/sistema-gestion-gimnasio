import { Module } from '@nestjs/common';
import { RutinaejercicioController } from './rutinaejercicio.controller';
import { RutinaejercicioService } from './rutinaejercicio.service';

@Module({
  controllers: [RutinaejercicioController],
  providers: [RutinaejercicioService]
})
export class RutinaejercicioModule {}
