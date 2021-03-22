import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GirisPageRoutingModule } from './giris-routing.module';

import { GirisPage } from './giris.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GirisPageRoutingModule
  ],
  declarations: [GirisPage]
})
export class GirisPageModule {}
