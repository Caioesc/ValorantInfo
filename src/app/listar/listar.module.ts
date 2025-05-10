import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarPageRoutingModule } from './listar-routing.module';

import { ListarPage } from './listar.page';
import { TipoAgentePipe } from '../pipes/tipo-agente.pipe';
import { BordaAgentesDirective } from '../diretivas/borda-agentes.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarPageRoutingModule
  ],
  declarations: [ListarPage, TipoAgentePipe, BordaAgentesDirective]
})
export class ListarPageModule {}
