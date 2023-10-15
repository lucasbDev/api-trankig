import { Injectable, Logger } from '@nestjs/common';
import { CreatePlayerDTO } from './dtos/create-player';
import { Player } from './interfaces/player';
import * as uuid from 'uuid';

@Injectable()
export class PlayersService {
  private players: Player[] = [];
  private readonly logger = new Logger(PlayersService.name);
  async createUpdatePlayer(createPlayerDTO: CreatePlayerDTO): Promise<void> {
    this.logger.log(`createPlayerDTO: ${createPlayerDTO}`);
  }

  private create(createPlayerDTO: CreatePlayerDTO): void {
    const { name, phoneNumber, email } = CreatePlayerDTO;
    const player: Player = {
      _id: 'uuid()',
      name,
      phoneNumber,
      email,
    };
  }
}
