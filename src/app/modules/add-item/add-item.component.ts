import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngxs/store";
import { AddItem } from "../../store/items.state";

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: "app-add-item",
  templateUrl: "./add-item.component.html",
  styleUrls: ["./add-item.component.scss"]
})
export class AddItemComponent implements OnInit {
  selectedValue: string;

  foods: Food[] = [
    { value: "steak-0", viewValue: "Steak" },
    { value: "pizza-1", viewValue: "Pizza" },
    { value: "tacos-2", viewValue: "Tacos" }
  ];

  constructor(private router: Router, private store: Store) {}

  ngOnInit(): void {}

  submit() {
    this.store.dispatch(
      new AddItem({
        section: "222",
        co2: "co222",
        feeling: "sad222"
      })
    );
    this.router.navigate(["/"]);
  }
}
