import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProductService, Product } from '../product.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  dataSource: any
  constructor(private productService: ProductService, private router: Router) { }
  
  ELEMENT_DATA: Observable<Product[]>;
  ngOnInit(): void {
    this.getProduct()
  }

  errorText: string
  addProductForm = new FormGroup({
    barcode: new FormControl(''),
    name: new FormControl(''),
    front_store_price: new FormControl(''),
    wholesale_price: new FormControl(''),
    quantity: new FormControl(''),
    unit_type: new FormControl(''),
  })
  @ViewChild("barcode") barcodeField: ElementRef;
  onSubmit() {
    const newProduct = this.addProductForm.value
    this.productService.newProduct(newProduct).subscribe(
      (data) => {
        this.errorText = "";
        this.getProduct()
      },
      (error) => {
        if (error.status == 405){
          this.errorText = "ข้อมูลมีในระบบแล้ว";
        }else{
          this.errorText = "บันทึกข้อมูลไม่สำเร็จ";
        }
      })
      this.addProductForm.reset();
      this.barcodeField.nativeElement.focus();
  }

  getProduct(){
    this.productService.getAll().subscribe(
      (data:Product[]) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.sort = this.sort;
      },
      (error)=>{
        this.errorText = "ถึงข้อมูลไม่สำเร็จ";
      }
    )
  }

  editProduct(barcode: number){
    this.router.navigate(['/edit-product',barcode]);
  }

  displayedColumns: string[] = ['barcode', 'name', 'front_store_price', 'wholesale_price', 'unit_type','quantity','option'];

  @ViewChild(MatSort, { static: true }) sort: MatSort;

}