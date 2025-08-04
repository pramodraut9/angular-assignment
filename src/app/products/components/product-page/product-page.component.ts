import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent implements OnInit {
  products: any[] = [];

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
  }
}
