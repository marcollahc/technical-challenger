import { Injectable } from '@nestjs/common';
import { Challenger } from './interfaces/challenger.interface';

@Injectable()
export class ChallengerService {
  private readonly challengers: Challenger[] = [];

  create(challenger: Challenger) {
    this.challengers.push(challenger);
  }

  async findAll(): Promise<Challenger[]> {
    return this.challengers;
  }

  async findOne(id: number): Promise<Challenger> {
    const challengerTarget = this.challengers.findIndex(
      (item) => item.id === id,
    );

    return this.challengers[challengerTarget];
  }

  update(challenger: Challenger, id: number) {
    const challengerTarget = this.challengers.findIndex(
      (item) => item.id === id,
    );

    this.challengers[challengerTarget] = challenger;
  }

  delete(id: number) {
    const challengerTarget = this.challengers.findIndex(
      (item) => item.id === id,
    );
    this.challengers.splice(challengerTarget, 1);
  }
}
