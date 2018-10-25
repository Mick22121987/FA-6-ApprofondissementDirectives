import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor = 'transparent';
  @HostBinding('style.color') color = 'blue';
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    // this.el.nativeElement.style.color = 'red';
    // this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
  }

  @HostListener('click') click(event: Event) {
    // this.renderer.setStyle(this.el.nativeElement, 'background-color', 'black');
    this.backgroundColor = 'yellow';
  }
}
