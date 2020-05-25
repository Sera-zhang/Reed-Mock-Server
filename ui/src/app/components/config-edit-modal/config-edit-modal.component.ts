import { Component, OnInit, ViewChild, TemplateRef, Output, EventEmitter, Input, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { JsonEditorComponent } from '../json-editor/json-editor.component';

@Component({
  selector: 'config-edit-modal',
  exportAs: 'configEditModal',
  templateUrl: './config-edit-modal.component.html',
  styleUrls: ['./config-edit-modal.component.scss']
})
export class ConfigEditModalComponent implements OnInit, OnChanges {
  @Input()
  data: string | Object;

  @Input()
  title = 'Edit';

  @Input()
  configName = 'Config';

  @Input()
  type: 'json' | 'text' = 'json';

  @Input()
  extraTemplate: TemplateRef<void>;

  @Input()
  loading = false;

  @Input()
  showConfigEditor = true;

  @ViewChild('content', { static: true })
  content: TemplateRef<any>;

  @ViewChild(JsonEditorComponent, { static: false })
  editor: JsonEditorComponent;

  @Input()
  extraData: any;

  editing = true;
  hasError = false;
  editorText = '';
  extraDataChanged = false;

  @Output()
  readonly onSubmit = new EventEmitter<string | Object>();

  get canSubmit(): boolean {
    return this.changed && !this.hasError && !this.loading;
  }

  get dataStr(): string {
    return typeof this.data === 'string' ? this.data : JSON.stringify(this.data, null, 2);
  }

  get changed(): boolean {
    return this.editorText !== this.dataStr || this.extraDataChanged;
  }

  constructor(private modalSvc: NgbModal) { }

  ngOnInit() {
    this.resetStates();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data) {
      this.editorText = this.dataStr;
    }
  }

  open(): void {
    this.modalSvc.open(this.content, {
      centered: true,
      size: 'xl'
    });
  }

  submit(): void {
    this.onSubmit.emit({
      config: JSON.parse(this.editorText),
      extra: this.extraData
    });
  }

  close(modal: any): void {
    this.resetStates();
    modal.dismiss();
  }

  resetStates(): void {
    this.editing = true;
    this.hasError = false;
    this.editorText = this.dataStr;
    this.extraDataChanged = false;
  }

  onEditorChange(event: string): void {
    this.editorText = event;
  }

  onEditorError(event: Object[]): void {
    this.hasError = event && event.length > 0;
  }

  onExtraChange: (event: any) => void = (event: any) => {
    this.extraData = event;
    this.extraDataChanged = true;
  }
}
