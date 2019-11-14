import { Tournament } from './../../../core/model/tournament';
import { Component, OnInit } from '@angular/core';
import { TournamentService } from '~core/services';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Table, TableItem } from '~core/model/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  teams$: Observable<string[]>;
  tournament$: Observable<Tournament>;
  table$: Observable<Table>;
  tableArray$: Observable<TableItem[]>;
  displayedColumns: string[] = ['team', 'points', 'scored', 'conceeded'];
  constructor(private service: TournamentService) { }

  ngOnInit() {
    this.tournament$ = this.service.getTournament();
    this.teams$ = this.service.getTournament().pipe(map(t => t.teams));

    this.table$ = this.tournament$.pipe(
      map(t => {
        return t.teams.reduce<Table>((table: Table, team: string) => {
          return {
            ...table,
            [team]: {
              team,
              scored:
                t.matches
                  .filter(m => m.homeTeam === team)
                  .map(m => m.scoreHomeTeam)
                  .reduce<number>((sum: number, current: number) => {
                    return (sum += current);
                  }, 0) +
                t.matches
                  .filter(m => m.GuestTeam === team)
                  .map(m => m.scoreGuestTeam)
                  .reduce<number>((sum: number, current: number) => {
                    return (sum += current);
                  }, 0),
              conceeded:
                t.matches
                  .filter(m => m.homeTeam === team)
                  .map(m => m.scoreGuestTeam)
                  .reduce<number>((sum: number, current: number) => {
                    return (sum += current);
                  }, 0) +
                t.matches
                  .filter(m => m.GuestTeam === team)
                  .map(m => m.scoreHomeTeam)
                  .reduce<number>((sum: number, current: number) => {
                    return (sum += current);
                  }, 0),
              points:
                t.matches
                  .filter(m => m.homeTeam === team)
                  .map(m => {
                    if (m.scoreHomeTeam > m.scoreGuestTeam) {
                      return 3;
                    } else if (m.scoreHomeTeam < m.scoreGuestTeam) {
                      return 0;
                    } else {
                      return 1;
                    }
                  })
                  .reduce<number>((sum: number, current: number) => {
                    return (sum += current);
                  }, 0) +
                t.matches
                  .filter(m => m.GuestTeam === team)
                  .map(m => {
                    if (m.scoreHomeTeam < m.scoreGuestTeam) {
                      return 3;
                    } else if (m.scoreHomeTeam > m.scoreGuestTeam) {
                      return 0;
                    } else {
                      return 1;
                    }
                  })
                  .reduce<number>((sum: number, current: number) => {
                    return (sum += current);
                  }, 0),
            },
          };
        }, {});
      }),
    );
    this.tableArray$ = this.table$.pipe(map(t => Object.values(t).sort((itemA: TableItem, itemB: TableItem) => {
      return itemB.points - itemA.points;
    })));
    // this.table$.subscribe(console.log);
  }
}
