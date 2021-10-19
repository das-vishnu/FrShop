import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductlistComponent } from './components/productlist/productlist.component';

import { HttpClientModule} from '@angular/common/http'
import { ProductService } from './services/product.service';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { SearchComponent } from './components/search/search.component';
import { ProdDetailsComponent } from './components/prod-details/prod-details.component'
@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    PagenotfoundComponent,
    SearchComponent,
    ProdDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
