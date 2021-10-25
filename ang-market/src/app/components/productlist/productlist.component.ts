import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/commom/product';
import { ProductService } from 'src/app/services/product.service';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  
  product:Product[]=[];
  chk_key:boolean=false;

//front side pageing
  // p:number=0;

  // pageSize=8;
 
  //server side paging

  currentPage:number=1; //in ng start at 1 and in spring it is 0
  pageSize:number=8;
  totalRecords:number=0;

  constructor(private _productservice: ProductService, private _activatedRoute:ActivatedRoute, private _ngbConfig:NgbPaginationConfig) {
        _ngbConfig.maxSize=3;
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

  // productHandle(page:any){
  //   this._productservice.getData(this.pageSize,page).subscribe(
  //     data => {this.product=data; console.log(data.length)});
  // }

   productHandle(){
     this._productservice.getData(this.currentPage-1,this.pageSize).subscribe(this.pagin()
       );
   }
  searchHandle(){

     
    const key:any=this._activatedRoute.snapshot.paramMap.get('keyword');
    this._productservice.searchname(key,this.currentPage-1,this.pageSize).subscribe(this.pagin())
  }

  pagin(){
    return (data: { _embedded: { product: Product[]; }; page: { number: number; totalElements: number; size: number; }; }) => {
      this.product= data._embedded.product;
      this.currentPage=data.page.number +1;//page number
      this.totalRecords=data.page.totalElements;
     this.pageSize=data.page.size;
     console.log(data);
     }
  }

    addToCart(x:Product){
      console.log(`${x.name}`)
    }
}
