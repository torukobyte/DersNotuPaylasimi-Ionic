import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: 'giris',
        loadChildren: () => import('./giris/giris.module').then(m => m.GirisPageModule)
    },

    {
        path: '',
        redirectTo: 'giris',
        pathMatch: 'full'
    },
    {
        path: 'uye-ol',
        loadChildren: () => import('./uye-ol/uye-ol.module').then(m => m.UyeOlPageModule)
    },
    {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
    },
  {
    path: 'not-ekle',
    loadChildren: () => import('./not-ekle/not-ekle.module').then( m => m.NotEklePageModule)
  },
  {
    path: 'full-not/:id',
    loadChildren: () => import('./full-not/full-not.module').then( m => m.FullNotPageModule)
  },
  {
    path: 'edit-not/:id',
    loadChildren: () => import('./edit-not/edit-not.module').then( m => m.EditNotPageModule)
  },

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
