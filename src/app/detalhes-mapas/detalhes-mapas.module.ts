import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalhesMapasPageRoutingModule } from './detalhes-mapas-routing.module';

import { DetalhesMapasPage } from './detalhes-mapas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalhesMapasPageRoutingModule
  ],
  declarations: [DetalhesMapasPage]
})
export class DetalhesMapasPageModule {}
