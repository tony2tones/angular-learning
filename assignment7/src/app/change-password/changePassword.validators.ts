import { AbstractControl, ValidationErrors } from "@angular/forms";

export class changePasswordValidators {
  static oldPasswordCheck(
    oldPassword: AbstractControl
  ): Promise<ValidationErrors | null> {
    return new Promise((resolve, rejected) => {
      setTimeout(() => {
        if (oldPassword.value != "1234") resolve({ oldPasswordCheck: true });
        else resolve(null);
      }, 2000);
    });
  }
}
