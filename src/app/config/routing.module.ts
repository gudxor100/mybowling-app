import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../component/login.component';
import { MainComponent } from '../component/main.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'main', component: MainComponent},
  {path: '**', component: LoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
