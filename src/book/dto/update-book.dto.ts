import { IsEnum, IsOptional, IsString } from 'class-validator';
import { Category } from '../schemas/book.schema';

export class UpdateBookDTO {
  @IsOptional()
  @IsString()
  readonly title: string;

  @IsOptional()
  @IsString()
  readonly description: string;
  @IsOptional()
  @IsString()
  readonly author: string;

  @IsOptional()
  @IsString()
  readonly price: number;

  @IsOptional()
  @IsEnum(Category, { message: 'Please provide a correct category' })
  readonly category: Category;
}
