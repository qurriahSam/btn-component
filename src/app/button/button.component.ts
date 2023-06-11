import { Component, Input, SimpleChanges } from '@angular/core';
import { ButtonTypeStyle, Icon, Size } from '../types';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() buttonType = '';
  @Input() shadow = true;
  @Input() disable = false;
  @Input() icon: Icon = '';
  @Input() right = false;
  @Input() size: Size | null = null;
  @Input() color: string | null = null;

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
      case 'secondary':
        return 'btn-secondary';
      case 'success':
        return 'btn-success';
      case 'danger':
        return 'btn-danger';
      case 'warning':
        return 'btn-warning';

      default:
        return 'btn-light';
    }
  }
}
