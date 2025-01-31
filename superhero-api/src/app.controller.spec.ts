import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SuperHeroDto } from './superhero-dto/api-req-dto';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = module.get<AppController>(AppController);
    appService = module.get<AppService>(AppService);
  });

  describe('GET /superhero', () => {
    it('should return a list of superheroes sorted by humilityScore in descending order', async () => {
      const mockSuperHeroes = [
        { name: 'Iron Man', superpower: 'Genius', humilityScore: 7 },
        {
          name: 'Captain America',
          superpower: 'Leadership',
          humilityScore: 10,
        },
        { name: 'Thor', superpower: 'Thunder', humilityScore: 8 },
      ];

      jest
        .spyOn(appService, 'getSuperHeros')
        .mockResolvedValue(mockSuperHeroes);

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      } as any;

      await appController.getSuperHeros(res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        message: 'SuperHeros Successfully Fetched',
        data: mockSuperHeroes,
      });
    });
  });

  describe('POST /superhero', () => {
    it('should create a new superhero and add it to the list', async () => {
      const mockSuperHero = new SuperHeroDto('Spider-Man', 'Agility', 9);

      const superHerosList = [];

      jest.spyOn(appService, 'createSuperHero').mockImplementation((dto) => {
        superHerosList.push(dto);
        return Promise.resolve(dto);
      });

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      } as any;

      await appController.createSuperHero(mockSuperHero, res);

      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({
        message: 'SuperHero Successfully Created',
        data: mockSuperHero,
      });
      expect(superHerosList.length).toBe(1);
    });
  });
});
