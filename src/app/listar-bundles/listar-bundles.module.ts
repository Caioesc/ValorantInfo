import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarBundlesPageRoutingModule } from './listar-bundles-routing.module';

import { ListarBundlesPage } from './listar-bundles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarBundlesPageRoutingModule
  ],
  declarations: [ListarBundlesPage]
})
export class ListarBundlesPageModule {}
