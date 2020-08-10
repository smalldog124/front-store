import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TypeSellingComponent } from './type-selling/type-selling.component'

const routes: Routes = [
{ path: 'type-selling',component: TypeSellingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
