import { Component, OnInit, Input, Output, EventEmitter, ViewChild, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'confirm-modal',
  exportAs: 'confirmModal',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {
  @Input()
  title = 'Confirm';

  @Input()
  message = 'Are you sure?';

  @Output()
  readonly onConfirm = new EventEmitter<void>();

  @Output()
  readonly onCancel = new EventEmitter<void>();

  @ViewChild('content', { static: true })
  content: TemplateRef<void>;

  constructor(private modal: NgbModal) { }

  ngOnInit() {
  }

  open(): void {
    this.modal.open(this.content, {
      centered: true
    }).result.then((result) => {
      if (result === 'confirm') {
        this.onConfirm.emit();
      } else {
        this.onCancel.emit();
      }
    });
  }
}
