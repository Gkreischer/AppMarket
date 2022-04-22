import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./components/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./components/cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'product/:id',
    loadChildren: () => import('./components/product/product.module').then( m => m.ProductPageModule)
  },  {
    path: 'favorites',
    loadChildren: () => import('./components/favorites/favorites.module').then( m => m.FavoritesPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./components/contact/contact.module').then( m => m.ContactPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
