
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../shared/models/product.model';
import { CommonModule } from '@angular/common';
import { ReveersePipe } from '../../../shared/pipes/reveerse.pipe';
import { TimeAgoPipe } from './../../../shared/pipes/time-ago.pipe';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, ReveersePipe,TimeAgoPipe ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  @Input({required:true}) product!: Product;


  @Output() addToCart = new EventEmitter();

  addToCartHandler(){
    console.log('clic form child');
    this.addToCart.emit(this.product);
  }
}
