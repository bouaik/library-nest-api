import { IsEmpty, IsEnum, IsOptional, IsString } from 'class-validator';
import { Category } from '../schemas/book.schema';
import { User } from 'src/auth/schemas/user.schema';

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

  @IsEmpty({ message: "You can't pass the user ID" })
  readonly user: User;
}
