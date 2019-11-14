import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'planing', loadChildren: () => import('./planing/planing.module').then(m => m.PlaningModule) },
  { path: '', redirectTo: 'planing', pathMatch: 'full' },
  { path: 'table', loadChildren: () => import('./table/table.module').then(m => m.TableModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
