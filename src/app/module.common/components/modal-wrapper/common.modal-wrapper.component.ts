import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'common-modal-wrapper',
  template: require('./common.modal-wrapper.html'),
})

export class ModalWrapper {
  @Input() modalTitle: string;
  @Input() showModal: boolean;
  @Output() closeClicked: EventEmitter<any> = new EventEmitter();

  closeDialog() {
    this.closeClicked.emit(null);
  }
}
