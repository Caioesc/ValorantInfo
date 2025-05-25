import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalhesArmasPageRoutingModule } from './detalhes-armas-routing.module';

import { DetalhesArmasPage } from './detalhes-armas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalhesArmasPageRoutingModule
  ],
  declarations: [DetalhesArmasPage]
})
export class DetalhesArmasPageModule {}
