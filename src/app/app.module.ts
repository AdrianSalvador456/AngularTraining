 import { BrowserModule } from '@angular/platform-browser';

 import { AppRoutingModule } from './app-routing.module';
 import { AppComponent } from './app.component';
 import { PersonComponent } from './person.compontent';
 import { NgModule } from '@angular/core';
 
 @NgModule({
    declarations: [
        AppComponent,
        PersonComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
 })
 export class AppModule { }