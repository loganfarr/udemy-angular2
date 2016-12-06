import { Component, Input } from '@angular/core';

@Component({
  selector: 'spinner',
  template: `<i 
    class="fa fa-spinner fa-spin fa-3x"
    [ngStyle] = "{ 
      display : visible ? 'inherit' : 'none'
    }"></i>`
})

export class SpinnerComponent {
  @Input() visible: Boolean;
}