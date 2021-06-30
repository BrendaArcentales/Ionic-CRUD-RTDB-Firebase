import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MakeUserPage } from './make-user.page';

const routes: Routes = [
  {
    path: '',
    component: MakeUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MakeUserPageRoutingModule {}