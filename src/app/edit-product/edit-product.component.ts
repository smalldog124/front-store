import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

export interface Product {
  id: number;
  name: string;
  barcode: string;
  front_store_price: string;
  wholesale_price: string;
  quantity: number;
  unit_type: string;
}

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})

export class EditProductComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) { }

  errorText: string = '';
  productID: number;

  ngOnInit(): void {
    let barcode: string = this.route.snapshot.paramMap.get('barcode');
    this.productService.getByBracode(barcode).subscribe((data) => {
      this.productID = data.id
      this.editProductForm.patchValue({
        product_id: this.productID,
        barcode: data.barcode,
        name: data.name,
        front_store_price: data.front_store_price,
        wholesale_price: data.wholesale_price,
        quantity: data.quantity,
        unit_type: data.unit_type
      });
    }, (error) => {
      console.log(error);
      this.errorText = "ไม่พบข้อมูลในระบบ";
    })
  }

  editProductForm = new FormGroup({
    product_id: new FormControl({ value: null, disabled: true }),
    barcode: new FormControl(''),
    name: new FormControl(''),
    front_store_price: new FormControl(''),
    wholesale_price: new FormControl(''),
    quantity: new FormControl(''),
    unit_type: new FormControl(''),
  })

  updateProduct() {
    const p = this.editProductForm.value;
    const product: Product = {
      id: this.productID,
      name: p.name,
      barcode: p.barcode,
      front_store_price: p.front_store_price.toString(),
      wholesale_price: p.wholesale_price.toString(),
      quantity: p.quantity,
      unit_type: p.unit_type,
    }

    this.productService.updateProduct(product).subscribe((data) => {
      this.router.navigate(['/add-product']);
    }, (error) => {
      console.log('update product', error);
      this.errorText = 'อัพเดทข้อมูลไม่สำเร็จ';
    })
  }
}
