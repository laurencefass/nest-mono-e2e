import { Test, TestingModule } from '@nestjs/testing';
import { MyPackageService } from './mypackage.service';

describe('MyconfigService', () => {
  let service: MyPackageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MyPackageService],
    }).compile();

    service = module.get<MyPackageService>(MyPackageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
