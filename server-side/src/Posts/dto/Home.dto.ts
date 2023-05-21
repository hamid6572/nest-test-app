import { IsInt, Max, Min } from 'class-validator';
export class HomeDto {
  @IsInt()
  @Min(0)
  @Max(10)
  id: number;
}
