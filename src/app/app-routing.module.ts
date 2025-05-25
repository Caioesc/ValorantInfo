import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'listar',
    loadChildren: () => import('./listar/listar.module').then( m => m.ListarPageModule)
  },
  {
    path: 'detalhes-personagens/:id',
    loadChildren: () => import('./detalhes-personagens/detalhes-personagens.module').then( m => m.DetalhesPersonagensPageModule)
  },
  {
    path: 'listar-armas',
    loadChildren: () => import('./listar-armas/listar-armas.module').then( m => m.ListarArmasPageModule)
  },
  {
    path: 'detalhes-armas/:id',
    loadChildren: () => import('./detalhes-armas/detalhes-armas.module').then( m => m.DetalhesArmasPageModule)
  },
  {
    path: 'listar-mapas',
    loadChildren: () => import('./listar-mapas/listar-mapas.module').then( m => m.ListarMapasPageModule)
  },
  {
    path: 'listar-bundles',
    loadChildren: () => import('./listar-bundles/listar-bundles.module').then( m => m.ListarBundlesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
