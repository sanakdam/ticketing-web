import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ValidationComponent } from './validation/validation.component';
import { CountingComponent } from './counting/counting.component';

const routes: Routes = [
  { path: 'validation', component: ValidationComponent },
  { path: 'counting', component: CountingComponent }
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
