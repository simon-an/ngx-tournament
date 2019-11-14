import { Tournament } from './../model/tournament';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Match } from '~core/model';

@Injectable({
  providedIn: 'root',
})
export class TournamentService {

  tournament$ = new BehaviorSubject<Tournament>({ groups: 2, matches: [], mode: 'Groups', teamSize: 2, teamsCount: 8, teams: [] });

  constructor() {

  }

  score(id: string, team: string) {
    const tournament = this.tournament$.getValue();
    const index = tournament.matches.findIndex(m => m.id === id);
    let newmatch: Match;
    if (tournament.matches[index].homeTeam === team) {
      newmatch = { ...tournament.matches[index], scoreHomeTeam: tournament.matches[index].scoreHomeTeam + 1 };

    } else if (tournament.matches[index].GuestTeam === team) {
      newmatch = { ...tournament.matches[index], scoreGuestTeam: tournament.matches[index].scoreGuestTeam + 1 };

    }

    let newMatches: Match[];
    if (index === 0) {
      newMatches = [newmatch, ...tournament.matches.slice(index + 1)];
    } else if (index === tournament.matches.length - 1) {
      newMatches = [...tournament.matches.slice(0, index), newmatch];
    } else {
      newMatches = [...tournament.matches.slice(0, index), newmatch, ...tournament.matches.slice(index + 1)];
    }

    this.tournament$.next({ ...tournament, matches: newMatches });
  }

  getMatches(): Observable<Match[]> {
    return this.tournament$.pipe(map(t => t.matches));
  }


  getTournament() {
    return this.tournament$.asObservable();
  }

  // setMatches(matches: Match[]) {
  //   console.log('setMatches');
  //   this.tournament$.next({ ...this.tournament$.getValue(), matches: [...matches] });
  // }

  addTeam(teamName: string) {
    const newteams = [...this.tournament$.getValue().teams, teamName];
    this.tournament$.next({ ...this.tournament$.getValue(), teams: newteams, matches: createMatches(newteams) });
  }
}

function createMatches(teams: string[]): Match[] {
  let counter = 0;
  const res = teams.reduce<Match[]>((matches: Match[], team: string, index: number) => {
    const res2 = [...matches,
    ...teams
      .filter(t => t !== team)
      .reduce<Match[]>((matches2: Match[], t: string, inde2x: number) => {
        if (inde2x % 2 === 0) {
          return [...matches2, { homeTeam: team, GuestTeam: t, scoreGuestTeam: 0, scoreHomeTeam: 0, id: `${counter++}` } as Match];
        } else {
          return [...matches2, { homeTeam: t, GuestTeam: team, scoreGuestTeam: 0, scoreHomeTeam: 0, id: `${counter++}` } as Match];
        }
      }, [])];
    return res2;
  }, []);
  console.log('createMatches', res);
  return res;
}
