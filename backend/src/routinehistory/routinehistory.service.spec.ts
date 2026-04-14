import { Test, TestingModule } from '@nestjs/testing';
import { RoutinehistoryService } from './routinehistory.service';

describe('RoutinehistoryService', () => {
  let service: RoutinehistoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoutinehistoryService],
    }).compile();

    service = module.get<RoutinehistoryService>(RoutinehistoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
