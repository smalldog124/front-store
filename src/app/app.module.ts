import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TypeSellingComponent } from './type-selling/type-selling.component';
import { ShopSaleComponent } from './shop-sale/shop-sale.component';
import { MatSortModule } from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon'; 

const material = [
  MatSortModule,
  MatIconModule
];

@NgModule({
  declarations: [
    AppComponent,
    TypeSellingComponent,
    ShopSaleComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    material
  ],
  providers: [],
  exports:[
    material
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
