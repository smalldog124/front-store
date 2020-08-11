import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TypeSellingComponent } from './type-selling/type-selling.component';
import { ShopSaleComponent } from './shop-sale/shop-sale.component';
import { MatSortModule } from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';
import { WholesaleComponent } from './wholesale/wholesale.component'; 
import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatRadioModule} from '@angular/material/radio'; 
import {MatButtonToggleModule} from '@angular/material/button-toggle'; 

const material = [
  MatSortModule,
  MatIconModule,
  MatGridListModule,
  MatRadioModule,
  MatButtonToggleModule
];

@NgModule({
  declarations: [
    AppComponent,
    TypeSellingComponent,
    ShopSaleComponent,
    WholesaleComponent,
    
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
