import { IsNumber, IsString, Max, Min } from 'class-validator';

export class SuperHeroDto {
  @IsString()
  private readonly name: string;
  @IsString()
  private readonly superpower: string;
  @IsNumber()
  @Min(1, { message: 'HumilityScore must be at least 1' })
  @Max(10, { message: 'HumilityScore must be at most 10' })
  private readonly humilityScore: number;

  constructor(name: string, superpower: string, humilityScore: number) {
    this.name = name;
    this.superpower = superpower;
    this.humilityScore = humilityScore;
  }
}
