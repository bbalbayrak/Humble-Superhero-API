import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import { SuperHeroDto } from './superhero-dto/api-req-dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/superhero')
  async getSuperHeros(@Res() res: Response) {
    const superHeros = await this.appService.getSuperHeros();

    return res
      .status(HttpStatus.OK)
      .json({ message: 'SuperHeros Successfully Fetched', data: superHeros });
  }

  @Post('/superhero')
  async createSuperHero(
    @Body() superHeroDto: SuperHeroDto,
    @Res() res: Response,
  ) {
    const newSuperHero = await this.appService.createSuperHero(superHeroDto);
    return res
      .status(HttpStatus.CREATED)
      .json({ message: 'SuperHero Successfully Created', data: newSuperHero });
  }
}
