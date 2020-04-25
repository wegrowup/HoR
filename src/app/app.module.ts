import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { FbodyComponent } from './fbody/fbody.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ContactService } from 'src/services/contact.service';
import { TtoffresComponent } from './ttoffres/ttoffres.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LeftcompComponent } from './leftcomp/leftcomp.component';
import { RightcompComponent } from './rightcomp/rightcomp.component';
import { EntrepriseSingUpComponent } from './entreprise-sing-up/entreprise-sing-up.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContactComponent,
    FbodyComponent,
    TtoffresComponent,
    RegisterComponent,
    LoginComponent,
    LeftcompComponent,
    RightcompComponent,
    EntrepriseSingUpComponent,
  ],
  imports: [
    BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule

  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
