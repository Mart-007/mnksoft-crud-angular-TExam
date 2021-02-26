import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ListNameComponent } from './user/list-name/list-name.component';
import { AddNameComponent } from './user/add-name/add-name.component';
import { EditNameComponent } from './user/edit-name/edit-name.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListNameComponent,
    AddNameComponent,
    EditNameComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
