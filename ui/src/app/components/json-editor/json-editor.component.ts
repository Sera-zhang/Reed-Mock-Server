import { Component, OnInit, ViewChild, Input, AfterViewInit, Output, EventEmitter, OnDestroy, ChangeDetectionStrategy, ElementRef } from '@angular/core';
import { JsonEditorOptions } from './json-editor.model';
import * as JsonEditor from 'jsoneditor';

@Component({
  selector: 'json-editor',
  exportAs: 'jsonEditor',
  template: `<div [ngClass]="styleClass" #editor></div>`,
  styleUrls: ['./json-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JsonEditorComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input()
  styleClass: string;

  @Input()
  set data(data: string | Object) {
    this._data = data;
    this.setData(data);
  }

  @Input()
  set editing(editing: boolean) {
    if (editing) {
      this._mode = 'code';
    } else {
      this._mode = 'preview';
    }
    this.setMode(this._mode);
  }

  @Input()
  options: JsonEditorOptions = {};

  @Output()
  readonly onError = new EventEmitter<Object>();

  @Output()
  readonly onChange = new EventEmitter<string>();

  @ViewChild('editor', { static: true })
  editorRef: ElementRef;
  
  _data: string | Object = {};
  _mode: string = 'preview';
  editor: any;

  get data(): string | Object {
    return this._data;
  }

  get mode(): string {
    return this._mode;
  }

  get editing(): boolean {
    return this.mode === 'code';
  }

  constructor() { }

  ngOnInit() {
    this.options = {
      mode: this.mode,
      mainMenuBar: false,
      onValidationError: (err: Object) => {
        this.onError.emit(err);
      },
      onChangeText: evt => {
        this.onChange.emit(evt);
      }
    }
  }

  ngAfterViewInit(): void {
    this.editor = new JsonEditor(this.editorRef.nativeElement, this.options);
    this.setData(this.data);
    this.setMode(this.mode);
  }

  ngOnDestroy(): void {
    this.editor.destroy();
    this.editor = null;
  }

  setData(data: string | Object): void {
    if (!this.editor) {
      return;
    }
    if (typeof data === 'string') {
      this.editor.setText(data);
    } else {
      this.editor.set(data || {});
    }
  }

  setMode(mode: string): void {
    if (!this.editor) {
      return;
    }
    this.editor.setMode(mode);
  }

  getJson(): Object {
    return this.editor.get();
  }

  getText(): string {
    return this.editor.getText();
  }
}
