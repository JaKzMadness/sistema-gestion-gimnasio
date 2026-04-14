import { Module } from '@nestjs/common';
import { TraineravailabilityController } from './traineravailability.controller';
import { TraineravailabilityService } from './traineravailability.service';

@Module({
  controllers: [TraineravailabilityController],
  providers: [TraineravailabilityService]
})
export class TraineravailabilityModule {}
