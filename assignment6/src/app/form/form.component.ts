import { Component } from "@angular/core";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent {
  categories = [
    { id: 1, name: "Anuglar" },
    { id: 1, name: "React" },
    { id: 1, name: "Vue" }
  ];

  submit(x) {
    console.log(x);
  }
}
