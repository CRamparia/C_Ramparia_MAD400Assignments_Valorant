import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective implements OnInit{

  @Input() e: any;

  constructor(private elm: ElementRef) {}
  ngOnInit(): void {
    
  }

  @HostListener('mouseenter') onMouseOver(){
    if(this.e == 'type'){
      this.hoverUnderline();
    }else if(this.e == 'ability'){
      this.makeItBold();
    }
  }

  @HostListener('mouseleave') onMouseOut(){
    if(this.e == 'type'){
      this.removeUnderline();
    }else if(this.e == 'ability'){
      this.makeItNormal();
    }
  }

  private hoverUnderline() {
    this.elm.nativeElement.style.textDecoration = 'underline';
  }
  private removeUnderline(){
    this.elm.nativeElement.style.textDecoration = 'none';
  }

  private makeItBold(){
    this.elm.nativeElement.style.fontWeight = 'bold';
  }

  private makeItNormal(){
    this.elm.nativeElement.style.fontWeight = 'normal';
  }

  
}
