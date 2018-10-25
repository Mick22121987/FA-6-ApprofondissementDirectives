import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appNgIfCustom]'
})
export class NgIfCustomDirective {
  @Input() set appNgIfCustom(condition: boolean) {
    if (condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }

  }

  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
