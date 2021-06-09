import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessComponent } from '../app/components/business/business.component';
import { HoodComponent } from '../app/components/hood/hood.component';

const routes: Routes = [
  {path:'hoods',component:HoodComponent},
  {path:'business',component:BusinessComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
