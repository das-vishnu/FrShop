import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../commom/product';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _Url ="http://localhost:8080/api/v1/product-details";
  //?size=100 : to display max 100 itm else 0nly 20 
  constructor(private _http:HttpClient) { }

  getData(): Observable<Product[]>{
    const Url= `${this._Url}?size=100`;
    return this._http.get<GetdataResponse>(Url)
    .pipe(map(response => response._embedded.product))
  }

  searchname(keyword:string): Observable<Product[]>{
    const searchUrl= `${this._Url}/search/productname?name=${keyword}`;
    return this._http.get<GetdataResponse>(searchUrl)
    .pipe(map(response => response._embedded.product));
  }
  getDetail(PId:number): Observable<Product>{
    const deatailUrl=`${this._Url}/${PId}`;
    return this._http.get<Product>(deatailUrl);
  }
}

interface GetdataResponse{
  _embedded:{
    product: Product[];
  }

}