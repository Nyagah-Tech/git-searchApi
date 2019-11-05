import { Directive ,ElementRef,HostListener,Renderer2} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  
  constructor(private elem:ElementRef, private render:Renderer2) {}

  @HostListener("mouseenter") onclicks(){
    this.render.setStyle(this.elem.nativeElement, 'color', 'blue')
  }

  @HostListener("mouseleave") onDoubleClicks(){
    this.render.setStyle(this.elem.nativeElement, 'color', 'black')
  }



}
