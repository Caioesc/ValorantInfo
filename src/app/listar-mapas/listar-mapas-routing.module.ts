import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarMapasPage } from './listar-mapas.page';

const routes: Routes = [
  {
    path: '',
    component: ListarMapasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarMapasPageRoutingModule {}
