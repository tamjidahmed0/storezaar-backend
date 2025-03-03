import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true }) // Auto generates createdAt & updatedAt

export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ unique: true, required: true })
  email: string;

  @Prop()
  password?: string; // Hashed password

  
  @Prop()
  photo: string;

  @Prop({ enum: ['customer', 'admin'], default: 'customer' })
  role: string;


}

export const UserSchema = SchemaFactory.createForClass(User);
