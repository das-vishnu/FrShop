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
import { CartbuttonComponent } from './components/cartbutton/cartbutton.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { OktaAuth } from '@okta/okta-auth-js';
import { LoginstatComponent } from './components/loginstat/loginstat.component';

import { OKTA_CONFIG, OktaAuthModule,OktaCallbackComponent } from '@okta/okta-angular';
import appconfig from './config/appconfig';
import { inject } from '@angular/core/testing';
import { Router } from '@angular/router';
import { ProductAddComponent } from './components/product-add/product-add.component';
const oktaconfig =Object.assign({
  onAuthRequired:(injector: { get: (arg0: typeof Router) => any; } )=>{ //oktaAuth
    const router= injector.get(Router);
    router.navigate(['/login']);
  }
}, appconfig.oidc);
@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    PagenotfoundComponent,
    SearchComponent,
    ProdDetailsComponent,
    CartComponent,
    CartbuttonComponent,
    LoginComponent,
    // OktaAuthModule,
    LoginstatComponent,
    ProductAddComponent
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    NgbModule,
    FormsModule,
    OktaAuthModule
   
  ],
  providers: [
    ProductService,{provide:OKTA_CONFIG, useValue:oktaconfig}
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
