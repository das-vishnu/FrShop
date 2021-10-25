import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CartItem } from '../commom/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems:CartItem[]=[];
  totalQuantity: Subject<number> =new Subject<number>();


  constructor() { }

  addToCart(CartItem:CartItem){
    let InCart:boolean =false;
    let InCartItem: CartItem;
    if(this.cartItems.length>0){
      InCartItem=this.cartItems.find(tempCartItem=>tempCartItem.id===CartItem.id) as CartItem;
      

    }

  }
}
