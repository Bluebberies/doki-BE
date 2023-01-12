import { IsEmail, IsNotEmpty } from 'class-validator';

export class WaiterDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    refId: string;
    referrals?: number;
}