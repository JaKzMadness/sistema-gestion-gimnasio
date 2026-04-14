import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { PlanmembresiaModule } from './planmembresia/planmembresia.module';
import { PlanhistoryModule } from './planhistory/planhistory.module';
import { MiembroModule } from './miembro/miembro.module';
import { MemberauditlogController } from './memberauditlog/memberauditlog.controller';
import { MemberauditlogService } from './memberauditlog/memberauditlog.service';
import { MemberauditlogModule } from './memberauditlog/memberauditlog.module';
import { EntrenadorModule } from './entrenador/entrenador.module';
import { TraineravailabilityModule } from './traineravailability/traineravailability.module';
import { RutinaModule } from './rutina/rutina.module';
import { EjercicioModule } from './ejercicio/ejercicio.module';
import { RutinaejercicioModule } from './rutinaejercicio/rutinaejercicio.module';
import { RoutinehistoryController } from './routinehistory/routinehistory.controller';
import { BodymeasurementsModule } from './bodymeasurements/bodymeasurements.module';
import { RoutinehistoryService } from './routinehistory/routinehistory.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // Lee .env automáticamente
    PrismaModule, PlanmembresiaModule, PlanhistoryModule, MiembroModule, MemberauditlogModule, EntrenadorModule, TraineravailabilityModule, RutinaModule, EjercicioModule, RutinaejercicioModule, BodymeasurementsModule,                             // Conexión a la BD
  ],
  controllers: [AppController, MemberauditlogController, RoutinehistoryController],
  providers: [AppService, MemberauditlogService, RoutinehistoryService],
})
export class AppModule {}
