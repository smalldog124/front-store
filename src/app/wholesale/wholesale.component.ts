import { AfterContentInit, Component, ViewChild } from '@angular/core';
import { Basket, BasketService, } from '../basket.service';
import { Product, ProductService } from '../product.service'
import { FormGroup, FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-wholesale',
  templateUrl: './wholesale.component.html',
  styleUrls: ['./wholesale.component.css']
})
export class WholesaleComponent implements AfterContentInit {
  date: number = Date.now()
  basket: Basket[] = [];
  total_price: number;
  errorText: string;
  dataSource: MatTableDataSource<Product>
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private basketService: BasketService, private productService: ProductService) { }

  ngAfterContentInit(): void {
    this.addBasketForm.patchValue({ quantity: 1 });
    this.basket = this.basketService.getItems();
    this.total_price = this.basketService.getTotalPrice().wholesale_total;
  }
  displayedColumnsBill: string[] = ['no', 'name', 'unit', 'quantity', 'wholesale_price', 'amount'];
  displayedColumns: string[] = ['no', 'name', 'unit', 'quantity', 'wholesale_price', 'amount','choose'];
  displayedColumnsSearch: string[] = ['no', 'name', 'unit', 'front_store_price', 'wholesale_price','choose'];
  addBasketForm = new FormGroup({
    barcode: new FormControl(''),
    quantity: new FormControl(''),
  });
  scanBarcode() {
    const dataForm = this.addBasketForm.value;
    this.addToBasket(dataForm.barcode,dataForm.quantity)
    this.addBasketForm.reset();
    this.addBasketForm.patchValue({ quantity: 1 });
  }
  removeItem(id: number) {
    this.basketService.removeItem(id);
    this.basket = this.basketService.getItems();
    this.total_price = this.basketService.getTotalPrice().wholesale_total;
  }
  clearCart() {
    this.basket = this.basketService.clearCart();
    this.total_price = 0;
  }

  search(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    if (filterValue.length < 2){
      this.dataSource = undefined
      return
    }
    this.productService.getByName(filterValue).subscribe(
      (data) => {
      if (data === null){
        this.dataSource = undefined
        return
      }
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    },
    (error)=>{
      this.errorText = "ดึงข้อมูลไม่สำเร็จ";
    })
  }

  addToBasket(barcode: string, quantity: number){
    this.productService.getByBracode(barcode).subscribe((data) => {
      this.basketService.addToCart(data, quantity);
      this.total_price = this.basketService.getTotalPrice().wholesale_total;
      this.basket = this.basketService.getItems();
      this.errorText = "";
    }, (error) => {
      if (error.status == 405) {
        this.errorText = "สินค้ายังไม่มีในระบบ กรุณาเพิ่มสินค้า";
        console.log('not found product!');
      } else {
        console.log('find error product!');
      }
    });
  }
}
