import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlightroutesComponent } from './flightroutes/flightroutes.component';


const routes: Routes = [
  { path : 'flightroutes', component : FlightroutesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
