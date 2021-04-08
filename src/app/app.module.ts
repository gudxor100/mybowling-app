import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './config/routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login.component';
import { MainComponent } from './component/main.component';
import { RecentComponent } from './component/recent.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    RecentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
