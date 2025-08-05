import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent implements OnInit {
  products: any[] = [];
  isLoading = false;
  sortDirection: 'asc' | 'desc' = 'asc';

  constructor(private _apiService: ApiService) { }

  ngOnInit(): void {
    this.getProductData();
  }

  private getProductData() {
    this.isLoading = true;
    this._apiService.getAllProducts().subscribe(
      (res: any) => {
        this.products = res.products;
        this.sortByPrice();
        this.isLoading = false;
      },
      (error) => {
        console.error(error);
        this.isLoading = false;
      }
    );
  }

  toggleSort() {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    this.sortByPrice();
  }

  private sortByPrice() {
    this.products.sort((a, b) => {
      return this.sortDirection === 'asc'
        ? a.price - b.price
        : b.price - a.price;
    });
  }
}