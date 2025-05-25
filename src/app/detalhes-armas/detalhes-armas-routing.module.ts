import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalhesArmasPage } from './detalhes-armas.page';

const routes: Routes = [
  {
    path: '',
    component: DetalhesArmasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalhesArmasPageRoutingModule {}
