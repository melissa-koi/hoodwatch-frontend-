import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessComponent } from './components/business/business.component';
import { HoodComponent } from './components/hood/hood.component';

const routes: Routes = [
  {path:'hoods',component:HoodComponent},
  {path:'business',component:BusinessComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
