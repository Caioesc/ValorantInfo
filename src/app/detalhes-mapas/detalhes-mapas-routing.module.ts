import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalhesMapasPage } from './detalhes-mapas.page';

const routes: Routes = [
  {
    path: '',
    component: DetalhesMapasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalhesMapasPageRoutingModule {}
