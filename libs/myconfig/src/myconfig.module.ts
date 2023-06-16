import { ConfigModule } from '@nestjs/config';
import { MyConfigService } from './myconfig.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  providers: [MyConfigService],
  exports: [MyConfigService],
})
export class MyConfigModule {}
