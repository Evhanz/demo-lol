import { Injectable } from '@nestjs/common';

@Injectable()
export class LolService {
  private matchs: any = [
    {
      id: 1,
      players: [
        {
          name: 'Dragon Evhanz',
          id: 12,
          server: 'Lan',
          teamColor: 'red',
          champ: 'Xin Xhao',
        },
        {
          name: 'Dragon Diamante',
          id: 15,
          server: 'Lan',
          teamColor: 'red',
          champ: 'Sona',
        },
        {
          name: 'EM2 Dopha',
          id: 19,
          server: 'Lan',
          teamColor: 'blue',
          champ: 'Yasuo',
        },
        {
          name: 'EM2 Kirito',
          id: 19,
          server: 'Lan',
          teamColor: 'blue',
          champ: 'Singend',
        },
      ],
      date: '12-12-2021',
      winTeam: 'red',
    },
  ];

  findAll() {
    return this.matchs;
  }
}
