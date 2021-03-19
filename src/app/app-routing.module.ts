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
    path: 'registrieren',
    loadChildren: () => import('./registrieren/registrieren.module').then( m => m.RegistrierenPageModule)
  },
  {
    path: 'tutorial1',
    loadChildren: () => import('./tutorial1/tutorial1.module').then( m => m.Tutorial1PageModule)
  },
  {
    path: 'tutorial2',
    loadChildren: () => import('./tutorial2/tutorial2.module').then( m => m.Tutorial2PageModule)
  },
  {
    path: 'tutorial3',
    loadChildren: () => import('./tutorial3/tutorial3.module').then( m => m.Tutorial3PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
