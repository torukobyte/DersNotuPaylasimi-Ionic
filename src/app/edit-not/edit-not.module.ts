import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditNotPageRoutingModule } from './edit-not-routing.module';

import { EditNotPage } from './edit-not.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditNotPageRoutingModule
  ],
  declarations: [EditNotPage]
})
export class EditNotPageModule {}
