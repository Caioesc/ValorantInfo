import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalhesPersonagensPage } from './detalhes-personagens.page';

const routes: Routes = [
  {
    path: '',
    component: DetalhesPersonagensPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalhesPersonagensPageRoutingModule {}
