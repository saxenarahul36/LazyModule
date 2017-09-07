import { Component, OnInit} from "@angular/core";
import { CardService } from "./credit-card-service";
import { CreditCardMaskPipe } from "./credit-card-pipe";
@Component({
selector:'app-credit-card',
template: `
<p>Your credit card is: {{ creditCardNumber | creditCardMask }}</p>
`


})

export class CreditCardComponent implements OnInit{
    creditCardNumber : string ='';
    constructor (private _card: CardService){  

    }
    ngOnInit(){

        this.creditCardNumber=  this._card.getcardNumber()
    }


    




}