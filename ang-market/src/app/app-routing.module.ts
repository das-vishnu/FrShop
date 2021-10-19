import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { ProdDetailsComponent } from './components/prod-details/prod-details.component';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  {path: 'home', component: ProductlistComponent},
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
