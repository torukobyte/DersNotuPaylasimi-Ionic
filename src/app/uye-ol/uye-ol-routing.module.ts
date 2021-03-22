import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UyeOlPage } from './uye-ol.page';

const routes: Routes = [
  {
    path: '',
    component: UyeOlPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UyeOlPageRoutingModule {}
