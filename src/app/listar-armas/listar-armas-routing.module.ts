import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarArmasPage } from './listar-armas.page';

const routes: Routes = [
  {
    path: '',
    component: ListarArmasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarArmasPageRoutingModule {}
