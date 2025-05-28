import { Controller, Get, Post, Body } from '@nestjs/common';
import { ServicesService } from './services.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}
  @Post('users')
  create(@Body() user: CreateUserDto) {
    return this.servicesService.create(user);
  }

  @Get('users')
  findAllUsers() {
    return this.servicesService.findAllUsers();
  }

  @Get('dg')
  findAllDragonBall() {
    return this.servicesService.findAllDragonBall();
  }

  @Get('dogs')
  findRandomDogImage() {
    return this.servicesService.findRandomDogImage();
  }

  @Get('cats')
  findRandomCatImage() {
    return this.servicesService.findRandomCatImage();
  }
}
