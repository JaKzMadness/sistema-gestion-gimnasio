import { Module } from '@nestjs/common';
import { PlanmembresiaController } from './planmembresia.controller';
import { PlanmembresiaService } from './planmembresia.service';

@Module({
  controllers: [PlanmembresiaController],
  providers: [PlanmembresiaService]
})
export class PlanmembresiaModule {}
