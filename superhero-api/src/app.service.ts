import { Injectable } from '@nestjs/common';
import { SuperHeroDto } from './superhero-dto/api-req-dto';
let superHerosList = [];
@Injectable()
export class AppService {
  async getSuperHeros() {
    const superHeros = superHerosList.sort((a, b) => {
      return b.humilityScore - a.humilityScore;
    });
    return superHeros;
  }

  async createSuperHero(req: SuperHeroDto): Promise<SuperHeroDto> {
    superHerosList.push(req);
    return req;
  }
}
