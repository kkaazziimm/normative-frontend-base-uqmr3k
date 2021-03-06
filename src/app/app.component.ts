import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  template: `
    <div class="app-wrapper">
      <app-add-item></app-add-item>
      <app-list-items></app-list-items>
    </div>
  `
})
export class AppComponent {
  constructor() {}
}
