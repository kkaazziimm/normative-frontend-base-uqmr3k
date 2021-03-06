import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  template: `
    <app-add-item></app-add-item>
    <app-list-items></app-list-items>
  `
})
export class AppComponent {
  constructor() {}
}
