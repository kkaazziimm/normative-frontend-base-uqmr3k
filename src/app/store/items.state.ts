import { State, Action, StateContext } from "@ngxs/store";
import { tap } from "rxjs/operators";
import { DataService } from "../services/data.service";

export class ADDITEM {
  payload: Item;
  constructor(item: ItemModal) {
    this.payload = new Item(item);
  }
}

export class Item {
  constructor(public content: ItemModal) {}
}

export interface ItemModal {
  sector: string;
  co2: string;
  feeling: string;
}

export interface ItemsStateModel {
  dataset: Item[];
}

@State<ItemsStateModel>({
  name: "items",
  defaults: {
    dataset: [
      new Item({
        sector: "s1",
        co2: "co2",
        feeling: "good"
      })
    ]
  }
})
export class ItemsState {
  constructor(private service: DataService) {}

  @Action(ADDITEM)
  addItem(
    { getState, setState }: StateContext<ItemsStateModel>,
    { payload }: ADDITEM
  ) {
    return this.service.someApiCall().pipe(
      tap(() => {
        const state = getState();
        setState({
          ...state,
          dataset: [...state.dataset, payload]
        });
      })
    );
  }
}
