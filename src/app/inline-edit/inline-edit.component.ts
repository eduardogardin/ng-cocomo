import { Component, Input, Optional, Host } from '@angular/core';
import { SatPopover } from '@ncstate/sat-popover';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'inline-edit',
  styleUrls: ['inline-edit.component.scss'],
  templateUrl: './inline-edit.component.html'
})
export class InlineEditComponent {

  /** Overrides the modelValue and provides a reset value when changes are cancelled. */
  @Input()
  get value(): string { return this._value; }
  set value(x: string) {
    this.modelValue = this._value = x;
  }
  private _value = '';

  /** Form model for the input. */
  modelValue = '';

  constructor(@Optional() @Host() public popover: SatPopover) { }

  ngOnInit() {

    if (this.popover) {
      this.popover.closed
        .filter(val => val == null)
        .subscribe(() => this.modelValue = this.value || '');
    }
  }

  onSubmit() {
    if (this.popover) {
      this.popover.close(this.modelValue);
    }
  }

  onCancel() {
    if (this.popover) {
      this.popover.close();
    }
  }
}