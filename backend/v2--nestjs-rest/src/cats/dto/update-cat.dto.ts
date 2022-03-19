import { IsNumber, IsPositive, IsString } from 'class-validator';

export class UpdateCatDto {
  @IsString()
  name: string;

  @IsNumber()
  @IsPositive()
  age: number;

  @IsString()
  breed: string;
}
