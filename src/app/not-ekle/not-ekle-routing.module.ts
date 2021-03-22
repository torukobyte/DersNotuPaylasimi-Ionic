import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotEklePage } from './not-ekle.page';

const routes: Routes = [
  {
    path: '',
    component: NotEklePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotEklePageRoutingModule {}
