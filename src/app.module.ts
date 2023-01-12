import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WaitlistModule } from './waitlist/waitlist.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    WaitlistModule,
    // MongooseModule.forRoot(process.env.DATABASE_URL),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('DATABASE_URL'),
      }),
      inject: [ConfigService],
    }),
    ConfigModule.forRoot({ isGlobal: true })
  ],
})
export class AppModule { }
    // "start:dev": "nest start --watch",
// dokiadmin