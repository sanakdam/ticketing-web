import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ScanComponent } from './scan/scan.component';
import { ValidationComponent } from './validation/validation.component';
import { CountingComponent } from './counting/counting.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DecreaseComponent } from './decrease/decrease.component';
import { TiketComponent } from './tiket/tiket.component';

const routes: Routes = [
  { path: 'validation', component: ValidationComponent },
  { path: 'scan', component: ScanComponent },
  { path: 'counting', component: CountingComponent },
  { path: 'decrease', component: DecreaseComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'tiket', component: TiketComponent }

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
