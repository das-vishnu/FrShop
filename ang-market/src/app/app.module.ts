import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductlistComponent } from './components/productlist/productlist.component';

import { HttpClientModule} from '@angular/common/http'
import { ProductService } from './services/product.service';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { SearchComponent } from './components/search/search.component';
import { ProdDetailsComponent } from './components/prod-details/prod-details.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    PagenotfoundComponent,
    SearchComponent,
    ProdDetailsComponent,
    CartComponent
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    NgbModule
   
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
