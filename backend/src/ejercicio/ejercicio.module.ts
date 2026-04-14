import { Module } from '@nestjs/common';
import { EjercicioController } from './ejercicio.controller';
import { EjercicioService } from './ejercicio.service';

@Module({
  controllers: [EjercicioController],
  providers: [EjercicioService]
})
export class EjercicioModule {}
