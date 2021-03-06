import { Component, OnInit } from "@angular/core";
import { Select } from "@ngxs/store";
import { Observable } from "rxjs";
import { Item } from "../../models/item.model";
import { ItemsState } from "../../store/items.state";

@Component({
  selector: "app-list-items",
  templateUrl: "./list-items.component.html",
  styleUrls: ["./list-items.component.scss"]
})
export class ListItemsComponent implements OnInit {
  displayedColumns: string[] = ["sector", "co2", "feeling"];

  @Select(ItemsState) data$: Observable<Item>;

  constructor() {}

  ngOnInit(): void {}
}
