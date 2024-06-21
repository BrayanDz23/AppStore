import { Component, Input,  inject, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { CommonModule } from '@angular/common';
import { Product } from '../../../shared/models/product.model';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { CartService } from '../../../shared/services/cart.service';
import { ProductService } from '../../../shared/services/product.service';
import { CategoryService } from '../../../shared/services/category.service';
import { Category } from '../../../shared/models/category.model';
import { RouterLinkWithHref } from '@angular/router';

CommonModule
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, HeaderComponent, RouterLinkWithHref],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export default class ListComponent {

  products = signal<Product[]>([]);
  category = signal<Category[]>([]);

  @Input() category_id?:string;

  private CartService = inject(CartService);
  private productService= inject(ProductService);
  private categoryService= inject(CategoryService);



  ngOnInit() {
    this.getCategories();


  }

  ngOnChanges() {

     this.getProducts();
  }


  addToCart(producto:  Product){
   this.CartService.addToCart(producto);
  }


  private getProducts(){
    this.productService.getProducts(this.category_id).subscribe({
      next: (products) =>{
        this.products.set(products);
      },
      error: () => {

      }
    })
  }

  private getCategories(){
    this.categoryService.getAll().subscribe({
      next: (category) =>{
        this.category.set(category);
      },
      error: () => {

      }
    })
  }

}

