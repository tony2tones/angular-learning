import { AbstractControl, ValidationErrors } from "@angular/forms";

export class changePasswordValidators {
  static oldPasswordCheck(
    oldPassword: AbstractControl
  ): Promise<ValidationErrors | null> {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (oldPassword.value != "1234") resolve({ oldPasswordCheck: true });
        else resolve(null);
      }, 2000);
    });
  }
  static confirmPasswordCheck(control: AbstractControl) {
        let newPassword = control.get("newPassword");
        let confirmPassword = control.get("confirmPassword");
        if (newPassword.value !== confirmPassword.value)
          return ({ confirmPasswordCheck: true });

        return null;
    };
 }

