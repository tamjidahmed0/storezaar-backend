import { IsMongoId, IsNotEmpty, IsNumber, IsOptional, IsString, Min, IsEnum } from 'class-validator';

export class CreateOrderDto {
  @IsMongoId()
  @IsNotEmpty()
  userId: string;

  @IsMongoId()
  @IsNotEmpty()
  productId: string;

  @IsNumber()
  @Min(1)
  qty: number;

  @IsOptional()
  @IsString()
  color?: string;

  @IsEnum(['pending', 'shipped', 'delivered', 'cancelled'])
  @IsOptional()
  status?: 'pending' | 'shipped' | 'delivered' | 'cancelled';

  @IsOptional()
  @IsString()
  paymentMethod?: string;

  @IsNumber()
  @IsNotEmpty()
  totalAmount: number;
}
