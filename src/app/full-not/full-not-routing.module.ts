import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullNotPage } from './full-not.page';

const routes: Routes = [
  {
    path: '',
    component: FullNotPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FullNotPageRoutingModule {}
