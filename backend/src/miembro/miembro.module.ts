import { Module } from '@nestjs/common';
import { MiembroController } from './miembro.controller';
import { MiembroService } from './miembro.service';

@Module({
  controllers: [MiembroController],
  providers: [MiembroService]
})
export class MiembroModule {}
