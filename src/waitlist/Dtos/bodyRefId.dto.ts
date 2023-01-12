import { IsNotEmpty } from 'class-validator';

export class BodyRefIdDto {
    @IsNotEmpty()
    refId: string;
}