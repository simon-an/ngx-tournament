import { Match } from './match';

export interface Tournament {
  teamSize: 2;
  teamsCount: 8;
  groups: 2;
  mode: 'Groups';
  matches: Match[];
  teams: string[];
}
