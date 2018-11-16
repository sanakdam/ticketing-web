import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ValidationComponent } from './validation/validation.component';
import { CountingComponent } from './counting/counting.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DecreaseComponent } from './decrease/decrease.component';

const routes: Routes = [
  { path: 'validation', component: ValidationComponent },
  { path: 'counting', component: CountingComponent },
  { path: 'decrease', component: DecreaseComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
