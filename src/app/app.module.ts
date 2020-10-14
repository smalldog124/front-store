import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TypeSellingComponent } from './type-selling/type-selling.component';
import { ShopSaleComponent } from './shop-sale/shop-sale.component';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { WholesaleComponent } from './wholesale/wholesale.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { NgxPrintModule } from 'ngx-print';
import { AddProductComponent } from './add-product/add-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditProductComponent } from './edit-product/edit-product.component';
import { MatPaginatorModule } from '@angular/material/paginator';

const material = [
  MatSortModule,
  MatIconModule,
  MatGridListModule,
  MatRadioModule,
  MatButtonToggleModule,
  MatTableModule,
  MatPaginatorModule
];

@NgModule({
  declarations: [
    AppComponent,
    TypeSellingComponent,
    ShopSaleComponent,
    WholesaleComponent,
    AddProductComponent,
    EditProductComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPrintModule,
    material
  ],
  providers: [],
  exports: [
    material
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
