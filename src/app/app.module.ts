import {NgModule} from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { CardModule } from "./creditcard/card.module";

import { routing } from './app.routes';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
@NgModule({
imports:[
    BrowserModule,
    routing,
    // CardModule.fooRoot()

],

declarations:[HomeComponent,
    AppComponent,
    AboutComponent

],
bootstrap:[AppComponent]
})

export class AppModule{


}