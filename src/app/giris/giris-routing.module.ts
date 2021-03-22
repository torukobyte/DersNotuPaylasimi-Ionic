import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GirisPage } from './giris.page';

const routes: Routes = [
  {
    path: '',
    component: GirisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GirisPageRoutingModule {}
