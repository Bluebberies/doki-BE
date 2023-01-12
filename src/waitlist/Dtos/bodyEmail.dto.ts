import { IsEmail, IsNotEmpty } from 'class-validator';

export class BodyEmailDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;
}