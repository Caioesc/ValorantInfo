import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalhesBundlesPage } from './detalhes-bundles.page';

const routes: Routes = [
  {
    path: '',
    component: DetalhesBundlesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalhesBundlesPageRoutingModule {}
