import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';


export type ProductDocument = Product & Document;

@Schema({ timestamps: true })
export class Product {

  @Prop({ required: true, trim: true })
  name: string;

  @Prop({ required: true, trim: true, unique: true })
  slug: string;

  @Prop({ required: true, min: 0 })
  originalPrice: number;

  @Prop({ required: false })
  discountPrice: number;

  @Prop({ required: true, trim: true })
  description: string;

  @Prop({ type: Types.ObjectId, ref: 'Category', required: true })
  category: Types.ObjectId;

  @Prop({ required: true, min: 0 })
  stock: number;

  @Prop({ type: [String], required: false, default: null })
  colors: string[] | null;

  @Prop({ type: [String], required: false, default: null })
  sizes: string[] | null;

  @Prop({ required: false , type: String})
  mainImage: string;

  @Prop({ type: [String], required: true })
  thumbnails: string[];

  @Prop({ default: 0, min: 0, max: 5 })
  rating: number;

  @Prop({ default: 0 })
  reviewsCount: number;

  @Prop()
  discount: number;

  @Prop({required: true})
  deliveryPrice: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);



ProductSchema.pre<ProductDocument>('save', function (next) {

  function getDiscountedPrice(originalPrice : number, discountPercentage : number) {
    if (discountPercentage < 0 || discountPercentage > 100) {
        throw new Error("Discount percentage must be between 0 and 100.");
    }

    return Math.round(originalPrice - (originalPrice * discountPercentage) / 100);
}


const finalPrice = getDiscountedPrice(this.originalPrice, this.discount);
this.discountPrice = finalPrice;





  if (Array.isArray(this.thumbnails) && this.thumbnails.length > 0) {
    this.mainImage = this.thumbnails[0];
  } else {
    this.mainImage = ''; 
  }
  next();
});