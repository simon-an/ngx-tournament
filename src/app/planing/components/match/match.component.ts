import { TournamentService } from '~core/services';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Match } from '~core/model';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatchComponent implements OnInit {

  @Input()
  match: Match;

  constructor(private service: TournamentService) { }

  ngOnInit() {
  }

  scoreHomeTeam() {
    this.service.score(this.match.id, this.match.homeTeam);
  }

  scoreGuestTeam() {
    this.service.score(this.match.id, this.match.GuestTeam);
  }

}
