import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Input } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { FbodyComponent } from './fbody/fbody.component';
import { Routes, RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms';
import { ContactService } from 'src/services/contact.service';
import { TtoffresComponent } from './ttoffres/ttoffres.component';
import { RegisterComponent } from './register/register.component';

const routes:Routes=[
  {path:'contact' ,component:ContactComponent},
  {path:'fbody' ,component:FbodyComponent},
  {path:'menu' ,component:MenuComponent},
  {path:'ttoffres' ,component:TtoffresComponent},
  {path:'register' ,component:RegisterComponent},

  {path:'' ,redirectTo:'/fbody', pathMatch: 'full'},
];


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContactComponent,
    FbodyComponent,
    TtoffresComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes), AppRoutingModule, FormsModule,
  
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
