import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditNotPage } from './edit-not.page';

const routes: Routes = [
  {
    path: '',
    component: EditNotPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditNotPageRoutingModule {}
