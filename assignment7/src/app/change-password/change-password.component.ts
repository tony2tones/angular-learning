import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  from = new FormGroup({
    oldPassword: new FormControl('', Validators.required),
    newPassword: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required)
  });

  get oldPassword() {
    return this.from.get('oldPassword');
  }

  get newPassword() {
    return this.from.get('newPassword');
  }
  get confirmPassword() {
    return this.from.get('confirmPassword');
  }
}
