import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

// constant
import { appPath } from './app-path.const';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: appPath.home,
    loadChildren: './home/home.module#HomeModule'
    // component: HomeComponent
  },
  {
    path: appPath.products,
    loadChildren: './product-section/product-section.module#ProductSectionModule'
  },
  {
    path: appPath.login,
    loadChildren: './login/login.module#LoginModule'
  },
  {
    path: appPath.cart,
    loadChildren: './cart/cart.module#CartModule'
  },
  {
    path: appPath.checkout,
    loadChildren: './checkout/checkout.module#CheckoutModule'
  },
  {
    path: appPath.success,
    loadChildren: './success/success.module#SuccessModule'
  },
  {
    path: '**',
    redirectTo: appPath.home,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules // 預先載入
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
