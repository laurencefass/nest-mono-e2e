import { Test, TestingModule } from '@nestjs/testing';
import { MylibService } from '@app/mylib';

describe('MylibService', () => {
  let service: MylibService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MylibService,
        {
          provide: 'MY_TOKEN',
          useValue: 'token injection working',
        },
      ],
    }).compile();

    service = module.get<MylibService>(MylibService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
