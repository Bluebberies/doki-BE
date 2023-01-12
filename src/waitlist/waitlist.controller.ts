import { Body, Controller, Get, HttpStatus, Patch, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { WaitlistService } from './waitlist.service';
import { BodyEmailDto } from './Dtos/bodyEmail.dto';
import { _ } from 'lodash'
import { BodyRefIdDto } from './Dtos/bodyRefId.dto';

@Controller('waitlist')
export class WaitlistController {
    constructor(private waitlistService: WaitlistService) { }

    @Get()
    getWaitlistUsers() {
        return this.waitlistService.getWaitlistUsers()
    }

    // @Get()
    // main(){
    //     return this.waitlistService.main()
    // }

    @Post()
    async createNewWaiter(@Body() body: BodyEmailDto, @Res() res: Response) {
        try {
            const data = await this.waitlistService.createNewWaiter(body.email)
            const filteredData = _.pick(data, ['email', 'refId', 'referrals']);
            return res.status(HttpStatus.CREATED).json(filteredData)
        } catch (err) {
            if (err?.code === 11000) {
                return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Email already exist' })
            }
        }
    }

    @Post('refs')
    async getReferrals(@Body() body: BodyEmailDto, @Res() res: Response) {
        try {
            const data = await this.waitlistService.getReferrals(body.email)
            const filteredData = _.pick(data[0], ['email', 'refId', 'referrals']);
            return res.status(HttpStatus.OK).json(filteredData)
        } catch (err) {
            return res.status(err.status).json({ message: err.response })
        }
    }

    @Patch('verifyRefId')
    async verifyRefId(@Body() body: BodyRefIdDto, @Res() res: Response) {
        try {
            const data = await this.waitlistService.verifyRefId(body.refId)
            const filteredData = _.pick(data[0], ['email', 'refId', 'referrals']);
            return res.status(HttpStatus.OK).json(filteredData)
        } catch (err) {
            return res.status(err.status).json({ message: err.response })
        }
    }
}
