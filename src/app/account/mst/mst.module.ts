import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MstPageRoutingModule } from './mst-routing.module';

import { MstPage } from './mst.page';

import { MSTCardComponent } from '../components/mst-card/mst-card.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    TranslateModule.forChild(),
    MstPageRoutingModule
  ],
  declarations: [MstPage, MSTCardComponent]
})
export class MstPageModule {}
