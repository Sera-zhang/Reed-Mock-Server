import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: '[tagText]',
  templateUrl: './tag.component.html'
})
export class TagComponent {
  @HostBinding('class.border')
  @HostBinding('class.px-2')
  @HostBinding('class.rounded-pill')
  basicCls = true;

  @Input()
  tagText: string;

  constructor() { }
}
