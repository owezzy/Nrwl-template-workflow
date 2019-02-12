import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '@workshop/ui-login';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', loadChildren: './home/home.module#HomeModule' },
  { path: 'projects', loadChildren: './projects/projects.module#ProjectsModule' },
  { path: 'customers', loadChildren: './customers/customers.module#CustomersModule' },

  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
