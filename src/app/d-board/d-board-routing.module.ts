import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DBoardComponent } from './d-board.component';
import { MyDashComponent } from './my-dash/my-dash.component';

const routes: Routes = [
  { path: '', component: DBoardComponent },
  { path: 'dashboard', loadChildren: () => import('./topbar/topbar.module').then(m => m.TopbarModule) }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DBoardRoutingModule { }
