import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { NewComponent } from './component/new/new.component';
import { ProductsComponent } from './component/products/products.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'new',component:NewComponent},
  {path:'products',component:ProductsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
