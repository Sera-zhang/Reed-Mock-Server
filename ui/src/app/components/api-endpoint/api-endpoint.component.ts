import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  index: number = 0;

  @Input()
  tagFields: string[] = [];

  @Output()
  readonly onDataChange = new EventEmitter<void>();

  isExpand = false;
  isLoading = false;
  fileData = '';

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

  openEditor(modal: any, event: MouseEvent): void {
    event.stopPropagation();
    this.getDetail();
    setTimeout(() => modal.open());
  }

  getDetail(): void {
    if (!this.hasDetail) {
      return;
    }
    this.isLoading = true;
    this.service.getEndpoint(this.type, String(this.index))
      .subscribe(res => {
        this.endpointDetail = res;
        this.fileData = res.fileData;
        this.isLoading = false;
      });
  }

  submit(event: { data: any, close: any }): void {
    const { data, close } = event;
    this.service.updateEndpoint(this.type, String(this.index), data.config, data.extra)
      .subscribe(res => {
        console.log('success');
        close();
        this.getDetail();
        this.onDataChange.emit();
      });
  }

  openDeleteConfirm(modal: any, event: MouseEvent): void {
    event.stopPropagation();
    modal.open();
  }

  deleteEndpoint(): void {
    this.service.deleteEndpoint(this.type, String(this.index))
      .subscribe(res => {
        console.log('deleted');
        this.onDataChange.emit();
      });
  }
}
