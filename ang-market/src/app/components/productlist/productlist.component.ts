import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/commom/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  
  product!:Product[];
  chk_key!:boolean;
 
  

  constructor(private _productservice: ProductService, private _activatedRoute:ActivatedRoute) {

   }

  ngOnInit(): void {

    this._activatedRoute.paramMap.subscribe(()=>{this.listProduct()});
  }

  listProduct(){
   this.chk_key=this._activatedRoute.snapshot.paramMap.has('keyword');
   if(this.chk_key)
   {
     this.searchHandle();
   }
   else{
     this.productHandle();
   }
  }

  productHandle(){
    this._productservice.getData().subscribe(
      data => this.product=data);
  }
  searchHandle(){

     
    const key:any=this._activatedRoute.snapshot.paramMap.get('keyword');
    this._productservice.searchname(key).subscribe(data =>this.product=data)
  }
}
