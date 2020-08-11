import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopSaleComponent } from './shop-sale/shop-sale.component'
import { WholesaleComponent } from './wholesale/wholesale.component'

const routes: Routes = [
{ path: 'shop-sale',component: ShopSaleComponent},
{ path: 'wholesale',component: WholesaleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
