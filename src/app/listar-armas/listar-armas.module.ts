import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarArmasPageRoutingModule } from './listar-armas-routing.module';

import { ListarArmasPage } from './listar-armas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarArmasPageRoutingModule,
  ],
  declarations: [ListarArmasPage]
})
export class ListarArmasPageModule {}
