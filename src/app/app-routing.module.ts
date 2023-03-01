import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpisokComponent } from './spisok/spisok.component';
import { DetaliComponent } from './detali/detali.component';


const routes: Routes = [
  { path: '', redirectTo:'/filmbl', pathMatch:'full'},
  { path: 'filmbl', component: SpisokComponent},
  { path: 'detali/:id', component: DetaliComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
