import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { MembersModule } from './members/members.module';
import { MeasurementsModule } from './measurements/measurements.module';
import { ExercisesModule } from './exercises/exercises.module';
import { RoutinesModule } from './routines/routines.module';
import { TrainerSchedulesModule } from './trainer-schedules/trainer-schedules.module';
import { TrainersModule } from './trainers/trainers.module';
import { PlansModule } from './plans/plans.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // Lee .env automáticamente
    PrismaModule,
    MembersModule,
    PlansModule,
    TrainersModule,
    TrainerSchedulesModule,
    RoutinesModule,
    ExercisesModule,
    MeasurementsModule, // Conexión a la BD
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
