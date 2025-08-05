import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guard/auth.guard';
import { MainLandingComponent } from './shared/components/main-landing/main-landing.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '', component: MainLandingComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
        data: { title: 'Dashboard' }
      },
      {
        path: 'users',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('./users/users.module').then((m) => m.UsersModule),
        data: { title: 'User page' }
      },
      {
        path: 'products',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('./products/products.module').then((m) => m.ProductsModule),
        data: { title: 'Product Page' }
      },
    ],
  },

  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
