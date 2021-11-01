import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cartbutton',
  templateUrl: './cartbutton.component.html',
  styleUrls: ['./cartbutton.component.css']
})
export class CartbuttonComponent implements OnInit {

  totalItem:number=0;


  constructor( private _cartService:CartService) { }

  ngOnInit(): void {
    this.count();
  }
  count(){
    this._cartService.totalItem.subscribe(data => this.totalItem=data);
  }

}
