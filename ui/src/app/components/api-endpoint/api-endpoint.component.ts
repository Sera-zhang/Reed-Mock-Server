import { Component, OnInit, Input } from '@angular/core';
import { ApiItem, ApiEndpoint, ApiEndpointDetail } from 'src/app/app.model';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'api-endpoint',
  templateUrl: './api-endpoint.component.html',
  styleUrls: ['./api-endpoint.component.scss']
})
export class ApiEndpointComponent implements OnInit {
  @Input()
  endpoint: ApiEndpoint;

  @Input()
  endpointDetail: ApiEndpointDetail;

  @Input()
  hasDetail: boolean = false;

  @Input()
  type: 'api' | 'ws' | 'static' | 'proxy' = 'api';

  @Input()
  tagFields: string[] = [];

  isExpand = false;
  isLoading = false;

  get endpointItems(): ApiItem[] {
    return this.endpointDetail && this.endpointDetail.items || [];
  }

  get tagTexts(): string[] {
    return this.tagFields.map(name => {
      if (!this.endpoint[name]) {
        return null;
      }
      return `${name}: ${this.endpoint[name]}`;
    });
  }

  get editorData(): Object {
    if (this.type === 'api' || this.type === 'ws') {
      return this.endpointDetail;
    }
    return this.endpoint;
  }

  constructor(private service: AppService) { }

  ngOnInit() {
  }

  expand(): void {
    if (!this.hasDetail) {
      return;
    }
    this.isExpand = !this.isExpand;
    if (this.isExpand) {
      this.getDetail();
    }
  }

  getDetail(): void {
    if (this.endpointDetail) {
      return;
    }
    this.isLoading = true;
    this.service.getEndpoint(this.type, this.endpoint.name)
      .subscribe(res => {
        this.endpointDetail = res;
        this.isLoading = false;
      });
  }

  submit(configStr: string): void {
    console.log(configStr);
  }
}
