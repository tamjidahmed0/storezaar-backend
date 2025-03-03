import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type OrderDocument = Order & Document;

@Schema({ timestamps: true })
export class Order {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  userId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Product', required: true })
  productId: Types.ObjectId;

  @Prop({ required: true, min: 1 })
  qty: number;

  @Prop({ required: false, type: String })
  color?: string;

  @Prop({ type: String, enum: ['pending', 'shipped', 'delivered', 'cancelled'], default: 'pending' })
  status: 'pending' | 'shipped' | 'delivered' | 'cancelled';

  @Prop({ type: String, required: false })
  paymentMethod?: string;

  @Prop({ type: Number, required: true })
  totalAmount: number;
}

export const OrderSchema = SchemaFactory.createForClass(Order);

