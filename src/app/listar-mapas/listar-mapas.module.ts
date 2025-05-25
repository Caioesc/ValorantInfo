import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarMapasPageRoutingModule } from './listar-mapas-routing.module';

import { ListarMapasPage } from './listar-mapas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarMapasPageRoutingModule
  ],
  declarations: [ListarMapasPage]
})
export class ListarMapasPageModule {}
