import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalhesPersonagensPageRoutingModule } from './detalhes-personagens-routing.module';

import { DetalhesPersonagensPage } from './detalhes-personagens.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalhesPersonagensPageRoutingModule
  ],
  declarations: [DetalhesPersonagensPage]
})
export class DetalhesPersonagensPageModule {}
