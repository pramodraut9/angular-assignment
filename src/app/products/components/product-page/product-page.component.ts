import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent implements OnInit {
  products: any[] = [];

  constructor(private _apiService: ApiService) {}

  ngOnInit(): void {
    const sampleDesc =
      'The Essence Mascara Lash Princess is a popular mascara known for its volumizing.';
    this.products = Array.from({ length: 8 }, (_, i) => ({
      id: i + 1,
      title: 'Essence Mascara Lash Princess',
      description: `${sampleDesc} View More`,
      category: 'Beauty',
      price: 9.99,
    }));
    this.getProductData();
  }

  private getProductData() {
    try {
      this._apiService.getAllProducts().subscribe((res) => {
        console.log(res, 'ress');
      });
    } catch (error) {
      console.error(error);
    }
  }
}
