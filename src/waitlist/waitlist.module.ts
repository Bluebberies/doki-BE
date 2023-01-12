import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WaitlistController } from './waitlist.controller';
import { WaitlistService } from './waitlist.service';
// import { Waiter, WaiterSchema } from './models/waiters.schema';
import { Waiter, WaiterSchema } from './schema/waiters.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Waiter.name, schema: WaiterSchema }])],
  controllers: [WaitlistController],
  providers: [WaitlistService],
})
export class WaitlistModule { }
