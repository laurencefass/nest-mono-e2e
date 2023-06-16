import { ConfigModule } from '@nestjs/config';
import { MyPackageService } from './mypackage.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  providers: [MyPackageService],
  exports: [MyPackageService],
})
export class MyPackageModule {}
