import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlightroutesComponent } from './flightroutes/flightroutes.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path : 'flightroutes', component : FlightroutesComponent },
  { path : '', component : HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
