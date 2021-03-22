import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UyeOlPageRoutingModule } from './uye-ol-routing.module';

import { UyeOlPage } from './uye-ol.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UyeOlPageRoutingModule
  ],
  declarations: [UyeOlPage]
})
export class UyeOlPageModule {}
