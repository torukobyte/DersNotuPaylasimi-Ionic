import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotEklePageRoutingModule } from './not-ekle-routing.module';

import { NotEklePage } from './not-ekle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotEklePageRoutingModule
  ],
  declarations: [NotEklePage]
})
export class NotEklePageModule {}
