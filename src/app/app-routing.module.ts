import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopSaleComponent } from './shop-sale/shop-sale.component'
import { WholesaleComponent } from './wholesale/wholesale.component'
import { AddProductComponent } from './add-product/add-product.component'
import { EditProductComponent } from './edit-product/edit-product.component';

const routes: Routes = [
  { path: 'shop-sale', component: ShopSaleComponent },
  { path: 'wholesale', component: WholesaleComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'edit-product/:barcode', component: EditProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
