import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms";
import { changePasswordValidators } from "./changepassword.validators";

@Component({
  selector: "change-password",
  templateUrl: "./change-password.component.html",
  styleUrls: ["./change-password.component.css"]
})
export class ChangePasswordComponent {
  changePasswordForm: FormGroup;

  constructor(fb: FormBuilder){
    this.changePasswordForm = fb.group({
      oldPassword: ['', Validators.required,changePasswordValidators.oldPasswordCheck],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    }, {
      validator: changePasswordValidators.confirmPasswordCheck
    });
  }


  get oldPassword() {
    return this.changePasswordForm.get("oldPassword");
  }

  get newPassword() {
    return this.changePasswordForm.get("newPassword");
  }

  get confirmPassword() {
    return this.changePasswordForm.get("confirmPassword");
  }
}
