import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { SortPipe } from './pipes/sort.pipe';


@NgModule({
  declarations: [
    ProductPageComponent,
    SortPipe
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
