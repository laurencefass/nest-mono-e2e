import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MyPackageService {
  constructor(private readonly configService: ConfigService) {
    console.log('MyPackageService', configService.get('MY_VALUE'));
  }

  getMyValue(): string {
    return this.configService.get<string>('MY_VALUE');
  }
}
