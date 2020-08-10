import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopSaleComponent } from './shop-sale/shop-sale.component'

const routes: Routes = [
{ path: 'shop-sale',component: ShopSaleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
