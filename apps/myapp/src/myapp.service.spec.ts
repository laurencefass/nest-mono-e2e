import { Test, TestingModule } from '@nestjs/testing';
import { MyappService } from './myapp.service';

describe('MyappController', () => {
  let myservice: MyappService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [MyappService],
    }).compile();

    myservice = app.get<MyappService>(MyappService);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(myservice.getHello()).toBe('Hello World!');
    });
  });
});
