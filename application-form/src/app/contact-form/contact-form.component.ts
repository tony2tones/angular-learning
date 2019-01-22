import { Component } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  log(x) {console.log(x)}

  submit(f) {
    console.log(f.value.firstName, ' ', f.value.comment);
  }
}
 