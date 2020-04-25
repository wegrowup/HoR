import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { FbodyComponent } from './fbody/fbody.component';
import { TtoffresComponent } from './ttoffres/ttoffres.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LeftcompComponent } from './leftcomp/leftcomp.component';
import { RightcompComponent } from './rightcomp/rightcomp.component';
import { EntrepriseSingUpComponent } from './entreprise-sing-up/entreprise-sing-up.component';


const routes: Routes = [  {path:'contact' ,component:ContactComponent},
  { path: 'fbody', component: FbodyComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'ttoffres', component: TtoffresComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'rightcomp', component: RightcompComponent },
  { path: 'leftcomp', component: LeftcompComponent },
  { path: 'entrepriseSignUp', component: EntrepriseSingUpComponent },
{path:'' ,redirectTo:'/fbody', pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
