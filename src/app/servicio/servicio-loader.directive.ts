import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appServicioLoader]'
})
export class ServicioLoaderDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
