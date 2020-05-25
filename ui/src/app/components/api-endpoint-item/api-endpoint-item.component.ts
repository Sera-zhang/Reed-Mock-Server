import { Component, OnInit, Input } from '@angular/core';
import { Api, ApiItem } from 'src/app/app.model';

@Component({
  selector: 'api-endpoint-item',
  templateUrl: './api-endpoint-item.component.html',
  styleUrls: ['./api-endpoint-item.component.scss']
})
export class ApiEndpointItemComponent implements OnInit {
  @Input()
  item: ApiItem;

  isExpand = false;

  constructor() { }

  ngOnInit() {
  }

}
