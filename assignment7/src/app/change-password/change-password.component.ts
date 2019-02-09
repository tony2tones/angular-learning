import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { changePasswordValidators } from "./changepassword.validators";

@Component({
  selector: "change-password",
  templateUrl: "./change-password.component.html",
  styleUrls: ["./change-password.component.css"]
})
export class ChangePasswordComponent {
  // oldPassword: FormControl;
  // newPassword: FormControl;
  // confirmPassword: FormControl;

  changePasswordForm = new FormGroup({
    oldPassword: new FormControl(
      "",
      Validators.required,
      changePasswordValidators.oldPasswordCheck
      ),
    newPassword: new FormControl("", Validators.required),
    confirmPassword: new FormControl("", Validators.required)
  });

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
