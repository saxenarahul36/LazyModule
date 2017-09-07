import {AfterContentInit, Component, ElementRef, ViewContainerRef} from '@angular/core';


@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
  
})
export class HomeComponent {

  node: string;
  name: string;
  
  constructor(private viewContainerRef: ViewContainerRef) {
  }
  
  ngAfterContentInit() {
    let elementRef = this.viewContainerRef.element;
    const tmp = document.createElement('div');
    const el = elementRef.nativeElement.cloneNode(true);
    
    console.log(elementRef)
    console.log(this.viewContainerRef)
    
    tmp.appendChild(el);
    this.node = tmp.innerHTML;
    // // this.name=this._card.getcardNumber()
  }


}
