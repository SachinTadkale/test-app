import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormsModule, NgFor], // Fixed spacing
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'] // Fixed incorrect 'styleUrl' to 'styleUrls' (array format)
})
export class ProductComponent {

  product: any = {
    id: '',
    name: '',
    price: ''
  };

  productsArray: any[] = [];

  constructor() {}

  loadProducts(): void {
    
  }

  saveProduct(): void {
  
      this.productsArray.push({ ...this.product }); // Cloning object before adding
   
    this.resetForm();
    this.loadProducts();
  }

  editProduct(product: any): void {
    this.product = { ...product }; // Assign the selected product to edit
  }

  deleteProduct(id: number): void {
    this.productsArray = this.productsArray.filter(product => product.id !== id);
  }

  resetForm(): void {
    this.product = { id: '', name: '', price: '' }; // Resetting values correctly
  }
}
