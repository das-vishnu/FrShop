import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/commom/cart-item';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  totalPrice:number=10;
  cartItem:CartItem[]=[];
  quantity:number=1;
 T:number=0;

  constructor(private _cartService:CartService) { }

  ngOnInit(): void {
    this.updateCartStatus();
  }

  updateCartStatus(){
    this.cartItem=this._cartService.cartItems;
    this.totalPrice=this._cartService.P;
    this.sum();
    this._cartService.totalPrice.subscribe(data=>this.totalPrice=data);
    
    
  }
  sum(){
    for(let x of this.cartItem)
    {
      this.T=this.T+(x.unitPrice*x.quantity)
    }
  }


}
