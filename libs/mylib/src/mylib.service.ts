import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class MylibService {
  constructor(@Inject('MY_TOKEN') private readonly myToken: string) {
    console.log(myToken);
  }
}
