import { Component } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  log(x) {console.log(x)}
  contactMethods = [
    {id:1, name: 'Email'},
    {id:2, name: 'txt'},
    {id:3, name: 'phone'},
  ];

  submit(f) {
    console.log(f);
    console.log(f.value.firstName, ' ', f.value.comment);
  }
}
 