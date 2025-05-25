import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalhesBundlesPageRoutingModule } from './detalhes-bundles-routing.module';

import { DetalhesBundlesPage } from './detalhes-bundles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalhesBundlesPageRoutingModule
  ],
  declarations: [DetalhesBundlesPage]
})
export class DetalhesBundlesPageModule {}
