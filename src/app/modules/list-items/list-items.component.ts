import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Select } from "@ngxs/store";
import { Observable } from "rxjs";
import { Item } from "../../modals/item.modal";
import { ItemsState } from "../../store/items.state";

@Component({
  selector: "app-list-items",
  templateUrl: "./list-items.component.html",
  styleUrls: ["./list-items.component.scss"]
})
export class ListItemsComponent implements OnInit {
  displayedColumns: string[] = ["section", "co2", "feeling"];

  @Select(ItemsState) data$: Observable<Item>;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  addNewItem() {
    this.router.navigate(["/add-item"]);
  }
}
