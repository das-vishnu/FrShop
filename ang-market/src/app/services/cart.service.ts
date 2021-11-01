import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CartItem } from '../commom/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems:CartItem[]=[];
  P:number=0;
  totalItem: Subject<number> =new Subject<number>();
 
  totalPrice: Subject<number> =new Subject<number>();


  constructor() { }
// add tothe cart
  addToCart(CartItem:CartItem){
    let InCart:boolean =false;
    let InCartItem: CartItem;
   
    if(this.cartItems.length>0){
      InCartItem=this.cartItems.find(tempCartItem=>tempCartItem.id===CartItem.id) as CartItem;
      
      InCart=(InCartItem!=undefined)


    }
   if(InCart){
     console.log("alredy in");
   }
   else{
     this.cartItems.push(CartItem);
    
     this.calculateItemPrice();
   }

  }

  calculateItemPrice(){
    let totalItemvalue:number=0;
    let Itemcount: number=0;

    for(let currentcartItem of this.cartItems){
      totalItemvalue += currentcartItem.quantity*currentcartItem.unitPrice;
      Itemcount+=currentcartItem.count;

    }
    console.log(`total item value = ${totalItemvalue}`);
    this.P=totalItemvalue;
    this.totalPrice.next(totalItemvalue);

    
    this.totalItem.next(Itemcount);
    console.log(`total item value = ${Itemcount}`);
  }
  remove(cartItem:CartItem){
    const itemIndex = this.cartItems
                          .findIndex(
                            tempCartItem => tempCartItem.id === cartItem.id
                          );

    if (itemIndex > -1) {
      this.cartItems.splice(itemIndex, 1);
      this.calculateItemPrice();
    }
    
    
  }
  
}
