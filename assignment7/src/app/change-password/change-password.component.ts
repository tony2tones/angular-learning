import { Component } from '@angular/core';
import { FormGroup, FormControl ,Validators } from '@angular/forms';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  from = new FormGroup({
    oldPassword: new FormControl(),
    newPassword: new FormControl(),
    confirmPassword: new FormControl()
  })

}
