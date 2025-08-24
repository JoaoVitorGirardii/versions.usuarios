import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  serviceOn(): string {
    return 'Usuarios Service ON';
  }
}
