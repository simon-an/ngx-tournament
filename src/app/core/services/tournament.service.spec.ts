import { TestBed } from '@angular/core/testing';

import { TournamentService } from './tournament.service';

describe('TournamentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TournamentService = TestBed.inject(TournamentService);
    expect(service).toBeTruthy();
  });
});
