import { Module } from '@nestjs/common';
import { BodymeasurementsController } from './bodymeasurements.controller';
import { BodymeasurementsService } from './bodymeasurements.service';

@Module({
  controllers: [BodymeasurementsController],
  providers: [BodymeasurementsService]
})
export class BodymeasurementsModule {}
