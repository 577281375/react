import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeTopComponent } from './home-top/home-top.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ListComponent } from './list/list.component';
import { FilterPipe } from './pipe/filter.pipe';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeTopComponent,
    HomeContentComponent,
    LoginComponent,
    RegisterComponent,
    ListComponent,
    FilterPipe,
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
