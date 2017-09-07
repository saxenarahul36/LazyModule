import { NgModule,ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import {CreditCardComponent } from "./credit-card-component";
import {CardService } from "./credit-card-service";
import { CreditCardMaskPipe } from "./credit-card-pipe";

import { routing } from './card-routing';
@NgModule({

 imports :[routing],
 declarations :[CreditCardComponent,CreditCardMaskPipe],
 providers:[CardService],

})

export class CardModule{

    // static fooRoot() :  ModuleWithProviders{

    //      return {
    //       ngModule:CardModule,
    //       providers:[CardService]

    //     }
    //  }


}