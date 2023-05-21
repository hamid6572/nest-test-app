import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

//localhost://user/products
@Controller('user')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('products')
  getHello(): string {
    return this.appService.getHello();
  }
}
