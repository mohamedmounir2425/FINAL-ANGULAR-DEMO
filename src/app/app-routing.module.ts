
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { DashboardProductComponent } from './components/dashboard-product/dashboard-product.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { PDetailsComponent } from './components/p-details/p-details.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductsManagementComponent } from './components/products-management/products-management.component';
import { ProductsComponent } from './components/products/products.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login/:id', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'notFoundPage', component: NotFoundPageComponent },
  // {path:'productDetails',component:ProductDetailsComponent},
  { path: 'productdash', component: DashboardProductComponent },
  { path: 'productdash/:id', component: DashboardProductComponent },
  // { path: "users/:id",component:UsersComponent},
  { path: 'productform', component: ProductsManagementComponent },
  { path: 'productform/new', component: ProductsManagementComponent },
  { path: 'productform/:id', component: ProductsManagementComponent },
  // { path: "login/new",component:LoginComponent},
  // { path: "login/:id",component:LoginComponent},
  { path: 'productdetail/:id', component: ProductDetailsComponent },
  { path: 'pdetail/:id', component: PDetailsComponent },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
