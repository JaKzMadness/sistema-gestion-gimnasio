import { Module } from '@nestjs/common';
import { PlanhistoryController } from './planhistory.controller';
import { PlanhistoryService } from './planhistory.service';

@Module({
  controllers: [PlanhistoryController],
  providers: [PlanhistoryService]
})
export class PlanhistoryModule {}
