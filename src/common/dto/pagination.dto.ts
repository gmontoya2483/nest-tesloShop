import { IsOptional, IsPositive, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class PaginationDto {
  @IsOptional()
  @IsPositive()
  @Type(() => Number) // Transformar string to number
  limit?: number;

  @IsOptional()
  @Min(0)
  @Type(() => Number) // Transformar
  offset?: number;
}
