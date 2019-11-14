import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';

import { PlaningRoutingModule } from './planing-routing.module';
import { PlaningComponent } from './planing.component';
import { CreateTurnamentPageComponent } from './pages/create-turnament-page/create-turnament-page.component';
import { TeamColorDirective } from './directives';
import { MatchComponent } from './components/match/match.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [PlaningComponent, CreateTurnamentPageComponent, TeamColorDirective, MatchComponent],
  imports: [
    CommonModule,
    PlaningRoutingModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatToolbarModule
  ],
  exports: [MatchComponent, CreateTurnamentPageComponent]
})
export class PlaningModule { }
