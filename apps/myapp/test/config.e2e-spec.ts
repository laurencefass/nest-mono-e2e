import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MyConfigModule } from '@app/myconfig';
import { MyConfigService } from '@app/myconfig';

describe('MyModule (e2e)', () => {
  let app: INestApplication;
  let myService: MyConfigService;
  let configService: ConfigService;
  const customValue = 'config service context passed correctly';
  process.env.MY_VALUE = customValue;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
        }),
        MyConfigModule,
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    myService = moduleFixture.get<MyConfigService>(MyConfigService);
    configService = moduleFixture.get<ConfigService>(ConfigService);
  });

  afterAll(async () => {
    await app.close();
  });

  it('should be defined', () => {
    expect(myService).toBeDefined();
  });

  it('should inject value into MyService constructor', () => {
    // Verify that the value is received by the MyService constructor
    expect(myService.getMyValue()).toBe(customValue);
  });
});
