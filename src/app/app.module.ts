import { NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import bootstrap from '../main.server';
bootstrap: [AppComponent]

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
export class AppModule {}