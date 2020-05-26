import { Component, OnInit, Input } from '@angular/core';
import { Api, ApiItem } from 'src/app/app.model';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'api-endpoint-item',
  templateUrl: './api-endpoint-item.component.html',
  styleUrls: ['./api-endpoint-item.component.scss']
})
export class ApiEndpointItemComponent implements OnInit {
  @Input()
  item: ApiItem;

  tagClassMap = {
    GET: 'border-primary text-primary',
    POST: 'border-success text-success',
    PUT: 'border-warning text-warning',
    DELETE: 'border-danger text-danger',
    PATCH: 'border-info text-info'
  }

  isExpand = false;

  constructor(private service: AppService) { }

  ngOnInit() {
  }

  tryApi(api: Api): void {
    window.open(`${this.service.mockServerUrl}${api.url}`.replace(':id', '0'), '_blank');
  }
}
