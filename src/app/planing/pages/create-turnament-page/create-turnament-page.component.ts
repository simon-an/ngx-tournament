import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { TournamentService } from '~core/services';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Match } from '~core/model';

@Component({
  selector: 'app-create-turnament',
  templateUrl: './create-turnament-page.component.html',
  styleUrls: ['./create-turnament-page.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateTurnamentPageComponent implements OnInit {
  teams$: Observable<string[]>;
  matches$: Observable<Match[]>;
  activeTeam: string;

  constructor(private service: TournamentService) { }

  ngOnInit() {
    this.teams$ = this.service.getTournament().pipe(map(t => t.teams));
    this.matches$ = this.service.getMatches();
  }

  onAddTeam(value: string) {
    this.service.addTeam(`${value}`);
  }

  setActive(team: string) {
    this.activeTeam = team;
  }

  setInactive(team: string) {
    this.activeTeam = null;
  }

  isActive(team: string) {
    return team === this.activeTeam;
  }
}
