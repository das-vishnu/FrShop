import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/commom/product';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-prod-details',
  templateUrl: './prod-details.component.html',
  styleUrls: ['./prod-details.component.css']
})
export class ProdDetailsComponent implements OnInit {

  product: Product = new Product();

  constructor(private _activatedRoute: ActivatedRoute, private _productService: ProductService) 
  {

   }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(()=>this.getDeatails());
  }

  getDeatails(){
    const id: any = this._activatedRoute.snapshot.paramMap.get('id');
    
    this._productService.getDetail(id).subscribe(data => {this.product=data})

  }

}
