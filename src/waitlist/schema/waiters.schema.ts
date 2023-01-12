import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type WaiterDocument = HydratedDocument<Waiter>;

@Schema()
export class Waiter {
    @Prop({ required: true, unique: true })
    email: string;

    @Prop()
    refId: string;

    @Prop({ default: 0 })
    referrals: number;
}

export const WaiterSchema = SchemaFactory.createForClass(Waiter);