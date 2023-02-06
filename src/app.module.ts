import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChallengersController } from './challengers/challengers.controller';
import { ChallengerService } from './challengers/challengers.service';

@Module({
  imports: [],
  controllers: [AppController, ChallengersController],
  providers: [AppService, ChallengerService],
})
export class AppModule {}
