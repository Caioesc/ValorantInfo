import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarBundlesPage } from './listar-bundles.page';

const routes: Routes = [
  {
    path: '',
    component: ListarBundlesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarBundlesPageRoutingModule {}
