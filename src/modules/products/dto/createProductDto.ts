import { IsString, IsNumber, IsArray, IsMongoId, Min, Max, IsOptional, } from 'class-validator';

export class CreateProductDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly slug: string;

  @IsString()
  readonly description: string;

  @IsNumber()
  @Min(0)
  readonly originalPrice: number;

  @IsOptional()
  @IsNumber()  
  @Min(0)
  @Max(100)
  readonly discount?: number;

  @IsNumber()
  @Min(0)
  readonly stock: number;

  @IsMongoId()
  readonly category: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  readonly colors?: string[] | null;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  readonly sizes?: string[] | null;

  @IsOptional()
  @IsString()
  readonly mainImage: string;

  @IsArray()
  @IsString({ each: true })
  readonly thumbnails: string[];

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(5)
  readonly rating?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  readonly reviewsCount?: number;

  @IsNumber()
  readonly deliveryPrice : number


}
