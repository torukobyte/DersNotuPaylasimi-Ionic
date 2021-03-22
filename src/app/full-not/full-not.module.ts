import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FullNotPageRoutingModule } from './full-not-routing.module';

import { FullNotPage } from './full-not.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FullNotPageRoutingModule
  ],
  declarations: [FullNotPage]
})
export class FullNotPageModule {}
