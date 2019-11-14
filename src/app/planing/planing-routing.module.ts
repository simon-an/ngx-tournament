import { CreateTurnamentPageComponent } from './pages/create-turnament-page/create-turnament-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlaningComponent } from './planing.component';

const routes: Routes = [
  {
    path: '', component: PlaningComponent, children: [
      { path: '', component: CreateTurnamentPageComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaningRoutingModule { }
