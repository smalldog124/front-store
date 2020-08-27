import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProductService, Product } from '../product.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  dataSource: any
  constructor(private productService: ProductService) { }
  ELEMENT_DATA: Observable<Product[]>;
  ngOnInit(): void {
    this.productService.getAll().subscribe(
      (data:Product[]) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.sort = this.sort;
      },
      (error)=>{
        this.errorText = "call api product fail";
      }
    )
  }

  errorText: string
  addProductForm = new FormGroup({
    barcode: new FormControl(''),
    name: new FormControl(''),
    front_store_price: new FormControl(''),
    wholesale_price: new FormControl(''),
    quantity: new FormControl(''),
  })

  onSubmit() {
    const newProduct = this.addProductForm.value
    this.productService.newProduct(newProduct).subscribe(
      (data) => {
        this.errorText = "";
      },
      (error) => {
        this.errorText = "call api product fail";
      })
  }

  displayedColumns: string[] = ['barcode', 'name', 'front_store_price', 'wholesale_price', 'quantity'];

  @ViewChild(MatSort, { static: true }) sort: MatSort;

}
