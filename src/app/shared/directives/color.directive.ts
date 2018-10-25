import { Directive, ElementRef, OnInit, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    // this.el.nativeElement.style.color = 'red';
    this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
  }

  @HostListener('click') click(event: Event) {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'black');
  }
}
