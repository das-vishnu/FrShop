import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OktaAuthGuard, OktaCallbackComponent } from '@okta/okta-angular';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { ProdDetailsComponent } from './components/prod-details/prod-details.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  {path:'admin', component: ProductAddComponent, canActivate:[OktaAuthGuard]},
  {path: 'login/callback', component:OktaCallbackComponent},
  {path:'login', component:LoginComponent},
  {path: 'home', component: ProductlistComponent},
  {path: 'home/cart', component: CartComponent},

  {path: 'home/:id', component: ProdDetailsComponent},
  {path: 'search/:keyword', component: ProductlistComponent},
  
  {path: '', redirectTo: '/home', pathMatch:'full'},
  {path:'**', component:PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
