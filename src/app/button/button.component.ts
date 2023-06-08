import { Component, Input, SimpleChanges } from '@angular/core';
import { ButtonTypeStyle } from '../types';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() buttonType = '';

  buttonTypeStyle: ButtonTypeStyle = 'btn-light';

  ngOnChanges(changes: SimpleChanges) {
    if (changes['buttonType']) {
      this.buttonTypeStyle = this.checkBtnType(
        changes['buttonType'].currentValue
      );
    }
  }

  private checkBtnType(type: string) {
    switch (type) {
      case 'outline':
        return 'btn-outline-primary';

      case 'primary':
        return 'btn-primary';

      default:
        return 'btn-light';
    }
  }
}
