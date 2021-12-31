import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { Subject } from 'rxjs';
import { CartItem } from '../commom/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems:CartItem[]=[];
  P:number=0;
  isAuthenticated:boolean=false;
  userName:string='x';
  totalItem: Subject<number> =new Subject<number>();
 
  totalPrice: Subject<number> =new Subject<number>();

//storage:Storage=sessionStorage; //cach from browser
storage:Storage=localStorage;


  constructor(private _oktaauthsrvice:OktaAuthService) { 
    //data from storage to avid refresh issue
    
    this.chkUser();
     let data = JSON.parse( this.storage.getItem('cItem')! );//cItem key

     if(data!=null){
        this.cartItems = data;
      
       this.calculateItemPrice(); /////<-----new 
     }

  }

// auth
chkUser(){
  this._oktaauthsrvice.$authenticationState.subscribe(
    (result) => {
      this.isAuthenticated=result;})
      return 0;
     
}

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

//for storage


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
    this.persistCartitem(); 
  }

  persistCartitem(){
    this.storage.setItem('cItem',JSON.stringify(this.cartItems)); //api work for string so stringfy the value
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
