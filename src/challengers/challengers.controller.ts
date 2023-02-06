import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import {
  CreateChallengerDTO,
  FindOneChallengerDTO,
  UpdateChallengerDTO,
} from './dto/challenger.dto';
import { Challenger } from './interfaces/challenger.interface';
import { ChallengerService } from './challengers.service';

@Controller('challengers')
export class ChallengersController {
  constructor(private challengerService: ChallengerService) {}

  @Post()
  create(@Body createChallengerDTO: CreateChallengerDTO) {
    return this.challengerService.create(createChallengerDTO);
  }

  @Get()
  async findAll(): Promise<Challenger[]> {
    return this.challengerService.findAll();
  }

  @Get(':id')
  async findOne(@Query() query: FindOneChallengerDTO): Promise<Challenger> {
    return this.challengerService.findOne(query.id);
  }

  @Put(':id')
  update(
    @Query() query: FindOneChallengerDTO,
    @Body() updateChallengerDTO: UpdateChallengerDTO,
  ) {
    this.challengerService.update(updateChallengerDTO, query.id);
  }

  @Delete(':id')
  delete(@Query() query: FindOneChallengerDTO) {
    this.challengerService.delete(query.id);
  }
}
