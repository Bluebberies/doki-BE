import { Model } from 'mongoose';
import { HttpException, Injectable, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Waiter, WaiterDocument } from './schema/waiters.schema';
import { WaiterDto } from './Dtos/waiter.dto';
import { v4 as uuidv4 } from 'uuid';
// import sendMail from './config/sendMail';

@Injectable()
export class WaitlistService {

    constructor(@InjectModel(Waiter.name) private waiterModel: Model<WaiterDocument>) { }
    
    getWaitlistUsers() {
        // console.log(process.env.DATABASE_URL, this.dbUser)
        return { name: 'francis', age: 83 }
    }

    async createNewWaiter(email: string): Promise<Waiter> {
        const waiterdata: WaiterDto = {
            email,
            refId: uuidv4()
        }
        const addWaiter = new this.waiterModel(waiterdata);
        return await addWaiter.save()
    }

    async getReferrals(email: string): Promise<Waiter[]> {
        const waiter = await this.waiterModel.find({ email }).exec()
        if (!waiter.length) {
            throw new HttpException('Email invalid!', HttpStatus.BAD_REQUEST)
        }
        return waiter
    }

    async verifyRefId(refId: string): Promise<Waiter[]> {
        const waiter = await this.waiterModel.find({ refId }).exec()
        if (!waiter.length) {
            throw new HttpException('RefId invalid!', HttpStatus.BAD_REQUEST)
        }

        await this.waiterModel.findOneAndUpdate({ refId }, { $inc: { referrals: 1 } })
        const updatedWaiter = await this.waiterModel.find({ refId }).exec()
        return updatedWaiter
    }



    // async findAll(): Promise<Cat[]> {
    //     return this.catModel.find().exec();
    // }
}
